import { z } from 'zod';
import { type Recipe, type RecipeInput, recipe, recipeInput } from './models';

/**
 * A reactive list of all recipes
 */
// Note: We can export this state directly, even though we mutate it sometimes,
// because we never directly reassign the `list` variable.
export let list = $state<Recipe[]>([]);

/**
 * Save a new recipe
 * @param input The new recipe's data
 * @returns The id of the new recipe
 * @throws {z.ZodError}
 */
export function create(input: RecipeInput): string {
	const now = new Date();

	const parsed = z.parse(recipe, {
		...input,
		id: crypto.randomUUID(),
		updatedAt: now,
		createdAt: now,
	} satisfies Recipe);

	list.push(parsed);

	return parsed.id;
}

/**
 * Represents a client-side request for a non-existent recipe
 */
export class RecipeNotFoundError extends Error {
	constructor(public id: string) {
		super(`Recipe with id "${id}" not found`);
		this.name = 'RecipeNotFoundError';
	}
}

/**
 * Update an existing recipe
 * @param id The id of the recipe to update
 * @param input The updated data fields
 * @throws {RecipeNotFoundError | z.ZodError}
 */
export function update(id: string, input: RecipeInput): void {
	const idx = list.findIndex((v) => v.id === id);
	if (!idx) throw new RecipeNotFoundError(id);

	const parsed = z.parse(recipeInput, input);
	const data: Recipe = {
		...parsed,
		id,
		updatedAt: new Date(),
		createdAt: list[idx].createdAt,
	};

	list.splice(idx, 1, data);
}

/**
 * Delete a recipe
 * @param id The id of the recipe to delete
 * @returns `true` if the recipe existed and has been removed, or `false` if the recipe does not exist.
 */
export function remove(id: string): boolean {
	const idx = list.findIndex((v) => v.id === id);
	if (!idx) return false;

	list.splice(idx, 1);
	return true;
}
