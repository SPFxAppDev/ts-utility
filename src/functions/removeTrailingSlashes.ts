/**
 * Removes trailing slashes from a given string.
 *
 * @param {string} inputString - The string from which to remove trailing slashes.
 * @returns The input string without trailing slashes. If the input is not a string, an empty string is returned.
 *
 * @example
 * ```typescript
 * removeEndingSlashes("example/");          // returns "example"
 * removeEndingSlashes("example//");         // returns "example"
 * removeEndingSlashes("example/path/");     // returns "example/path"
 * removeEndingSlashes("/example/path///");  // returns "/example/path"
 * removeEndingSlashes(123 as any);          // returns ""
 * ```
 * @since 1.5.0
 */
export default function removeTrailingSlashes(inputString: string): string {
  if (typeof inputString !== 'string') {
    return '';
  }

  return inputString.replace(/\/+$/, '');
}
