import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const newsSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  summary: z.string(),
  details: z.array(z.string()).optional(),
  link: z
    .object({
      label: z.string(),
      url: z.string().url(),
    })
    .optional(),
});

const newsKo = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news/ko" }),
  schema: newsSchema,
});

const newsEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news/en" }),
  schema: newsSchema,
});

export const collections = { newsKo, newsEn };
