
export default function removeAllParametersFromUrl(url: string): string {

    if (typeof url !== 'string') {
        return '';
    }

    return url.split('?')[0].split('&')[0].split('#')[0];
}