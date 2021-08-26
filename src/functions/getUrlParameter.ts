import { default as isNullOrEmpty } from './isNullOrEmpty';

/**
 * Get's the Value of a specific Url-Parameter.
 * @param {string} parameterName The Name of the searched Parameter.
 * @param {string} url The Url which the Parameter-Value is read from (if not set the current Url is used).
 * @returns {string|null} If the Parameter exists on the Url the Value is returned as a string.
 */
export default function getUrlParameter(parameterName: string, url: string = null): string|null {

    if (isNullOrEmpty(url)) {
        url = window.location.href;
    }

    url = url.toLowerCase();
    let name: string = parameterName.toLowerCase();
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');

    const regexS: string = '[\\?&]' + name + '=([^&#]*)';
    const regex: RegExp = new RegExp(regexS);
    const results: RegExpExecArray = regex.exec(url);

    if (results == null) {
        return null;
    }

    return results[1];
}