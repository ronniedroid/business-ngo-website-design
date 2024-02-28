import { z, defineCollection } from 'astro:content';

const expertise = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string()
    })
})

const projects = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        contact: z.object({
            name: z.string(),
            email: z.string().email()
        }),
        name: z.string(),
        start: z.string().transform((str) => new Date(str)),
        end: z.string().transform((str) => new Date(str)),
        budget: z.number(),
        summary: z.string(),
        partners: z.array(z.string()),
        clusters: z.array(z.string()),
        locations: z.object({
            type: z.array(z.string()),
            urban: z.array(z.string()).optional(),
            camp: z.array(z.string()).optional()
        }).optional(),
        beneficiaries: z.object({
            type: z.array(z.string()),
            target: z.number()
        }).optional(),
        objectives: z.array(z.string()),
        activities: z.array(z.string()),
        state: z.enum(['done', 'onGoing']),
        employees: z.object({
            "male": z.number(),
            "female": z.number(),
            "total": z.number()
        }).optional(),
        thumb: image(),
        cover: image()
    })
})

const articles = defineCollection({
    'type': 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        desc: z.string(),
        author: z.string(),
        location: z.string(),
        date: z.date(),
        language: z.enum(['english', 'arabic']),
        cover: image(),
        images: z.array(image()).optional(),
        createdAt: z.date()
    })
})

const reports = defineCollection({
    'type': 'data',
    schema: ({ image }) => z.object({
        title: z.string(),
        createdAt: z.string().transform((str) => new Date(str)),
        date: z.string().transform((str) => new Date(str)),
        cover: image(),
        link: z.string().url()
    })
})

export const collections = {
    expertise, projects, articles, reports
}