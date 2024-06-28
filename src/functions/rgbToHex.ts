/**
 * Converts RGB or RGBA color values to a HEX color string.
 * @param {number} r - The red color value (0-255).
 * @param {number} g - The green color value (0-255).
 * @param {number} b - The blue color value (0-255).
 * @param {number} a - Optional. The alpha value (0-1). If provided, the resulting HEX string will include the alpha channel.
 * @param {boolean} withHashPrefix - Optional. If <c>true</c>, the # (hash) prefix is added to the return value, otherwise not. Default value is true.
 * @return {string}  A string representing the HEX color value. If the alpha value is provided, the string will include the alpha channel.
 * @example
 * ```typescript
 * rgbToHex(255, 0, 0);               // returns "#ff0000"
 * rgbToHex(255, 0, 0, false);        // returns "ff0000"
 * rgbToHex(0, 255, 0, 0.5);          // returns "#00ff007f"
 * rgbToHex(0, 255, 0, 0.5, false);   // returns "00ff007f"
 * ```
 * @since 1.5.0
 */
export default function rgbToHex(
  r: number,
  g: number,
  b: number,
  a?: number,
  withHashPrefix?: boolean
): string {
  // Ensure the values are within the 0-255 range
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  let hex = ((r << 16) | (g << 8) | b).toString(16);
  hex = padStart(hex, 6, '0');

  if (typeof a === 'number') {
    a = Math.max(0, Math.min(1, a));
    const alphaHex = Math.round(a * 255).toString(16);
    hex += padStart(alphaHex, 2, '0');
  }

  const prefix = typeof withHashPrefix === 'boolean' ? (withHashPrefix ? '#' : '') : '#';

  return `${prefix}${hex}`;
}

function padStart(str: string, targetLength: number, padString: string): string {
  while (str.length < targetLength) {
    str = padString + str;
  }
  return str;
}
