let counter = 0;

/**
 * Generates a unique ID based on a global counter.
 */
export const useId = (prefix = 'id') => `${prefix}-${++counter}`;
