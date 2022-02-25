// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../src/functions/arrayFrom.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arrayFrom;

/**
 * this functions calls Array.from() or make the same logic if not Exists.
 * The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
 * @param arrLike An array-like or iterable object to convert to an array.
 * @param mapFunc (optional) Map function to call on every element of the array.
 * @param thisArgs (optional) Value to use as this when executing mapFn.
 * @since 1.0.0
 */

/* tslint:disable */
function arrayFrom(arrLike, mapFunc, thisArgs) {
  if (!Array["from"]) {
    Array["from"] = function () {
      var toStr = Object.prototype.toString;

      var isCallable = function isCallable(fn) {
        return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
      };

      var toInteger = function toInteger(value) {
        var numberVal = Number(value);

        if (isNaN(numberVal)) {
          return 0;
        }

        if (numberVal === 0 || !isFinite(numberVal)) {
          return numberVal;
        }

        return (numberVal > 0 ? 1 : -1) * Math.floor(Math.abs(numberVal));
      };

      var maxSafeInteger = Math.pow(2, 53) - 1;

      var toLength = function toLength(value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      };

      return function from(arrayLike) {
        var C = this;
        var items = Object(arrayLike);

        if (arrayLike == null) {
          throw new TypeError('Array.from requires an array-like object - not null or undefined');
        }

        var mapFn;
        var args = arguments;

        if (args.length > 1) {
          mapFn = args[1];
        }

        var T;

        if (typeof mapFn !== 'undefined') {
          if (!isCallable(mapFn)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
          }

          if (args.length > 2) {
            T = args[2];
          }
        }

        var len = toLength(items.length);
        var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

        var k = 0; // 17. Repeat, while k < len… (also steps a - h)

        var kValue;

        while (k < len) {
          kValue = items[k];

          if (mapFn) {
            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
          } else {
            A[k] = kValue;
          }

          k += 1;
        } // 18. Let putStatus be Put(A, "length", len, true).


        A.length = len; // 20. Return A.

        return A;
      };
    };
  }

  return Array["from"](arrLike, mapFunc, thisArgs);
}
},{}],"../../src/functions/isset.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isset;

/**
 * Determines if the provided Property is set.
 * @param {any} property The Property to checked.
 * @returns {boolean} If the Property is set <c>true</c> otherwise <c>false</c>.
 * @since 1.0.0
 */
function isset(property) {
  return typeof property !== 'undefined' && property != null;
}
},{}],"../../src/functions/isNullOrEmpty.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNullOrEmpty;

var _isset = _interopRequireDefault(require("./isset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Determines if the provided Property is Null or Empty (or whitespace if string-value).
 * @param {any} property The Property to checked.
 * @returns {boolean} If the Property is Null or Empty or has
 * not "length" as property <c>true</c> otherwise <c>false</c>.
 * @since 1.0.0
 */
function isNullOrEmpty(property) {
  if (!(0, _isset.default)(property)) {
    return true;
  }

  if (typeof property === 'string') {
    return property.trim().length < 1;
  }

  if (!property.hasOwnProperty('length')) {
    return false;
  }

  return property.length < 1;
}
},{"./isset":"../../src/functions/isset.ts"}],"../../src/functions/cssClasses.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cssClasses;

var _isset = _interopRequireDefault(require("./isset"));

var _isNullOrEmpty = _interopRequireDefault(require("./isNullOrEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * A utility function for conditionally joining css class names together.
 * @example cssClasses('spfx-app-dev', 'theme'); // => 'spfx-app-dev theme'
 * @example cssClasses('spfx-app-dev', { theme: false });  // => 'spfx-app-dev'
 * @example cssClasses({ 'spfx-app-dev': true });  // => 'spfx-app-dev'
 * @example cssClasses({ 'spfx-app-dev': false });  // => ''
 * @example cssClasses({ spfx-app-dev: true }, { theme: true }); // => 'spfx-app-dev theme'
 * @example cssClasses({ spfx-app-dev: true, theme: true });  // => 'spfx-app-dev theme'
 * @example cssClasses('spfx-app-dev', { theme: true, active: false }, 'item');  // => 'spfx-app-dev theme item'
 * @example cssClasses(null, false, 'spfx-app-dev', undefined, 0, 1, { theme: null }, '');  // => 'spfx-app-dev'
 * @example const arr = ['theme', { active: true, item: false }]; cssClasses('spfx-app-dev', arr);  // => 'spfx-app-dev theme active'
 * @since 1.0.0
 */
function cssClasses() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var classes = [];
  var self = cssClasses;

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];

    if (!(0, _isset.default)(arg)) {
      continue;
    }

    var argType = _typeof(arg);

    if (argType === 'string') {
      classes.push(arg);
      continue;
    }

    if (Array.isArray(arg) && arg.length > 0) {
      var classNamesFromArray = self.apply(null, arg);

      if ((0, _isset.default)(classNamesFromArray) && !(0, _isNullOrEmpty.default)(classNamesFromArray)) {
        classes.push(classNamesFromArray);
      }

      continue;
    }

    if (argType === 'object') {
      if (arg.toString !== Object.prototype.toString) {
        classes.push(arg.toString());
        continue;
      }

      for (var className in arg) {
        if (arg.hasOwnProperty(className) && arg[className]) {
          classes.push(className);
        }
      }
    }
  }

  return classes.join(' ');
}
},{"./isset":"../../src/functions/isset.ts","./isNullOrEmpty":"../../src/functions/isNullOrEmpty.ts"}],"../../src/functions/extend.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extend;

var _arrayFrom = _interopRequireDefault(require("./arrayFrom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

/**
 * Deep merge two objects.
 * @param target An object that will receive the new properties if additional objects are passed in.
 * @param sources An object containing additional properties to merge in.
 * @param inCaseOfArrayUseSourceObject if true, then the array from source object will
 * be use if target-value and source-value are arrays. Otherwise both arrays will be merged
 * @since 1.0.0
 */
function extend(target, source, inCaseOfArrayUseSourceObject) {
  if (inCaseOfArrayUseSourceObject === void 0) {
    inCaseOfArrayUseSourceObject = true;
  }

  if (Array.isArray(target) && Array.isArray(source)) {
    if (inCaseOfArrayUseSourceObject) {
      return source;
    }

    return (0, _arrayFrom.default)(new Set(target.concat(source)));
  } // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties


  for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
    var key = _a[_i];

    if (Array.isArray(source[key])) {
      var targetValue = target[key] || [];
      source[key] = extend(targetValue, source[key], inCaseOfArrayUseSourceObject);
    } else if (source[key] instanceof Object) {
      var targetValue = target[key] || {};
      source[key] = extend(targetValue, source[key], inCaseOfArrayUseSourceObject);
    }
  } // Join `target` and modified `source`


  target = target || {};

  var tempTarget = __assign(__assign({}, target), source);

  return tempTarget;
}
},{"./arrayFrom":"../../src/functions/arrayFrom.ts"}],"../../src/functions/getDeepOrDefault.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDeepOrDefault;

var _isset = _interopRequireDefault(require("./isset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets an nested property from an specific object or default, if not isset.
 * @param {any} objectToCheck The Property to checked.
 * @param {string} keyNameSpace The Key-Namespace of the Property (for example: "My.Nested.Property").
 * @param {any} defaultValue The defaultValue if property not exist.
 * @returns {any} If the Property is set, than the requested property otherwise defaultValue.
 * @since 1.0.0
 */
function getDeepOrDefault(objectToCheck, keyNameSpace, defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = null;
  }

  if (!(0, _isset.default)(objectToCheck)) {
    return defaultValue;
  }

  var namespaceKeys = keyNameSpace.split('.');
  var currentObjectPath = objectToCheck;

  for (var i = 0; i < namespaceKeys.length; i++) {
    var currentKey = namespaceKeys[i];

    if (!(0, _isset.default)(currentObjectPath[currentKey])) {
      return defaultValue;
    }

    currentObjectPath = currentObjectPath[currentKey];
  }

  return currentObjectPath;
}
},{"./isset":"../../src/functions/isset.ts"}],"../../src/functions/getUrlParameter.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUrlParameter;

var _isNullOrEmpty = _interopRequireDefault(require("./isNullOrEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get's the Value of a specific Url-Parameter.
 * @param {string} parameterName The Name of the searched Parameter.
 * @param {string} url The Url which the Parameter-Value is read from (if not set the current Url is used).
 * @returns {string|null} If the Parameter exists on the Url the Value is returned as a string.
 * @since 1.0.0
 */
function getUrlParameter(parameterName, url) {
  if (url === void 0) {
    url = null;
  }

  if ((0, _isNullOrEmpty.default)(url)) {
    url = window.location.href;
  }

  url = url.toLowerCase();
  var name = parameterName.toLowerCase();
  name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
  var regexS = '[\\?&]' + name + '=([^&#]*)';
  var regex = new RegExp(regexS);
  var results = regex.exec(url);

  if (results == null) {
    return null;
  }

  return results[1];
}
},{"./isNullOrEmpty":"../../src/functions/isNullOrEmpty.ts"}],"../../src/functions/isFunction.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFunction;

var _isset = _interopRequireDefault(require("./isset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Determines wheter the Property is a Function.
 * @param {any} property The Property to be determined.
 * @returns {boolean} Wheter the Property is a Function.
 * @since 1.0.0
 */
function isFunction(property) {
  return (0, _isset.default)(property) && typeof property === 'function';
}
},{"./isset":"../../src/functions/isset.ts"}],"../../src/functions/issetDeep.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = issetDeep;

var _isset = _interopRequireDefault(require("./isset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Determines if the provided Property is set deep/nested.
 * @param {any} objectToCheck The Property to checked.
 * @param {string} keyNameSpace The Key-Namespace of the Property (for example: "My.Nested.Property").
 * @returns {boolean} If the Property is set <c>true</c> otherwise <c>false</c>.
 * @since 1.0.0
 */
function issetDeep(objectToCheck, keyNameSpace) {
  if (!(0, _isset.default)(objectToCheck)) {
    return false;
  }

  var namespaceKeys = keyNameSpace.split('.');
  var currentObjectPath = objectToCheck;

  for (var i = 0; i < namespaceKeys.length; i++) {
    var currentKey = namespaceKeys[i];

    if (!(0, _isset.default)(currentObjectPath)) {
      return false;
    }

    currentObjectPath = currentObjectPath[currentKey];
  }

  return (0, _isset.default)(currentObjectPath);
}
},{"./isset":"../../src/functions/isset.ts"}],"../../src/functions/toBoolean.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _isset = _interopRequireDefault(require("./isset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a value to a Boolean.
 * @param {any} value The Value to be converted to a Boolean. Valid values are: true, false, 'true' (case insensitive), 'false' (case insensitive), 1, 0, '1', '0'
 * @returns {boolean} If the Value is convertable to a Boolean it
 * is returned as a Boolean otherwise <c>false</c> is returned.
 * @since 1.0.0
 */
function toBoolean(value) {
  if (!(0, _isset.default)(value)) {
    return false;
  }

  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'string') {
    value = value.toLowerCase();
  }

  if (value !== 'false' && value !== 'true' && value !== '0' && value !== '1' && value !== 0 && value !== 1) {
    return false;
  }

  return value === 'false' || value === '0' || value === 0 ? false : true;
}
},{"./isset":"../../src/functions/isset.ts"}],"../../src/functions/asyncFn.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = asyncFn;

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
/**
 * A wrapper function to handle an await function and their results/errors
 *
 * @template TResult Type of expected result
 * @template TError Type of expected error
 * @param {Promise<TResult>} The asynchronous function to wait for
 * @return {*}  {Promise<AsyncResult<TResult, TError>>}
 * @since 1.1.0
 */


function asyncFn(promiseFn) {
  return __awaiter(this, void 0, Promise, function () {
    var r, e_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          return [4
          /*yield*/
          , promiseFn];

        case 1:
          r = _a.sent();
          return [2
          /*return*/
          , [r, null]];

        case 2:
          e_1 = _a.sent();
          return [2
          /*return*/
          , [null, e_1]];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}
},{}],"../../src/functions/promiseQueue.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toParameterlessPromiseQueueFunc = toParameterlessPromiseQueueFunc;
exports.default = promiseQueue;

var _2 = require(".");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

function toParameterlessPromiseQueueFunc(promiseFunc) {
  var funcParams = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    funcParams[_i - 1] = arguments[_i];
  }

  var wrapper = function wrapper() {
    return promiseFunc.apply(void 0, funcParams);
  };

  return wrapper;
}
/**
 *
 * Executes a list of Promise one after one (in a queu). An Error/reject will not stop the next promise call.
 * @param {(Array<Promise<any>>|Array<PromiseQueue<any>>)} promiseArray The array of Promises that will be executed. Use Array<PromiseQueue<any>> to handle callback or errors
 * @param {number} [delayBetweenCalls=500] A delay time (in ms) determines a period of time between each execution
 * @return {*}  {Promise<void>}
 * @since 1.1.0
 */


function promiseQueue(promiseArray, delayBetweenCalls) {
  if (delayBetweenCalls === void 0) {
    delayBetweenCalls = 500;
  }

  return __awaiter(this, void 0, Promise, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , promiseQueueExecutor(promiseArray, 0, delayBetweenCalls)];

        case 1:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
}

var promiseQueueExecutor = function promiseQueueExecutor(promiseArray, index, delayBetweenCalls) {
  return __awaiter(void 0, void 0, Promise, function () {
    return __generator(this, function (_a) {
      return [2
      /*return*/
      , new Promise(function (resolve, reject) {
        var currentPromise;
        var callbackFunc = undefined;
        var errorFunc = undefined;

        if ((0, _2.isFunction)(promiseArray[index])) {
          currentPromise = promiseArray[index];
        } else if ((0, _2.isFunction)(promiseArray[index].promiseFunc)) {
          var promiseQueue_1 = promiseArray[index];
          currentPromise = promiseQueue_1.promiseFunc;
          callbackFunc = (0, _2.isFunction)(promiseQueue_1.callback) ? promiseQueue_1.callback : callbackFunc;
          errorFunc = (0, _2.isFunction)(promiseQueue_1.onError) ? promiseQueue_1.onError : errorFunc;
        } // if(!isset(currentPromise)) {
        //     if(index + 1 >= promiseArray.length) {
        //         return resolve();
        //     }
        //     setTimeout(async () => {
        //         await promiseQueueExecutor(promiseArray, index+1, delayBetweenCalls);
        //         return resolve();
        //     }, delayBetweenCalls);
        // }


        currentPromise().then(function (promiseResult) {
          return __awaiter(void 0, void 0, void 0, function () {
            var callbackResult, e_1;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!(0, _2.isFunction)(callbackFunc)) return [3
                  /*break*/
                  , 4];
                  callbackResult = callbackFunc(promiseResult, index);
                  if (!(callbackResult instanceof Promise)) return [3
                  /*break*/
                  , 4];
                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 3,, 4]);

                  return [4
                  /*yield*/
                  , callbackResult];

                case 2:
                  _a.sent();

                  return [3
                  /*break*/
                  , 4];

                case 3:
                  e_1 = _a.sent();
                  return [3
                  /*break*/
                  , 4];

                case 4:
                  if (index + 1 >= promiseArray.length) {
                    return [2
                    /*return*/
                    , resolve()];
                  }

                  setTimeout(function () {
                    return __awaiter(void 0, void 0, void 0, function () {
                      return __generator(this, function (_a) {
                        switch (_a.label) {
                          case 0:
                            return [4
                            /*yield*/
                            , promiseQueueExecutor(promiseArray, index + 1, delayBetweenCalls)];

                          case 1:
                            _a.sent();

                            return [2
                            /*return*/
                            , resolve()];
                        }
                      });
                    });
                  }, delayBetweenCalls);
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }).catch(function (error) {
          return __awaiter(void 0, void 0, void 0, function () {
            var errorResult, e_2;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!(0, _2.isFunction)(errorFunc)) return [3
                  /*break*/
                  , 4];
                  errorResult = errorFunc(error, index);
                  if (!(errorResult instanceof Promise)) return [3
                  /*break*/
                  , 4];
                  _a.label = 1;

                case 1:
                  _a.trys.push([1, 3,, 4]);

                  return [4
                  /*yield*/
                  , errorResult];

                case 2:
                  _a.sent();

                  return [3
                  /*break*/
                  , 4];

                case 3:
                  e_2 = _a.sent();
                  return [3
                  /*break*/
                  , 4];

                case 4:
                  if (index + 1 >= promiseArray.length) {
                    return [2
                    /*return*/
                    , resolve()];
                  }

                  return [4
                  /*yield*/
                  , promiseQueueExecutor(promiseArray, index + 1, delayBetweenCalls)];

                case 5:
                  _a.sent();

                  return [2
                  /*return*/
                  , resolve()];
              }
            });
          });
        });
      })];
    });
  });
};
},{".":"../../src/functions/index.ts"}],"../../src/functions/isValidEmail.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidEmail;

var _isNullOrEmpty = _interopRequireDefault(require("./isNullOrEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if the passed value is a valid email
 *
 * @param {string} email the value to check
 * @return {boolean} If the passed value is a valid email <c>true</c> otherwise <c>false</c>
 * @example isValidEmail('seryoga@spfx-app.dev') // ==> returns true
 * @example isValidEmail('spfx-app.dev') // ==> returns false
 * @since 1.1.0
 */
function isValidEmail(email) {
  if ((0, _isNullOrEmpty.default)(email)) {
    return false;
  }

  if (typeof email !== "string") {
    return false;
  }

  return !(0, _isNullOrEmpty.default)(email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
}
},{"./isNullOrEmpty":"../../src/functions/isNullOrEmpty.ts"}],"../../src/functions/randomString.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = randomString;

/**
 * Generates a new and random string
 * @param {number} [randomStringLength=5] The length of the new created string. Defaultvalue: 5
 * @param {string} [characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'] The characters, that will be used for the random string. Defaultvalues: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
 * @return {*}  {string} Returns a new and random string with the length of randomStringLength and random characters that is passed in characters parameter
 * @since 1.1.0
 */
function randomString(randomStringLength, characters) {
  if (randomStringLength === void 0) {
    randomStringLength = 5;
  }

  if (characters === void 0) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  }

  var result = '';
  var charactersLength = characters.length;

  for (var i = 0; i < randomStringLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
},{}],"../../src/functions/replaceNonAlphanumeric.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = replaceNonAlphanumeric;

var _isNullOrEmpty = _interopRequireDefault(require("./isNullOrEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Replaces all non-alphanumeric characters (incl. underscores) with the passed value
 * @param {string} value The value to replace all non-alphanumeric and non-underscore characters
 * @param {string} replaceValue A string containing the text to replace for non-alphanumeric and non-underscore characters. Default: ''
 * @return {string} A new string value without non-alphanumeric and non-underrscore characters.
 * @since 1.1.0
 */
function replaceNonAlphanumeric(value, replaceValue) {
  if (replaceValue === void 0) {
    replaceValue = '';
  }

  if ((0, _isNullOrEmpty.default)(value)) {
    return value;
  }

  if (typeof value !== "string") {
    return value;
  }

  return value.replace(/[^\w]/gi, replaceValue);
}
},{"./isNullOrEmpty":"../../src/functions/isNullOrEmpty.ts"}],"../../src/functions/stripHTML.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripHtml;

var _isNullOrEmpty = _interopRequireDefault(require("./isNullOrEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Strips the HTML and returns only the text content
 * @param {string} htmlValue The HTML content from which to return the text
 * @return {string} the text content of passed html
 * @since 1.1.0
 */
function stripHtml(htmlValue) {
  if ((0, _isNullOrEmpty.default)(htmlValue)) {
    return '';
  }

  return new DOMParser().parseFromString(htmlValue, 'text/html').body.textContent;
}
},{"./isNullOrEmpty":"../../src/functions/isNullOrEmpty.ts"}],"../../src/functions/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "arrayFrom", {
  enumerable: true,
  get: function () {
    return _arrayFrom.default;
  }
});
Object.defineProperty(exports, "cssClasses", {
  enumerable: true,
  get: function () {
    return _cssClasses.default;
  }
});
Object.defineProperty(exports, "extend", {
  enumerable: true,
  get: function () {
    return _extend.default;
  }
});
Object.defineProperty(exports, "getDeepOrDefault", {
  enumerable: true,
  get: function () {
    return _getDeepOrDefault.default;
  }
});
Object.defineProperty(exports, "getUrlParameter", {
  enumerable: true,
  get: function () {
    return _getUrlParameter.default;
  }
});
Object.defineProperty(exports, "isFunction", {
  enumerable: true,
  get: function () {
    return _isFunction.default;
  }
});
Object.defineProperty(exports, "isNullOrEmpty", {
  enumerable: true,
  get: function () {
    return _isNullOrEmpty.default;
  }
});
Object.defineProperty(exports, "isset", {
  enumerable: true,
  get: function () {
    return _isset.default;
  }
});
Object.defineProperty(exports, "issetDeep", {
  enumerable: true,
  get: function () {
    return _issetDeep.default;
  }
});
Object.defineProperty(exports, "toBoolean", {
  enumerable: true,
  get: function () {
    return _toBoolean.default;
  }
});
Object.defineProperty(exports, "asyncFn", {
  enumerable: true,
  get: function () {
    return _asyncFn.default;
  }
});
Object.defineProperty(exports, "promiseQueue", {
  enumerable: true,
  get: function () {
    return _promiseQueue.default;
  }
});
Object.defineProperty(exports, "PromiseQueue", {
  enumerable: true,
  get: function () {
    return _promiseQueue.PromiseQueue;
  }
});
Object.defineProperty(exports, "toParameterlessPromiseQueueFunc", {
  enumerable: true,
  get: function () {
    return _promiseQueue.toParameterlessPromiseQueueFunc;
  }
});
Object.defineProperty(exports, "isValidEmail", {
  enumerable: true,
  get: function () {
    return _isValidEmail.default;
  }
});
Object.defineProperty(exports, "randomString", {
  enumerable: true,
  get: function () {
    return _randomString.default;
  }
});
Object.defineProperty(exports, "replaceNonAlphanumeric", {
  enumerable: true,
  get: function () {
    return _replaceNonAlphanumeric.default;
  }
});
Object.defineProperty(exports, "stripHTML", {
  enumerable: true,
  get: function () {
    return _stripHTML.default;
  }
});

var _arrayFrom = _interopRequireDefault(require("./arrayFrom"));

var _cssClasses = _interopRequireDefault(require("./cssClasses"));

var _extend = _interopRequireDefault(require("./extend"));

var _getDeepOrDefault = _interopRequireDefault(require("./getDeepOrDefault"));

var _getUrlParameter = _interopRequireDefault(require("./getUrlParameter"));

var _isFunction = _interopRequireDefault(require("./isFunction"));

var _isNullOrEmpty = _interopRequireDefault(require("./isNullOrEmpty"));

var _isset = _interopRequireDefault(require("./isset"));

var _issetDeep = _interopRequireDefault(require("./issetDeep"));

var _toBoolean = _interopRequireDefault(require("./toBoolean"));

var _asyncFn = _interopRequireDefault(require("./asyncFn"));

var _promiseQueue = _interopRequireWildcard(require("./promiseQueue"));

var _isValidEmail = _interopRequireDefault(require("./isValidEmail"));

var _randomString = _interopRequireDefault(require("./randomString"));

var _replaceNonAlphanumeric = _interopRequireDefault(require("./replaceNonAlphanumeric"));

var _stripHTML = _interopRequireDefault(require("./stripHTML"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./arrayFrom":"../../src/functions/arrayFrom.ts","./cssClasses":"../../src/functions/cssClasses.ts","./extend":"../../src/functions/extend.ts","./getDeepOrDefault":"../../src/functions/getDeepOrDefault.ts","./getUrlParameter":"../../src/functions/getUrlParameter.ts","./isFunction":"../../src/functions/isFunction.ts","./isNullOrEmpty":"../../src/functions/isNullOrEmpty.ts","./isset":"../../src/functions/isset.ts","./issetDeep":"../../src/functions/issetDeep.ts","./toBoolean":"../../src/functions/toBoolean.ts","./asyncFn":"../../src/functions/asyncFn.ts","./promiseQueue":"../../src/functions/promiseQueue.ts","./isValidEmail":"../../src/functions/isValidEmail.ts","./randomString":"../../src/functions/randomString.ts","./replaceNonAlphanumeric":"../../src/functions/replaceNonAlphanumeric.ts","./stripHTML":"../../src/functions/stripHTML.ts"}],"../../src/extensions/ArrayExtensions.ts":[function(require,module,exports) {
"use strict";

var _functions = require("../functions");

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

if (!(0, _functions.isset)(Array.prototype.FirstOrDefault)) {
  Object.defineProperty(Array.prototype, 'FirstOrDefault', {
    value: function value(predicateFunc, defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = null;
      }

      var arr = this;

      if ((0, _functions.isNullOrEmpty)(arr)) {
        return defaultValue;
      }

      if (typeof predicateFunc !== "function") {
        return arr[0];
      }

      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];

        if (predicateFunc(item)) {
          return item;
        }
      }

      return defaultValue;
    }
  });
}

if (!(0, _functions.isset)(Array.prototype.IndexOf)) {
  Object.defineProperty(Array.prototype, 'IndexOf', {
    value: function value(predicateFunc) {
      var arr = this;

      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];

        if (predicateFunc(item)) {
          return i;
        }
      }

      return -1;
    }
  });
}

if (!(0, _functions.isset)(Array.prototype.Where)) {
  Object.defineProperty(Array.prototype, 'Where', {
    value: function value(predicateFunc) {
      var arr = this;
      var result = [];

      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];

        if (predicateFunc(item)) {
          result.push(item);
        }
      }

      return result;
    }
  });
}

if (!(0, _functions.isset)(Array.prototype.OrderBy)) {
  Object.defineProperty(Array.prototype, 'OrderBy', {
    value: function value(keySelector) {
      var arr = this; // const result: T[] = [];

      var compareFunction = function compareFunction(item1, item2) {
        var keySelectorValue1 = keySelector(item1);
        var keySelectorValue2 = keySelector(item2);
        return keySelectorValue1 > keySelectorValue2 ? 1 : keySelectorValue2 > keySelectorValue1 ? -1 : 0;
      }; // for (let i: number = 0; i < arr.length; i++) {
      //     return arr.sort(compareFunction);
      // }


      return arr.sort(compareFunction); // return result;
    }
  });
}

if (!(0, _functions.isset)(Array.prototype.OrderByDescending)) {
  Object.defineProperty(Array.prototype, 'OrderByDescending', {
    value: function value(keySelector) {
      var arr = this; // const result: T[] = [];

      var compareFunction = function compareFunction(item1, item2) {
        var keySelectorValue1 = keySelector(item1);
        var keySelectorValue2 = keySelector(item2);
        return keySelectorValue1 > keySelectorValue2 ? -1 : keySelectorValue2 > keySelectorValue1 ? 1 : 0;
      }; // for (let i: number = 0; i < arr.length; i++) {
      // return arr.sort(compareFunction);
      // }


      return arr.sort(compareFunction); // return result;
    }
  });
}

if (!(0, _functions.isset)(Array.prototype.OrderByMultiple)) {
  Object.defineProperty(Array.prototype, 'OrderByMultiple', {
    value: function value(keySelectors) {
      var arr = __spreadArray([], this, true); // const result: T[] = [];


      var compareFunction = function compareFunction(item1, item2) {
        for (var i = 0; i < keySelectors.length; i++) {
          var keySelector = keySelectors[i];
          var keySelectorValue1 = keySelector(item1);
          var keySelectorValue2 = keySelector(item2);

          if (keySelectorValue1 > keySelectorValue2) {
            return 1;
          }

          if (keySelectorValue2 > keySelectorValue1) {
            return -1;
          }
        }

        return 0;
      }; // for (let i: number = 0; i < arr.length; i++) {
      //     return arr.sort(compareFunction);
      // }


      return arr.sort(compareFunction); // return result;
    }
  });
}

if (!(0, _functions.isset)(Array.prototype.OrderByMultipleDescending)) {
  Object.defineProperty(Array.prototype, 'OrderByMultipleDescending', {
    value: function value(keySelectors) {
      var arr = __spreadArray([], this, true); // const result: T[] = [];


      var compareFunction = function compareFunction(item1, item2) {
        for (var i = 0; i < keySelectors.length; i++) {
          var keySelector = keySelectors[i];
          var keySelectorValue1 = keySelector(item1);
          var keySelectorValue2 = keySelector(item2);

          if (keySelectorValue1 > keySelectorValue2) {
            return -1;
          }

          if (keySelectorValue2 > keySelectorValue1) {
            return 1;
          }
        }

        return 0;
      }; // for (let i: number = 0; i < arr.length; i++) {
      //     return arr.sort(compareFunction);
      // }


      return arr.sort(compareFunction); // return result;
    }
  });
}

if (!(0, _functions.isset)(Array.prototype.Contains)) {
  Object.defineProperty(Array.prototype, 'Contains', {
    value: function value(predicateFunc) {
      return (0, _functions.isset)(this.FirstOrDefault(predicateFunc, null));
    }
  });
}

if (!(0, _functions.isset)(Array.prototype.Count)) {
  Object.defineProperty(Array.prototype, 'Count', {
    value: function value(predicateFunc) {
      var allItems = this.Where(predicateFunc);

      if ((0, _functions.isNullOrEmpty)(allItems)) {
        return 0;
      }

      return allItems.length;
    }
  });
}

if (!(0, _functions.isset)(Array.prototype.LastOrDefault)) {
  Object.defineProperty(Array.prototype, 'LastOrDefault', {
    value: function value(predicateFunc, defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = null;
      }

      var arr = this;

      if ((0, _functions.isNullOrEmpty)(arr)) {
        return defaultValue;
      }

      if (typeof predicateFunc !== "function") {
        return arr[arr.length - 1];
      }

      for (var i = arr.length - 1; i >= 0; i--) {
        var item = arr[i];

        if (predicateFunc(item)) {
          return item;
        }
      }

      return defaultValue;
    }
  });
}

if (!(0, _functions.isset)(Array.prototype.AddAt)) {
  Object.defineProperty(Array.prototype, 'AddAt', {
    value: function value(index) {
      var itemsToAdd = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        itemsToAdd[_i - 1] = arguments[_i];
      }

      this.splice.apply(this, __spreadArray([index, 0], itemsToAdd, false));
    }
  });
}

if (!(0, _functions.isset)(Array.prototype.RemoveAt)) {
  Object.defineProperty(Array.prototype, 'RemoveAt', {
    value: function value(index, totalItemsToRemove) {
      if (totalItemsToRemove === void 0) {
        totalItemsToRemove = 1;
      }

      this.splice(index, totalItemsToRemove);
    }
  });
}
},{"../functions":"../../src/functions/index.ts"}],"../../src/extensions/StringExtensions.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

String.prototype.StartsWith = function (searchTerm, ignoreCase) {
  if (ignoreCase === void 0) {
    ignoreCase = true;
  }

  var searchIn = this;

  if (ignoreCase) {
    searchTerm = searchTerm.toLocaleLowerCase();
    searchIn = searchIn.toLocaleLowerCase();
  }

  return searchIn.indexOf(searchTerm) === 0;
};

String.prototype.EndsWith = function (searchTerm, ignoreCase) {
  if (ignoreCase === void 0) {
    ignoreCase = true;
  }

  var searchIn = this;

  if (searchTerm.length > searchIn.length) {
    return false;
  }

  if (ignoreCase) {
    searchTerm = searchTerm.toLocaleLowerCase();
    searchIn = searchIn.toLocaleLowerCase();
  }

  var position = searchIn.length - searchTerm.length;
  var lastIndex = searchIn.indexOf(searchTerm, position);
  return lastIndex !== -1 && lastIndex === position;
};

String.prototype.Contains = function (searchTerm, ignoreCase) {
  if (ignoreCase === void 0) {
    ignoreCase = true;
  }

  var searchIn = this;

  if (ignoreCase) {
    searchTerm = searchTerm.toLocaleLowerCase();
    searchIn = searchIn.toLocaleLowerCase();
  }

  return searchIn.indexOf(searchTerm) >= 0;
};

String.prototype.IndexOf = function (searchTerm, ignoreCase) {
  if (ignoreCase === void 0) {
    ignoreCase = true;
  }

  var searchIn = this;

  if (ignoreCase) {
    searchTerm = searchTerm.toLocaleLowerCase();
    searchIn = searchIn.toLocaleLowerCase();
  }

  return searchIn.indexOf(searchTerm);
};

String.prototype.Insert = function (startIndex, valueToInsert) {
  var text = this;
  var first = text.substring(0, startIndex);
  var second = text.substring(startIndex, text.length);
  return first + valueToInsert + second;
};

String.prototype.Equals = function (value, ignoreCase) {
  if (ignoreCase === void 0) {
    ignoreCase = true;
  }

  var s = this.slice(0);

  if (ignoreCase) {
    s = s.toLocaleLowerCase();
    value = value.toLocaleLowerCase();
  }

  return value === s;
};

String.prototype.IsEmpty = function () {
  var s = this;
  return s.length < 1 || s.trim().length < 1;
};
},{}],"../../src/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _functions = require("./functions");

Object.keys(_functions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _functions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _functions[key];
    }
  });
});
},{"./functions":"../../src/functions/index.ts"}],"../node_modules/@spfxappdev/utility/lib/functions/arrayFrom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arrayFrom;

/**
 * this functions calls Array.from() or make the same logic if not Exists.
 * The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
 * @param arrLike An array-like or iterable object to convert to an array.
 * @param mapFunc (optional) Map function to call on every element of the array.
 * @param thisArgs (optional) Value to use as this when executing mapFn.
 */

/* tslint:disable */
function arrayFrom(arrLike, mapFunc, thisArgs) {
  if (!Array["from"]) {
    Array["from"] = function () {
      var toStr = Object.prototype.toString;

      var isCallable = function (fn) {
        return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
      };

      var toInteger = function (value) {
        var numberVal = Number(value);

        if (isNaN(numberVal)) {
          return 0;
        }

        if (numberVal === 0 || !isFinite(numberVal)) {
          return numberVal;
        }

        return (numberVal > 0 ? 1 : -1) * Math.floor(Math.abs(numberVal));
      };

      var maxSafeInteger = Math.pow(2, 53) - 1;

      var toLength = function (value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      };

      return function from(arrayLike) {
        var C = this;
        var items = Object(arrayLike);

        if (arrayLike == null) {
          throw new TypeError('Array.from requires an array-like object - not null or undefined');
        }

        var mapFn;
        var args = arguments;

        if (args.length > 1) {
          mapFn = args[1];
        }

        var T;

        if (typeof mapFn !== 'undefined') {
          if (!isCallable(mapFn)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
          }

          if (args.length > 2) {
            T = args[2];
          }
        }

        var len = toLength(items.length);
        var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

        var k = 0; // 17. Repeat, while k < len… (also steps a - h)

        var kValue;

        while (k < len) {
          kValue = items[k];

          if (mapFn) {
            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
          } else {
            A[k] = kValue;
          }

          k += 1;
        } // 18. Let putStatus be Put(A, "length", len, true).


        A.length = len; // 20. Return A.

        return A;
      };
    };
  }

  return Array["from"](arrLike, mapFunc, thisArgs);
}
},{}],"../node_modules/@spfxappdev/utility/lib/functions/isset.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isset;

/**
 * Determines if the provided Property is set.
 * @param {any} property The Property to checked.
 * @returns {boolean} If the Property is set <c>true</c> otherwise <c>false</c>.
 */
function isset(property) {
  return typeof property !== 'undefined' && property != null;
}
},{}],"../node_modules/@spfxappdev/utility/lib/functions/isNullOrEmpty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNullOrEmpty;

var _isset = _interopRequireDefault(require("./isset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Determines if the provided Property is Null or Empty (or whitespace if string-value).
 * @param {any} property The Property to checked.
 * @returns {boolean} If the Property is Null or Empty or has
 * not "length" as property <c>true</c> otherwise <c>false</c>.
 */
function isNullOrEmpty(property) {
  if (!(0, _isset.default)(property)) {
    return true;
  }

  if (typeof property === 'string') {
    return property.trim().length < 1;
  }

  if (!property.hasOwnProperty('length')) {
    return false;
  }

  return property.length < 1;
}
},{"./isset":"../node_modules/@spfxappdev/utility/lib/functions/isset.js"}],"../node_modules/@spfxappdev/utility/lib/functions/cssClasses.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cssClasses;

var _isset = _interopRequireDefault(require("./isset"));

var _isNullOrEmpty = _interopRequireDefault(require("./isNullOrEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A utility function for class names classNames together.
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
function cssClasses() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var classes = [];
  var self = cssClasses;

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];

    if (!(0, _isset.default)(arg)) {
      continue;
    }

    var argType = typeof arg;

    if (argType === 'string') {
      classes.push(arg);
      continue;
    }

    if (Array.isArray(arg) && arg.length > 0) {
      var classNamesFromArray = self.apply(null, arg);

      if ((0, _isset.default)(classNamesFromArray) && !(0, _isNullOrEmpty.default)(classNamesFromArray)) {
        classes.push(classNamesFromArray);
      }

      continue;
    }

    if (argType === 'object') {
      if (arg.toString !== Object.prototype.toString) {
        classes.push(arg.toString());
        continue;
      }

      for (var className in arg) {
        if (arg.hasOwnProperty(className) && arg[className]) {
          classes.push(className);
        }
      }
    }
  }

  return classes.join(' ');
}
},{"./isset":"../node_modules/@spfxappdev/utility/lib/functions/isset.js","./isNullOrEmpty":"../node_modules/@spfxappdev/utility/lib/functions/isNullOrEmpty.js"}],"../node_modules/@spfxappdev/utility/lib/functions/extend.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extend;

var _isNullOrEmpty = _interopRequireDefault(require("./isNullOrEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

/**
 * Deep merge two objects.
 * @param target An object that will receive the new properties if additional objects are passed in.
 * @param sources An object containing additional properties to merge in.
 * @param inCaseOfArrayUseSourceObject if true, then the array from source object will
 * be use if target-value and source-value are arrays. Otherwise both arrays will be merged
 */
function extend(target, source, inCaseOfArrayUseSourceObject) {
  if (inCaseOfArrayUseSourceObject === void 0) {
    inCaseOfArrayUseSourceObject = true;
  }

  if (Array.isArray(target) && Array.isArray(source)) {
    if (inCaseOfArrayUseSourceObject) {
      return source;
    }

    return (0, _isNullOrEmpty.default)(new Set(target.concat(source)));
  } // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties


  for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
    var key = _a[_i];

    if (Array.isArray(source[key])) {
      var targetValue = target[key] || [];
      source[key] = extend(targetValue, source[key], inCaseOfArrayUseSourceObject);
    } else if (source[key] instanceof Object) {
      var targetValue = target[key] || {};
      source[key] = extend(targetValue, source[key], inCaseOfArrayUseSourceObject);
    }
  } // Join `target` and modified `source`


  target = target || {};

  var tempTarget = __assign(__assign({}, target), source);

  return tempTarget;
}
},{"./isNullOrEmpty":"../node_modules/@spfxappdev/utility/lib/functions/isNullOrEmpty.js"}],"../node_modules/@spfxappdev/utility/lib/functions/getDeepOrDefault.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDeepOrDefault;

var _isset = _interopRequireDefault(require("./isset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets an nested property from an specific object or default, if not isset.
 * @param {any} objectToCheck The Property to checked.
 * @param {string} keyNameSpace The Key-Namespace of the Property (for example: "My.Nested.Property").
 * @param {any} defaultValue The defaultValue if property not exist.
 * @returns {any} If the Property is set, than the requested property otherwise defaultValue.
 */
function getDeepOrDefault(objectToCheck, keyNameSpace, defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = null;
  }

  if (!(0, _isset.default)(objectToCheck)) {
    return defaultValue;
  }

  var namespaceKeys = keyNameSpace.split('.');
  var currentObjectPath = objectToCheck;

  for (var i = 0; i < namespaceKeys.length; i++) {
    var currentKey = namespaceKeys[i];

    if (!(0, _isset.default)(currentObjectPath)) {
      return defaultValue;
    }

    currentObjectPath = currentObjectPath[currentKey];
  }

  return currentObjectPath;
}
},{"./isset":"../node_modules/@spfxappdev/utility/lib/functions/isset.js"}],"../node_modules/@spfxappdev/utility/lib/functions/getUrlParameter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUrlParameter;

var _isNullOrEmpty = _interopRequireDefault(require("./isNullOrEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get's the Value of a specific Url-Parameter.
 * @param {string} parameterName The Name of the searched Parameter.
 * @param {string} url The Url which the Parameter-Value is read from (if not set the current Url is used).
 * @returns {string|null} If the Parameter exists on the Url the Value is returned as a string.
 */
function getUrlParameter(parameterName, url) {
  if (url === void 0) {
    url = null;
  }

  if ((0, _isNullOrEmpty.default)(url)) {
    url = window.location.href;
  }

  url = url.toLowerCase();
  var name = parameterName.toLowerCase();
  name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
  var regexS = '[\\?&]' + name + '=([^&#]*)';
  var regex = new RegExp(regexS);
  var results = regex.exec(url);

  if (results == null) {
    return null;
  }

  return results[1];
}
},{"./isNullOrEmpty":"../node_modules/@spfxappdev/utility/lib/functions/isNullOrEmpty.js"}],"../node_modules/@spfxappdev/utility/lib/functions/isFunction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFunction;

var _isset = _interopRequireDefault(require("./isset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Determines wheter the Property is a Function.
 * @param {any} property The Property to be determined.
 * @returns {boolean} Wheter the Property is a Function.
 */
function isFunction(property) {
  return (0, _isset.default)(property) && typeof property === 'function';
}
},{"./isset":"../node_modules/@spfxappdev/utility/lib/functions/isset.js"}],"../node_modules/@spfxappdev/utility/lib/functions/issetDeep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = issetDeep;

var _isset = _interopRequireDefault(require("./isset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Determines if the provided Property is set deep/nested.
 * @param {any} objectToCheck The Property to checked.
 * @param {string} keyNameSpace The Key-Namespace of the Property (for example: "My.Nested.Property").
 * @returns {boolean} If the Property is set <c>true</c> otherwise <c>false</c>.
 */
function issetDeep(objectToCheck, keyNameSpace) {
  if (!(0, _isset.default)(objectToCheck)) {
    return false;
  }

  var namespaceKeys = keyNameSpace.split('.');
  var currentObjectPath = objectToCheck;

  for (var i = 0; i < namespaceKeys.length; i++) {
    var currentKey = namespaceKeys[i];

    if (!(0, _isset.default)(currentObjectPath)) {
      return false;
    }

    currentObjectPath = currentObjectPath[currentKey];
  }

  return (0, _isset.default)(currentObjectPath);
}
},{"./isset":"../node_modules/@spfxappdev/utility/lib/functions/isset.js"}],"../node_modules/@spfxappdev/utility/lib/functions/toBoolean.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _isset = _interopRequireDefault(require("./isset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a value to a Boolean.
 * @param {any} value The Value to be converted to a Boolean.
 * @returns {boolean} If the Value is convertable to a Boolean it
 * is returned as a Boolean otherwise <c>false</c> is returned.
 */
function toBoolean(value) {
  if (!(0, _isset.default)(value)) {
    return false;
  }

  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'string') {
    value = value.toLowerCase();
  }

  if (value !== 'false' && value !== 'true' && value !== '0' && value !== '1' && value !== 0 && value !== 1) {
    return false;
  }

  return value === 'false' || value === '0' || value === 0 ? false : true;
}
},{"./isset":"../node_modules/@spfxappdev/utility/lib/functions/isset.js"}],"../node_modules/@spfxappdev/utility/lib/functions/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "arrayFrom", {
  enumerable: true,
  get: function () {
    return _arrayFrom.default;
  }
});
Object.defineProperty(exports, "cssClasses", {
  enumerable: true,
  get: function () {
    return _cssClasses.default;
  }
});
Object.defineProperty(exports, "extend", {
  enumerable: true,
  get: function () {
    return _extend.default;
  }
});
Object.defineProperty(exports, "getDeepOrDefault", {
  enumerable: true,
  get: function () {
    return _getDeepOrDefault.default;
  }
});
Object.defineProperty(exports, "getUrlParameter", {
  enumerable: true,
  get: function () {
    return _getUrlParameter.default;
  }
});
Object.defineProperty(exports, "isFunction", {
  enumerable: true,
  get: function () {
    return _isFunction.default;
  }
});
Object.defineProperty(exports, "isNullOrEmpty", {
  enumerable: true,
  get: function () {
    return _isNullOrEmpty.default;
  }
});
Object.defineProperty(exports, "isset", {
  enumerable: true,
  get: function () {
    return _isset.default;
  }
});
Object.defineProperty(exports, "issetDeep", {
  enumerable: true,
  get: function () {
    return _issetDeep.default;
  }
});
Object.defineProperty(exports, "toBoolean", {
  enumerable: true,
  get: function () {
    return _toBoolean.default;
  }
});

var _arrayFrom = _interopRequireDefault(require("./arrayFrom"));

var _cssClasses = _interopRequireDefault(require("./cssClasses"));

var _extend = _interopRequireDefault(require("./extend"));

var _getDeepOrDefault = _interopRequireDefault(require("./getDeepOrDefault"));

var _getUrlParameter = _interopRequireDefault(require("./getUrlParameter"));

var _isFunction = _interopRequireDefault(require("./isFunction"));

var _isNullOrEmpty = _interopRequireDefault(require("./isNullOrEmpty"));

var _isset = _interopRequireDefault(require("./isset"));

var _issetDeep = _interopRequireDefault(require("./issetDeep"));

var _toBoolean = _interopRequireDefault(require("./toBoolean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./arrayFrom":"../node_modules/@spfxappdev/utility/lib/functions/arrayFrom.js","./cssClasses":"../node_modules/@spfxappdev/utility/lib/functions/cssClasses.js","./extend":"../node_modules/@spfxappdev/utility/lib/functions/extend.js","./getDeepOrDefault":"../node_modules/@spfxappdev/utility/lib/functions/getDeepOrDefault.js","./getUrlParameter":"../node_modules/@spfxappdev/utility/lib/functions/getUrlParameter.js","./isFunction":"../node_modules/@spfxappdev/utility/lib/functions/isFunction.js","./isNullOrEmpty":"../node_modules/@spfxappdev/utility/lib/functions/isNullOrEmpty.js","./isset":"../node_modules/@spfxappdev/utility/lib/functions/isset.js","./issetDeep":"../node_modules/@spfxappdev/utility/lib/functions/issetDeep.js","./toBoolean":"../node_modules/@spfxappdev/utility/lib/functions/toBoolean.js"}],"../node_modules/@spfxappdev/utility/lib/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _functions = require("./functions");

Object.keys(_functions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _functions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _functions[key];
    }
  });
});
},{"./functions":"../node_modules/@spfxappdev/utility/lib/functions/index.js"}],"../node_modules/@spfxappdev/logger/lib/logger/Logger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = exports.LogType = exports.LogLevel = void 0;

var _utility = require("@spfxappdev/utility");

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
};

var LogLevel;
exports.LogLevel = LogLevel;

(function (LogLevel) {
  LogLevel[LogLevel["None"] = 0] = "None";
  LogLevel[LogLevel["Log"] = 1] = "Log";
  LogLevel[LogLevel["Info"] = 2] = "Info";
  LogLevel[LogLevel["Warning"] = 4] = "Warning";
  LogLevel[LogLevel["Error"] = 8] = "Error";
  LogLevel[LogLevel["Table"] = 16] = "Table";
  LogLevel[LogLevel["All"] = 31] = "All";
})(LogLevel || (exports.LogLevel = LogLevel = {}));

;
var DefaultLoggerSettings = {
  LogNamespaceUrlParameterName: 'LogOnly',
  LoggingEnabledUrlParameterName: 'EnableConsoleLogging',
  LogLevel: LogLevel.All
};
var LogType;
exports.LogType = LogType;

(function (LogType) {
  LogType[LogType["Warning"] = 0] = "Warning";
  LogType[LogType["Info"] = 1] = "Info";
  LogType[LogType["Error"] = 2] = "Error";
  LogType[LogType["Table"] = 3] = "Table";
  LogType[LogType["Log"] = 4] = "Log";
})(LogType || (exports.LogType = LogType = {}));

var Logger = function () {
  function Logger(logNamespace, settings) {
    if (settings === void 0) {
      settings = null;
    }

    this.logNamespace = logNamespace;
    this.settings = settings;
    this._loggingEnabledByUrl = undefined;
    this._namespacesToLog = undefined;

    if (!(0, _utility.isset)(settings)) {
      settings = __assign({}, Logger.DefaultSettings);
    }

    this.settings = __assign(__assign(__assign({}, DefaultLoggerSettings), Logger.DefaultSettings), settings);
  }

  Object.defineProperty(Logger.prototype, "isLoggingEnabledByUrl", {
    get: function () {
      // URL Parameter already checked, return value from Parameter
      if ((0, _utility.isset)(this._loggingEnabledByUrl)) {
        return this._loggingEnabledByUrl;
      } // URL Parameter is not checked. Check and set Parameter


      var isEnabledValue = (0, _utility.getUrlParameter)(this.settings.LoggingEnabledUrlParameterName);

      if (!(0, _utility.isset)(isEnabledValue)) {
        this._loggingEnabledByUrl = false;
        return this._loggingEnabledByUrl;
      }

      this._loggingEnabledByUrl = (0, _utility.toBoolean)(isEnabledValue);
      return this._loggingEnabledByUrl;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Logger.prototype, "isLoggingEnabledBySettings", {
    get: function () {
      return !(LogLevel.None == (this.settings.LogLevel | LogLevel.None));
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Logger.prototype, "namespacesToLogFromUrl", {
    get: function () {
      if ((0, _utility.isset)(this._namespacesToLog)) {
        return this._namespacesToLog;
      }

      var modules = (0, _utility.getUrlParameter)(this.settings.LogNamespaceUrlParameterName);

      if ((0, _utility.isNullOrEmpty)(modules)) {
        this._namespacesToLog = [];
        return this._namespacesToLog;
      }

      this._namespacesToLog = modules.toLowerCase().split(',');
      return this._namespacesToLog;
    },
    enumerable: false,
    configurable: true
  });

  Logger.prototype.getCurrentSettings = function () {
    return __assign({}, this.settings);
  };

  Logger.prototype.logToConsole = function (logType) {
    var _this = this;

    var data = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      data[_i - 1] = arguments[_i];
    }

    if (!(0, _utility.isset)(console)) {
      return;
    }

    if (!this.isLoggingEnabledBySettings && !this.isLoggingEnabledByUrl) {
      return;
    } //If namespaces are filtered by URL and the current namespace is NOT one of it


    if (!(0, _utility.isNullOrEmpty)(this.namespacesToLogFromUrl) && this.namespacesToLogFromUrl.indexOf(this.logNamespace.toLowerCase()) < 0) {
      return;
    }

    var valuesToLog = __spreadArray(__spreadArray([], data), [this.logNamespace]);

    var logEnabled = this.isLoggingEnabledByUrl;
    var currentLogLevel = this.settings.LogLevel;

    switch (logType) {
      case LogType.Warning:
        if (logEnabled || LogLevel.Warning == (currentLogLevel & LogLevel.Warning)) {
          console.warn.apply(console, valuesToLog);
        }

        break;

      case LogType.Info:
        if (logEnabled || LogLevel.Info == (currentLogLevel & LogLevel.Info)) {
          /* tslint:disable:no-console */
          console.info.apply(console, valuesToLog);
        }

        break;

      case LogType.Error:
        if (logEnabled || LogLevel.Info == (currentLogLevel & LogLevel.Info)) {
          console.error.apply(console, valuesToLog);
        }

        break;

      case LogType.Table:
        if (!(logEnabled || LogLevel.Table == (currentLogLevel & LogLevel.Table))) {
          break;
        }

        if (typeof console.table !== 'function') {
          /* tslint:disable:no-console */
          console.info('Your browser does not support console.table, console.log was used instead', this.logNamespace);
          console.log.apply(console, valuesToLog);
          break;
        }

        data.forEach(function (d) {
          var valueType = typeof d;

          if (valueType !== 'array' && valueType !== 'object') {
            /* tslint:disable:no-console */
            console.info('It is not possible to log table if logValue is not an array or object, console.log was used instead', _this.logNamespace);
            console.log(d, _this.logNamespace);
            return;
          }

          console.table(d, [_this.logNamespace]);
        });
        break;

      case LogType.Log:
      default:
        if (logEnabled || LogLevel.Log == (currentLogLevel & LogLevel.Log)) {
          console.log.apply(console, valuesToLog);
        }

        break;
    }
  };

  Logger.prototype.log = function () {
    var data = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }

    this.logToConsole.apply(this, __spreadArray([LogType.Log], data));
  };

  Logger.prototype.warn = function () {
    var data = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }

    this.logToConsole.apply(this, __spreadArray([LogType.Warning], data));
  };

  Logger.prototype.info = function () {
    var data = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }

    this.logToConsole.apply(this, __spreadArray([LogType.Info], data));
  };

  Logger.prototype.error = function () {
    var data = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }

    this.logToConsole.apply(this, __spreadArray([LogType.Error], data));
  };

  Logger.prototype.table = function () {
    var data = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }

    this.logToConsole.apply(this, __spreadArray([LogType.Table], data));
  };

  Logger.Log = function (logNamespace, logType) {
    var data = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      data[_i - 2] = arguments[_i];
    }

    var logger = new Logger(logNamespace);

    switch (logType) {
      case LogType.Error:
        logger.error.apply(logger, data);
        break;

      case LogType.Info:
        logger.info.apply(logger, data);
        break;

      case LogType.Table:
        logger.table.apply(logger, data);
        break;

      case LogType.Warning:
        logger.warn.apply(logger, data);
        break;

      case LogType.Log:
      default:
        logger.log.apply(logger, data);
        break;
    }
  };

  Logger.DefaultSettings = DefaultLoggerSettings;
  return Logger;
}();

exports.Logger = Logger;
},{"@spfxappdev/utility":"../node_modules/@spfxappdev/utility/lib/index.js"}],"../node_modules/@spfxappdev/logger/lib/logger/ClassLoggerBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassLoggerBase = void 0;

var _Logger = require("./Logger");

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
};

/**
* A Base Class for Console Logger
* For Intellisense with the @classLogger(), use this:
* @example export interface MyClass extends ClassLoggerBase {}; export class MyClass;
*/
var ClassLoggerBase = function () {
  function ClassLoggerBase() {
    this.assignLogger();
  }

  ClassLoggerBase.prototype.log = function (logType) {
    var _a;

    var data = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      data[_i - 1] = arguments[_i];
    }

    (_a = this.logger).logToConsole.apply(_a, __spreadArray([logType], data));
  };

  ClassLoggerBase.prototype.getLogCategory = function () {
    return 'SPFxAppDev Logger BASE';
  };

  ClassLoggerBase.prototype.getLogSettings = function () {
    return __assign({}, _Logger.Logger.DefaultSettings);
  };

  ClassLoggerBase.prototype.assignLogger = function () {
    if (!this.logger) {
      var loggingSettings = this.getLogSettings();
      this.logger = new _Logger.Logger(this.getLogCategory(), loggingSettings);
    }

    return this.logger;
  };

  return ClassLoggerBase;
}();

exports.ClassLoggerBase = ClassLoggerBase;
},{"./Logger":"../node_modules/@spfxappdev/logger/lib/logger/Logger.js"}],"../node_modules/@spfxappdev/logger/lib/logger/decorators/decorators.utility.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLogSettings = exports.getLogCategoryOrCustom = exports.logFunc = void 0;

var _Logger = require("../Logger");

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
};

var logFunc = function (target, logLevel, loggingCategory, logType) {
  var logData = [];

  for (var _i = 4; _i < arguments.length; _i++) {
    logData[_i - 4] = arguments[_i];
  }

  var containsLogger = typeof target['logger'] === 'object'; // && (target as any).getLogger() instanceof Logger;

  var loggingSettings = containsLogger ? target.logger.getCurrentSettings() : __assign({}, _Logger.Logger.DefaultSettings);
  loggingSettings.LogLevel = logLevel;
  var logger = new _Logger.Logger(loggingCategory, loggingSettings);
  logger.logToConsole.apply(logger, __spreadArray([logType], logData));
};

exports.logFunc = logFunc;

var getLogCategoryOrCustom = function (target, customLogCategory, fallbackValue) {
  if (customLogCategory === void 0) {
    customLogCategory = null;
  }

  if (fallbackValue === void 0) {
    fallbackValue = '';
  }

  var loggingCategory = '';

  if (typeof customLogCategory === 'string') {
    loggingCategory = customLogCategory;
  } else {
    var containsLoggingCategory = typeof target['getLogCategory'] === 'function' && typeof target.getLogCategory() === 'string'; // console.log("SSC", typeof target['getLogCategory'], (" loggingCategory: " +loggingCategory.slice(0) ), (" customLogCategory: " + customLogCategory));

    loggingCategory = containsLoggingCategory ? target.getLogCategory() : fallbackValue;
  }

  return loggingCategory;
};

exports.getLogCategoryOrCustom = getLogCategoryOrCustom;

var getLogSettings = function () {
  return _Logger.Logger.DefaultSettings;
};

exports.getLogSettings = getLogSettings;
},{"../Logger":"../node_modules/@spfxappdev/logger/lib/logger/Logger.js"}],"../node_modules/@spfxappdev/logger/lib/logger/decorators/class.decorators.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classLogger = void 0;

var _Logger = require("../Logger");

var _decorators = require("./decorators.utility");

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
};

var defaultOptions = {
  customLogCategory: null,
  logLevel: null,
  override: true
}; //TODO: Check for generic classes MyClass<T>...

/**
* A Class logger dexorator
* For Intellisense with the @classLogger(), use this:
* @example export interface MyClass extends LoggerBase {}; export class MyClass;
*/

var classLogger = function (options) {
  if (options === void 0) {
    options = null;
  }

  options = __assign(__assign({}, defaultOptions), options);

  var classLoggerFunc = function (Base) {
    // save a reference to the original constructor
    var original = Base;
    var fallbackName = original && original.name ? original.name : '';
    var enableConsoleLogging = options.logLevel ? options.logLevel : __assign({}, _Logger.Logger.DefaultSettings).LogLevel;
    var loggingCategory = (0, _decorators.getLogCategoryOrCustom)(original, options.customLogCategory, fallbackName);

    var getLogCategoryFunc = function () {
      return (0, _decorators.getLogCategoryOrCustom)(original, options.customLogCategory, fallbackName);
    };

    var logFunc = function (logType) {
      var logData = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        logData[_i - 1] = arguments[_i];
      }

      _decorators.logFunc.apply(void 0, __spreadArray([original, enableConsoleLogging, loggingCategory, logType], logData));
    };

    var logSettingsFunc = function () {
      return (0, _decorators.getLogSettings)();
    };

    if (options.override) {
      original.prototype.getLogCategory = getLogCategoryFunc;
      original.prototype.log = logFunc;
      original.prototype.getLogSettings = logSettingsFunc;
    } else {
      original.prototype.getLogCategory = original.prototype.getLogCategory || getLogCategoryFunc;
      original.prototype.log = original.prototype.log || logFunc;
      original.prototype.getLogSettings = original.prototype.getLogSettings || logSettingsFunc;
    } // a utility function to generate instances of a class


    function construct(classConstructor, args) {
      var c = function () {
        return classConstructor.apply(this, args);
      };

      c.prototype = classConstructor.prototype;
      var instanceObj = new c();
      instanceObj.logger = new _Logger.Logger(instanceObj.getLogCategory(), instanceObj.getLogSettings());
      return instanceObj;
    } // the new constructor behaviour


    var f = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return construct(original, args);
    }; // copy prototype so intanceof operator still works


    f.prototype = original.prototype; // return new constructor (will override original)

    return f;
  };

  return classLoggerFunc;
};

exports.classLogger = classLogger;
},{"../Logger":"../node_modules/@spfxappdev/logger/lib/logger/Logger.js","./decorators.utility":"../node_modules/@spfxappdev/logger/lib/logger/decorators/decorators.utility.js"}],"../node_modules/@spfxappdev/logger/lib/logger/decorators/method.decorators.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methodLogger = void 0;

var _Logger = require("../Logger");

var _decorators = require("./decorators.utility");

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
};

var defaultOptions = {
  customLogCategory: null,
  logLevel: null
};

var methodLogger = function (options) {
  if (options === void 0) {
    options = null;
  }

  options = __assign(__assign({}, defaultOptions), options);
  return function (target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;

    descriptor.value = function () {
      var logLevel = options.logLevel;
      var loggingCategory = (0, _decorators.getLogCategoryOrCustom)(target, options.customLogCategory, propertyKey);
      var containsLogLevel = typeof logLevel !== 'undefined' && logLevel !== null;
      var targetContainsGetLogSettings = typeof target["getLogSettings"] == "function";

      if (!containsLogLevel && targetContainsGetLogSettings) {
        var settings = target["getLogSettings"]();

        if (settings && typeof settings["LogLevel"] == "number") {
          logLevel = settings["LogLevel"];
          containsLogLevel = true;
        }
      }

      logLevel = containsLogLevel ? logLevel : _Logger.Logger.DefaultSettings.LogLevel;

      var logFunc = function (logType) {
        var logData = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          logData[_i - 1] = arguments[_i];
        }

        _decorators.logFunc.apply(void 0, __spreadArray([target, logLevel, loggingCategory, logType], logData));
      };

      if (arguments && arguments.length > 0) {
        logFunc(_Logger.LogType.Log, [propertyKey + " START with params", arguments]);
      } else {
        logFunc(_Logger.LogType.Log, propertyKey + " START");
      }

      var result = originalMethod.apply(this, arguments);

      if (!(result instanceof Promise)) {
        logFunc(_Logger.LogType.Log, propertyKey + " END");
        return result;
      }

      return Promise.resolve(result).then(function (value) {
        logFunc(_Logger.LogType.Log, propertyKey + " END");
        return value;
      }).catch(function (error) {
        logFunc(_Logger.LogType.Error, "ERROR occurred in " + propertyKey);
        logFunc(_Logger.LogType.Error, error);
        logFunc(_Logger.LogType.Log, propertyKey + " END");
        return Promise.reject(error);
      });
    };
  };
};

exports.methodLogger = methodLogger;
},{"../Logger":"../node_modules/@spfxappdev/logger/lib/logger/Logger.js","./decorators.utility":"../node_modules/@spfxappdev/logger/lib/logger/decorators/decorators.utility.js"}],"../node_modules/@spfxappdev/logger/lib/logger/decorators/property.decorators.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propertyLogger = void 0;

var _Logger = require("../Logger");

var _decorators = require("./decorators.utility");

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
};

var defaultOptions = {
  customLogCategory: null,
  logLevel: null
};

var propertyLogger = function (options) {
  if (options === void 0) {
    options = null;
  }

  options = __assign(__assign({}, defaultOptions), options);
  return function (target, propertyName) {
    var logLevel = options.logLevel;
    var containsLogLevel = typeof logLevel !== 'undefined' && logLevel !== null;

    var logFunc = function (currentInstance, logType) {
      var logData = [];

      for (var _i = 2; _i < arguments.length; _i++) {
        logData[_i - 2] = arguments[_i];
      }

      var loggingCategory = (0, _decorators.getLogCategoryOrCustom)(currentInstance, options.customLogCategory, target.constructor['name'] + "." + propertyName);
      var targetContainsGetLogSettings = typeof currentInstance["getLogSettings"] == "function";

      if (!containsLogLevel && targetContainsGetLogSettings) {
        var settings = currentInstance["getLogSettings"]();

        if (settings && typeof settings["LogLevel"] == "number") {
          logLevel = settings["LogLevel"];
          containsLogLevel = true;
        }
      }

      _decorators.logFunc.apply(void 0, __spreadArray([target, logLevel, loggingCategory, logType], logData));
    }; // property value


    var _val = target[propertyName]; // property getter method

    var getter = function () {
      logFunc(target, _Logger.LogType.Log, "Get: " + propertyName + " => " + _val);
      return _val;
    }; // property setter method


    var setter = function (newVal) {
      logFunc(target, _Logger.LogType.Log, "Set: " + propertyName + " => " + newVal);
      _val = newVal;
    }; // Delete property.


    if (delete target[propertyName]) {
      // Create new property with getter and setter
      Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  };
};

exports.propertyLogger = propertyLogger;
},{"../Logger":"../node_modules/@spfxappdev/logger/lib/logger/Logger.js","./decorators.utility":"../node_modules/@spfxappdev/logger/lib/logger/decorators/decorators.utility.js"}],"../node_modules/@spfxappdev/logger/lib/logger/decorators/logFactory.decorators.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = void 0;

var _class = require("./class.decorators");

var _method = require("./method.decorators");

var _property = require("./property.decorators");

var _this = void 0;

// decorator factory - which calls the corresponding decorators based on arguments passed
var log = function (options) {
  if (options === void 0) {
    options = null;
  }

  var factoryFunction = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    switch (args.length) {
      case 3:
        // can be method or property decorator
        if (typeof args[2] === 'number' || typeof args[2] === 'undefined') {
          return (0, _property.propertyLogger)(options).apply(_this, args);
        }

        return (0, _method.methodLogger)(options).apply(_this, args);

      case 2:
        // parameter decorator
        return (0, _property.propertyLogger)(options).apply(_this, args);

      case 1:
        // class decorator
        // return classLogger.apply(this, args);
        return (0, _class.classLogger)(options).apply(_this, args);

      default:
        // invalid size of arguments
        throw new Error('Not a valid decorator');
    }
  };

  return factoryFunction;
};

exports.log = log;
},{"./class.decorators":"../node_modules/@spfxappdev/logger/lib/logger/decorators/class.decorators.js","./method.decorators":"../node_modules/@spfxappdev/logger/lib/logger/decorators/method.decorators.js","./property.decorators":"../node_modules/@spfxappdev/logger/lib/logger/decorators/property.decorators.js"}],"../node_modules/@spfxappdev/logger/lib/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Logger", {
  enumerable: true,
  get: function () {
    return _Logger.Logger;
  }
});
Object.defineProperty(exports, "LogType", {
  enumerable: true,
  get: function () {
    return _Logger.LogType;
  }
});
Object.defineProperty(exports, "LogLevel", {
  enumerable: true,
  get: function () {
    return _Logger.LogLevel;
  }
});
Object.defineProperty(exports, "ClassLoggerBase", {
  enumerable: true,
  get: function () {
    return _ClassLoggerBase.ClassLoggerBase;
  }
});
Object.defineProperty(exports, "log", {
  enumerable: true,
  get: function () {
    return _logFactory.log;
  }
});

var _Logger = require("./logger/Logger");

var _ClassLoggerBase = require("./logger/ClassLoggerBase");

var _logFactory = require("./logger/decorators/logFactory.decorators");
},{"./logger/Logger":"../node_modules/@spfxappdev/logger/lib/logger/Logger.js","./logger/ClassLoggerBase":"../node_modules/@spfxappdev/logger/lib/logger/ClassLoggerBase.js","./logger/decorators/logFactory.decorators":"../node_modules/@spfxappdev/logger/lib/logger/decorators/logFactory.decorators.js"}],"App.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArray = this && this.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("../../src/extensions/ArrayExtensions");

require("../../src/extensions/StringExtensions");

var src_1 = require("../../src");

var logger_1 = require("@spfxappdev/logger");

var simpleArray = [{
  id: src_1.randomString(),
  name: "App",
  sequence: 2
}, {
  id: src_1.randomString(),
  name: "SPFx",
  sequence: 1
}, {
  id: src_1.randomString(),
  name: "Dev",
  sequence: 3
}];

var ArrayApp = function () {
  function ArrayApp() {
    this.simpleArray = simpleArray;
  }

  ArrayApp.prototype.start = function () {
    this.firstOrDefaultExamples();
    this.indexOfExamples();
    this.whereExamples();
    this.orderByExamples();
    this.orderByDescendingExamples();
    this.orderByMultipleExamples();
    this.orderByMultipleDescendingExamples();
    this.containsExamples();
    this.countExamples();
    this.lastOrDefaultExamples();
    this.addAtExamples();
    this.removeAtExamples();
  };

  ArrayApp.prototype.simpleClone = function () {
    console.log("simple array:", this.simpleArray);
    return JSON.parse(JSON.stringify(this.simpleArray));
  };

  ArrayApp.prototype.firstOrDefaultExamples = function () {
    var myArr = this.simpleClone();
    var spfxItem = myArr.FirstOrDefault(function (i) {
      return i.name.Equals("spfx");
    });
    console.log(spfxItem);
    var firstItem = myArr.FirstOrDefault();
    console.log(firstItem);
    var defaultItem = myArr.FirstOrDefault(function (i) {
      return i.name.Equals("404");
    }, {
      id: src_1.randomString(),
      name: "This is item is the default item, because the searched item was not found",
      sequence: 404
    });
    console.log(defaultItem);
    var defaultNullItem = myArr.FirstOrDefault(function (i) {
      return i.name.Equals("404");
    });
    console.log(defaultNullItem);
  };

  ArrayApp.prototype.indexOfExamples = function () {
    var myArr = this.simpleClone();
    var spfxItemIndex = myArr.IndexOf(function (i) {
      return i.name.Equals("spfx");
    });
    console.log(spfxItemIndex);
    var notFoundIndex = myArr.IndexOf(function (i) {
      return i.name.Equals("404");
    });
    console.log(notFoundIndex);
  };

  ArrayApp.prototype.whereExamples = function () {
    var myArr = this.simpleClone();
    var allItemsWhereSequenceGt1 = myArr.Where(function (i) {
      return i.sequence > 1;
    });
    console.log(allItemsWhereSequenceGt1);
    var notFoundItems = myArr.Where(function (i) {
      return i.name.Equals("404");
    });
    console.log(notFoundItems);
  };

  ArrayApp.prototype.orderByExamples = function () {
    var myArr1 = this.simpleClone();
    var myArr2 = this.simpleClone();
    var allItemsOrderedBySequence = myArr1.OrderBy(function (i) {
      return i.sequence;
    });
    console.log(allItemsOrderedBySequence);
    var allItemsOrderedByName = myArr2.OrderBy(function (i) {
      return i.name;
    });
    console.log(allItemsOrderedByName);
  };

  ArrayApp.prototype.orderByDescendingExamples = function () {
    var myArr1 = this.simpleClone();
    var myArr2 = this.simpleClone();
    var allItemsOrderedBySequenceDescending = myArr1.OrderByDescending(function (i) {
      return i.sequence;
    });
    console.log(allItemsOrderedBySequenceDescending);
    var allItemsOrderedByNameDescending = myArr2.OrderByDescending(function (i) {
      return i.name;
    });
    console.log(allItemsOrderedByNameDescending);
  };

  ArrayApp.prototype.orderByMultipleExamples = function () {
    var myArr1 = this.simpleClone();
    myArr1.push({
      id: src_1.randomString(),
      name: "App",
      sequence: 1
    });
    var allItemsOrderedByNameAndThenSequence = myArr1.OrderByMultiple([function (item) {
      return item.name;
    }, function (item) {
      return item.sequence;
    }]);
    console.log(allItemsOrderedByNameAndThenSequence);
  };

  ArrayApp.prototype.orderByMultipleDescendingExamples = function () {
    var myArr1 = this.simpleClone();
    myArr1.push({
      id: src_1.randomString(),
      name: "App",
      sequence: 1
    });
    var allItemsOrderedByNameAndThenSequenceDescending = myArr1.OrderByMultipleDescending([function (item) {
      return item.name;
    }, function (item) {
      return item.sequence;
    }]);
    console.log(allItemsOrderedByNameAndThenSequenceDescending);
  };

  ArrayApp.prototype.containsExamples = function () {
    var myArr = this.simpleClone();
    var containsSpfxItem = myArr.Contains(function (i) {
      return i.name.Equals("spfx");
    });
    console.log(containsSpfxItem);
    var contains404Item = myArr.Contains(function (i) {
      return i.name.Equals("404");
    });
    console.log(contains404Item);
    var multipleConditions = myArr.Contains(function (i) {
      return i.name.Equals("404") || i.name.Equals("spfx");
    });
    console.log(multipleConditions);
    var emptyArrayContains = [].Contains(function (i) {
      return i.name.Equals("404") || i.name.Equals("spfx");
    });
    console.log(emptyArrayContains);
  };

  ArrayApp.prototype.countExamples = function () {
    var myArr = this.simpleClone();
    myArr.push({
      id: src_1.randomString(),
      name: "App",
      sequence: 1
    });
    myArr.push({
      id: src_1.randomString(),
      name: "Dev",
      sequence: 1
    });
    myArr.push({
      id: src_1.randomString(),
      name: "Dev",
      sequence: 5
    });
    var totalAppItems = myArr.Count(function (i) {
      return i.name.Equals("app");
    });
    console.log(totalAppItems);
    var total404Items = myArr.Count(function (i) {
      return i.name.Equals("404");
    });
    console.log(total404Items);
    var totalAppOrDevItems = myArr.Count(function (i) {
      return i.name.Equals("app") || i.name.Equals("dEv");
    });
    console.log(totalAppOrDevItems);
    var emptyArrayCount = [].Count(function (i) {
      return i.name.Equals("404") || i.name.Equals("spfx");
    });
    console.log(emptyArrayCount);
  };

  ArrayApp.prototype.lastOrDefaultExamples = function () {
    var myArr = this.simpleClone();
    myArr.push({
      id: src_1.randomString(),
      name: "SPFx",
      sequence: 4
    });
    myArr.push({
      id: src_1.randomString(),
      name: "SPFx",
      sequence: 5
    });
    myArr.push({
      id: src_1.randomString(),
      name: "SPFx",
      sequence: 6
    });
    myArr.push({
      id: src_1.randomString(),
      name: "Dev",
      sequence: 1000
    });
    var spfxItem = myArr.LastOrDefault(function (i) {
      return i.name.Equals("spfx");
    });
    console.log(spfxItem);
    var lastItem = myArr.LastOrDefault();
    console.log(lastItem);
    var defaultItem = myArr.LastOrDefault(function (i) {
      return i.name.Equals("404");
    }, {
      id: src_1.randomString(),
      name: "This is item is the default item, because the searched item was not found",
      sequence: 404
    });
    console.log(defaultItem);
    var defaultNullItem = myArr.LastOrDefault(function (i) {
      return i.name.Equals("404");
    });
    console.log(defaultNullItem);
    var emptyArrCheck = [].LastOrDefault(function (i) {
      return i.name.Equals("404");
    });
    console.log(emptyArrCheck);
  };

  ArrayApp.prototype.addAtExamples = function () {
    var myArr = this.simpleClone();
    myArr.AddAt(0, {
      id: src_1.randomString(),
      name: "First Item",
      sequence: 0
    });
    myArr.AddAt(1, {
      id: src_1.randomString(),
      name: "Second Item",
      sequence: 1
    });
    myArr.AddAt(1000, {
      id: src_1.randomString(),
      name: "LAST Item",
      sequence: 10000
    });
    myArr.AddAt(-3, {
      id: src_1.randomString(),
      name: "LAST Item - 3",
      sequence: 10000
    });
    console.log(myArr, JSON.stringify(myArr));
  };

  ArrayApp.prototype.removeAtExamples = function () {
    var myArr = this.simpleClone();
    myArr.AddAt(0, {
      id: src_1.randomString(),
      name: "First Item",
      sequence: 0
    });
    myArr.AddAt(1, {
      id: src_1.randomString(),
      name: "Second Item",
      sequence: 1
    });
    myArr.AddAt(1000, {
      id: src_1.randomString(),
      name: "LAST Item",
      sequence: 10000
    });
    myArr.AddAt(-3, {
      id: src_1.randomString(),
      name: "LAST Item - 3",
      sequence: 10000
    });
    console.log("Before remove:", __spreadArray(__spreadArray([], []), myArr)); //Remove 2 items, starting at index 0

    myArr.RemoveAt(0, 2);
    console.log("after the first two items removed", __spreadArray(__spreadArray([], []), myArr)); //remove the item at index 2

    myArr.RemoveAt(2);
    console.log("after the item at index 2 removed", __spreadArray(__spreadArray([], []), myArr)); // myArr.RemoveAt(-3);

    myArr.RemoveAt(-3);
    console.log("after the item at lastitem -3 removed", __spreadArray(__spreadArray([], []), myArr));
  };

  __decorate([logger_1.log()], ArrayApp.prototype, "simpleClone", null);

  __decorate([logger_1.log()], ArrayApp.prototype, "firstOrDefaultExamples", null);

  __decorate([logger_1.log()], ArrayApp.prototype, "indexOfExamples", null);

  __decorate([logger_1.log()], ArrayApp.prototype, "whereExamples", null);

  __decorate([logger_1.log()], ArrayApp.prototype, "orderByExamples", null);

  __decorate([logger_1.log()], ArrayApp.prototype, "orderByDescendingExamples", null);

  __decorate([logger_1.log()], ArrayApp.prototype, "orderByMultipleExamples", null);

  __decorate([logger_1.log()], ArrayApp.prototype, "orderByMultipleDescendingExamples", null);

  __decorate([logger_1.log()], ArrayApp.prototype, "containsExamples", null);

  __decorate([logger_1.log()], ArrayApp.prototype, "countExamples", null);

  __decorate([logger_1.log()], ArrayApp.prototype, "lastOrDefaultExamples", null);

  __decorate([logger_1.log()], ArrayApp.prototype, "addAtExamples", null);

  __decorate([logger_1.log()], ArrayApp.prototype, "removeAtExamples", null);

  return ArrayApp;
}();

var StringsApp = function () {
  function StringsApp() {
    this.testString = "Hello @spfxappdev/utility";
  }

  StringsApp.prototype.start = function () {//    this.startsWithExamples();
    //    this.endsWithExamples();
    //    this.containsExamples();
    //    this.indexOfExamples();
    //    this.insertExamples();
    //    this.equalsExamples();
    //    this.isEmptyExamples();
  };

  StringsApp.prototype.startsWithExamples = function () {
    console.log(this.testString + ".StartsWith('hello') ==> ", this.testString.StartsWith("hello"));
    console.log(this.testString + ".StartsWith('hello', false) ==> ", this.testString.StartsWith("hello", false));
    console.log(this.testString + ".StartsWith('@spfxappdev') ==> ", this.testString.StartsWith("@spfxappdev"));
  };

  StringsApp.prototype.endsWithExamples = function () {
    console.log(this.testString + ".EndsWith('@SPFxAppDev/Utility') ==> ", this.testString.EndsWith("@SPFxAppDev/Utility"));
    console.log(this.testString + ".EndsWith('@SPFxAppDev/Utility', false) ==> ", this.testString.EndsWith("@SPFxAppDev/Utility", false));
    console.log(this.testString + ".EndsWith('@spfxappdev') ==> ", this.testString.EndsWith("@spfxappdev"));
  };

  StringsApp.prototype.containsExamples = function () {
    console.log(this.testString + ".Contains('@SPFxAppDev/Utility') ==> ", this.testString.Contains("@SPFxAppDev/Utility"));
    console.log(this.testString + ".Contains('@SPFxAppDev/Utility', false) ==> ", this.testString.Contains("@SPFxAppDev/Utility", false));
    console.log(this.testString + ".Contains('404') ==> ", this.testString.Contains("404"));
  };

  StringsApp.prototype.indexOfExamples = function () {
    console.log(this.testString + ".IndexOf('@SPFxAppDev/Utility') ==> ", this.testString.IndexOf("@SPFxAppDev/Utility"));
    console.log(this.testString + ".IndexOf('@SPFxAppDev/Utility', false) ==> ", this.testString.IndexOf("@SPFxAppDev/Utility", false));
    console.log(this.testString + ".IndexOf('404') ==> ", this.testString.IndexOf("404"));
  };

  StringsApp.prototype.insertExamples = function () {
    console.log(this.testString + ".Insert(5, \" from\") ==> ", this.testString.Insert(5, " from"));
    console.log(this.testString + ".Insert(255, \" insert to end\") ==> ", this.testString.Insert(255, " insert to end"));
  };

  StringsApp.prototype.equalsExamples = function () {
    console.log(this.testString + ".Equals('HeLlO @SPFxAppDev/UTILITY') ==> ", this.testString.Equals("HeLlO @SPFxAppDev/UTILITY"));
    console.log(this.testString + ".Equals('HeLlO @SPFxAppDev/UTILITY', false) ==> ", this.testString.Equals("HeLlO @SPFxAppDev/UTILITY", false));
    console.log(this.testString + ".Equals('404') ==> ", this.testString.Equals("404"));
  };

  StringsApp.prototype.isEmptyExamples = function () {
    console.log(this.testString + ".IsEmpty() ==> ", this.testString.IsEmpty());
    console.log("\"\".IsEmpty() ==> ", "".IsEmpty());
    console.log("\"     \".IsEmpty() ==> ", "     ".IsEmpty());
  };

  __decorate([logger_1.log()], StringsApp.prototype, "startsWithExamples", null);

  __decorate([logger_1.log()], StringsApp.prototype, "endsWithExamples", null);

  __decorate([logger_1.log()], StringsApp.prototype, "containsExamples", null);

  __decorate([logger_1.log()], StringsApp.prototype, "indexOfExamples", null);

  __decorate([logger_1.log()], StringsApp.prototype, "insertExamples", null);

  __decorate([logger_1.log()], StringsApp.prototype, "equalsExamples", null);

  __decorate([logger_1.log()], StringsApp.prototype, "isEmptyExamples", null);

  return StringsApp;
}();

var FunctionsApp = function () {
  function FunctionsApp() {
    this.testString = "Hello @spfxappdev/utility";
  }

  FunctionsApp.prototype.start = function () {
    // this.ayncFnExamples();
    // this.cssClassesExamples();
    // this.getDeepOrDefaultExamples();
    // this.getUrlParameterExamples();
    // this.isFunctionExamples();
    // this.isNullOrEmptyExamples();
    // this.issetExamples();
    this.issetDeepExamples(); // this.isValidEmailExamples();
    // this.promiseQueueExamples();
    // this.randomStringExamples();
    // this.replaceNonAlphanumericExamples();
    // this.stripHTMLExamples();
    // this.toBooleanExamples();
  };

  FunctionsApp.prototype.dummyPromise = function (success, delay) {
    if (success === void 0) {
      success = true;
    }

    if (delay === void 0) {
      delay = 5000;
    }

    console.log("dummyPromise START");
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (success) {
          console.log("IN dummyPromise success ", delay);
          return resolve("Success after " + delay + "ms");
        }

        console.log("IN dummyPromise fail ", delay);
        return reject("Error after " + delay + "ms");
      }, delay);
    });
  };

  FunctionsApp.prototype.parameterlessPromiseFunc = function () {
    console.log("parameterlessPromiseFunc START");
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        return resolve("Success parameterlessPromiseFunc");
      }, 5000);
    });
  };

  FunctionsApp.prototype.ayncFnExamples = function () {
    return __awaiter(this, void 0, Promise, function () {
      var _a, result, error, _b, result2, error2;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            return [4
            /*yield*/
            , src_1.asyncFn(this.dummyPromise(true, 2000))];

          case 1:
            _a = _c.sent(), result = _a[0], error = _a[1];
            console.log(result, error);

            if (error) {
              console.error("ERROR occurred...");
            }

            return [4
            /*yield*/
            , src_1.asyncFn(this.dummyPromise(false, 2000))];

          case 2:
            _b = _c.sent(), result2 = _b[0], error2 = _b[1];
            console.log(result2, error2);

            if (error2) {
              console.error("ERROR occurred...");
            }

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  FunctionsApp.prototype.cssClassesExamples = function () {
    console.log("cssClasses('spfx-app-dev', 'theme') ==> ", src_1.cssClasses('spfx-app-dev', 'theme'));
    console.log("cssClasses('spfx-app-dev', { theme: false }) ==> ", src_1.cssClasses('spfx-app-dev', {
      theme: false
    }));
    console.log("cssClasses('spfx-app-dev', ['theme', { active: true, item: false }, null, false, undefined, 0, 1, 'container']) ==> ", src_1.cssClasses('spfx-app-dev', ['theme', {
      active: true,
      item: false
    }, null, false, undefined, 0, 1, 'container']));
  };

  FunctionsApp.prototype.getDeepOrDefaultExamples = function () {
    var myObj = {
      My: {
        nested: {
          property: "Hello from nested Property"
        }
      },
      items: simpleArray
    };
    console.log(myObj, "getDeepOrDefault(myObj, \"My.nested.property\") ==> ", src_1.getDeepOrDefault(myObj, "My.nested.property"));
    console.log(myObj, "ARRAY: getDeepOrDefault(myObj, \"items.2\") ==> ", src_1.getDeepOrDefault(myObj, "items.2"));
    var arr = src_1.getDeepOrDefault(myObj, "items");
    console.log(myObj, "TypeSafe: getDeepOrDefault<ISimpleItem[]>(myObj, \"items\") ==> ", arr);
    console.log(myObj, "Default: getDeepOrDefault(myObj, \"404\", \"this string is returend as default, because 404 does not exist in myObj\") ==> ", src_1.getDeepOrDefault(myObj, "404", "this string is returend as default, because 404 does not exist in myObj"));
  };

  FunctionsApp.prototype.getUrlParameterExamples = function () {
    console.log("getUrlParameter(\"from-window-location\") ==> ", src_1.getUrlParameter("from-window-location"));
    console.log("getUrlParameter(\"from-passed-url\", 'http://localhost:1234/?from-passed-url=hello') ==> ", src_1.getUrlParameter("from-passed-url", 'http://localhost:1234/?from-passed-url=hello'));
    console.log("getUrlParameter(\"anotherparam\", 'http://localhost:1234/?from-passed-url=hello&anotherparam=2') ==> ", src_1.getUrlParameter("anotherparam", 'http://localhost:1234/?from-passed-url=hello&anotherparam=2'));
  };

  FunctionsApp.prototype.isFunctionExamples = function () {
    console.log("isFunction(\"this is a string\") ==> ", src_1.isFunction("this is a string"));
    console.log("isFunction(1) ==> ", src_1.isFunction(1));
    console.log("isFunction(() => { }) ==> ", src_1.isFunction(function () {}));
    console.log("isFunction(window.addEventListener) ==> ", src_1.isFunction(window.addEventListener));
  };

  FunctionsApp.prototype.isNullOrEmptyExamples = function () {
    console.log("isNullOrEmpty(\"this is a string\") ==> ", src_1.isNullOrEmpty("this is a string"));
    console.log("isNullOrEmpty(1) ==> ", src_1.isNullOrEmpty(1));
    console.log("isNullOrEmpty(() => { }) ==> ", src_1.isNullOrEmpty(function () {}));
    console.log("isNullOrEmpty(null) ==> ", src_1.isNullOrEmpty(null));
    console.log("isNullOrEmpty(undefined) ==> ", src_1.isNullOrEmpty(undefined));
    console.log("isNullOrEmpty([]) ==> ", src_1.isNullOrEmpty([]));
    console.log("isNullOrEmpty([1,2]) ==> ", src_1.isNullOrEmpty([1, 2]));
    console.log("isNullOrEmpty({}) ==> ", src_1.isNullOrEmpty({}));
    console.log("isNullOrEmpty(\"\") ==> ", src_1.isNullOrEmpty(""));
    console.log("isNullOrEmpty(\"     \") ==> ", src_1.isNullOrEmpty("     "));
  };

  FunctionsApp.prototype.issetExamples = function () {
    console.log("isset(\"this is a string\") ==> ", src_1.isset("this is a string"));
    console.log("isset(1) ==> ", src_1.isset(1));
    console.log("isset(() => { }) ==> ", src_1.isset(function () {}));
    console.log("isset(null) ==> ", src_1.isset(null));
    console.log("isset(undefined) ==> ", src_1.isset(undefined));
    console.log("isset([]) ==> ", src_1.isset([]));
    console.log("isset([1,2]) ==> ", src_1.isset([1, 2]));
    console.log("isset({}) ==> ", src_1.isset({}));
    console.log("isset(\"\") ==> ", src_1.isset(""));
    console.log("isset(\"     \") ==> ", src_1.isset("     "));
  };

  FunctionsApp.prototype.issetDeepExamples = function () {
    var myObj = {
      My: {
        nested: {
          property: "Hello from nested Property"
        }
      },
      items: simpleArray
    };
    console.log(myObj, "issetDeep(myObj, \"My.nested.property\") ==> ", src_1.issetDeep(myObj, "My.nested.property"));
    console.log(myObj, "ARRAY: issetDeep(myObj, \"items.2\") ==> ", src_1.issetDeep(myObj, "items.2"));
    console.log(myObj, "Not set: issetDeep(myObj, \"404\") ==> ", src_1.issetDeep(myObj, "404"));
  };

  FunctionsApp.prototype.isValidEmailExamples = function () {
    console.log("isValidEmail('seryoga@spfx-app.dev') ==> ", src_1.isValidEmail('seryoga@spfx-app.dev'));
    console.log("isValidEmail('spfx-app.dev') ==> ", src_1.isValidEmail('spfx-app.dev'));
    console.log("isValidEmail('my@mail.c') ==> ", src_1.isValidEmail('my@mail.c'));
    console.log("isValidEmail('my@mail.12') ==> ", src_1.isValidEmail('my@mail.12'));
    console.log("isValidEmail('my@mail.co') ==> ", src_1.isValidEmail('my@mail.co'));
  };

  FunctionsApp.prototype.promiseQueueExamples = function () {
    return __awaiter(this, void 0, Promise, function () {
      var promise1, promise2, promise3, promise4, _a, _b, _c, onSuccessFunc, onErrorFunc, onSuccessFuncPromise, onErrorFuncPromise, promises, _d, _e, _f;

      return __generator(this, function (_g) {
        switch (_g.label) {
          case 0:
            promise1 = src_1.toParameterlessPromiseQueueFunc(this.dummyPromise, true, 10000);
            promise2 = this.parameterlessPromiseFunc;
            promise3 = src_1.toParameterlessPromiseQueueFunc(this.dummyPromise, false, 2000);
            promise4 = src_1.toParameterlessPromiseQueueFunc(this.dummyPromise, true, 600);
            console.log("const promise1 = toParameterlessPromiseQueueFunc(this.dummyPromise, true, 10000);");
            console.log("const promise2 = this.parameterlessPromiseFunc;");
            console.log("const promise3 = toParameterlessPromiseQueueFunc(this.dummyPromise, false, 2000);");
            console.log("const promise4 = toParameterlessPromiseQueueFunc(this.dummyPromise, true, 600);"); // const promise1 = this.dummyPromise(true, 6000);
            // const promise2 = this.dummyPromise(true, 1000);
            // const promise3 = this.dummyPromise(false, 1000);
            // const promise4 = this.dummyPromise(true, 1000);

            _b = (_a = console).log;
            _c = ["await promiseQueue([promise1, promise2, promise3, promise4], 0)"];
            return [4
            /*yield*/
            , src_1.promiseQueue([promise1, promise2, promise3, promise4], 0)];

          case 1:
            // const promise1 = this.dummyPromise(true, 6000);
            // const promise2 = this.dummyPromise(true, 1000);
            // const promise3 = this.dummyPromise(false, 1000);
            // const promise4 = this.dummyPromise(true, 1000);
            _b.apply(_a, _c.concat([_g.sent()]));

            onSuccessFunc = function onSuccessFunc(result, index) {
              console.log("The Promise with index " + index + " successfully executed. Result is:", result);
            };

            onErrorFunc = function onErrorFunc(error, index) {
              console.error("The Promise with index " + index + " failed. Error is:", error);
            };

            onSuccessFuncPromise = function onSuccessFuncPromise(result, index) {
              console.log("onSuccessFuncPromise START, wait 2s before execute next promise queue");
              return new Promise(function (resolve, reject) {
                setTimeout(function () {
                  console.log("The Promise with index " + index + " successfully executed. Result is:", result);
                  return resolve();
                }, 2000);
              });
            };

            onErrorFuncPromise = function onErrorFuncPromise(error, index) {
              console.log("onErrorFuncPromise START, wait 2s before execute next promise queue");
              return new Promise(function (resolve, reject) {
                setTimeout(function () {
                  console.error("The Promise with index " + index + " failed. Error is:", error);
                  return reject();
                }, 2000);
              });
            };

            promises = [{
              promiseFunc: promise1,
              callback: onSuccessFunc,
              onError: onErrorFunc
            }, {
              promiseFunc: promise2,
              callback: onSuccessFuncPromise,
              onError: onErrorFunc
            }, {
              promiseFunc: promise3,
              callback: onSuccessFunc,
              onError: onErrorFuncPromise
            }, {
              promiseFunc: promise4,
              callback: onSuccessFunc,
              onError: onErrorFunc
            }];
            _e = (_d = console).log;
            _f = ["await promiseQueue([promise1, promise2, promise3, promise4], 0)"];
            return [4
            /*yield*/
            , src_1.promiseQueue(promises, 0)];

          case 2:
            _e.apply(_d, _f.concat([_g.sent()]));

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  FunctionsApp.prototype.randomStringExamples = function () {
    console.log("randomString() ==> ", src_1.randomString());
    console.log("randomString(15) ==> ", src_1.randomString(15));
    console.log("randomString(6, 'abcdef0123456789') ==> ", src_1.randomString(6, 'abcdef0123456789'));
  };

  FunctionsApp.prototype.replaceNonAlphanumericExamples = function () {
    console.log("replaceNonAlphanumeric('This is a text with non alphanumberic and not underscore characters: 1234567890\xDF!\"\xA7$%&/()=?+#____<---->') ==> ", src_1.replaceNonAlphanumeric('This is a text with non alphanumberic and not underscore characters: 1234567890ß!"§$%&/()=?+#____<---->'));
    console.log("replaceNonAlphanumeric('This is a text with non alphanumberic and not underscore characters: \xF6\xE4\xFC1234567890\xDF!\"\xA7$%&/()=?+#____<---->', '*') ==> ", src_1.replaceNonAlphanumeric('This is a text with non alphanumberic and not underscore characters: öäü1234567890ß!"§$%&/()=?+#____<---->', '*'));
    console.log("randomString(6, 'abcdef0123456789') ==> ", src_1.randomString(6, 'abcdef0123456789'));
  };

  FunctionsApp.prototype.stripHTMLExamples = function () {
    console.log("stripHTML(`<div class='abc'>Hello <strong>spfxappdev</strong></div>) ==> ", src_1.stripHTML("<div class=\"abc\">Hello <strong>spfxappdev</strong></div>"));
    console.log("stripHTML(`Hello spfxappdev`) ==> ", src_1.stripHTML("Hello spfxappdev"));
  };

  FunctionsApp.prototype.toBooleanExamples = function () {
    console.log("toBoolean(true) ==> ", src_1.toBoolean(true));
    console.log("toBoolean(\"true\") ==> ", src_1.toBoolean("true"));
    console.log("toBoolean(\"1\") ==> ", src_1.toBoolean("1"));
    console.log("toBoolean(1) ==> ", src_1.toBoolean(1));
    console.log("toBoolean(false) ==> ", src_1.toBoolean(false));
    console.log("toBoolean(\"false\") ==> ", src_1.toBoolean("false"));
    console.log("toBoolean(\"0\") ==> ", src_1.toBoolean("0"));
    console.log("toBoolean(0) ==> ", src_1.toBoolean(0));
    console.log("toBoolean(2) ==> ", src_1.toBoolean(2));
    console.log("toBoolean(\"this is a string\") ==> ", src_1.toBoolean("this is a string"));
    console.log("toBoolean(\"\") ==> ", src_1.toBoolean(""));
  };

  __decorate([logger_1.log()], FunctionsApp.prototype, "ayncFnExamples", null);

  __decorate([logger_1.log()], FunctionsApp.prototype, "cssClassesExamples", null);

  __decorate([logger_1.log()], FunctionsApp.prototype, "getDeepOrDefaultExamples", null);

  __decorate([logger_1.log()], FunctionsApp.prototype, "getUrlParameterExamples", null);

  __decorate([logger_1.log()], FunctionsApp.prototype, "isFunctionExamples", null);

  __decorate([logger_1.log()], FunctionsApp.prototype, "isNullOrEmptyExamples", null);

  __decorate([logger_1.log()], FunctionsApp.prototype, "issetExamples", null);

  __decorate([logger_1.log()], FunctionsApp.prototype, "issetDeepExamples", null);

  __decorate([logger_1.log()], FunctionsApp.prototype, "isValidEmailExamples", null);

  __decorate([logger_1.log()], FunctionsApp.prototype, "promiseQueueExamples", null);

  __decorate([logger_1.log()], FunctionsApp.prototype, "randomStringExamples", null);

  __decorate([logger_1.log()], FunctionsApp.prototype, "replaceNonAlphanumericExamples", null);

  __decorate([logger_1.log()], FunctionsApp.prototype, "stripHTMLExamples", null);

  __decorate([logger_1.log()], FunctionsApp.prototype, "toBooleanExamples", null);

  return FunctionsApp;
}();

new ArrayApp().start();
new StringsApp().start();
new FunctionsApp().start();
},{"../../src/extensions/ArrayExtensions":"../../src/extensions/ArrayExtensions.ts","../../src/extensions/StringExtensions":"../../src/extensions/StringExtensions.ts","../../src":"../../src/index.ts","@spfxappdev/logger":"../node_modules/@spfxappdev/logger/lib/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59741" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","App.ts"], null)
//# sourceMappingURL=/App.7a936cda.js.map