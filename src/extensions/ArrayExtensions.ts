import { isNullOrEmpty, isset } from '../functions';

/* tslint:disable:interface-name */
declare global {
    interface Array<T> {
        /**
         * Checks the array if the item (or one of the properties) exists or are equal
         * @param {any} item The item that will be checked
         * @param {string} arrayProperty if a property should be checked
         * @param {string} itemProperty if a property of the item should be checked
         * @param {boolean} useArrayPropertyForBoth if the parameter "arrayProperty" should use for both arrays to check (default => true if item prop is empty)
         * @returns <c>true</c> if the value is in Array, otherwise <c>false</c>
         */
        Contains(item: any, arrayProperty?: string, itemProperty?: string, useArrayPropertyForBoth?: boolean): boolean;

        /**
         * Returns the first element of a sequence, or <c>null</c> if no element is found.
         * @param predicateFunc A function to test each element for a condition.
         * @param defaultValue A default value that will be returned if the element is not found. If this parameter is not specified, null is returned.
         * @example items.FirstOrDefault((item) => item.name === "SPFx-App.dev";);
         * @returns <c>null</c> if <c>Array<T></c> is empty or if no element passes the test specified by predicate; otherwise, the first element in source <c>Array<T></c> that passes the test specified by predicate.
         */
        FirstOrDefault(predicateFunc: (item: T) => boolean, defaultValue?: T|null): T|null;

        /**
         * Returns the first index of element of a sequence, or <c>-1</c> if no element is found.
         * @param predicateFunc A function to get the index for a condition.
         * @example items.IndexOf((item) => { return item.name === "SPFx-App.dev"; });
         * @returns <c>null</c> if <c>Array<T></c> is empty or if no element passes the test specified by predicate; otherwise, the first element in source <c>Array<T></c> that passes the test specified by predicate.
         */
        IndexOf(predicateFunc: (item: T) => boolean): number;

        /**
         * Filters a sequence of values based on a predicate.
         * @param predicateFunc A function to test each element for a condition.
         * @example items.Where((item) => { return item.Active === true; });
         * @returns An <c>Array<T></c> that contains elements from the input sequence that satisfy the condition.
         */
        Where(predicateFunc: (item: T) => boolean): Array<T>;

        /**
         * Sorts the elements of a sequence in ascending order.
         * @param keySelector A function to extract a key from an element.
         * @example items.OrderBy((item) => item.name);
         * @returns An <c>Array<T></c> whose elements are sorted according to a key.
         */
        OrderBy(keySelector: (item: T) => any): Array<T>;

        /**
         * Sorts the elements of a sequence in descending order.
         * @param keySelector A function to extract a key from an element.
         * @example items.OrderByDescending((item) => item.name);
         * @returns An <c>Array<T></c> whose elements are sorted descending to a key.
         */
        OrderByDescending(keySelector: (item: T) => any): Array<T>;

        /**
         * Sorts the elements of a sequence in ascending order.
         * @param keySelectors An array of functions to extract a key from an element.
         * @example items.OrderByMultiple([(item) => item.name, (item) => item.id]);
         * @returns An <c>Array<T></c> whose elements are sorted ascending to multiple keys.
         */
        OrderByMultiple(keySelectors: Array<(item: T) => any>): Array<T>;

        /**
         * Sorts the elements of a sequence in descending order.
         * @param keySelectors An array of functions to extract a key from an element.
         * @example items.OrderByMultipleDescending([(item) => item.name, (item) => item.id]);
         * @returns An <c>Array<T></c> whose elements are sorted descending to multiple keys.
         */
        OrderByMultipleDescending(keySelectors: Array<(item: T) => any>): Array<T>;
    }
}

if(!isset(Array.prototype.Contains)) {
    Object.defineProperty(Array.prototype, 'Contains', {
        value: function<T>(this: T[], item: any, arrayProperty?: string, itemProperty?: string, useArrayPropertyForBoth: boolean = false): boolean {
            const arr: T[] = this;
            let itemProp: string = itemProperty;
        
            if (useArrayPropertyForBoth && typeof itemProperty !== typeof 'a string') {
                itemProp = arrayProperty;
            }
        
            for (let i: number = 0; i < arr.length; i++) {
                const currentItem: any = arr[i];
        
                if (!isNullOrEmpty(arrayProperty) && currentItem === item) {
                    return true;
                }
        
                if (itemProp.length === 0 && currentItem[arrayProperty] === item) {
                    return true;
                }
        
                if (currentItem[arrayProperty] === item[itemProp]) {
                    return true;
                }
            }
        
            return false;
        }
    });
}

if(!isset(Array.prototype.FirstOrDefault)) {
    Object.defineProperty(Array.prototype, 'FirstOrDefault', {
        value: function<T>(this: T[], predicateFunc: (item: T) => boolean, defaultValue: T|null = null): T|null {
            const arr: T[] = this;
        
            for (let i: number = 0; i < arr.length; i++) {
                const item: any = arr[i];
                if (predicateFunc(item)) {
                    return item;
                }
            }
        
            return defaultValue;
        }
    });
}

if(!isset(Array.prototype.IndexOf)) {
    Object.defineProperty(Array.prototype, 'IndexOf', {
        value: function<T>(this: T[], predicateFunc: (item: T) => boolean): number {
            const arr: T[] = this;
        
            for (let i: number = 0; i < arr.length; i++) {
                const item: any = arr[i];
                if (predicateFunc(item)) {
                    return i;
                }
            }
        
            return -1;
        }
    });
}

if(!isset(Array.prototype.Where)) {
    Object.defineProperty(Array.prototype, 'Where', {
        value: function<T>(this: T[], predicateFunc: (item: T) => boolean): T[] {
            const arr: T[] = this;
            const result: T[] = [];
        
            for (let i: number = 0; i < arr.length; i++) {
                const item: any = arr[i];
                if (predicateFunc(item)) {
                    result.push(item);
                }
            }
            return result;
        }
    });
}

if(!isset(Array.prototype.OrderBy)) {
    Object.defineProperty(Array.prototype, 'OrderBy', {
        value: function<T>(this: T[], keySelector: (item: T) => any): T[]  {
            const arr: T[] = this;
            // const result: T[] = [];
            const compareFunction: (item1: any, item2: any) => number = (item1: any, item2: any): number => {
                const keySelectorValue1: any = keySelector(item1);
                const keySelectorValue2: any = keySelector(item2);
                return keySelectorValue1 > keySelectorValue2 ? 1 : keySelectorValue2 > keySelectorValue1 ? -1 : 0;
            };
        
            // for (let i: number = 0; i < arr.length; i++) {
            //     return arr.sort(compareFunction);
            // }
        
            return arr.sort(compareFunction);
            // return result;
        }
    });
}

if(!isset(Array.prototype.OrderByDescending)) {
    Object.defineProperty(Array.prototype, 'OrderByDescending', {
        value: function<T>(this: T[], keySelector: (item: T) => any): T[]  {
            const arr: T[] = this;
            // const result: T[] = [];
            const compareFunction: (item1: any, item2: any) => number = (item1: any, item2: any): number => {
                const keySelectorValue1: any = keySelector(item1);
                const keySelectorValue2: any = keySelector(item2);
                return keySelectorValue1 > keySelectorValue2 ? -1 : keySelectorValue2 > keySelectorValue1 ? 1 : 0;
            };
        
            // for (let i: number = 0; i < arr.length; i++) {
                // return arr.sort(compareFunction);
            // }
            return arr.sort(compareFunction);
        
            // return result;
        }
    });
}

if(!isset(Array.prototype.OrderByMultiple)) {
    Object.defineProperty(Array.prototype, 'OrderByMultiple', {
        value: function<T>(this: T[], keySelectors: Array<(item: T) => any>): T[]  {
            const arr: T[] = [...this];
            // const result: T[] = [];
        
            const compareFunction: (item1: any, item2: any) => number = (item1: any, item2: any): number => {
                for (let i: number = 0; i < keySelectors.length; i++) {
                    const keySelector: any = keySelectors[i];
                    const keySelectorValue1: any = keySelector(item1);
                    const keySelectorValue2: any = keySelector(item2);
        
                    if (keySelectorValue1 > keySelectorValue2) {
                        return 1;
                    }
        
                    if (keySelectorValue2 > keySelectorValue1) {
                        return -1;
                    }
                }
        
                return 0;
            };
        
            // for (let i: number = 0; i < arr.length; i++) {
            //     return arr.sort(compareFunction);
            // }

            return arr.sort(compareFunction);
        
            // return result;
        }
    });
}

if(!isset(Array.prototype.OrderByMultipleDescending)) {
    Object.defineProperty(Array.prototype, 'OrderByMultipleDescending', {
        value: function<T>(this: T[], keySelectors: Array<(item: T) => any>): T[] {
            const arr: T[] = [...this];
            // const result: T[] = [];

            const compareFunction: (item1: any, item2: any) => number = (item1: any, item2: any): number => {
                for (let i: number = 0; i < keySelectors.length; i++) {
                    const keySelector: any = keySelectors[i];
                    const keySelectorValue1: any = keySelector(item1);
                    const keySelectorValue2: any = keySelector(item2);

                    if (keySelectorValue1 > keySelectorValue2) {
                        return -1;
                    }

                    if (keySelectorValue2 > keySelectorValue1) {
                        return 1;
                    }
                }

                return 0;
            };

            // for (let i: number = 0; i < arr.length; i++) {
            //     return arr.sort(compareFunction);
            // }

            return arr.sort(compareFunction);

            // return result;
        }
    });
}