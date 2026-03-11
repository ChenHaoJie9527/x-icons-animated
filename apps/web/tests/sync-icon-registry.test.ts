import { describe, expect, it, vi } from "vitest";
import {
	createRegistryFile,
	parseExistingKeywordMap,
	syncRegistry,
	toExportName,
	toPascalCase,
} from "../scripts/sync-icon-registry.mjs";

const createFileEntry = (name: string) => ({
	name,
	isFile: () => true,
});

describe("sync-icon-registry helpers", () => {
	// 验证图标名会被正确转换成 PascalCase，供导出名拼装使用。
	it("converts kebab-case icon name to PascalCase", () => {
		expect(toPascalCase("arrow-left")).toBe("ArrowLeft");
		expect(toPascalCase("check-mark-badge-1")).toBe("CheckMarkBadge1");
	});

	// 验证导出名会追加 Icon 后缀，保证 import/export 命名一致。
	it("builds icon export names with Icon suffix", () => {
		expect(toExportName("arrow-left")).toBe("ArrowLeftIcon");
	});

	// 验证能从已有 registry 文本中解析出关键词映射，避免覆盖手工维护的 keywords。
	it("parses existing keyword map from registry content", () => {
		const registryContent = `
		{
			name: "arrow-left",
			icon: ArrowLeftIcon,
			keywords: ["arrow", "left", "navigation"],
		},
		{
			name: "github",
			icon: GithubIcon,
			keywords: ["github", "code"],
		},
		`;

		const keywordMap = parseExistingKeywordMap(registryContent);
		expect(keywordMap.get("arrow-left")).toEqual([
			"arrow",
			"left",
			"navigation",
		]);
		expect(keywordMap.get("github")).toEqual(["github", "code"]);
	});

	// 验证 legacy 解析入口可兼容 source 字段，避免新旧脚本接口不一致。
	it("parses legacy keyword map from source-aware registry content", () => {
		const registryContent = `
		{
			name: "arrow-left",
			icon: HeroiconsArrowLeftIcon,
			source: "heroicons",
			keywords: ["arrow", "left", "navigation"],
		},
		{
			name: "github",
			icon: LucideGithubIcon,
			source: "lucide",
			keywords: ["github", "code"],
		},
		`;

		const keywordMap = parseExistingKeywordMap(registryContent);
		expect(keywordMap.get("arrow-left")).toEqual([
			"arrow",
			"left",
			"navigation",
		]);
		expect(keywordMap.get("github")).toEqual(["github", "code"]);
	});

	// 验证生成 registry 时会优先保留旧关键词，并为新图标回退到 name 拆词关键词。
	it("creates registry content with preserved and fallback keywords", () => {
		const keywordMap = new Map<string, string[]>();
		keywordMap.set("arrow-left", ["arrow", "left", "navigation"]);

		const output = createRegistryFile(["arrow-left", "new-icon"], keywordMap);

		expect(output).toContain(
			'import { ArrowLeftIcon } from "@/icons/arrow-left";'
		);
		expect(output).toContain('import { NewIconIcon } from "@/icons/new-icon";');
		expect(output).toContain('name: "arrow-left"');
		expect(output).toContain('keywords: ["arrow", "left", "navigation"]');
		expect(output).toContain('name: "new-icon"');
		expect(output).toContain('keywords: ["new", "icon"]');
	});
});

describe("syncRegistry", () => {
	// 验证当生成内容变化时会触发写入，并返回 true。
	it("writes updated registry when content changes", async () => {
		const readdirMock = vi
			.fn()
			.mockResolvedValue([
				createFileEntry("arrow-left.tsx"),
				createFileEntry("github.tsx"),
			]);
		const readFileMock = vi.fn().mockResolvedValue("");
		const writeFileMock = vi.fn().mockResolvedValue(undefined);
		const logMock = vi.fn();

		const changed = await syncRegistry({
			iconsDir: "/virtual/icons",
			registryPath: "/virtual/icon-registry.ts",
			readdir: readdirMock,
			readFile: readFileMock,
			writeFile: writeFileMock,
			log: logMock,
		});

		expect(changed).toBe(true);
		expect(writeFileMock).toHaveBeenCalledTimes(1);
	});

	// 验证当生成内容与现有内容一致时不会写文件，并返回 false。
	it("skips writing when registry content is unchanged", async () => {
		const readdirMock = vi
			.fn()
			.mockResolvedValue([
				createFileEntry("arrow-left.tsx"),
				createFileEntry("github.tsx"),
			]);
		const previousRegistry = createRegistryFile(
			[
				{
					iconName: "arrow-left",
					importPath: "arrow-left",
					source: "heroicons",
				},
				{
					iconName: "github",
					importPath: "github",
					source: "heroicons",
				},
			],
			{
				legacyKeywordMap: new Map<string, string[]>(),
				scopedKeywordMap: new Map<string, string[]>(),
			}
		);
		const readFileMock = vi.fn().mockResolvedValue(previousRegistry);
		const writeFileMock = vi.fn().mockResolvedValue(undefined);
		const logMock = vi.fn();

		const changed = await syncRegistry({
			iconsDir: "/virtual/icons",
			registryPath: "/virtual/icon-registry.ts",
			readdir: readdirMock,
			readFile: readFileMock,
			writeFile: writeFileMock,
			log: logMock,
		});

		expect(changed).toBe(false);
		expect(writeFileMock).not.toHaveBeenCalled();
	});
});
