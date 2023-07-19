import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://cristinacasanas.com/",
  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: true,
      },
      input: {
        Editorial_New_Regular_400:
          "../../assets/fonts/Editorial_New_Regular_400.otf",
        Editorial_New_Ultrabold_800:
          "../../assets/fonts/Editorial_New_Ultrabold_800.otf",
        Editorial_New_Ultralight_200:
          "../../assets/fonts/Editorial_New_Ultralight_200.otf",
      },
    },
  },
});
