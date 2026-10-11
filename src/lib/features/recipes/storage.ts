import z from 'zod';
import { type Recipe, recipe } from './schema';
import seed from './seed.json' with { type: 'json' };

const STORAGE_KEY = 'recipes';

/**
 * Process data after loading it (eg. coerce data types).
 */
function parseData(data: unknown[]) {
	return recipe
		.extend({
			updatedAt: z.coerce.date(),
			createdAt: z.coerce.date(),
		})
		.array()
		.parse(data);
}

/**
 * Loads recipes from localStorage
 */
export function load(): Recipe[] {
	if (typeof localStorage === 'undefined') return [];

	const stored = localStorage.getItem(STORAGE_KEY);

	if (stored) {
		return parseData(JSON.parse(stored));
	}

	try {
		return parseData(seed);
	} catch {
		return [];
	}
}

/**
 * Saves recipes to localStorage
 */
export function save(recipes: Recipe[]): void {
	if (typeof localStorage === 'undefined') return;

	localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}
