import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aikoreainc.com",
  redirects: {
    "/ko": "/",
    "/ko/about": "/about/",
    "/ko/services": "/services/",
    "/ko/research": "/research/",
    "/ko/news": "/news/",
    "/ko/contact": "/contact/",
  },
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "ko",
        locales: {
          ko: "ko-KR",
          en: "en-US",
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
