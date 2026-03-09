import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineProject } from "vitest/config";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineProject({
	test: {
		name: "web",
		environment: "node",
		include: ["tests/**/*.test.ts", "app/**/*.test.ts"],
		exclude: ["node_modules", ".next", "dist"],
	},
	resolve: {
		alias: {
			"@": path.resolve(currentDirectory, "app"),
		},
	},
});
