/* tslint:disable */
if (typeof (Object as any).assign !== 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, 'assign', {
      value: function assign(target: any, varArgs: any): any { // .length of function is 2
        'use strict';
        if (target === null || target === undefined) {
          throw new TypeError('Cannot convert undefined or null to object');
        }
  
        const to: any = Object(target);
  
        for (let index: number = 1; index < arguments.length; index++) {
          const nextSource: any = arguments[index];
  
          if (nextSource !== null && nextSource !== undefined) {
            for (const nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
}
  