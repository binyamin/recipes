import { z } from 'zod';

export const recipe = z.object({
	id: z.uuid(),
	title: z.string().min(1),
	ingredients: z.array(z.string().min(1)).min(1),
	steps: z.array(z.string().min(1)).min(1),
	updatedAt: z.date(),
	createdAt: z.date(),
});

export type Recipe = z.infer<typeof recipe>;
