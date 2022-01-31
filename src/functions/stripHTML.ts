import isNullOrEmpty from './isNullOrEmpty';
/**
 * Strips the HTML and returns only the text content
 * @param {string} htmlValue The HTML content from which to return the text
 * @return {string} the text content of passed html
 */
export default function stripHtml(htmlValue: string): string {
    if(isNullOrEmpty(htmlValue)) {
        return '';
    }

    return (new DOMParser().parseFromString(htmlValue, 'text/html')).body.textContent;
}