import isset from './isset';

/**
 * Determines if the provided Property is Null or Empty (or whitespace if string-value).
 * @param {any} property The Property to checked.
 * @returns {boolean} If the Property is Null or Empty or has
 * not "length" as property <c>true</c> otherwise <c>false</c>.
 * @since 1.0.0
 */
export default function isNullOrEmpty(property: any): property is null | undefined {
  if (!isset(property)) {
    return true;
  }

  if (typeof property === 'string') {
    return (property as string).trim().length < 1;
  }

  if (typeof (property as any).length !== 'number') {
    return false;
  }

  return (property as any).length < 1;
}