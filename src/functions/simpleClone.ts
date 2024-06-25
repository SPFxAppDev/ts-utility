/**
 * Creates a simple (deep) clone of `value`
 * @param {object} value The value to clone.
 * @return {string} Returns the cloned value.
 * @since 1.5.0
 */
export default function simpleClone<T>(value: T): T {
  // Handle primitive types and functions
  if (
    value === null ||
    typeof value === 'function' ||
    typeof value !== 'object' ||
    'containsSelfReference' in value
  ) {
    return value;
  }

  // Handle Date objects
  if (value instanceof Date) {
    return new Date(value.getTime()) as T;
  }

  // Handle RegExp objects
  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags) as T;
  }

  // Handle Arrays
  if (Array.isArray(value)) {
    return value.map(simpleClone) as T;
  }

  // Handle Objects
  const clonedObj: T = {} as T;
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      value['containsSelfReference'] = null;
      clonedObj[key] = simpleClone(value[key]);
      delete value['containsSelfReference'];
    }
  }

  return clonedObj as T;
}
