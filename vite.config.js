import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pages from 'vite-plugin-pages';
import layouts from 'vite-plugin-vue-layouts';
import path from 'path';
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), pages(), layouts()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL("./src", import.meta.url)),
      '@c': path.resolve(__dirname, './src/components'),
      '@r': path.resolve(__dirname, './src/router'),
      '@s': path.resolve(__dirname, './src/stores'),
      '@v': path.resolve(__dirname, './src/views'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  }
})
