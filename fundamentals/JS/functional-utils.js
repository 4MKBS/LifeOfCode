// Functional composition utilities

/**
 * Compose functions from right to left
 * @param {...Function} fns - Functions to compose
 * @returns {Function} Composed function
 */
export const compose = (...fns) => x => {
    if (!Array.isArray(fns) || fns.length === 0) {
        return x;
    }
    return fns.reduceRight((v, fn) => fn(v), x);
};

/**
 * Pipe functions from left to right
 * @param {...Function} fns - Functions to pipe
 * @returns {Function} Piped function
 */
export const pipe = (...fns) => x => {
    if (!Array.isArray(fns) || fns.length === 0) {
        return x;
    }
    return fns.reduce((v, fn) => fn(v), x);
};