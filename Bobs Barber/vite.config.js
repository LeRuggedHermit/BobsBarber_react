import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true, // Ensure CSS is split into separate files during the production build
    rollupOptions: {
      output: {
        // Ensure the CSS and other assets are placed in the 'assets' folder with hashed file names
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
  css: {
    devSourcemap: true, // Optional: Enables source maps for CSS in development mode (can be helpful for debugging)
  },
});
