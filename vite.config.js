// ==================================
// Vite config - React + Tailwind v4
// ==================================
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(), // 👈 BẮT BUỘC cho Tailwind v4
  ],
  base: mode === "production" ? "/NhatMinh_React/" : "/",
}));
