import path from "node:path";
import { defineConfig } from "@playwright/test";

export default defineConfig({
	testDir: path.resolve("playwright"), // 将playwright目录作为测试目录 在该目录里查找测试文件
	fullyParallel: true,
	use: {
		baseURL: "http://localhost:4477",
		headless: true,
	},
	webServer: {
		command: "pnpm --filter @x-icons/timeline-kit dev",
		url: "http://localhost:4477",
		reuseExistingServer: true,
		timeout: 120_000,
	},
});
