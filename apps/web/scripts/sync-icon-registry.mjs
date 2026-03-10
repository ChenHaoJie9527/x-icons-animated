import { watch } from "node:fs";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// 读取当前文件的绝对路径
const __filename = fileURLToPath(import.meta.url);

// 读取当前文件的目录
const __dirname = path.dirname(__filename);

// 读取app目录
const appDir = path.resolve(__dirname, "..", "app");

// 读取icons目录
const iconsDir = path.join(appDir, "icons");

// 读取lib目录下的icon-registry.ts文件
const registryPath = path.join(appDir, "lib", "icon-registry.ts");

// 定义正则表达式: 用于匹配TSX文件
const TSX_FILE_EXTENSION_REGEX = /\.tsx$/u;
const PATH_SEPARATOR_REGEX = /\\/g;

// 定义正则表达式: 用于匹配icon-registry.ts文件中的icon条目
const ENTRY_REGEX =
	/\{[\s\S]*?name:\s*"([^"]+)"[\s\S]*?keywords:\s*\[((?:[\s\S]*?))\][\s\S]*?\}/g;

// 定义正则表达式: 用于匹配icon-registry.ts文件中的来源字段
const SOURCE_REGEX = /source:\s*"([^"]+)"/u;

// 定义正则表达式: 用于匹配icon-registry.ts文件中的关键词
const KEYWORD_REGEX = /"([^"]+)"/g;

// 定义常量: 用于设置watch模式的防抖时间
const WATCH_DEBOUNCE_MS = 120;
const DEFAULT_ICON_SOURCE = "heroicons";

// 定义函数: 将icon名称转换为PascalCase格式
const toPascalCase = (value) => {
	return value
		.split("-")
		.filter(Boolean)
		.map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
		.join("");
};

// 定义函数: 将icon名称转换为导出名称
const toExportName = (iconName) => `${toPascalCase(iconName)}Icon`;
const toRegistryKey = (source, iconName) => `${source}:${iconName}`;
const toImportAlias = (source, iconName) =>
	`${toPascalCase(source)}${toExportName(iconName)}`;
const toPosixPath = (value) => value.replace(PATH_SEPARATOR_REGEX, "/");

// 定义函数: 解析已有的关键词映射
const parseExistingKeywordMap = (content) => {
	const scopedKeywordMap = new Map();
	const legacyKeywordMap = new Map();

	for (const match of content.matchAll(ENTRY_REGEX)) {
		const entryText = match[0];
		const iconName = match[1];
		const keywordsBlock = match[2];
		const sourceMatch = entryText.match(SOURCE_REGEX);
		const source = sourceMatch?.[1] ?? DEFAULT_ICON_SOURCE;
		const keywordMatches = [...keywordsBlock.matchAll(KEYWORD_REGEX)];
		const keywords = keywordMatches.map((keywordMatch) => keywordMatch[1]);
		scopedKeywordMap.set(toRegistryKey(source, iconName), keywords);
		if (!legacyKeywordMap.has(iconName)) {
			legacyKeywordMap.set(iconName, keywords);
		}
	}

	return { legacyKeywordMap, scopedKeywordMap };
};

// 定义函数: 递归读取icon文件条目
const collectIconEntries = async (
	targetIconsDir,
	readDirectory,
	rootIconsDir = targetIconsDir
) => {
	const entries = await readDirectory(targetIconsDir, { withFileTypes: true });
	const iconEntries = [];
	const sortedEntries = [...entries].sort((a, b) =>
		a.name.localeCompare(b.name)
	);

	for (const entry of sortedEntries) {
		const absolutePath = path.join(targetIconsDir, entry.name);
		if (isFileEntry(entry) && entry.name.endsWith(".tsx")) {
			const relativeWithoutExtension = path
				.relative(rootIconsDir, absolutePath)
				.replace(TSX_FILE_EXTENSION_REGEX, "");
			const importPath = toPosixPath(relativeWithoutExtension);
			const pathParts = importPath.split("/").filter(Boolean);
			const iconName = pathParts.at(-1);
			const source = pathParts.length > 1 ? pathParts[0] : DEFAULT_ICON_SOURCE;

			iconEntries.push({
				iconName,
				importPath,
				source,
			});
			continue;
		}

		const hasDirectoryCheck = typeof entry.isDirectory === "function";
		if (hasDirectoryCheck && entry.isDirectory()) {
			const nestedEntries = await collectIconEntries(
				absolutePath,
				readDirectory,
				rootIconsDir
			);
			iconEntries.push(...nestedEntries);
		}
	}

	return iconEntries.sort((a, b) => {
		const sourceCompare = a.source.localeCompare(b.source);
		if (sourceCompare !== 0) {
			return sourceCompare;
		}
		return a.iconName.localeCompare(b.iconName);
	});
};

// 定义函数: 创建icon-registry.ts文件
const createRegistryFile = (iconEntries, keywordMaps) => {
	const { legacyKeywordMap, scopedKeywordMap } = keywordMaps;
	const importLines = iconEntries.map(({ iconName, importPath, source }) => {
		return `import { ${toExportName(iconName)} as ${toImportAlias(source, iconName)} } from "@/icons/${importPath}";`;
	});

	const registryEntries = iconEntries.map(({ iconName, source }) => {
		const scopedKeywordKey = toRegistryKey(source, iconName);
		const keywords =
			scopedKeywordMap.get(scopedKeywordKey) ??
			legacyKeywordMap.get(iconName) ??
			iconName.split("-").filter(Boolean);
		const keywordCode = keywords.map((keyword) => `"${keyword}"`).join(", ");

		return [
			"\t{",
			`\t\tname: "${iconName}",`,
			`\t\ticon: ${toImportAlias(source, iconName)},`,
			`\t\tsource: "${source}" as const,`,
			`\t\tkeywords: [${keywordCode}],`,
			"\t},",
		].join("\n");
	});

	return [
		...importLines,
		'import type { IconMeta } from "@/lib/icon-types";',
		"",
		"const ICON_LIST: IconMeta[] = [",
		...registryEntries,
		"].sort((a, b) => {",
		"\tconst nameCompare = a.name.localeCompare(b.name);",
		"\tif (nameCompare !== 0) {",
		"\t\treturn nameCompare;",
		"\t}",
		"\treturn a.source.localeCompare(b.source);",
		"});",
		"",
		"export { ICON_LIST };",
		"",
	].join("\n");
};

// 定义函数: 判断目录项是否为文件
const isFileEntry = (entry) => {
	if (!entry || typeof entry !== "object") {
		return false;
	}

	const hasFileCheck = typeof entry.isFile === "function";
	return hasFileCheck ? entry.isFile() : false;
};

// 定义函数: 同步icon-registry.ts文件
const syncRegistry = async (options = {}) => {
	const targetIconsDir = options.iconsDir ?? iconsDir;
	const targetRegistryPath = options.registryPath ?? registryPath;
	const readDirectory = options.readdir ?? readdir;
	const readRegistry = options.readFile ?? readFile;
	const writeRegistry = options.writeFile ?? writeFile;
	const log = options.log ?? console.log;

	const iconEntries = await collectIconEntries(targetIconsDir, readDirectory);

	const previousRegistry = await readRegistry(targetRegistryPath, "utf8");
	const keywordMaps = parseExistingKeywordMap(previousRegistry);
	const nextRegistry = createRegistryFile(iconEntries, keywordMaps);

	if (nextRegistry !== previousRegistry) {
		await writeRegistry(targetRegistryPath, nextRegistry, "utf8");
		log(`Updated ${path.relative(process.cwd(), targetRegistryPath)}`);
		return true;
	}

	log("icon-registry.ts is already up to date.");
	return false;
};

// 定义函数: 运行watch模式
const runWatchMode = async () => {
	await syncRegistry();
	console.log(`Watching ${path.relative(process.cwd(), iconsDir)} ...`);

	let timer = null;
	let isSyncing = false;
	let hasPendingSync = false;

	const queueSync = () => {
		if (timer !== null) {
			clearTimeout(timer);
		}

		timer = setTimeout(async () => {
			timer = null;

			if (isSyncing) {
				hasPendingSync = true;
				return;
			}

			isSyncing = true;
			try {
				await syncRegistry();
			} catch (error) {
				console.error("Failed to sync icon registry.");
				console.error(error);
			} finally {
				isSyncing = false;
			}

			if (hasPendingSync) {
				hasPendingSync = false;
				queueSync();
			}
		}, WATCH_DEBOUNCE_MS);
	};

	const onWatchEvent = (_eventType, fileName) => {
		const normalizedName = fileName?.toString() ?? "";
		if (!normalizedName.endsWith(".tsx")) {
			return;
		}
		queueSync();
	};
	let watcher;
	try {
		watcher = watch(
			iconsDir,
			{ persistent: true, recursive: true },
			onWatchEvent
		);
	} catch {
		watcher = watch(iconsDir, { persistent: true }, onWatchEvent);
	}

	process.on("SIGINT", () => {
		watcher.close();
		if (timer !== null) {
			clearTimeout(timer);
		}
		process.exit(0);
	});
};

// 定义函数: 主函数
const main = async () => {
	const isWatchMode =
		process.argv.includes("--watch") || process.argv.includes("-w");
	if (isWatchMode) {
		await runWatchMode();
		return;
	}

	await syncRegistry();
};

const isDirectExecution =
	typeof process.argv[1] === "string" &&
	import.meta.url === pathToFileURL(process.argv[1]).href;

if (isDirectExecution) {
	main().catch((error) => {
		console.error("Failed to sync icon registry.");
		console.error(error);
		process.exitCode = 1;
	});
}

export {
	collectIconEntries,
	createRegistryFile,
	parseExistingKeywordMap,
	syncRegistry,
	toExportName,
	toPascalCase,
};
