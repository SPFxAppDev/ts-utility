import isset from './isset';

/**
 * Gets an nested property from an specific object or default, if not isset.
 * @param {any} objectToCheck The Property to checked.
 * @param {string} keyNameSpace The Key-Namespace of the Property (for example: "My.Nested.Property").
 * @param {any} defaultValue The defaultValue if property not exist.
 * @returns {any} If the Property is set, than the requested property otherwise defaultValue.
 * @since 1.0.0
 */
export default function getDeepOrDefault<TResult>(objectToCheck: any, keyNameSpace: string, defaultValue: TResult = null): TResult {
    if (!isset(objectToCheck)) {
        return defaultValue;
    }

    const namespaceKeys: string[] = keyNameSpace.split('.');
    let currentObjectPath: any = objectToCheck;

    for (let i: number = 0; i < namespaceKeys.length; i++) {
        const currentKey: string = namespaceKeys[i];

        if (!isset(currentObjectPath[currentKey])) {
            return defaultValue;
        }

        currentObjectPath = currentObjectPath[currentKey];
    }

    return !isset(currentObjectPath) ? defaultValue : currentObjectPath as TResult;
}