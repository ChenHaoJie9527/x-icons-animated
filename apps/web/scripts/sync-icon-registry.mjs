import { watch } from "node:fs";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

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

// 定义正则表达式: 用于匹配icon-registry.ts文件中的icon条目
const ENTRY_REGEX =
	/name:\s*"([^"]+)"[\s\S]*?keywords:\s*\[((?:[\s\S]*?))\][\s\S]*?\}/g;

// 定义正则表达式: 用于匹配icon-registry.ts文件中的关键词
const KEYWORD_REGEX = /"([^"]+)"/g;

// 定义常量: 用于设置watch模式的防抖时间
const WATCH_DEBOUNCE_MS = 120;

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

// 定义函数: 解析已有的关键词映射
const parseExistingKeywordMap = (content) => {
	const map = new Map();

	for (const match of content.matchAll(ENTRY_REGEX)) {
		const iconName = match[1];
		const keywordsBlock = match[2];
		const keywordMatches = [...keywordsBlock.matchAll(KEYWORD_REGEX)];
		map.set(
			iconName,
			keywordMatches.map((keywordMatch) => keywordMatch[1])
		);
	}

	return map;
};

// 定义函数: 创建icon-registry.ts文件
const createRegistryFile = (iconNames, keywordMap) => {
	const importLines = iconNames.map((iconName) => {
		return `import { ${toExportName(iconName)} } from "@/icons/${iconName}";`;
	});

	const iconEntries = iconNames.map((iconName) => {
		const keywords =
			keywordMap.get(iconName) ?? iconName.split("-").filter(Boolean);
		const keywordCode = keywords.map((keyword) => `"${keyword}"`).join(", ");

		return [
			"\t{",
			`\t\tname: "${iconName}",`,
			`\t\ticon: ${toExportName(iconName)},`,
			`\t\tkeywords: [${keywordCode}],`,
			"\t},",
		].join("\n");
	});

	return [
		...importLines,
		'import type { IconMeta } from "@/lib/icon-types";',
		"",
		"const ICON_LIST: IconMeta[] = [",
		...iconEntries,
		"].sort((a, b) => a.name.localeCompare(b.name));",
		"",
		"export { ICON_LIST };",
		"",
	].join("\n");
};

// 定义函数: 同步icon-registry.ts文件
const syncRegistry = async () => {
	const iconFiles = await readdir(iconsDir, { withFileTypes: true });
	const iconNames = iconFiles
		.filter((file) => file.isFile() && file.name.endsWith(".tsx"))
		.map((file) => file.name.replace(TSX_FILE_EXTENSION_REGEX, ""))
		.sort((a, b) => a.localeCompare(b));

	const previousRegistry = await readFile(registryPath, "utf8");
	const keywordMap = parseExistingKeywordMap(previousRegistry);
	const nextRegistry = createRegistryFile(iconNames, keywordMap);

	if (nextRegistry !== previousRegistry) {
		await writeFile(registryPath, nextRegistry, "utf8");
		console.log(`Updated ${path.relative(process.cwd(), registryPath)}`);
		return true;
	}

	console.log("icon-registry.ts is already up to date.");
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

	const watcher = watch(
		iconsDir,
		{ persistent: true },
		(_eventType, fileName) => {
			const normalizedName = fileName?.toString() ?? "";
			if (!normalizedName.endsWith(".tsx")) {
				return;
			}

			queueSync();
		}
	);

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

main().catch((error) => {
	console.error("Failed to sync icon registry.");
	console.error(error);
	process.exitCode = 1;
});
