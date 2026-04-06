// src/content.config.ts
import { defineCollection, z } from 'astro:content';
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
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    published: z.coerce.date(),
    lang: z.enum(['en-us', 'pt-br', 'en-US', 'pt-BR']),
    icon: z.string().optional(),
    image: z.string().optional(),
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