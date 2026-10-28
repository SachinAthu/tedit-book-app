import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

export const prerender = true;

type Props = {
  filePath: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await getCollection("docs");

  return docs.map((entry) => ({
    params: { slug: entry.id === "" ? "index" : entry.id },
    props: { filePath: entry.filePath },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { filePath } = props as Props;
  const source = await readFile(resolve(filePath), "utf8");

  return new Response(source, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
