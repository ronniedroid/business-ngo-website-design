import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), vue(), sitemap(), image()],
  vite: {
    ssr: {
      noExternal: ["open-props"],
      external: ["svgo"]
    }
  }
});