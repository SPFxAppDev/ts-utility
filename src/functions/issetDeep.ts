import isset from './isset';

/**
 * Determines if the provided Property is set deep/nested.
 * @param {any} objectToCheck The Property to checked.
 * @param {string} keyNameSpace The Key-Namespace of the Property (for example: "My.Nested.Property").
 * @returns {boolean} If the Property is set <c>true</c> otherwise <c>false</c>.
 * @since 1.0.0
 */
export default function issetDeep(objectToCheck: any, keyNameSpace: string): boolean {
    if (!isset(objectToCheck)) {
        return false;
    }

    const namespaceKeys: string[] = keyNameSpace.split('.');
    let currentObjectPath: any = objectToCheck;

    for (let i: number = 0; i < namespaceKeys.length; i++) {
        const currentKey: string = namespaceKeys[i];

        if (!isset(currentObjectPath)) {
            return false;
        }

        currentObjectPath = currentObjectPath[currentKey];
    }

    return isset(currentObjectPath);
}