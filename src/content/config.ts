import { defineCollection, z } from "astro:content";

const degree = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        university: z.string(),
        dateStart: z.coerce.date(),
        dateEnd: z.union([z.coerce.date(), z.string()]),
    }),
});

const work = defineCollection({
    type: "content",
    schema: z.object({
        company: z.string(),
        role: z.string(),
        dateStart: z.coerce.date(),
        dateEnd: z.union([z.coerce.date(), z.string()]),
        stack: z.array(z.string()),
    }),
});

const projects = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().optional(),
        projectURL: z.string().optional(),
        company: z.string(),
        logocompany: z.string().optional(),
    }),
});

export const collections = { degree, work, projects };
