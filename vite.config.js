import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
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

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.BASE_URL ?? "/",
});
