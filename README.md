# @spfxappdev/utility

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

Determines if the provided property is set.

##### Examples

```typescript
const myObj = { a: { nestedA: { nestedNestedA: 'a' }}};
isset(myObj); // => true
isset(undefined); // => false
isset(null); // => false
```

#### issetDeep

Determines if the provided property is set deep/nested

##### Examples

```typescript
const myObj = { a: { nestedA: { nestedNestedA: 'a' }}};
issetDeep(myObj, "a.nestedA.nestedNestedA"); // => true
issetDeep(myObj, "a.nestedA.nestedNestedB"); // => false
issetDeep(myObj, "a.nestedA"); // => true
```

#### toBoolean

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

#### isNullOrEmpty

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

#### isFunction

Determines wheter the property is a `Function`.

##### Examples

```typescript
const myObj = { a: { nestedA: { nestedNestedA: 'a' }}};
const myFunc = () => { return a};
isFunction(myObj); // => false
isFunction(myFunc); // => true
isFunction(undefined) // => false
```

#### getDeepOrDefault

Gets a nested property from an specific object or default, if not isset.

##### Examples

```typescript
const myObj = { a: { nestedA: { nestedNestedA: 'a' }}};
getDeepOrDefault(myObj, "a.nestedA.nestedNestedA"); // => 'a'
getDeepOrDefault(myObj, "a.nestedA.nestedNestedB"); // => null
getDeepOrDefault(myObj, "a.nestedA.nestedNestedB", 'b'); // => 'b'
```

#### getUrlParameter

Get's the Value of a specific Url-Parameter

##### Examples

```typescript
 getUrlParameter('myParam', 'https://spfx-app.dev?myParam=1'); // => '1'
 getUrlParameter('myParam2', 'https://spfx-app.dev?myParam=1');  // => null
 getUrlParameter('myParam2');  // => Using window.location.href as URL
```

#### cssClasses

A utility function for conditionally joining classNames together.

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

