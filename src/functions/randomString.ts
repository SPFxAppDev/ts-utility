/**
 * Generates a new and random string
 * @param {number} [randomStringLength=5] The length of the new created string. Defaultvalue: 5
 * @param {string} [characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'] The characters, that will be used for the random string. Defaultvalues: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
 * @return {string} Returns a new and random string with the length of randomStringLength and random characters that is passed in characters parameter
 * @since 1.1.0
 */
export default function randomString(randomStringLength: number = 5, characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
    let result = '';
    const charactersLength = characters.length;
    
    for (let i = 0; i < randomStringLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}