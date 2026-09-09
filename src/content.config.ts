import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    /** The <h1>. May contain inline markup, so it is rendered with set:html. */
    title: z.string(),
    /** The <title> tag, which differs from the h1 on every current article. */
    metaTitle: z.string(),
    /** Plain-text title for og:title and JSON-LD headline. */
    headline: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.string(),
    /** Summary shown on the articles index. */
    blurb: z.string(),
    /** Short form used in the "Also in this series" cross-links. */
    shortTitle: z.string(),
    /** Headline shown on the articles index, which is longer than shortTitle. */
    indexTitle: z.string(),
    /** Intro paragraph under the h1. May contain inline markup. */
    standfirst: z.string(),
    /** Q&A pairs. Present means FAQPage JSON-LD is emitted, absent means none. */
    faq: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .optional(),
  }),
});

export const collections = { articles };
