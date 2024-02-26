import { z, defineCollection } from 'astro:content';

const expertise = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string()
    })
})

export const collections = {
    expertise
}