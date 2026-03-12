import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	test: {
		name: "motion-kit",
		environment: "node",
		include: ["tests/**/*.test.ts"],
		exclude: ["node_modules", "dist"],
	},
	resolve: {
		alias: {
			"@": path.resolve(currentDirectory, "src"),
		},
	},
});
