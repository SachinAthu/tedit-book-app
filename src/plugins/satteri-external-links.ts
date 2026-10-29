import { defineHastPlugin } from "satteri";

export const externalLinks = defineHastPlugin({
  name: "external-links",
  element: {
    filter: ["a"],
    visit(node, context) {
      const href = node.properties.href;

      if (typeof href !== "string" || !/^https?:\/\//i.test(href)) {
        return;
      }

      context.setProperty(node, "target", "_blank");
      context.setProperty(node, "rel", ["noopener", "noreferrer"]);
    },
  },
});
