import arrayFrom from './arrayFrom';

/**
 * Deep merge two objects.
 * @param target An object that will receive the new properties if additional objects are passed in.
 * @param sources An object containing additional properties to merge in.
 * @param inCaseOfArrayUseSourceObject if true, then the array from source object will
 * be use if target-value and source-value are arrays. Otherwise both arrays will be merged
 */
export default function extend(target: any, source: any, inCaseOfArrayUseSourceObject: boolean = true): any {

    if (Array.isArray(target) && Array.isArray(source)) {
        if (inCaseOfArrayUseSourceObject) {
            return source;
        }

        return arrayFrom(new Set(target.concat(source)));
    }

    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties

    for (const key of Object.keys(source)) {
        if (Array.isArray(source[key])) {
            const targetValue: any = target[key] || [];
            source[key] = extend(targetValue, source[key], inCaseOfArrayUseSourceObject);
        } else if (source[key] instanceof Object) {
            const targetValue: any = target[key] || {};
            source[key] = extend(targetValue, source[key], inCaseOfArrayUseSourceObject);
        }
    }

    // Join `target` and modified `source`
    target = target || {};
    const tempTarget: any = {...target, ...source};
    return tempTarget;
}