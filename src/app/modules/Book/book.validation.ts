import { z } from "zod";

const update = z.object({
    body: z.object({
        title: z.string().optional(),
        genre: z.string().optional(),
        publishedYear: z.number().optional(),
        totalCopies: z.number().optional(),
        availableCopies: z.number().optional()
    })
});

export const bookValidationSchema = {
    update
}