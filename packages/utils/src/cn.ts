import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @description 合并类名
 * @param inputs - 类名数组
 * @returns 合并后的类名
 * @example 纯字符串合并
 * cn("bg-red-500", "text-white", "p-4", "rounded-md")
 * // "bg-red-500 text-white p-4 rounded-md"
 * @example 对象合并
 * cn("bg-red-500", "text-white", "p-4", "rounded-md", {
 *   "bg-blue-500": true,
 *   "text-black": false,
 *   "p-4": true,
 *   "rounded-md": true,
 * })
 * // "bg-blue-500 text-black p-4 rounded-md"
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs)); // 合并类名
}
