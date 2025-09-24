import { defineCollection, z } from "astro:content";
import { CATEGORIES_NAMES } from '@/consts.ts'

const posts = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().optional(),
        projectURL: z.string().optional(),
        author: z.string(),
        logoauthor: z.string().optional(),
        categories: z.array(z.enum(CATEGORIES_NAMES)),
    }),
});

export const collections = { posts };
