import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	root: path.resolve(currentDirectory, "playground"), // 将playground目录作为根目录 在该目录里查找入口文件index.html
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(currentDirectory, "src"),
		},
	},
	server: {
		port: 4477,
	},
	preview: {
		port: 4477,
	},
});
