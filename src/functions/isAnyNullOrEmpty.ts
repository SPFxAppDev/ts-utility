
import isNullOrEmpty from './isNullOrEmpty';

/**
 * Determines if any of the the provided properties are Null or Empty (or whitespace if string-value).
 * @param {any} args One or more properties to checked.
 * @returns {boolean} If any Property is Null or Empty or has not "length" as property <c>true</c> otherwise <c>false</c>.
 * @since 1.3.0
 */
export default function isAnyNullOrEmpty(...args): boolean {
    let returnValue: boolean = false;
    for(let arg of args) {
        if(isNullOrEmpty(arg)) {
            returnValue = true;
            break;
        }
    }

    return returnValue;
}