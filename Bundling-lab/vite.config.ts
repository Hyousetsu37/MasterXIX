import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import analyzer from "vite-bundle-analyzer";
import { compression } from "vite-plugin-compression2";

export default defineConfig({
  plugins: [
    checker({ typescript: true }),
    analyzer({
      fileName: "bundle-report.html",
      reportTitle: "Información del Bundle",
    }),
    compression({
      algorithms: ["gzip", "brotli"],
    }),
  ],
});
