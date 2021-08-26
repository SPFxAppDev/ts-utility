import { default as isset } from './isset';

/**
 * Determines if the provided Property is Null or Empty (or whitespace if string-value).
 * @param {any} property The Property to checked.
 * @returns {boolean} If the Property is Null or Empty or has
 * not "length" as property <c>true</c> otherwise <c>false</c>.
 */
export default function isNullOrEmpty(property: any): boolean {
    if (!isset(property)) {
        return true;
    }

    if (typeof property === 'string') {
        return property.trim().length < 1;
    }

    if (!property.hasOwnProperty('length')) {
        return false;
    }

    return property.length < 1;
}