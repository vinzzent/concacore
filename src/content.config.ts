import { defineCollection } from 'astro:content';
import { z } from 'astro/zod'; // Correct import for Astro 6.x / 7.x
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    published: z.coerce.date(),
    lang: z.enum(['en-us', 'pt-br', 'en-US', 'pt-BR']),
    type: z.string().optional(),
    tags: z.array(z.string()).default([]),
    layout: z.string().optional(), 
  }),
});

const productsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  // Pass the built-in ({ image }) helper into the schema function
  schema: ({ image }) => z.object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    published: z.coerce.date(),
    lang: z.enum(['en-us', 'pt-br', 'en-US', 'pt-BR']),
    icon: image().optional(),  // Automatically resolves local image strings
    image: image().optional(), // Automatically resolves local image strings
    isNew: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    layout: z.string().optional(),
    email: z.string().email().optional(),
    appsource: z.string().url().optional(),
    repo: z.string().url().optional(),
  }),
});

const solutionsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/solutions" }),
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en-us', 'pt-br', 'en-US', 'pt-BR']),
    hero: z.object({
      label: z.string(),
      title: z.string(),
      subtitle: z.string(),
    })
  }),
});

export const collections = {
  blog: blogCollection,
  products: productsCollection,
  solutions: solutionsCollection,
};