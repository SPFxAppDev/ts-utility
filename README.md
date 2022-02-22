# @spfxappdev/utility

![npm](https://img.shields.io/npm/v/@spfxappdev/utility) ![Lines of code](https://img.shields.io/tokei/lines/github/SPFxAppDev/ts-utility) ![npm bundle size](https://img.shields.io/bundlephobia/min/@spfxappdev/utility) ![npm](https://img.shields.io/npm/dm/@spfxappdev/utility)

This package contains some useful extensions for `String` and `Array` and some more functions that need less lines of code and make the code more readable.

## Installation

`npm i @spfxappdev/utility`

## Functions

### Usage

1. import one of the functions in your project (in this example the function `isset` is imported)
 
```typescript
import { isset } from '@spfxappdev/utility';
```

### API

#### isset 

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/version-%3E%3D%201.0.0-orange)

Determines if the provided property is set.

##### Examples

```typescript
import { isset } from '@spfxappdev/utility';
const myObj = { a: { nestedA: { nestedNestedA: 'a' }}};
isset(myObj); // => true
isset(undefined); // => false
isset(null); // => false
```

___

#### issetDeep

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/version-%3E%3D%201.0.0-orange)

Determines if the provided property is set deep/nested

##### Examples

```typescript
import { issetDeep } from '@spfxappdev/utility';
const myObj = { a: { nestedA: { nestedNestedA: 'a' }}};
issetDeep(myObj, "a.nestedA.nestedNestedA"); // => true
issetDeep(myObj, "a.nestedA.nestedNestedB"); // => false
issetDeep(myObj, "a.nestedA"); // => true
```
___
#### toBoolean

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/version-%3E%3D%201.0.0-orange)

Converts a value to a `boolean`

##### Examples

```typescript
toBoolean(''); // => false
toBoolean('1'); // => true
toBoolean('42'); // => false
toBoolean(1); // => true
toBoolean(0); // => false
toBoolean(true); // => true
toBoolean(false); // => false
toBoolean(undefined) // => false
```
___
#### isNullOrEmpty

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/version-%3E%3D%201.0.0-orange)

Determines if the provided property is `null` or empty (or whitespace if string-value).

##### Examples

```typescript
const myEmptyString = ' ';
const myEmptyArr = [];
const myArr = [1,2,3];
isNullOrEmpty(myEmptyString); // => true
isNullOrEmpty(myEmptyArr); // => true
isNullOrEmpty(myArr); // => false
isNullOrEmpty(undefined) // => true
```
___
#### isFunction

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/version-%3E%3D%201.0.0-orange)

Determines wheter the property is a `Function`.

##### Examples

```typescript
const myObj = { a: { nestedA: { nestedNestedA: 'a' }}};
const myFunc = () => { return a};
isFunction(myObj); // => false
isFunction(myFunc); // => true
isFunction(undefined) // => false
```
___
#### getDeepOrDefault

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/version-%3E%3D%201.0.0-orange)

Gets a nested property from an specific object or default, if not isset.

##### Examples

```typescript
const myObj = { a: { nestedA: { nestedNestedA: 'a' }}};
getDeepOrDefault(myObj, "a.nestedA.nestedNestedA"); // => 'a'
getDeepOrDefault(myObj, "a.nestedA.nestedNestedB"); // => null
getDeepOrDefault(myObj, "a.nestedA.nestedNestedB", 'b'); // => 'b'
```
___
#### getUrlParameter

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/version-%3E%3D%201.0.0-orange)

Get's the Value of a specific Url-Parameter

##### Examples

```typescript
 getUrlParameter('myParam', 'https://spfx-app.dev?myParam=1'); // => '1'
 getUrlParameter('myParam2', 'https://spfx-app.dev?myParam=1');  // => null
 getUrlParameter('myParam2');  // => Using window.location.href as URL
```
___
#### cssClasses

![since @spfxappdev/utility@1.0.0](https://img.shields.io/badge/version-%3E%3D%201.0.0-orange)

A utility function for conditionally joining css class names together.

##### Examples

```typescript
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
#### asyncFn

![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/version-%3E%3D%201.1.0-green)

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
const [result, error] = await asyncFn(myAsyncFunction);

if(error) {
    throw "Whatever";
}

console.log(result);
//Do things with result
```
___
#### promiseQueue

![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/version-%3E%3D%201.1.0-green)

Executes a list of Promise one after one (in a queu). An Error/reject will not stop the next promise call. 

##### Examples

```typescript
const allPromises: Array<Promise<any>> = [];
allPromises.push(myPromiseFunction1);
allPromises.push(myPromiseFunction2);
allPromises.push(myPromiseFunction3);
allPromises.push(myPromiseFunction4);

await promiseQueue(allPromises);
 
```
___
#### isValidEmail

![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/version-%3E%3D%201.1.0-green)

Checks if the passed value is a valid email

##### Examples

```typescript
isValidEmail("seryoga@spfx-app.dev"); // ==> true
isValidEmail("seryoga"); // ==> false
isValidEmail("@spfx-app.dev"); // ==> false
isValidEmail("mail@spfx-app.dev"); // ==> true
isValidEmail("mail@spfx-app.d"); // ==> false
```
___
#### randomString

![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/version-%3E%3D%201.1.0-green)

Generates a new and random string

##### Examples

```typescript
randomString(); // ==> aZ23j
randomString(10); // ==> aZ23jHqD0Z
randomString(10, 'AJH123'); // ==> A32HHJ11H2
```
___
#### replaceNonAlphanumeric

![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/version-%3E%3D%201.1.0-green)

Replaces all non-alphanumeric characters (incl. underscores) with the passed value

##### Examples

```typescript
replaceNonAlphanumeric('Ä-JH_$§-123'); // ==> JH_123
replaceNonAlphanumeric('Ä-JH_$§-123', '_'); // ==> __JH____123
```
___
#### stripHTML

![since @spfxappdev/utility@1.1.0](https://img.shields.io/badge/version-%3E%3D%201.1.0-green)

Strips the HTML and returns only the text content

##### Syntax

```typescript
var text = stripHTML(htmlValue);
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `htmlValue` | `string` | **Required**. The HTML content from which to return the text |

##### Examples

```typescript
replaceNonAlphanumeric('Ä-JH_$§-123'); // ==> JH_123
replaceNonAlphanumeric('Ä-JH_$§-123', '_'); // ==> __JH____123
```



## String-Extensions

### Usage

1. import the extensions
 
```typescript
import '@spfxappdev/utility/lib/extensions/StringExtensions';
```

### API

```typescript
const ignoreCase: boolean = true;
const myString: string = "HeLLo SPFxAppDev";
const searchTerm: string = "Hello";
const startIndex: number = 5;
const valueToInsert: string = ' World and';
const value = 'hello spfxappdev';
myString.StartsWith(searchTerm, ignoreCase); // true
myString.EndsWith(searchTerm, ignoreCase); // false
myString.Contains(searchTerm, ignoreCase); // true
myString.IndexOf(searchTerm, ignoreCase); // 0
myString.Insert(startIndex, valueToInsert); // ==> HeLLo World and SPFxAppDev
myString.Equals(value, ignoreCase); // true
myString.IsEmpty(); // false
```

##### Examples

```typescript
const myString: string = "Welcome SPFx-app.dev";
myString.StartsWith("wElcOmE", true); // returns true
myString.StartsWith("wElcOmE", false); // returns false, because the case is not ignored
" ".IsEmpty() // returns true

let undefinedString: string;
undefinedString.StartsWith("error"); //Throws an error, because the variable is not defined.
const myString: string = "Welcome SPFx-app.dev";
myString.StartsWith("wElcOmE", true); // returns true
myString.StartsWith("wElcOmE", false); // returns false, because the case is not ignored
" ".IsEmpty() // returns true

let undefinedString: string;
undefinedString.StartsWith("error"); //Throws an error, because the variable is not defined.
```


## Array-Extensions

### Usage

1. import the extensions
 
```typescript
import '@spfxappdev/utility/lib/extensions/ArrayExtensions';
```

### API

