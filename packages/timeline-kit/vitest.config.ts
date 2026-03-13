import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	test: {
		name: "timeline-kit",
		environment: "jsdom",
		passWithNoTests: true,
		include: ["tests/**/*.test.ts", "tests/**/*.test.tsx"],
		exclude: ["node_modules", "dist", "playwright"],
	},
	resolve: {
		alias: {
			"@": path.resolve(currentDirectory, "src"),
		},
	},
});
