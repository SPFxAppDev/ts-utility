import isset from './isset';

/**
 * Determines if all of the the provided properties are set (not null or undefined).
 * @param {any} args One or more properties to checked.
 * @returns {boolean} If all properties are set <c>true</c> otherwise <c>false</c>.
 * @since 1.3.0
 */
export default function allAreSet(...args): boolean {
  let returnValue: boolean = true;
  for (let arg of args) {
    if (!isset(arg)) {
      returnValue = false;
      break;
    }
  }

  return returnValue;
}
