import { default as isset } from './isset';
import { default as isNullOrEmpty } from './isNullOrEmpty';

/**
 * A utility function for conditionally joining classNames together.
 * @example cssClasses('spfx-app-dev', 'theme'); // => 'spfx-app-dev theme'
 * @example cssClasses('spfx-app-dev', { theme: false });  // => 'spfx-app-dev'
 * @example cssClasses({ 'spfx-app-dev': true });  // => 'spfx-app-dev'
 * @example cssClasses({ 'spfx-app-dev': false });  // => ''
 * @example cssClasses({ spfx-app-dev: true }, { theme: true }); // => 'spfx-app-dev theme'
 * @example cssClasses({ spfx-app-dev: true, theme: true });  // => 'spfx-app-dev theme'
 * @example cssClasses('spfx-app-dev', { theme: true, active: false }, 'item');  // => 'spfx-app-dev theme item'
 * @example cssClasses(null, false, 'spfx-app-dev', undefined, 0, 1, { theme: null }, '');  // => 'spfx-app-dev'
 * @example const arr = ['theme', { active: true, item: false }]; cssClasses('spfx-app-dev', arr);  // => 'spfx-app-dev theme active'
 */
export default function cssClasses(...args: any[]): string {
    const classes: any[] = [];
    const self: any = cssClasses;

    for (let i: number = 0; i < args.length; i++) {
        const arg: any = args[i];

        if (!isset(arg)) {
            continue;
        }

        const argType: string = typeof arg;

        if (argType === 'string') {
            classes.push(arg);
            continue;
        }

        if (Array.isArray(arg) && arg.length > 0) {
            const classNamesFromArray: any = self.apply(null, arg);

            if (isset(classNamesFromArray) && !isNullOrEmpty(classNamesFromArray)) {
                classes.push(classNamesFromArray);
            }

            continue;
        }

        if (argType === 'object') {

            if (arg.toString !== Object.prototype.toString) {
                classes.push(arg.toString());
                continue;
            }

            for (const className in arg) {
                if (arg.hasOwnProperty(className) && arg[className]) {
                    classes.push(className);
                }
            }
        }
    }

    return classes.join(' ');
}