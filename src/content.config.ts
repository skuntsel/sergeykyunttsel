import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publications = defineCollection({
  loader: glob({
    base: './src/content/publications',
    pattern: '**/*.{md,mdx}'
  }),
  schema: z.object({
    title: z.string(),
    deck: z.string(),
    area: z.enum([
      'Financial Planning',
      'Capital Allocation',
      'Corporate Finance',
      'Energy Efficiency',
      'Electricity & Energy Markets'
    ]),
    type: z.enum(['original', 'external']),
    datePublished: z.coerce.date().optional(),
    dateUpdated: z.coerce.date().optional(),
    venue: z.string().optional(),
    externalUrl: z.string().url().optional(),
    status: z.enum(['published', 'forthcoming', 'draft']).default('published')
  })
});

export const collections = { publications };
