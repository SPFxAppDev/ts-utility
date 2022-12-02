import '../extensions/StringExtensions';
import '../extensions/ArrayExtensions';

/**
 * Removes all URL parameters and URL-Fragments (hash) from the passed url
 * @param {string} url The URL from which the URL parameters should be removed 
 * @return {string} A new string value without URL Parameters and URL-Fragments.
 * @since 1.2.0
 */
export default function removeAllParametersFromUrl(url: string): string {

    if (typeof url !== 'string') {
        return '';
    }

    let urlCopy = url.slice();

    if(urlCopy.Contains("#")) {
        let splittedUrl = urlCopy.split('#');

        do {
            
            const hashValue = splittedUrl.LastOrDefault();

            if(!urlCopy.EndsWith('#' + hashValue) || hashValue.Contains("?")) {
                break;
            }

            splittedUrl.RemoveAt(-1, 1);
            urlCopy = splittedUrl.join('#');
            splittedUrl = urlCopy.split('#');
        }
        while(splittedUrl.length > 1);

        
    }

    return urlCopy.split('?')[0].split('&')[0];
}