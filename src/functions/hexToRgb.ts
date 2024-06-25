export interface RGBA {
  r: number;
  g: number;
  b: number;
  a?: number;
  toString(): string;
}

class RGBa implements RGBA {
  public r: number;
  public g: number;
  public b: number;
  public a: number;

  public toString(): string {
    if (typeof this.a === 'number') {
      return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }

    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}

/**
 * Converts a HEX color string to an RGB or RGBA object.
 *
 * @param hex - The HEX color string, which can be in the format "#RRGGBB" or "#RRGGBBAA".
 * @returns {RGBA} An object representing the RGB or RGBA values.
 *
 * @example
 * ```typescript
 * hexToRgb("#ff0000");        // returns { r: 255, g: 0, b: 0 }
 * hexToRgb("#00ff007f");      // returns { r: 0, g: 255, b: 0, a: 0.5 }
 * ```
 * @since 1.5.0
 */
export default function hexToRgb(hex: string): RGBA {
  // Remove the hash symbol if present
  hex = hex.replace(/^#/, '');

  // Parse the HEX string based on its length
  let rgba: RGBa = new RGBa();

  if (hex.length < 6 || hex.length > 8) {
    throw new Error('Invalid HEX color string');
  }

  rgba.r = parseInt(hex.slice(0, 2), 16);
  rgba.g = parseInt(hex.slice(2, 4), 16);
  rgba.b = parseInt(hex.slice(4, 6), 16);

  if (hex.length === 8) {
    rgba.a = parseInt(hex.slice(6, 8), 16) / 255;
    rgba.a = parseFloat(rgba.a.toFixed(2));
  }

  return rgba;
}
