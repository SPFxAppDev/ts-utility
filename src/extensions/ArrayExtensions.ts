import { isNullOrEmpty, isset } from '../functions';

/* tslint:disable:interface-name */
declare global {
    interface Array<T> {

        /**
         * Returns the first element of a the array, or the first element that satisfies the condition (by predicateFunc), or <c>defaultValue</c> if no element is found.
         * @param predicateFunc A optional function to test each element for a condition. If function is not specified, the first element is returend or <c>defaultValue</c>.
         * @param defaultValue A default value that will be returned if the element is not found. If this parameter is not specified, null is returned.
         * @example items.FirstOrDefault((item) => item.name === "SPFx-App.dev";);
         * @returns <c>null|defaultValue</c> if <c>Array<T></c> is empty or if no element passes the test specified by predicate; otherwise, the first element in source <c>Array<T></c> that passes the test specified by predicate.
         * @since 1.0.0
         * @since 1.1.0 predicateFunc is optional, if not set the first element or <c>null|defaultValue</c> is returned
         */
        FirstOrDefault(predicateFunc?: (item: T) => boolean, defaultValue?: T|null): T|null;

        /**
         * Returns the first index of element of a sequence, or <c>-1</c> if no element is found.
         * @param predicateFunc A function to get the index for a condition.
         * @example items.IndexOf((item) => { return item.name === "SPFx-App.dev"; });
         * @returns <c>null</c> if <c>Array<T></c> is empty or if no element passes the test specified by predicate; otherwise, the first element in source <c>Array<T></c> that passes the test specified by predicate.
         * @since 1.0.0
         */
        IndexOf(predicateFunc: (item: T) => boolean): number;

        /**
         * Filters a sequence of values based on a predicate.
         * @param predicateFunc A function to test each element for a condition.
         * @example items.Where((item) => { return item.Active === true; });
         * @returns An <c>Array<T></c> that contains elements from the input sequence that satisfy the condition.
         * @since 1.0.0
         */
        Where(predicateFunc: (item: T) => boolean): Array<T>;

        /**
         * Sorts the elements of a sequence in ascending order.
         * @param keySelector A function to extract a key from an element.
         * @example items.OrderBy((item) => item.name);
         * @returns An <c>Array<T></c> whose elements are sorted according to a key.
         * @since 1.0.0
         */
        OrderBy(keySelector: (item: T) => any): Array<T>;

        /**
         * Sorts the elements of a sequence in descending order.
         * @param keySelector A function to extract a key from an element.
         * @example items.OrderByDescending((item) => item.name);
         * @returns An <c>Array<T></c> whose elements are sorted descending to a key.
         * @since 1.0.0
         */
        OrderByDescending(keySelector: (item: T) => any): Array<T>;

        /**
         * Sorts the elements of a sequence in ascending order (first by a then by b then by c etc.).
         * @param keySelectors An array of functions to extract a key from an element.
         * @example items.OrderByMultiple([(item) => item.name, (item) => item.id]);
         * @returns An <c>Array<T></c> whose elements are sorted ascending to multiple keys.
         * @since 1.0.0
         */
        OrderByMultiple(keySelectors: Array<(item: T) => any>): Array<T>;

        /**
         * Sorts the elements of a sequence in descending order (first by a then by b then by c etc.).
         * @param keySelectors An array of functions to extract a key from an element.
         * @example items.OrderByMultipleDescending([(item) => item.name, (item) => item.id]);
         * @returns An <c>Array<T></c> whose elements are sorted descending to multiple keys.
         * @since 1.0.0
         */
        OrderByMultipleDescending(keySelectors: Array<(item: T) => any>): Array<T>;

        /**
         * Determines whether an array contains a particular element that satisfies the condition
         * @param predicateFunc A function to test each element for a condition.
         * @returns <c>true</c> if the Array contains the element, otherwise <c>false</c>
         * @since 1.1.0
         */
        Contains(predicateFunc: (item: T) => boolean): boolean;

        /**
         * Returns the number of elements that satisfies the condition
         * @param predicateFunc A function to test each element for a condition.
         * @returns The number of elements
         * @since 1.1.0
         */
        Count(predicateFunc: (item: T) => boolean): number;

        /**
         * Returns the last element of a the array, or the last element that satisfies the condition (by predicateFunc), or <c>defaultValue</c> if no element is found.
         * @param predicateFunc A optional function to test each element for a condition. If function is not specified, the last element is returend or <c>defaultValue</c>.
         * @param defaultValue A default value that will be returned if the element is not found. If this parameter is not specified, null is returned.
         * @returns <c>defaultValue</c> if no element is found, otherwise the last element last element of a the array, or the last element that satisfies the condition (by predicateFunc)
         * @since 1.1.0
         */
        LastOrDefault(predicateFunc?: (item: T) => boolean, defaultValue?: T|null): T|null;

        /**
         * Add one or more items at specified index
         * @param index The index at which to add the new item(s). If greater than the length of the array or negative, the item(s) are added at the end.
         * @param itemToAdd One or more elements to add to the array
         * @since 1.1.0
         */
        AddAt(index: number, ...itemToAdd): void;

         /**
         * Remove the item(s) at specified index
         * @param index The index at which to remove the item(s)
         * @param totalItemsToRemove Number of elements to be removed from the specified index. Default: 1
         * @since 1.1.0
         */
        RemoveAt(index: number, totalItemsToRemove?: number): void;
    }
}

if(!isset(Array.prototype.FirstOrDefault)) {
    Object.defineProperty(Array.prototype, 'FirstOrDefault', {
        value: function<T>(this: T[], predicateFunc?: (item: T) => boolean, defaultValue: T|null = null): T|null {
            const arr: T[] = this;

            if(isNullOrEmpty(arr)) {
                return defaultValue;
            }

            if(typeof predicateFunc !== "function") {
                return arr[0];
            }
        
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

if(!isset(Array.prototype.Contains)) {
    Object.defineProperty(Array.prototype, 'Contains', {
        value: function<T>(this: T[], predicateFunc: (item: T) => boolean): boolean {  
            const arr: T[] = this;     
            return isset(this.FirstOrDefault(predicateFunc, null));
        }
    });
}

if(!isset(Array.prototype.Count)) {
    Object.defineProperty(Array.prototype, 'Count', {
        value: function<T>(this: T[], predicateFunc: (item: T) => boolean): number {       
            const allItems = this.Where(predicateFunc);
            
            if(isNullOrEmpty(allItems)) {
                return 0;
            }

            return allItems.length
        }
    });
}

if(!isset(Array.prototype.LastOrDefault)) {
    Object.defineProperty(Array.prototype, 'LastOrDefault', {
        value: function<T>(this: T[], predicateFunc?: (item: T) => boolean, defaultValue: T|null = null): T|null {
            const arr: T[] = this;

            if(isNullOrEmpty(arr)) {
                return defaultValue;
            }

            if(typeof predicateFunc !== "function") {
                return arr[arr.length-1];
            }
        
            for (let i: number = arr.length-1; i >= 0; i--) {
                const item: any = arr[i];
                if (predicateFunc(item)) {
                    return item;
                }
            }
        
            return defaultValue;
        }
    });
}

if(!isset(Array.prototype.AddAt)) {
    Object.defineProperty(Array.prototype, 'AddAt', {
        value: function<T>(this: T[], index: number, ...itemsToAdd): void {
            this.splice(index, 0, ...itemsToAdd);
        }
    });
}

if(!isset(Array.prototype.RemoveAt)) {
    Object.defineProperty(Array.prototype, 'RemoveAt', {
        value: function<T>(this: T[], index: number, totalItemsToRemove: number = 1): void {
            this.splice(index, totalItemsToRemove);
        }
    });
}