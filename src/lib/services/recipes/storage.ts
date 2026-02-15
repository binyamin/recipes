import { type Recipe, recipe } from './models';
import seed from './seed.json' with { type: 'json' };

const STORAGE_KEY = 'recipes';

/**
 * Loads recipes from localStorage
 */
export function load(): Recipe[] {
	if (typeof localStorage === 'undefined') return [];

	const stored = localStorage.getItem(STORAGE_KEY);

	if (stored) {
		return JSON.parse(stored);
	}

	try {
		return recipe.array().parse(seed);
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
