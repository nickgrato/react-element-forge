import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  // Set the base path for GitHub Pages deployment
  base: '/react-element-forge/', // Update this with your repository name

  plugins: [
    react(),
    dts({
      // Configuration options for dts plugin
      exclude: ['src/App.tsx', '**/*.stories.tsx', '**/*.test.tsx'],
      outDir: 'dist/types',
    }),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        // Optional: for global SCSS variables/mixins
        additionalData: `@use "src/styles/global.scss";`,
      },
    },
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'react-element-forge',
      fileName: (format) => `react-element-forge.${format}.js`,
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled into the library
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // Configure code-splitting and dynamic import handling
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        },
      },
    },
    minify: 'esbuild', // Ensure minification is enabled
  },

  // Optional: Add server configuration if needed for local development
  server: {
    port: 3000, // Set the port if you need one
    open: true, // Automatically open the browser on server start
  },
})
