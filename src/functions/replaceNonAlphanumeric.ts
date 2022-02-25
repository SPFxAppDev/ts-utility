import isNullOrEmpty from './isNullOrEmpty';
/**
 *
 * Replaces all non-alphanumeric characters (incl. underscores) with the passed value
 * @param {string} value The value to replace all non-alphanumeric and non-underscore characters
 * @param {string} replaceValue A string containing the text to replace for non-alphanumeric and non-underscore characters. Default: '' 
 * @return {string} A new string value without non-alphanumeric and non-underrscore characters.
 * @since 1.1.0
 */
export default function replaceNonAlphanumeric(value: string, replaceValue: string = ''): string {

    if(isNullOrEmpty(value)) {
        return value;
    }

    if(typeof value !== "string") {
        return value;
    }

    return value.replace(/[^\w]/gi, replaceValue);
}