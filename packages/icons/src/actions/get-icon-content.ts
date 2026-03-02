import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { IconName } from "../types";

const ICONS_DIR = path.join(
	path.dirname(fileURLToPath(import.meta.url)),
	"../icons"
);
/**
 * @description 获取图标内容
 * @param name - 图标名称
 * @returns 图标内容
 */
export async function getIconContent(name: IconName): Promise<string | null> {
	try {
		return await fs.readFile(path.join(ICONS_DIR, `${name}.tsx`), "utf-8");
	} catch {
		return null;
	}
}
