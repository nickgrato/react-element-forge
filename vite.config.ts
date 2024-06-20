import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      // Configuration options for dts plugin
      exclude: ["src/App.tsx", "**/*.stories.tsx", "**/*.test.tsx"],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/styles/global.scss";`, // Optional: for global SCSS variables/mixins
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "MyUILibrary",
      fileName: (format) => `react-element-forge.${format}.js`,
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled into the library
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    minify: "esbuild", // Ensure minification is enabled
  },
});
