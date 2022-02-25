import isset from './isset';

/**
 * Determines wheter the Property is a Function.
 * @param {any} property The Property to be determined.
 * @returns {boolean} Wheter the Property is a Function.
 * @since 1.0.0
 */
export default function isFunction(property: any): boolean {
    return isset(property) && typeof property === 'function';
}