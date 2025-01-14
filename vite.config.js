import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  define: {
    __APP_TITLE__: JSON.stringify("Your Dynamic Title"),
  },
  plugins: [react()],
});
