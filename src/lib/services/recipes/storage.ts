import type { Recipe } from './models';

const STORAGE_KEY = 'recipes';

/**
 * Loads recipes from localStorage
 */
export function load(): Recipe[] {
	if (typeof localStorage === 'undefined') return [];
	const stored = localStorage.getItem(STORAGE_KEY);
	return stored ? JSON.parse(stored) : [];
}

/**
 * Saves recipes to localStorage
 */
export function save(recipes: Recipe[]): void {
	if (typeof localStorage === 'undefined') return;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}
