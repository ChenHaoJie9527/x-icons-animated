import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		react(),
		dts({ include: ["src/timeline.tsx"], insertTypesEntry: true }),
	],
	resolve: {
		// alias: {
		// 	"@": path.resolve(currentDirectory, "src"),
		// },
		tsconfigPaths: true
	},
	build: {
		lib: {
			entry: path.resolve(currentDirectory, "src/timeline.tsx"),
			formats: ["es"],
			fileName: "index",
		},
		rollupOptions: {
			external: ["react", "motion/react"],
		},
	},
});
