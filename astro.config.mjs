import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), image(), preact({ compat: true })],
  vite: {
    ssr: {
      noExternal: ["open-props"],
      external: ["svgo"]
    }
  }
});