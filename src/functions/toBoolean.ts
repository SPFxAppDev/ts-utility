import { default as isset } from './isset';

/**
 * Converts a value to a Boolean.
 * @param {any} value The Value to be converted to a Boolean.
 * @returns {boolean} If the Value is convertable to a Boolean it
 * is returned as a Boolean otherwise <c>false</c> is returned.
 */
export default function toBoolean(value: any): boolean {
    if (!isset(value)) {
        return false;
    }

    if (typeof value === 'boolean') {
        return value;
    }

    if (typeof value === 'string') {
        value = value.toLowerCase();
    }

    if ((value !== 'false' && value !== 'true') &&
        (value !== '0' && value !== '1') &&
        (value !== 0 && value !== 1)) {
        return false;
    }

    return (value === 'false' || value === '0' || value === 0) ? false : true;
}