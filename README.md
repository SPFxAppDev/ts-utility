# @spfxappdev/utility

![npm](https://img.shields.io/npm/v/@spfxappdev/utility) ![npm bundle size](https://img.shields.io/bundlephobia/min/@spfxappdev/utility) ![npm](https://img.shields.io/npm/dm/@spfxappdev/utility)

This package contains some useful extensions for `String` and `Array` and some more functions that need less lines of code and make the code more readable.

- [Functions](#functions)
  * [asyncFn](#asyncfn)
  * [cssClasses](#cssclasses)
  * [getDeepOrDefault](#getdeepordefault)
  * [getUrlParameter](#geturlparameter)
  * [isFunction](#isfunction)
  * [isNullOrEmpty](#isnullorempty)
  * [isset](#isset)
  * [issetDeep](#issetdeep)
  * [isValidEmail](#isvalidemail)
  * [promiseQueue](#promisequeue)
  * [randomString](#randomstring)
  * [replaceNonAlphanumeric](#replacenonalphanumeric)
  * [stripHTML](#striphtml)
  * [toBoolean](#toboolean)
- [String Extensions](#string-extensions)
  * [Contains](#contains)
  * [EndsWith](#endswith)
  * [Equals](#equals)
  * [IndexOf](#indexof)
  * [Insert](#insert)
  * [IsEmpty](#isempty)
  * [StartsWith](#startswith)
- [Array Extensions](#array-extensions)
  * [AddAt](#addat)
  * [Contains](#contains-1)
  * [Count](#count)
  * [FirstOrDefault](#firstordefault)
  * [IndexOf](#indexof-1)
  * [LastOrDefault](#lastordefault)
  * [OrderBy](#orderby)
  * [OrderByDescending](#orderbydescending)
  * [OrderByMultiple](#orderbymultiple)
  * [OrderByMultipleDescending](#orderbymultipledescending)
  * [RemoveAt](#removeat)
  * [Where](#where)

## Installation

`npm i @spfxappdev/utility`

## Demo

You can find some exmplaes/demo applications at [codesandbox.io](https://codesandbox.io/s/ts-utility-tzudsk) or [GitHub](https://github.com/SPFxAppDev/ts-utility/tree/master/examples/src)

## Functions

### Usage

1. import one of the functions in your project (in this example the function `isset` is imported)
 
```typescript
import { isset } from '@spfxappdev/utility';
```

### API

- [asyncFn](#asyncfn)
- [cssClasses](#cssclasses)
- [getDeepOrDefault](#getdeepordefault)
- [getUrlParameter](#geturlparameter)
- [isFunction](#isfunction)
- [isNullOrEmpty](#isnullorempty)
- [isset](#isset)
- [issetDeep](#issetdeep)
- [isValidEmail](#isvalidemail)
- [promiseQueue](#promisequeue)
- [randomString](#randomstring)
- [replaceNonAlphanumeric](#replacenonalphanumeric)
- [stripHTML](#striphtml)
- [toBoolean](#toboolean)

#### asyncFn 

![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/since-v1.1.0-green) 

A wrapper function to handle a await function and their results/errors.

##### Examples

Instead of using this:

```typescript
try {
    const result = await myAsyncFunction();
    console.log(result);
    //Do things with result
} 
catch (error) {
    console.error("An error occurred", error);
    throw "Whatever";
}
 
```

You can use the `asyncFn`-function like this

```typescript
import { asyncFn } from '@spfxappdev/utility';

const [result, error] = await asyncFn(myAsyncFunction);

if(error) {
    throw "Whatever";
}

console.log(result);
//Do things with result
```
___

#### cssClasses

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

A utility function for conditionally joining css class names together.

##### Examples

```typescript
import { cssClasses } from '@spfxappdev/utility';

cssClasses('spfx-app-dev', 'theme'); // => 'spfx-app-dev theme'
cssClasses('spfx-app-dev', { theme: false });  // => 'spfx-app-dev'
cssClasses({ 'spfx-app-dev': true });  // => 'spfx-app-dev'
cssClasses({ 'spfx-app-dev': false });  // => ''
cssClasses({ spfx-app-dev: true }, { theme: true }); // => 'spfx-app-dev theme'
cssClasses({ spfx-app-dev: true, theme: true });  // => 'spfx-app-dev theme'
cssClasses('spfx-app-dev', { theme: true, active: false }, 'item');  // => 'spfx-app-dev theme item'
cssClasses(null, false, 'spfx-app-dev', undefined, 0, 1, { theme: null }, '');  // => 'spfx-app-dev'
const arr = ['theme', { active: true, item: false }]; cssClasses('spfx-app-dev', arr);  // => 'spfx-app-dev theme active'
```
___

#### getDeepOrDefault

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Gets a nested property from an specific object or default, if not isset.

##### Examples

```typescript
import { getDeepOrDefault } from '@spfxappdev/utility';

//VARIABLES
const simpleArray: ISimpleItem[] = [
    { id: randomString(), name: "App", sequence: 2 },
    { id: randomString(), name: "SPFx", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 3 }
];

const myObj = {
    My: {
        nested: {
            property: "Hello from nested Property"
        }
    },
    items: simpleArray
};
//VARIABLES END

// try get myObj.My.nested.property
getDeepOrDefault(myObj, "My.nested.property"); //=> "Hello from nested Property"

//ARRAY
getDeepOrDefault(myObj, "items.2") //=> { id: "tA2en", name: "Dev", sequence: 3 }

//TypeSafe
const arr: ISimpleItem[] = getDeepOrDefault<ISimpleItem[]>(myObj, "items");
console.log(arr[0].name);

//Default value
getDeepOrDefault(myObj, "404", "this string is returend as default, because 404 does not exist in myObj")
```
___

#### getUrlParameter

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Get's the Value of a specific Url-Parameter

##### Examples

```typescript
import { getUrlParameter } from '@spfxappdev/utility';

getUrlParameter('myParam', 'https://spfx-app.dev?myParam=1'); // => '1'
getUrlParameter('myParam2', 'https://spfx-app.dev?myParam=1');  // => null
getUrlParameter('myParam2');  // => Using window.location.href as URL
```
___

#### isFunction

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Determines wheter the property is a `Function`.

##### Examples

```typescript
import { isFunction } from '@spfxappdev/utility';

const myObj = { a: { nestedA: { nestedNestedA: 'a' }}};
const myFunc = () => { return a};
isFunction(myObj); // => false
isFunction(myFunc); // => true
isFunction(undefined) // => false
```
___

#### isNullOrEmpty

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Determines if the provided property is `null` or empty (or whitespace if string-value).

##### Examples

```typescript
import { isNullOrEmpty } from '@spfxappdev/utility';

isNullOrEmpty("this is a string") // ==>  false
isNullOrEmpty(1) // ==>  false
isNullOrEmpty(() => { }) // ==>  true
isNullOrEmpty(null) // ==>  true
isNullOrEmpty(undefined) // ==>  true
isNullOrEmpty([]) // ==>  true
isNullOrEmpty([1,2]) // ==>  false
isNullOrEmpty({}) // ==>  false
isNullOrEmpty("") // ==>  true
isNullOrEmpty("     ") // ==>  true
```
___

#### isset 

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Determines if the provided property is set.

##### Examples

```typescript
import { isset } from '@spfxappdev/utility';

isset("this is a string") // ==>  true
isset(1) // ==>  true
isset(() => { }) // ==>  true
isset(null) // ==>  false
isset(undefined) // ==>  false
isset([]) // ==>  true
isset([1,2]) // ==>  true
isset({}) // ==>  true
isset("") // ==>  true
isset("     ") // ==>  true
```

___

#### issetDeep

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Determines if the provided property is set deep/nested

##### Examples

```typescript
import { issetDeep } from '@spfxappdev/utility';

const myObj = {
    My: {
        nested: {
            property: "Hello from nested Property"
        }
    },
    items: [1,2,3,4]
};

issetDeep(myObj, "My.nested.property"); // ==> true

issetDeep(myObj, "items.2"); // ==> true

issetDeep(myObj, "404"); // ==> false
```
___

#### isValidEmail

![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/since-v1.1.0-green)

Checks if the passed value is a valid email

##### Examples

```typescript
import { isValidEmail } from '@spfxappdev/utility';
isValidEmail('seryoga@spfx-app.dev'); // ==> true
isValidEmail('spfx-app.dev'); // ==> false
isValidEmail('my@mail.c'); // ==> false
isValidEmail('my@mail.12'); // ==> false
isValidEmail('my@mail.co'); // ==> true
```
___

#### promiseQueue

![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/since-v1.1.0-green)

Executes a list of Promise one after one (in a queu). An Error/reject will not stop the next promise call. 

##### Examples

```typescript
import { promiseQueue, PromiseQueue, toParameterlessPromiseQueueFunc } from '@spfxappdev/utility';
const promise1 = toParameterlessPromiseQueueFunc(this.dummyPromise, true, 10000);
const promise2 = this.parameterlessPromiseFunc;
const promise3 = toParameterlessPromiseQueueFunc(this.dummyPromise, false, 2000);
const promise4 = toParameterlessPromiseQueueFunc(this.dummyPromise, true, 600);

await promiseQueue([promise1, promise2, promise3, promise4], 0);

//OR (with callback and error-handling)

const promises: Array<PromiseQueue<any>> = [ 
    { promiseFunc: promise1, callback: onSuccessFunc, onError: onErrorFunc}, 
    { promiseFunc: promise2, callback: onSuccessFuncPromise, onError: onErrorFunc}, 
    { promiseFunc: promise3, callback: onSuccessFunc, onError: onErrorFuncPromise}, 
    { promiseFunc: promise4, callback: onSuccessFunc, onError: onErrorFunc} 
];

await promiseQueue(promises, 0)
```
___

#### randomString

![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/since-v1.1.0-green)

Generates a new and random string

##### Examples

```typescript
import { randomString } from '@spfxappdev/utility';
randomString(); // ==> tA2en
randomString(15); // ==> G4XBtQcgDSHWdQG
randomString(6, 'abcdef0123456789'); // ==> fe693c ==> random hex color
```
___
#### replaceNonAlphanumeric

![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/since-v1.1.0-green)

Replaces all non-alphanumeric characters (incl. underscores) with the passed value

##### Examples

```typescript
import { randomString } from '@spfxappdev/utility';
replaceNonAlphanumeric('This is a text: 1234567890ß!"§$%&/()=?+#____<---->'); // ==> Thisisatext1234567890____
replaceNonAlphanumeric('This is a text: öäü1234567890ß!"§$%&/()=?+#____<---->', '*') // ==> This*is*a*text*****1234567890**************____******
```
___
#### stripHTML

![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/since-v1.1.0-green)

Strips the HTML and returns only the text content

##### Examples

```typescript
import { stripHTML } from '@spfxappdev/utility';
stripHTML(`<div class='abc'>Hello <strong>spfxappdev</strong></div>)`) // ==> Hello spfxappdev
stripHTML('Hello spfxappdev'); // ==> Hello spfxappdev
```
___

#### toBoolean

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Converts a value to a `boolean`

##### Examples

```typescript
import { toBoolean } from '@spfxappdev/utility';
toBoolean(''); // => false
toBoolean('1'); // => true
toBoolean('42'); // => false
toBoolean(1); // => true
toBoolean(0); // => false
toBoolean(true); // => true
toBoolean(false); // => false
toBoolean(undefined) // => false
```



## String-Extensions

The String Extensions extend the String Prototype. So you can use the following methods directly on a `string` variable. 

```javascript
Note: The variable must not be undefined or null. Otherwise an exception is thrown (see example below).
```


```typescript
let undefinedString: string;
undefinedString.StartsWith("error"); //Throws an error, because the variable is not defined.
```

### Usage

1. import the extensions
 
```typescript
import '@spfxappdev/utility/lib/extensions/StringExtensions';
```

### API

- [Contains](#contains)
- [EndsWith](#endswith)
- [Equals](#equals)
- [IndexOf](#indexof)
- [Insert](#insert)
- [IsEmpty](#isempty)
- [StartsWith](#startswith)

#### Contains

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Returns a value indicating whether a specified substring occurs within this string.

##### Examples

```typescript
"Hello @spfxappdev/utility".Contains('@SPFxAppDev/Utility'); // ==>  true (ignore case)
"Hello @spfxappdev/utility".Contains('@SPFxAppDev/Utility', false); // ==>  false
"Hello @spfxappdev/utility".Contains('404'); // ==>  false
```

___
#### EndsWith
![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Determines whether the ending of a string instance matches a specified string.

##### Examples

```typescript
"Hello @spfxappdev/utility".EndsWith('@SPFxAppDev/Utility'); // ==>  true (ignore case)
"Hello @spfxappdev/utility".EndsWith('@SPFxAppDev/Utility', false); // ==>  false
"Hello @spfxappdev/utility".EndsWith('@spfxappdev'); // ==>  false
```
___
#### Equals
![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Determines whether two String objects have the same value.

##### Examples

```typescript
"Hello @spfxappdev/utility".Equals('HeLlO @SPFxAppDev/UTILITY'); // ==>  true (ignore case)
"Hello @spfxappdev/utility".Equals('HeLlO @SPFxAppDev/UTILITY', false); // ==>  false
"Hello @spfxappdev/utility".Equals('404'); // ==>  false
```
___
#### IndexOf
![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Reports the zero-based index of the first occurrence of a specified Unicode character or string within this instance. The method returns -1 if the character or string is not found in this instance.

##### Examples

```typescript
"Hello @spfxappdev/utility".IndexOf('@SPFxAppDev/Utility'); // ==>  6 (ignore case)
"Hello @spfxappdev/utility".IndexOf('@SPFxAppDev/Utility', false); // ==>  -1
"Hello @spfxappdev/utility".IndexOf('404'); // ==>  -1
```
___
#### Insert
![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Returns a new string in which a specified string is inserted at a specified index position in this instance.

##### Examples

```typescript
"Hello @spfxappdev/utility".Insert(5, " from"); // ==>  Hello from @spfxappdev/utility
"Hello @spfxappdev/utility".Insert(255, " insert to end"); // ==>  Hello @spfxappdev/utility insert to end
```
___
#### IsEmpty
![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Determines whether a String is empty or whitespace.

##### Examples

```typescript
"Hello @spfxappdev/utility".IsEmpty()); // ==>  false
"".IsEmpty(); // ==> true
"     ".IsEmpty(); // ==> true
```
___
#### StartsWith

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Determines whether the beginning of this string instance matches a specified string.

##### Examples

```typescript
"Hello @spfxappdev/utility".StartsWith('hello'); // ==>  true (ignore case)
"Hello @spfxappdev/utility".StartsWith('hello', false); // ==>  false
"Hello @spfxappdev/utility".StartsWith('@spfxappdev'); // ==>  false
```

## Array-Extensions

### Usage

1. import the extensions
 
```typescript
import '@spfxappdev/utility/lib/extensions/ArrayExtensions';
```

### API

- [AddAt](#addat)
- [Contains](#contains)
- [Count](#count)
- [FirstOrDefault](#firstordefault)
- [IndexOf](#indexof)
- [LastOrDefault](#lastordefault)
- [OrderBy](#orderby)
- [OrderByDescending](#orderbydescending)
- [OrderByMultiple](#orderbymultiple)
- [OrderByMultipleDescending](#orderbymultipledescending)
- [RemoveAt](#removeat)
- [Where](#where)

#### AddAt
![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/since-v1.1.0-green)

Add one or more items at specified index.

##### Examples

```typescript

const myArr: ISimpleItem[] = [
    { id: randomString(), name: "App", sequence: 2 },
    { id: randomString(), name: "SPFx", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 3 }
];


myArr.AddAt(0, { id: randomString(), name: "First Item", sequence: 0 });
myArr.AddAt(1, { id: randomString(), name: "Second Item", sequence: 1 });
myArr.AddAt(1000, { id: randomString(), name: "LAST Item", sequence: 10000 });
myArr.AddAt(-3, { id: randomString(), name: "LAST Item - 3", sequence: 10000 });

//Result:
myArr = [
{"id":"Vb9Lq","name":"First Item","sequence":0},
{"id":"aCrdT","name":"Second Item","sequence":1},
{"id":"bjdvY","name":"App","sequence":2},
{"id":"fb80g","name":"LAST Item - 3","sequence":10000},
{"id":"g4JQl","name":"SPFx","sequence":1},
{"id":"oYHgy","name":"Dev","sequence":3},
{"id":"XYcxD","name":"LAST Item","sequence":10000}
];

```
___
#### Contains
![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/since-v1.1.0-orange)

Determines whether an array contains a particular element that satisfies the condition

##### Examples

```typescript

const myArr: ISimpleItem[] = [
    { id: randomString(), name: "App", sequence: 2 },
    { id: randomString(), name: "SPFx", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 3 }
];


const containsSpfxItem: boolean = myArr.Contains(i => i.name.Equals("spfx"));

console.log(containsSpfxItem); //true

const contains404Item: boolean = myArr.Contains(i => i.name.Equals("404"));

console.log(contains404Item); //false

const multipleConditions: boolean = myArr.Contains(i => i.name.Equals("404") || i.name.Equals("spfx"));

console.log(multipleConditions); // true

const emptyArrayContains: boolean = [].Contains(i => (i as any).name.Equals("404") || (i as any).name.Equals("spfx"));

console.log(emptyArrayContains); //false

```
___
#### Count

![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/since-v1.1.0-green)

Determines whether an array contains a particular element that satisfies the condition

##### Examples

```typescript

const myArr: ISimpleItem[] = [
    { id: randomString(), name: "App", sequence: 2 },
    { id: randomString(), name: "SPFx", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 3 },
    { id: randomString(), name: "App", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 5 }
];


const totalAppItems: number = myArr.Count(i => i.name.Equals("app"));

console.log(totalAppItems); //==> 2


const total404Items: number = myArr.Count(i => i.name.Equals("404"));

console.log(total404Items); // ==> 0

const totalAppOrDevItems: number = myArr.Count(i => i.name.Equals("app") || i.name.Equals("dEv"));

console.log(totalAppOrDevItems); // ==> 5

const emptyArrayCount: number = [].Count(i => (i as any).name.Equals("404") || (i as any).name.Equals("spfx"));

console.log(emptyArrayCount); // ==> 0

```
___
#### FirstOrDefault
![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Returns the first element of a the array, or the first element that satisfies the condition (by `predicateFunc`), or `defaultValue` if no element is found.


##### Note: Since v1.1.0 the `predicateFunc` is optional. If not specified the first element (index == 0) will be returned or `defaultValue`

##### Examples

```typescript

const myArr: ISimpleItem[] = [
    { id: randomString(), name: "App", sequence: 2 },
    { id: randomString(), name: "SPFx", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 3 },
    { id: randomString(), name: "App", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 5 }
];


const spfxItem: ISimpleItem|null = myArr.FirstOrDefault(i => i.name.Equals("spfx"));

console.log(spfxItem); // ==> { id: "g4JQl", name: "SPFx", sequence: 1 }

const firstItem: ISimpleItem|null = myArr.FirstOrDefault();

console.log(firstItem); // ==> { id: "bjdvY", name: "App", sequence: 2 }

const defaultItem: ISimpleItem|null = myArr.FirstOrDefault(i => i.name.Equals("404"), { id: randomString(), name: "This is item is the default item, because the searched item was not found", sequence: 404 });

console.log(defaultItem); // ==> { id: "6xcPO", name: "This is item is the default item, because the searched item was not found", sequence: 404 }

const defaultNullItem: ISimpleItem|null = myArr.FirstOrDefault(i => i.name.Equals("404"));

console.log(defaultNullItem); // ==> null

```
___
#### IndexOf
![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Returns the first index of element of a sequence, or `-1` if no element is found.


##### Examples

```typescript

const myArr: ISimpleItem[] = [
    { id: randomString(), name: "App", sequence: 2 },
    { id: randomString(), name: "SPFx", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 3 },
    { id: randomString(), name: "App", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 5 }
];


const spfxItemIndex: number = myArr.IndexOf(i => i.name.Equals("spfx"));

console.log(spfxItemIndex); // ==> 1


const notFoundIndex: number = myArr.IndexOf(i => i.name.Equals("404"));

console.log(notFoundIndex); // ==> -1

```
___
#### LastOrDefault
![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/since-v1.1.0-green)

Returns the last element of a the array, or the last element that satisfies the condition (by `predicateFunc`), or `defaultValue` if no element is found.

##### Examples

```typescript

const myArr: ISimpleItem[] = [
    { id: randomString(), name: "App", sequence: 2 },
    { id: randomString(), name: "SPFx", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 3 },
    { id: randomString(), name: "SPFx", sequence: 4 },
    { id: randomString(), name: "SPFx", sequence: 5 },
    { id: randomString(), name: "SPFx", sequence: 6 },
    { id: randomString(), name: "Dev", sequence: 1000 }
];


const spfxItem: ISimpleItem|null = myArr.LastOrDefault(i => i.name.Equals("spfx"));

console.log(spfxItem); // ==> {id: 't9Rhm', name: 'SPFx', sequence: 6}

const lastItem: ISimpleItem|null = myArr.LastOrDefault();

console.log(lastItem); // ==> {id: 'Uqyvt', name: 'Dev', sequence: 1000}

const defaultItem: ISimpleItem|null = myArr.LastOrDefault(i => i.name.Equals("404"), { id: randomString(), name: "This is item is the default item, because the searched item was not found", sequence: 404 });

console.log(defaultItem); // ==> {id: 'L3g64', name: 'This is item is the default item, because the searched item was not found', sequence: 404}

const defaultNullItem: ISimpleItem|null = myArr.LastOrDefault(i => i.name.Equals("404"));

console.log(defaultNullItem); // ==> null

const emptyArrCheck: ISimpleItem|null = [].LastOrDefault(i => (i as any).name.Equals("404"));

console.log(emptyArrCheck); // ==> null

```
___
#### OrderBy 
![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Sorts the elements of a sequence in ascending order.

##### Examples

```typescript

const myArr: ISimpleItem[] = [
    { id: randomString(), name: "App", sequence: 2 },
    { id: randomString(), name: "SPFx", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 3 }
];


myArr.OrderBy(i => i.sequence);

console.log(myArr); // ==> [{id: 'g4JQl', name: 'SPFx', sequence: 1},{id: 'bjdvY', name: 'App', sequence: 2},{id: 'oYHgy', name: 'Dev', sequence: 3}]

myArr.OrderBy(i => i.name);

console.log(myArr); // ==> [{id: 'bjdvY', name: 'App', sequence: 2},,{id: 'oYHgy', name: 'Dev', sequence: 3},{id: 'g4JQl', name: 'SPFx', sequence: 1}]

```
___
#### OrderByDescending
![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Sorts the elements of a sequence in descending order.

##### Examples

```typescript

const myArr: ISimpleItem[] = [
    { id: randomString(), name: "App", sequence: 2 },
    { id: randomString(), name: "SPFx", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 3 }
];


myArr.OrderByDescending(i => i.sequence);

console.log(myArr); // ==> [{id: 'oYHgy', name: 'Dev', sequence: 3},{id: 'bjdvY', name: 'App', sequence: 2},{id: 'g4JQl', name: 'SPFx', sequence: 1}]

myArr.OrderByDescending(i => i.name);

console.log(myArr); // ==> [{id: 'g4JQl', name: 'SPFx', sequence: 1},{id: 'oYHgy', name: 'Dev', sequence: 3},{id: 'bjdvY', name: 'App', sequence: 2}]

```
___
#### OrderByMultiple
![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Sorts the elements of a sequence in ascending order (first by a then by b then by c etc.).

##### Examples

```typescript

const myArr: ISimpleItem[] = [
    { id: randomString(), name: "App", sequence: 2 },
    { id: randomString(), name: "SPFx", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 3 },
    { id: randomString(), name: "App", sequence: 1 }
];


myArr.OrderByMultiple([(item) => item.name, (item) => item.sequence]);

console.log(myArr); // ==> [{id: 'EceZ9', name: 'App', sequence: 1},{id: 'bjdvY', name: 'App', sequence: 2},{id: 'oYHgy', name: 'Dev', sequence: 3},{id: 'g4JQl', name: 'SPFx', sequence: 1}]
```
___
#### OrderByMultipleDescending
![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Sorts the elements of a sequence in descending order (first by a then by b then by c etc.)

##### Examples

```typescript

const myArr: ISimpleItem[] = [
    { id: randomString(), name: "App", sequence: 2 },
    { id: randomString(), name: "SPFx", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 3 },
    { id: randomString(), name: "App", sequence: 1 }
];


myArr.OrderByMultipleDescending([(item) => item.name, (item) => item.sequence]);

console.log(myArr); // ==> [{id: 'g4JQl', name: 'SPFx', sequence: 1},{id: 'oYHgy', name: 'Dev', sequence: 3},{id: 'bjdvY', name: 'App', sequence: 2},{id: 'Kp45S', name: 'App', sequence: 1}]
```
___
#### RemoveAt
![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/since-v1.1.0-green)

Remove the item(s) at specified index

##### Examples

```typescript

const myArr: ISimpleItem[] = [
    { id: randomString(), name: "First Item", sequence: 0 },
    { id: randomString(), name: "Second Item", sequence: 1 },
    { id: randomString(), name: "App", sequence: 2 },
    { id: randomString(), name: 'LAST Item - 3', sequence: 10000},
    { id: randomString(), name: "SPFx", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 3 },
    { id: randomString(), name: "App", sequence: 1 },
    { id: randomString(), name: "LAST Item", sequence: 10000 }
];


//Remove 2 items, starting at index 0
myArr.RemoveAt(0, 2);

console.log(myArr); // ==> [{id: 'bjdvY', name: 'App', sequence: 2},{id: 'feIpa', name: 'LAST Item - 3', sequence: 10000},{id: 'g4JQl', name: 'SPFx', sequence: 1},{id: 'oYHgy', name: 'Dev', sequence: 3},{id: '7yL7k', name: 'LAST Item', sequence: 10000}]

//remove the item at index 2
myArr.RemoveAt(2);

console.log(myArr); // ==> [{id: 'bjdvY', name: 'App', sequence: 2},{id: 'feIpa', name: 'LAST Item - 3', sequence: 10000},{id: 'oYHgy', name: 'Dev', sequence: 3},{id: '7yL7k', name: 'LAST Item', sequence: 10000}]

myArr.RemoveAt(-3);

console.log(myArr); // ==> [{id: 'bjdvY', name: 'App', sequence: 2},{id: 'oYHgy', name: 'Dev', sequence: 3},{id: '7yL7k', name: 'LAST Item', sequence: 10000}]
```
___
#### Where
![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/since-v1.0.0-orange)

Filters a sequence of values based on a predicate.

##### Examples

```typescript

const myArr: ISimpleItem[] = [
    { id: randomString(), name: "App", sequence: 2 },
    { id: randomString(), name: "SPFx", sequence: 1 },
    { id: randomString(), name: "Dev", sequence: 3 },
];


const allItemsWhereSequenceGt1: ISimpleItem[] = myArr.Where(i => i.sequence > 1);

console.log(allItemsWhereSequenceGt1); //==> [{ id: 'bjdvY', name: "App", sequence: 2 },{id: 'oYHgy', name: 'Dev', sequence: 3}]


const notFoundItems: ISimpleItem[] = myArr.Where(i => i.name.Equals("404"));

console.log(notFoundItems); // ==> []
```