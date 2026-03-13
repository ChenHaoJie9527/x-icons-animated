import path from "node:path";
import { defineConfig } from "@playwright/test";

export default defineConfig({
	testDir: path.resolve("playwright"),
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
