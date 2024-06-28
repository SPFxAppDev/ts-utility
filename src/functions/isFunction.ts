import isset from './isset';

/**
 * Determines whether the property is a function.
 * @param {any} property The Property to be determined.
 * @returns {boolean} whether the property is a function.
 * @since 1.0.0
 */
export default function isFunction(property: any): property is Function {
    return isset(property) && typeof property === 'function';
}