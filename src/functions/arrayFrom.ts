/**
 * this functions calls Array.from() or make the same logic if not Exists.
 * The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
 * @param arrLike An array-like or iterable object to convert to an array.
 * @param mapFunc (optional) Map function to call on every element of the array.
 * @param thisArgs (optional) Value to use as this when executing mapFn.
 */
/* tslint:disable */
export default function arrayFrom(arrLike: any, mapFunc?: any, thisArgs?: any) {
    if (!Array["from"]) {
        (Array as any)["from"] = () => {
            var toStr: () => string = Object.prototype.toString;
            var isCallable: (fn: any) => boolean = (fn) => {
                return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
            };
            var toInteger: (value: any) => number = (value) => {
            var numberVal: number = Number(value);
            if (isNaN(numberVal)) { return 0; }
            if (numberVal === 0 || !isFinite(numberVal)) { return numberVal; }
            return (numberVal > 0 ? 1 : -1) * Math.floor(Math.abs(numberVal));
            };
            var maxSafeInteger: number = Math.pow(2, 53) - 1;
            var toLength: (value: any) => number = (value) => {
            var len: number = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
            };
        
            return function from(arrayLike) {
            var C: any = this;
            var items: any = Object(arrayLike);
        
            if (arrayLike == null) {
                throw new TypeError('Array.from requires an array-like object - not null or undefined');
            }
        
            var mapFn: any;

            let args: IArguments = arguments;

            if (args.length > 1) {
                mapFn = args[1];
            }

            var T: any;
            if (typeof mapFn !== 'undefined') {
                if (!isCallable(mapFn)) {
                    throw new TypeError('Array.from: when provided, the second argument must be a function');
                }
                if (args.length > 2) {
                    T = args[2];
                }
            }
        
            var len: number = toLength(items.length);
        
            var A: any = isCallable(C) ? Object(new C(len)) : new Array(len);
        
            // 16. Let k be 0.
            var k: number = 0;
            // 17. Repeat, while k < len… (also steps a - h)
            var kValue: any;
            while (k < len) {
                kValue = items[k];
                if (mapFn) {
                A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                } else {
                A[k] = kValue;
                }
                k += 1;
            }
            // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len;
            // 20. Return A.
            return A;
            };
        };
    }

    return Array["from"](arrLike, mapFunc, thisArgs);
}