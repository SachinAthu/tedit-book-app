// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";
import starlightScrollToTop from "starlight-scroll-to-top";
import starlightPageActions from "starlight-page-actions";

// https://astro.build/config
export default defineConfig({
  site: "https://tedit-book.vercel.app",
  integrations: [
    starlight({
      title: "Tedit",
      customCss: ["./src/styles/custom.css"],
      favicon: "/favicon.ico",
      plugins: [
        starlightThemeRapide(),
        starlightScrollToTop({
          showProgressRing: true,
          borderRadius: "50",
          svgPath: "M12 5V19M7 10L12 5L17 10",
          showTooltip: true,
          showOnHomepage: false,
        }),
        starlightPageActions({
          position: "page-title",
          baseUrl: "https://tedit-book.vercel.app/",
        }),
      ],
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
          items: [{ autogenerate: { directory: "volumes", collapsed: true } }],
          collapsed: true,
        },
        {
          label: "Appendices",
          items: [
            { autogenerate: { directory: "appendices", collapsed: true } },
          ],
          collapsed: true,
        },
      ],
    }),
  ],
});
