
import isset from './isset';

/**
 * Determines if any of the the provided properties are set (not null or undefined).
 * @param {any} args One or more properties to checked.
 * @returns {boolean} If One of the Property is set <c>true</c> otherwise <c>false</c>.
 * @since 1.3.0
 */
export default function isAnySet(...args): boolean {
    let returnValue: boolean = false;
    for(let arg of args) {
        if(isset(arg)) {
            returnValue = true;
            break;
        }
    }

    return returnValue;
}