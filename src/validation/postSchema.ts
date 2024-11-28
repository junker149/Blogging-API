import { string, z } from "zod";

export const post = z.object({
    title: z.string().min(1),
    content: z.string(),
    category: z.string(),
    tags: z.array(string())
})

export const update = z.object({
    title: z.string().min(1).optional(),
    content: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(string()).optional()
})

export type CreatePostInput = z.infer<typeof post>;
export type UpdatePostInput = z.infer<typeof update>;