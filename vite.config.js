import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dotenv from "dotenv";

const dotenvFiles = [
  `.env.${process.env.NODE_ENV}.local`,
  ".env.local",
  `.env.${process.env.NODE_ENV}`,
  ".env",
];

for (const file of dotenvFiles) {
  dotenv.config({ path: file, silent: true });
}

export default defineConfig({
  plugins: [vue()],
  base: process.env.BASE_URL ?? "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Adjust the path accordingly
      "/images": "src/assets",
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/images/[name].[ext]", // 定义输出文件的路径和文件名格式
      },
    },
  },
});
