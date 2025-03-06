import react from "@vitejs/plugin-react-swc"
import path from "path"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@api": path.resolve(__dirname, "./src/api"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@features": path.resolve(__dirname, "./src/features"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@layouts": path.resolve(__dirname, "./src/layout"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@store": path.resolve(__dirname, "./src/store"),
			"@styles": path.resolve(__dirname, "./src/styles"),
			"@types": path.resolve(__dirname, "./src/types"),
			"@utils": path.resolve(__dirname, "./src/utils"),
		},
	},
})
