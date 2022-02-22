/**
 * Determines if the provided Property is set.
 * @param {any} property The Property to checked.
 * @returns {boolean} If the Property is set <c>true</c> otherwise <c>false</c>.
 * @since 1.0.0
 */
export default function isset(property: any): boolean {
    return typeof property !== 'undefined' && property != null;
}