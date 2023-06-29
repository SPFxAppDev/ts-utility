import isNullOrEmpty from './isNullOrEmpty';

/**
 * Determines if all of the the provided properties are null, undefined, or empty (or whitespace if string-value).
 * @param {any} args One or more properties to checked.
 * @returns {boolean} If all properties are null, undefined, or empty or has not "length" as property <c>true</c> otherwise <c>false</c>.
 * @since 1.3.0
 */
export default function allAreNullOrEmpty(...args): boolean {
  let returnValue: boolean = true;

  for (let arg of args) {
    if (!isNullOrEmpty(arg)) {
      returnValue = false;
      break;
    }
  }

  return returnValue;
}
