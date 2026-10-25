// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: "Tedit",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/SachinAthu/tedit-book-app",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/SachinAthu/tedit-book-app/edit/main/",
      },
      sidebar: [
        {
          label: "Start Here",
          items: [
            { label: "Overview", link: "/" },
            { label: "Outline", slug: "outline" },
          ],
        },
        {
          label: "Volumes",
          items: [{ autogenerate: { directory: "volumes" } }],
          collapsed: true,
        },
        {
          label: "Appendices",
          items: [{ autogenerate: { directory: "appendices" } }],
          collapsed: true,
        },
      ],
    }),
  ],
});
