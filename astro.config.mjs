// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import netlify from "@astrojs/netlify";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://www.thebenderz.com",

  vite: {
    build: {
      commonjsOptions: {
        esmExternals: true,
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },

  integrations: [
    tailwind(),
    react(),
    sanity({
      projectId: "4r9ag2ef",
      dataset: "production",
      useCdn: false, // for static builds
      studioBasePath: "/admin",
    }),
  ],

  adapter: netlify(),
});
