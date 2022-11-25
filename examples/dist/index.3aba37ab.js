// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dlajg":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "faba85f43aba37ab";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"kNdr8":[function(require,module,exports) {
var _helpers = require("@swc/helpers");
var _arrayExtensions = require("../../src/extensions/ArrayExtensions");
var _stringExtensions = require("../../src/extensions/StringExtensions");
var _src = require("../../src");
var _logger = require("@spfxappdev/logger");
var _class, _dec, _dec1, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class1, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class2, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _class3, _dec42, _class4, _dec43, _dec44;
const simpleArray = [
    {
        id: _src.randomString(),
        name: "App",
        sequence: 2
    },
    {
        id: _src.randomString(),
        name: "SPFx",
        sequence: 1
    },
    {
        id: _src.randomString(),
        name: "Dev",
        sequence: 3
    }
];
let ArrayApp = (_class = class ArrayApp {
    start() {
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
    }
    simpleClone() {
        console.log("simple array:", this.simpleArray);
        return JSON.parse(JSON.stringify(this.simpleArray));
    }
    firstOrDefaultExamples() {
        var myArr = this.simpleClone();
        const spfxItem = myArr.FirstOrDefault((i)=>i.name.Equals("spfx")
        );
        console.log(spfxItem);
        const firstItem = myArr.FirstOrDefault();
        console.log(firstItem);
        const defaultItem = myArr.FirstOrDefault((i)=>i.name.Equals("404")
        , {
            id: _src.randomString(),
            name: "This is item is the default item, because the searched item was not found",
            sequence: 404
        });
        console.log(defaultItem);
        const defaultNullItem = myArr.FirstOrDefault((i)=>i.name.Equals("404")
        );
        console.log(defaultNullItem);
    }
    indexOfExamples() {
        var myArr = this.simpleClone();
        const spfxItemIndex = myArr.IndexOf((i)=>i.name.Equals("spfx")
        );
        console.log(spfxItemIndex);
        const notFoundIndex = myArr.IndexOf((i)=>i.name.Equals("404")
        );
        console.log(notFoundIndex);
    }
    whereExamples() {
        var myArr = this.simpleClone();
        const allItemsWhereSequenceGt1 = myArr.Where((i)=>i.sequence > 1
        );
        console.log(allItemsWhereSequenceGt1);
        const notFoundItems = myArr.Where((i)=>i.name.Equals("404")
        );
        console.log(notFoundItems);
    }
    orderByExamples() {
        var myArr1 = this.simpleClone();
        var myArr2 = this.simpleClone();
        const allItemsOrderedBySequence = myArr1.OrderBy((i)=>i.sequence
        );
        console.log(allItemsOrderedBySequence);
        const allItemsOrderedByName = myArr2.OrderBy((i)=>i.name
        );
        console.log(allItemsOrderedByName);
    }
    orderByDescendingExamples() {
        var myArr1 = this.simpleClone();
        var myArr2 = this.simpleClone();
        const allItemsOrderedBySequenceDescending = myArr1.OrderByDescending((i)=>i.sequence
        );
        console.log(allItemsOrderedBySequenceDescending);
        const allItemsOrderedByNameDescending = myArr2.OrderByDescending((i)=>i.name
        );
        console.log(allItemsOrderedByNameDescending);
    }
    orderByMultipleExamples() {
        var myArr1 = this.simpleClone();
        myArr1.push({
            id: _src.randomString(),
            name: "App",
            sequence: 1
        });
        const allItemsOrderedByNameAndThenSequence = myArr1.OrderByMultiple([
            (item)=>item.name
            ,
            (item)=>item.sequence
        ]);
        console.log(allItemsOrderedByNameAndThenSequence);
    }
    orderByMultipleDescendingExamples() {
        var myArr1 = this.simpleClone();
        myArr1.push({
            id: _src.randomString(),
            name: "App",
            sequence: 1
        });
        const allItemsOrderedByNameAndThenSequenceDescending = myArr1.OrderByMultipleDescending([
            (item)=>item.name
            ,
            (item)=>item.sequence
        ]);
        console.log(allItemsOrderedByNameAndThenSequenceDescending);
    }
    containsExamples() {
        var myArr = this.simpleClone();
        const containsSpfxItem = myArr.Contains((i)=>i.name.Equals("spfx")
        );
        console.log(containsSpfxItem);
        const contains404Item = myArr.Contains((i)=>i.name.Equals("404")
        );
        console.log(contains404Item);
        const multipleConditions = myArr.Contains((i)=>i.name.Equals("404") || i.name.Equals("spfx")
        );
        console.log(multipleConditions);
        const emptyArrayContains = [].Contains((i)=>i.name.Equals("404") || i.name.Equals("spfx")
        );
        console.log(emptyArrayContains);
    }
    countExamples() {
        var myArr = this.simpleClone();
        myArr.push({
            id: _src.randomString(),
            name: "App",
            sequence: 1
        });
        myArr.push({
            id: _src.randomString(),
            name: "Dev",
            sequence: 1
        });
        myArr.push({
            id: _src.randomString(),
            name: "Dev",
            sequence: 5
        });
        const totalAppItems = myArr.Count((i)=>i.name.Equals("app")
        );
        console.log(totalAppItems);
        const total404Items = myArr.Count((i)=>i.name.Equals("404")
        );
        console.log(total404Items);
        const totalAppOrDevItems = myArr.Count((i)=>i.name.Equals("app") || i.name.Equals("dEv")
        );
        console.log(totalAppOrDevItems);
        const emptyArrayCount = [].Count((i)=>i.name.Equals("404") || i.name.Equals("spfx")
        );
        console.log(emptyArrayCount);
    }
    lastOrDefaultExamples() {
        var myArr = this.simpleClone();
        myArr.push({
            id: _src.randomString(),
            name: "SPFx",
            sequence: 4
        });
        myArr.push({
            id: _src.randomString(),
            name: "SPFx",
            sequence: 5
        });
        myArr.push({
            id: _src.randomString(),
            name: "SPFx",
            sequence: 6
        });
        myArr.push({
            id: _src.randomString(),
            name: "Dev",
            sequence: 1000
        });
        const spfxItem = myArr.LastOrDefault((i)=>i.name.Equals("spfx")
        );
        console.log(spfxItem);
        const lastItem = myArr.LastOrDefault();
        console.log(lastItem);
        const defaultItem = myArr.LastOrDefault((i)=>i.name.Equals("404")
        , {
            id: _src.randomString(),
            name: "This is item is the default item, because the searched item was not found",
            sequence: 404
        });
        console.log(defaultItem);
        const defaultNullItem = myArr.LastOrDefault((i)=>i.name.Equals("404")
        );
        console.log(defaultNullItem);
        const emptyArrCheck = [].LastOrDefault((i)=>i.name.Equals("404")
        );
        console.log(emptyArrCheck);
    }
    addAtExamples() {
        var myArr = this.simpleClone();
        myArr.AddAt(0, {
            id: _src.randomString(),
            name: "First Item",
            sequence: 0
        });
        myArr.AddAt(1, {
            id: _src.randomString(),
            name: "Second Item",
            sequence: 1
        });
        myArr.AddAt(1000, {
            id: _src.randomString(),
            name: "LAST Item",
            sequence: 10000
        });
        myArr.AddAt(-3, {
            id: _src.randomString(),
            name: "LAST Item - 3",
            sequence: 10000
        });
        console.log(myArr, JSON.stringify(myArr));
    }
    removeAtExamples() {
        var myArr = this.simpleClone();
        myArr.AddAt(0, {
            id: _src.randomString(),
            name: "First Item",
            sequence: 0
        });
        myArr.AddAt(1, {
            id: _src.randomString(),
            name: "Second Item",
            sequence: 1
        });
        myArr.AddAt(1000, {
            id: _src.randomString(),
            name: "LAST Item",
            sequence: 10000
        });
        myArr.AddAt(-3, {
            id: _src.randomString(),
            name: "LAST Item - 3",
            sequence: 10000
        });
        console.log("Before remove:", [
            ...myArr
        ]);
        //Remove 2 items, starting at index 0
        myArr.RemoveAt(0, 2);
        console.log("after the first two items removed", [
            ...myArr
        ]);
        //remove the item at index 2
        myArr.RemoveAt(2);
        console.log("after the item at index 2 removed", [
            ...myArr
        ]);
        // myArr.RemoveAt(-3);
        myArr.RemoveAt(-3);
        console.log("after the item at lastitem -3 removed", [
            ...myArr
        ]);
    }
    constructor(){
        this.simpleArray = simpleArray;
    }
}, _dec = _logger.log(), _helpers.applyDecoratedDescriptor(_class.prototype, "simpleClone", [
    _dec
], Object.getOwnPropertyDescriptor(_class.prototype, "simpleClone"), _class.prototype), _dec1 = _logger.log(), _helpers.applyDecoratedDescriptor(_class.prototype, "firstOrDefaultExamples", [
    _dec1
], Object.getOwnPropertyDescriptor(_class.prototype, "firstOrDefaultExamples"), _class.prototype), _dec2 = _logger.log(), _helpers.applyDecoratedDescriptor(_class.prototype, "indexOfExamples", [
    _dec2
], Object.getOwnPropertyDescriptor(_class.prototype, "indexOfExamples"), _class.prototype), _dec3 = _logger.log(), _helpers.applyDecoratedDescriptor(_class.prototype, "whereExamples", [
    _dec3
], Object.getOwnPropertyDescriptor(_class.prototype, "whereExamples"), _class.prototype), _dec4 = _logger.log(), _helpers.applyDecoratedDescriptor(_class.prototype, "orderByExamples", [
    _dec4
], Object.getOwnPropertyDescriptor(_class.prototype, "orderByExamples"), _class.prototype), _dec5 = _logger.log(), _helpers.applyDecoratedDescriptor(_class.prototype, "orderByDescendingExamples", [
    _dec5
], Object.getOwnPropertyDescriptor(_class.prototype, "orderByDescendingExamples"), _class.prototype), _dec6 = _logger.log(), _helpers.applyDecoratedDescriptor(_class.prototype, "orderByMultipleExamples", [
    _dec6
], Object.getOwnPropertyDescriptor(_class.prototype, "orderByMultipleExamples"), _class.prototype), _dec7 = _logger.log(), _helpers.applyDecoratedDescriptor(_class.prototype, "orderByMultipleDescendingExamples", [
    _dec7
], Object.getOwnPropertyDescriptor(_class.prototype, "orderByMultipleDescendingExamples"), _class.prototype), _dec8 = _logger.log(), _helpers.applyDecoratedDescriptor(_class.prototype, "containsExamples", [
    _dec8
], Object.getOwnPropertyDescriptor(_class.prototype, "containsExamples"), _class.prototype), _dec9 = _logger.log(), _helpers.applyDecoratedDescriptor(_class.prototype, "countExamples", [
    _dec9
], Object.getOwnPropertyDescriptor(_class.prototype, "countExamples"), _class.prototype), _dec10 = _logger.log(), _helpers.applyDecoratedDescriptor(_class.prototype, "lastOrDefaultExamples", [
    _dec10
], Object.getOwnPropertyDescriptor(_class.prototype, "lastOrDefaultExamples"), _class.prototype), _dec11 = _logger.log(), _helpers.applyDecoratedDescriptor(_class.prototype, "addAtExamples", [
    _dec11
], Object.getOwnPropertyDescriptor(_class.prototype, "addAtExamples"), _class.prototype), _dec12 = _logger.log(), _helpers.applyDecoratedDescriptor(_class.prototype, "removeAtExamples", [
    _dec12
], Object.getOwnPropertyDescriptor(_class.prototype, "removeAtExamples"), _class.prototype), _class);
let StringsApp = (_class1 = class StringsApp {
    start() {
        //    this.startsWithExamples();
        //    this.endsWithExamples();
        //    this.containsExamples();
        //    this.indexOfExamples();
        //    this.insertExamples();
        //    this.equalsExamples();
        //    this.isEmptyExamples();
        this.replaceAllExamples();
    }
    startsWithExamples() {
        console.log(`${this.testString}.StartsWith('hello') ==> `, this.testString.StartsWith("hello"));
        console.log(`${this.testString}.StartsWith('hello', false) ==> `, this.testString.StartsWith("hello", false));
        console.log(`${this.testString}.StartsWith('@spfxappdev') ==> `, this.testString.StartsWith("@spfxappdev"));
    }
    endsWithExamples() {
        console.log(`${this.testString}.EndsWith('@SPFxAppDev/Utility') ==> `, this.testString.EndsWith("@SPFxAppDev/Utility"));
        console.log(`${this.testString}.EndsWith('@SPFxAppDev/Utility', false) ==> `, this.testString.EndsWith("@SPFxAppDev/Utility", false));
        console.log(`${this.testString}.EndsWith('@spfxappdev') ==> `, this.testString.EndsWith("@spfxappdev"));
    }
    containsExamples() {
        console.log(`${this.testString}.Contains('@SPFxAppDev/Utility') ==> `, this.testString.Contains("@SPFxAppDev/Utility"));
        console.log(`${this.testString}.Contains('@SPFxAppDev/Utility', false) ==> `, this.testString.Contains("@SPFxAppDev/Utility", false));
        console.log(`${this.testString}.Contains('404') ==> `, this.testString.Contains("404"));
    }
    indexOfExamples() {
        console.log(`${this.testString}.IndexOf('@SPFxAppDev/Utility') ==> `, this.testString.IndexOf("@SPFxAppDev/Utility"));
        console.log(`${this.testString}.IndexOf('@SPFxAppDev/Utility', false) ==> `, this.testString.IndexOf("@SPFxAppDev/Utility", false));
        console.log(`${this.testString}.IndexOf('404') ==> `, this.testString.IndexOf("404"));
    }
    insertExamples() {
        console.log(`${this.testString}.Insert(5, " from") ==> `, this.testString.Insert(5, " from"));
        console.log(`${this.testString}.Insert(255, " insert to end") ==> `, this.testString.Insert(255, " insert to end"));
    }
    equalsExamples() {
        console.log(`${this.testString}.Equals('HeLlO @SPFxAppDev/UTILITY') ==> `, this.testString.Equals("HeLlO @SPFxAppDev/UTILITY"));
        console.log(`${this.testString}.Equals('HeLlO @SPFxAppDev/UTILITY', false) ==> `, this.testString.Equals("HeLlO @SPFxAppDev/UTILITY", false));
        console.log(`${this.testString}.Equals('404') ==> `, this.testString.Equals("404"));
    }
    isEmptyExamples() {
        console.log(`${this.testString}.IsEmpty() ==> `, this.testString.IsEmpty());
        console.log(`"".IsEmpty() ==> `, "".IsEmpty());
        console.log(`"     ".IsEmpty() ==> `, "     ".IsEmpty());
    }
    replaceAllExamples() {
        console.log(`"Helloo Woorld, welcoome too string extensioons".ReplaceAll() ==> `, "Helloo Woorld, welcoome too string extensioons".ReplaceAll("oo", "o")); //Hello World, welcome to string extensions
        console.log(`"".IsEmpty() ==> `, "".IsEmpty());
        console.log(`"     ".IsEmpty() ==> `, "     ".IsEmpty());
    }
    constructor(){
        this.testString = "Hello @spfxappdev/utility";
    }
}, _dec13 = _logger.log(), _helpers.applyDecoratedDescriptor(_class1.prototype, "startsWithExamples", [
    _dec13
], Object.getOwnPropertyDescriptor(_class1.prototype, "startsWithExamples"), _class1.prototype), _dec14 = _logger.log(), _helpers.applyDecoratedDescriptor(_class1.prototype, "endsWithExamples", [
    _dec14
], Object.getOwnPropertyDescriptor(_class1.prototype, "endsWithExamples"), _class1.prototype), _dec15 = _logger.log(), _helpers.applyDecoratedDescriptor(_class1.prototype, "containsExamples", [
    _dec15
], Object.getOwnPropertyDescriptor(_class1.prototype, "containsExamples"), _class1.prototype), _dec16 = _logger.log(), _helpers.applyDecoratedDescriptor(_class1.prototype, "indexOfExamples", [
    _dec16
], Object.getOwnPropertyDescriptor(_class1.prototype, "indexOfExamples"), _class1.prototype), _dec17 = _logger.log(), _helpers.applyDecoratedDescriptor(_class1.prototype, "insertExamples", [
    _dec17
], Object.getOwnPropertyDescriptor(_class1.prototype, "insertExamples"), _class1.prototype), _dec18 = _logger.log(), _helpers.applyDecoratedDescriptor(_class1.prototype, "equalsExamples", [
    _dec18
], Object.getOwnPropertyDescriptor(_class1.prototype, "equalsExamples"), _class1.prototype), _dec19 = _logger.log(), _helpers.applyDecoratedDescriptor(_class1.prototype, "isEmptyExamples", [
    _dec19
], Object.getOwnPropertyDescriptor(_class1.prototype, "isEmptyExamples"), _class1.prototype), _dec20 = _logger.log(), _helpers.applyDecoratedDescriptor(_class1.prototype, "replaceAllExamples", [
    _dec20
], Object.getOwnPropertyDescriptor(_class1.prototype, "replaceAllExamples"), _class1.prototype), _class1);
let FunctionsApp = (_class2 = class FunctionsApp {
    start() {
        // this.ayncFnExamples();
        // this.cssClassesExamples();
        // this.getDeepOrDefaultExamples();
        // this.getUrlParameterExamples();
        // this.isFunctionExamples();
        // this.isNullOrEmptyExamples();
        // this.issetExamples();
        // this.issetDeepExamples();
        // this.isValidEmailExamples();
        // this.promiseQueueExamples();
        // this.randomStringExamples();
        // this.replaceNonAlphanumericExamples();
        // this.stripHTMLExamples();
        // this.toBooleanExamples();
        this.replaceTplExample();
        this.removeAllUrlParametersExample();
        this.formatDateExample();
        this.wokdaysExample();
        this.firstAndLastDateExample();
        this.weekNumberExample();
        this.firstAndLastWeekDateExample();
    }
    dummyPromise(success = true, delay = 5000) {
        console.log("dummyPromise START");
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if (success) {
                    console.log("IN dummyPromise success ", delay);
                    return resolve(`Success after ${delay}ms`);
                }
                console.log("IN dummyPromise fail ", delay);
                return reject(`Error after ${delay}ms`);
            }, delay);
        });
    }
    parameterlessPromiseFunc() {
        console.log("parameterlessPromiseFunc START");
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                return resolve(`Success parameterlessPromiseFunc`);
            }, 5000);
        });
    }
    async ayncFnExamples() {
        const [result, error] = await _src.asyncFn(this.dummyPromise(true, 2000));
        console.log(result, error);
        if (error) console.error("ERROR occurred...");
        const [result2, error2] = await _src.asyncFn(this.dummyPromise(false, 2000));
        console.log(result2, error2);
        if (error2) console.error("ERROR occurred...");
    }
    cssClassesExamples() {
        console.log(`cssClasses('spfx-app-dev', 'theme') ==> `, _src.cssClasses('spfx-app-dev', 'theme'));
        console.log(`cssClasses('spfx-app-dev', { theme: false }) ==> `, _src.cssClasses('spfx-app-dev', {
            theme: false
        }));
        console.log(`cssClasses('spfx-app-dev', ['theme', { active: true, item: false }, null, false, undefined, 0, 1, 'container']) ==> `, _src.cssClasses('spfx-app-dev', [
            'theme',
            {
                active: true,
                item: false
            },
            null,
            false,
            undefined,
            0,
            1,
            'container'
        ]));
    }
    getDeepOrDefaultExamples() {
        const myObj = {
            My: {
                nested: {
                    property: "Hello from nested Property"
                }
            },
            items: simpleArray
        };
        console.log(myObj, `getDeepOrDefault(myObj, "My.nested.property") ==> `, _src.getDeepOrDefault(myObj, "My.nested.property"));
        console.log(myObj, `ARRAY: getDeepOrDefault(myObj, "items.2") ==> `, _src.getDeepOrDefault(myObj, "items.2"));
        const arr = _src.getDeepOrDefault(myObj, "items");
        console.log(myObj, `TypeSafe: getDeepOrDefault<ISimpleItem[]>(myObj, "items") ==> `, arr);
        console.log(myObj, `Default: getDeepOrDefault(myObj, "404", "this string is returend as default, because 404 does not exist in myObj") ==> `, _src.getDeepOrDefault(myObj, "404", "this string is returend as default, because 404 does not exist in myObj"));
    }
    getUrlParameterExamples() {
        console.log(`getUrlParameter("from-window-location") ==> `, _src.getUrlParameter("from-window-location"));
        console.log(`getUrlParameter("from-passed-url", 'http://localhost:1234/?from-passed-url=hello') ==> `, _src.getUrlParameter("from-passed-url", 'http://localhost:1234/?from-passed-url=hello'));
        console.log(`getUrlParameter("anotherparam", 'http://localhost:1234/?from-passed-url=hello&anotherparam=2') ==> `, _src.getUrlParameter("anotherparam", 'http://localhost:1234/?from-passed-url=hello&anotherparam=2'));
    }
    isFunctionExamples() {
        console.log(`isFunction("this is a string") ==> `, _src.isFunction("this is a string"));
        console.log(`isFunction(1) ==> `, _src.isFunction(1));
        console.log(`isFunction(() => { }) ==> `, _src.isFunction(()=>{
        }));
        console.log(`isFunction(window.addEventListener) ==> `, _src.isFunction(window.addEventListener));
    }
    isNullOrEmptyExamples() {
        console.log(`isNullOrEmpty("this is a string") ==> `, _src.isNullOrEmpty("this is a string"));
        console.log(`isNullOrEmpty(1) ==> `, _src.isNullOrEmpty(1));
        console.log(`isNullOrEmpty(() => { }) ==> `, _src.isNullOrEmpty(()=>{
        }));
        console.log(`isNullOrEmpty(null) ==> `, _src.isNullOrEmpty(null));
        console.log(`isNullOrEmpty(undefined) ==> `, _src.isNullOrEmpty(undefined));
        console.log(`isNullOrEmpty([]) ==> `, _src.isNullOrEmpty([]));
        console.log(`isNullOrEmpty([1,2]) ==> `, _src.isNullOrEmpty([
            1,
            2
        ]));
        console.log(`isNullOrEmpty({}) ==> `, _src.isNullOrEmpty({
        }));
        console.log(`isNullOrEmpty("") ==> `, _src.isNullOrEmpty(""));
        console.log(`isNullOrEmpty("     ") ==> `, _src.isNullOrEmpty("     "));
    }
    issetExamples() {
        console.log(`isset("this is a string") ==> `, _src.isset("this is a string"));
        console.log(`isset(1) ==> `, _src.isset(1));
        console.log(`isset(() => { }) ==> `, _src.isset(()=>{
        }));
        console.log(`isset(null) ==> `, _src.isset(null));
        console.log(`isset(undefined) ==> `, _src.isset(undefined));
        console.log(`isset([]) ==> `, _src.isset([]));
        console.log(`isset([1,2]) ==> `, _src.isset([
            1,
            2
        ]));
        console.log(`isset({}) ==> `, _src.isset({
        }));
        console.log(`isset("") ==> `, _src.isset(""));
        console.log(`isset("     ") ==> `, _src.isset("     "));
    }
    issetDeepExamples() {
        const myObj = {
            My: {
                nested: {
                    property: "Hello from nested Property"
                }
            },
            items: simpleArray
        };
        console.log(myObj, `issetDeep(myObj, "My.nested.property") ==> `, _src.issetDeep(myObj, "My.nested.property"));
        console.log(myObj, `ARRAY: issetDeep(myObj, "items.2") ==> `, _src.issetDeep(myObj, "items.2"));
        console.log(myObj, `Not set: issetDeep(myObj, "404") ==> `, _src.issetDeep(myObj, "404"));
    }
    isValidEmailExamples() {
        console.log(`isValidEmail('seryoga@spfx-app.dev') ==> `, _src.isValidEmail('seryoga@spfx-app.dev'));
        console.log(`isValidEmail('spfx-app.dev') ==> `, _src.isValidEmail('spfx-app.dev'));
        console.log(`isValidEmail('my@mail.c') ==> `, _src.isValidEmail('my@mail.c'));
        console.log(`isValidEmail('my@mail.12') ==> `, _src.isValidEmail('my@mail.12'));
        console.log(`isValidEmail('my@mail.co') ==> `, _src.isValidEmail('my@mail.co'));
    }
    async promiseQueueExamples() {
        const promise1 = _src.toParameterlessPromiseQueueFunc(this.dummyPromise, true, 10000);
        const promise2 = this.parameterlessPromiseFunc;
        const promise3 = _src.toParameterlessPromiseQueueFunc(this.dummyPromise, false, 2000);
        const promise4 = _src.toParameterlessPromiseQueueFunc(this.dummyPromise, true, 600);
        console.log("const promise1 = toParameterlessPromiseQueueFunc(this.dummyPromise, true, 10000);");
        console.log("const promise2 = this.parameterlessPromiseFunc;");
        console.log("const promise3 = toParameterlessPromiseQueueFunc(this.dummyPromise, false, 2000);");
        console.log("const promise4 = toParameterlessPromiseQueueFunc(this.dummyPromise, true, 600);");
        // const promise1 = this.dummyPromise(true, 6000);
        // const promise2 = this.dummyPromise(true, 1000);
        // const promise3 = this.dummyPromise(false, 1000);
        // const promise4 = this.dummyPromise(true, 1000);
        console.log(`await promiseQueue([promise1, promise2, promise3, promise4], 0)`, await _src.promiseQueue([
            promise1,
            promise2,
            promise3,
            promise4
        ], 0));
        const onSuccessFunc = (result, index)=>{
            console.log(`The Promise with index ${index} successfully executed. Result is:`, result);
        };
        const onErrorFunc = (error, index)=>{
            console.error(`The Promise with index ${index} failed. Error is:`, error);
        };
        const onSuccessFuncPromise = (result, index)=>{
            console.log("onSuccessFuncPromise START, wait 2s before execute next promise queue");
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    console.log(`The Promise with index ${index} successfully executed. Result is:`, result);
                    return resolve();
                }, 2000);
            });
        };
        const onErrorFuncPromise = (error, index)=>{
            console.log("onErrorFuncPromise START, wait 2s before execute next promise queue");
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    console.error(`The Promise with index ${index} failed. Error is:`, error);
                    return reject();
                }, 2000);
            });
        };
        const promises = [
            {
                promiseFunc: promise1,
                callback: onSuccessFunc,
                onError: onErrorFunc
            },
            {
                promiseFunc: promise2,
                callback: onSuccessFuncPromise,
                onError: onErrorFunc
            },
            {
                promiseFunc: promise3,
                callback: onSuccessFunc,
                onError: onErrorFuncPromise
            },
            {
                promiseFunc: promise4,
                callback: onSuccessFunc,
                onError: onErrorFunc
            }
        ];
        console.log(`await promiseQueue([promise1, promise2, promise3, promise4], 0)`, await _src.promiseQueue(promises, 0));
    }
    randomStringExamples() {
        console.log(`randomString() ==> `, _src.randomString());
        console.log(`randomString(15) ==> `, _src.randomString(15));
        console.log(`randomString(6, 'abcdef0123456789') ==> `, _src.randomString(6, 'abcdef0123456789'));
    }
    replaceNonAlphanumericExamples() {
        console.log(`replaceNonAlphanumeric('This is a text with non alphanumberic and not underscore characters: 1234567890ß!"§$%&/()=?+#____<---->') ==> `, _src.replaceNonAlphanumeric('This is a text with non alphanumberic and not underscore characters: 1234567890ß!"§$%&/()=?+#____<---->'));
        console.log(`replaceNonAlphanumeric('This is a text with non alphanumberic and not underscore characters: öäü1234567890ß!"§$%&/()=?+#____<---->', '*') ==> `, _src.replaceNonAlphanumeric('This is a text with non alphanumberic and not underscore characters: öäü1234567890ß!"§$%&/()=?+#____<---->', '*'));
        console.log(`randomString(6, 'abcdef0123456789') ==> `, _src.randomString(6, 'abcdef0123456789'));
    }
    stripHTMLExamples() {
        console.log("stripHTML(`<div class='abc'>Hello <strong>spfxappdev</strong></div>) ==> ", _src.stripHTML(`<div class="abc">Hello <strong>spfxappdev</strong></div>`));
        console.log("stripHTML(`Hello spfxappdev`) ==> ", _src.stripHTML(`Hello spfxappdev`));
    }
    toBooleanExamples() {
        console.log(`toBoolean(true) ==> `, _src.toBoolean(true));
        console.log(`toBoolean("true") ==> `, _src.toBoolean("true"));
        console.log(`toBoolean("1") ==> `, _src.toBoolean("1"));
        console.log(`toBoolean(1) ==> `, _src.toBoolean(1));
        console.log(`toBoolean(false) ==> `, _src.toBoolean(false));
        console.log(`toBoolean("false") ==> `, _src.toBoolean("false"));
        console.log(`toBoolean("0") ==> `, _src.toBoolean("0"));
        console.log(`toBoolean(0) ==> `, _src.toBoolean(0));
        console.log(`toBoolean(2) ==> `, _src.toBoolean(2));
        console.log(`toBoolean("this is a string") ==> `, _src.toBoolean("this is a string"));
        console.log(`toBoolean("") ==> `, _src.toBoolean(""));
    }
    replaceTplExample() {
        console.log(_src.replaceTpl("Hello {UserName}. Welcome {UserName}, this placeholder is not available: {SPFxAppDev}", {
            UserName: "SPFxAppDev"
        }));
        //Hello SPFxAppDev. Welcome SPFxAppDev, this placeholder is not available: {SPFxAppDev}
        console.log(_src.replaceTpl("Hello {User.FirstName} {User.LastName}, last login: {User.LastLogin}", {
            User: {
                FirstName: "SPFxApp",
                LastName: "Dev",
                LastLogin: ()=>{
                    return new Date().toString();
                }
            }
        }));
        //Hello SPFxApp Dev, last login: Tue Nov 15 2022 15:59:34 GMT+0100 (Central European Standard Time)
        console.log(_src.replaceTpl("Hello {404}", {
            User: {
                FirstName: "SPFxApp",
                LastName: "Dev"
            }
        }, ""));
    //Hello 
    }
    removeAllUrlParametersExample() {
        console.log(_src.removeAllParametersFromUrl("https://spfx-app.dev#firstAnchor#secondAnchor"));
        //removeAllParametersFromUrl("https://spfx-app.dev#firstAnchor#secondAnchor")
        console.log(_src.removeAllParametersFromUrl("https://spfx-app.dev/path1/path2?param1=1&param2=2#firstAnchor#secondAnchor"));
        //https://spfx-app.dev/path1/path2
        console.log(_src.removeAllParametersFromUrl("https://spfx-app.dev/#/routedpath"));
    //https://spfx-app.dev/
    }
    formatDateExample() {
        console.log(_src.formatDate("dd.MM.yyyy")); //Now ==> 14.11.2022
        console.log(_src.formatDate("MM/dd/yyyy", new Date(2022, 1, 1))); //result: 02/01/2022
        console.log(_src.formatDate("M/d/yy", new Date(2022, 1, 1))); // result: 2/1/22
    }
    wokdaysExample() {
        console.log(_src.countWorkdays()); //workdays in November 2022, Monday-Friday ==> 22
        console.log(_src.countWorkdays(new Date(2022, 10, 14))); //workdays from 14th November 2022 until end of month, Monday-Friday ==> 13
        console.log(_src.countWorkdays(new Date(2022, 10, 14), new Date(2022, 10, 20))); //workdays from 14th November 2022 until 20th Nov 2022, Monday-Friday ==> 5
        console.log(_src.countWorkdays(undefined, undefined, 1, _src.Weekday.Saturday)); //workdays in November 2022, Monday-Saturday ==> 26
        console.log(_src.countWorkdays(new Date(2022, 11, 1), undefined, undefined, undefined, [
            new Date(2022, 11, 24),
            new Date(2022, 11, 25),
            new Date(2022, 11, 26),
            new Date(2022, 11, 31)
        ])); //workdays in December 2022, Monday-Friday and day off (24-26th + 31st) ==> 21
    }
    firstAndLastDateExample() {
        console.log("First date of current month is: ", _src.firstDayOfMonth()); //Tue Nov 01 2022
        console.log("Last date of current month is: ", _src.lastDayOfMonth()); //Wed Nov 30 2022
        console.log("First date of 15 February 2022 is: ", _src.firstDayOfMonth(new Date(2022, 1, 15))); //Tue Feb 01 2022
        console.log("Last date of 15 February 2022 is: ", _src.lastDayOfMonth(new Date(2022, 1, 15))); //Mon Feb 28 2022
    }
    firstAndLastWeekDateExample() {
        console.log("First date of current week is: ", _src.firstDayOfWeek()); //Mon Nov 14 2022
        console.log("Last date of current week is: ", _src.lastDayOfWeek()); //Sun Nov 20 2022
        console.log("First date of week of 15 February 2022 is: ", _src.firstDayOfWeek(new Date(2022, 1, 15))); //Mon Feb 14 2022
        console.log("Last date of week of 15 February 2022 is: ", _src.lastDayOfWeek(new Date(2022, 1, 15))); //Sun Feb 20 2022
        console.log("First date of current week by starting with Sunday is: ", _src.firstDayOfWeek(null, _src.Weekday.Sunday)); //Sun Nov 13 2022
        console.log("Last date of current week by starting with Sunday is: ", _src.lastDayOfWeek(null, _src.Weekday.Sunday)); //Sat Nov 19 2022
    }
    weekNumberExample() {
        console.log("Current week number: ", _src.weekNumber()); //2022 Nov 14 ==> 46
        console.log("15 February 2022 week number: ", _src.weekNumber(new Date(2022, 1, 15))); //2022 Feb 15 ==> 7
        console.log("30 December 2019 week number: ", _src.weekNumber(new Date(2019, 11, 30))); //2019 Dec 30 (special case) ==> 1
    }
    constructor(){
        this.testString = "Hello @spfxappdev/utility";
    }
}, _dec21 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "ayncFnExamples", [
    _dec21
], Object.getOwnPropertyDescriptor(_class2.prototype, "ayncFnExamples"), _class2.prototype), _dec22 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "cssClassesExamples", [
    _dec22
], Object.getOwnPropertyDescriptor(_class2.prototype, "cssClassesExamples"), _class2.prototype), _dec23 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "getDeepOrDefaultExamples", [
    _dec23
], Object.getOwnPropertyDescriptor(_class2.prototype, "getDeepOrDefaultExamples"), _class2.prototype), _dec24 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "getUrlParameterExamples", [
    _dec24
], Object.getOwnPropertyDescriptor(_class2.prototype, "getUrlParameterExamples"), _class2.prototype), _dec25 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "isFunctionExamples", [
    _dec25
], Object.getOwnPropertyDescriptor(_class2.prototype, "isFunctionExamples"), _class2.prototype), _dec26 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "isNullOrEmptyExamples", [
    _dec26
], Object.getOwnPropertyDescriptor(_class2.prototype, "isNullOrEmptyExamples"), _class2.prototype), _dec27 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "issetExamples", [
    _dec27
], Object.getOwnPropertyDescriptor(_class2.prototype, "issetExamples"), _class2.prototype), _dec28 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "issetDeepExamples", [
    _dec28
], Object.getOwnPropertyDescriptor(_class2.prototype, "issetDeepExamples"), _class2.prototype), _dec29 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "isValidEmailExamples", [
    _dec29
], Object.getOwnPropertyDescriptor(_class2.prototype, "isValidEmailExamples"), _class2.prototype), _dec30 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "promiseQueueExamples", [
    _dec30
], Object.getOwnPropertyDescriptor(_class2.prototype, "promiseQueueExamples"), _class2.prototype), _dec31 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "randomStringExamples", [
    _dec31
], Object.getOwnPropertyDescriptor(_class2.prototype, "randomStringExamples"), _class2.prototype), _dec32 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "replaceNonAlphanumericExamples", [
    _dec32
], Object.getOwnPropertyDescriptor(_class2.prototype, "replaceNonAlphanumericExamples"), _class2.prototype), _dec33 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "stripHTMLExamples", [
    _dec33
], Object.getOwnPropertyDescriptor(_class2.prototype, "stripHTMLExamples"), _class2.prototype), _dec34 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "toBooleanExamples", [
    _dec34
], Object.getOwnPropertyDescriptor(_class2.prototype, "toBooleanExamples"), _class2.prototype), _dec35 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "replaceTplExample", [
    _dec35
], Object.getOwnPropertyDescriptor(_class2.prototype, "replaceTplExample"), _class2.prototype), _dec36 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "removeAllUrlParametersExample", [
    _dec36
], Object.getOwnPropertyDescriptor(_class2.prototype, "removeAllUrlParametersExample"), _class2.prototype), _dec37 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "formatDateExample", [
    _dec37
], Object.getOwnPropertyDescriptor(_class2.prototype, "formatDateExample"), _class2.prototype), _dec38 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "wokdaysExample", [
    _dec38
], Object.getOwnPropertyDescriptor(_class2.prototype, "wokdaysExample"), _class2.prototype), _dec39 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "firstAndLastDateExample", [
    _dec39
], Object.getOwnPropertyDescriptor(_class2.prototype, "firstAndLastDateExample"), _class2.prototype), _dec40 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "firstAndLastWeekDateExample", [
    _dec40
], Object.getOwnPropertyDescriptor(_class2.prototype, "firstAndLastWeekDateExample"), _class2.prototype), _dec41 = _logger.log(), _helpers.applyDecoratedDescriptor(_class2.prototype, "weekNumberExample", [
    _dec41
], Object.getOwnPropertyDescriptor(_class2.prototype, "weekNumberExample"), _class2.prototype), _class2);
let ClassesApp = (_class3 = class ClassesApp {
    start() {
        this.uriExample();
    }
    uriExample() {
        const u1 = new _src.Uri("https://spfx-app.dev#firstAnchor#secondAnchor");
        console.log(u1.toString()); //https://spfx-app.dev#firstAnchor#secondAnchor
        u1.Combine("/api/v1/user");
        console.log(u1.toString()); //https://spfx-app.dev/api/v1/user#secondAnchor
        u1.Parameters.add("page", "1");
        u1.Parameters.add("sort", "title");
        console.log(u1.toString()); //ttps://spfx-app.dev/api/v1/user?page=1&sort=title#secondAnchor
        u1.Parameters.remove("sort");
        console.log(u1.toString()); //https://spfx-app.dev/api/v1/user?page=1#secondAnchor
        u1.Parameters.add("page", "2");
        console.log(u1.toString()); //https://spfx-app.dev/api/v1/user?page=2#secondAnchor
        u1.Hash = "newAnchor";
        console.log(u1.toString()); //https://spfx-app.dev/api/v1/user?page=2#newAnchor
    }
}, _dec42 = _logger.log(), _helpers.applyDecoratedDescriptor(_class3.prototype, "uriExample", [
    _dec42
], Object.getOwnPropertyDescriptor(_class3.prototype, "uriExample"), _class3.prototype), _class3);
class EventExample extends _src.EventListenerBase {
    Execute(name, lastEventResult, ...args) {
        if (name.Equals("exampleListener", true)) {
            const text = _src.getDeepOrDefault(lastEventResult, "Result", args[0]);
            this.Result = text + " and this text was added in Listener";
        } else {
            args[0] = "changed original";
            this.Result = args[0];
        }
        return this;
    }
}
let EventListenerApp = (_class4 = class EventListenerApp {
    start() {
        this.registerEventListenerExample();
        this.fireEventExample();
    }
    registerEventListenerExample() {
        _src.EventHandler.Listen("exampleListener", new EventExample(), "uniqueEventId");
        _src.EventHandler.Listen("exampleListener", new EventExample(), "abc");
        _src.EventHandler.Listen("exampleListener2", new EventExample(), "uniqueEventId2");
    }
    fireEventExample() {
        console.log(_src.EventHandler.Fire("exampleListener", "This is a dummy event"));
        console.log(_src.EventHandler.Fire("exampleListener", "This is a dummy event2"));
    }
}, _dec43 = _logger.log(), _helpers.applyDecoratedDescriptor(_class4.prototype, "registerEventListenerExample", [
    _dec43
], Object.getOwnPropertyDescriptor(_class4.prototype, "registerEventListenerExample"), _class4.prototype), _dec44 = _logger.log(), _helpers.applyDecoratedDescriptor(_class4.prototype, "fireEventExample", [
    _dec44
], Object.getOwnPropertyDescriptor(_class4.prototype, "fireEventExample"), _class4.prototype), _class4);
// new ArrayApp().start();
new StringsApp().start();
new FunctionsApp().start();
new ClassesApp().start();
new EventListenerApp().start();

},{"@swc/helpers":"astOH","../../src/extensions/ArrayExtensions":"5yfXX","../../src/extensions/StringExtensions":"djiyg","../../src":"ljGDl","@spfxappdev/logger":"ibqB2"}],"astOH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyDecoratedDescriptor", ()=>_applyDecoratedDescriptorDefault.default
);
parcelHelpers.export(exports, "arrayWithHoles", ()=>_arrayWithHolesDefault.default
);
parcelHelpers.export(exports, "arrayWithoutHoles", ()=>_arrayWithoutHolesDefault.default
);
parcelHelpers.export(exports, "assertThisInitialized", ()=>_assertThisInitializedDefault.default
);
parcelHelpers.export(exports, "asyncGenerator", ()=>_asyncGeneratorDefault.default
);
parcelHelpers.export(exports, "asyncGeneratorDelegate", ()=>_asyncGeneratorDelegateDefault.default
);
parcelHelpers.export(exports, "asyncIterator", ()=>_asyncIteratorDefault.default
);
parcelHelpers.export(exports, "asyncToGenerator", ()=>_asyncToGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitAsyncGenerator", ()=>_awaitAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitValue", ()=>_awaitValueDefault.default
);
parcelHelpers.export(exports, "classCallCheck", ()=>_classCallCheckDefault.default
);
parcelHelpers.export(exports, "classNameTDZError", ()=>_classNameTdzErrorDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldGet", ()=>_classPrivateFieldGetDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldLooseBase", ()=>_classPrivateFieldLooseBaseDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldSet", ()=>_classPrivateFieldSetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodGet", ()=>_classPrivateMethodGetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodSet", ()=>_classPrivateMethodSetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecGet", ()=>_classStaticPrivateFieldSpecGetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecSet", ()=>_classStaticPrivateFieldSpecSetDefault.default
);
parcelHelpers.export(exports, "construct", ()=>_constructDefault.default
);
parcelHelpers.export(exports, "createClass", ()=>_createClassDefault.default
);
parcelHelpers.export(exports, "decorate", ()=>_decorateDefault.default
);
parcelHelpers.export(exports, "defaults", ()=>_defaultsDefault.default
);
parcelHelpers.export(exports, "defineEnumerableProperties", ()=>_defineEnumerablePropertiesDefault.default
);
parcelHelpers.export(exports, "defineProperty", ()=>_definePropertyDefault.default
);
parcelHelpers.export(exports, "extends", ()=>_extendsDefault.default
);
parcelHelpers.export(exports, "get", ()=>_getDefault.default
);
parcelHelpers.export(exports, "getPrototypeOf", ()=>_getPrototypeOfDefault.default
);
parcelHelpers.export(exports, "inherits", ()=>_inheritsDefault.default
);
parcelHelpers.export(exports, "inheritsLoose", ()=>_inheritsLooseDefault.default
);
parcelHelpers.export(exports, "initializerDefineProperty", ()=>_initializerDefinePropertyDefault.default
);
parcelHelpers.export(exports, "initializerWarningHelper", ()=>_initializerWarningHelperDefault.default
);
parcelHelpers.export(exports, "_instanceof", ()=>_instanceofDefault.default
);
parcelHelpers.export(exports, "interopRequireDefault", ()=>_interopRequireDefaultDefault.default
);
parcelHelpers.export(exports, "interopRequireWildcard", ()=>_interopRequireWildcardDefault.default
);
parcelHelpers.export(exports, "isNativeFunction", ()=>_isNativeFunctionDefault.default
);
parcelHelpers.export(exports, "iterableToArray", ()=>_iterableToArrayDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimit", ()=>_iterableToArrayLimitDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimitLoose", ()=>_iterableToArrayLimitLooseDefault.default
);
parcelHelpers.export(exports, "jsx", ()=>_jsxDefault.default
);
parcelHelpers.export(exports, "newArrowCheck", ()=>_newArrowCheckDefault.default
);
parcelHelpers.export(exports, "nonIterableRest", ()=>_nonIterableRestDefault.default
);
parcelHelpers.export(exports, "nonIterableSpread", ()=>_nonIterableSpreadDefault.default
);
parcelHelpers.export(exports, "objectSpread", ()=>_objectSpreadDefault.default
);
parcelHelpers.export(exports, "objectWithoutProperties", ()=>_objectWithoutPropertiesDefault.default
);
parcelHelpers.export(exports, "objectWithoutPropertiesLoose", ()=>_objectWithoutPropertiesLooseDefault.default
);
parcelHelpers.export(exports, "possibleConstructorReturn", ()=>_possibleConstructorReturnDefault.default
);
parcelHelpers.export(exports, "readOnlyError", ()=>_readOnlyErrorDefault.default
);
parcelHelpers.export(exports, "set", ()=>_setDefault.default
);
parcelHelpers.export(exports, "setPrototypeOf", ()=>_setPrototypeOfDefault.default
);
parcelHelpers.export(exports, "skipFirstGeneratorNext", ()=>_skipFirstGeneratorNextDefault.default
);
parcelHelpers.export(exports, "slicedToArray", ()=>_slicedToArrayDefault.default
);
parcelHelpers.export(exports, "slicedToArrayLoose", ()=>_slicedToArrayLooseDefault.default
);
parcelHelpers.export(exports, "superPropBase", ()=>_superPropBaseDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteral", ()=>_taggedTemplateLiteralDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteralLoose", ()=>_taggedTemplateLiteralLooseDefault.default
);
parcelHelpers.export(exports, "_throw", ()=>_throwDefault.default
);
parcelHelpers.export(exports, "toArray", ()=>_toArrayDefault.default
);
parcelHelpers.export(exports, "toConsumableArray", ()=>_toConsumableArrayDefault.default
);
parcelHelpers.export(exports, "toPrimitive", ()=>_toPrimitiveDefault.default
);
parcelHelpers.export(exports, "toPropertyKey", ()=>_toPropertyKeyDefault.default
);
parcelHelpers.export(exports, "typeOf", ()=>_typeOfDefault.default
);
parcelHelpers.export(exports, "wrapAsyncGenerator", ()=>_wrapAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "wrapNativeSuper", ()=>_wrapNativeSuperDefault.default
);
var _applyDecoratedDescriptor = require("./_apply_decorated_descriptor");
var _applyDecoratedDescriptorDefault = parcelHelpers.interopDefault(_applyDecoratedDescriptor);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
var _asyncGeneratorDelegate = require("./_async_generator_delegate");
var _asyncGeneratorDelegateDefault = parcelHelpers.interopDefault(_asyncGeneratorDelegate);
var _asyncIterator = require("./_async_iterator");
var _asyncIteratorDefault = parcelHelpers.interopDefault(_asyncIterator);
var _asyncToGenerator = require("./_async_to_generator");
var _asyncToGeneratorDefault = parcelHelpers.interopDefault(_asyncToGenerator);
var _awaitAsyncGenerator = require("./_await_async_generator");
var _awaitAsyncGeneratorDefault = parcelHelpers.interopDefault(_awaitAsyncGenerator);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
var _classCallCheck = require("./_class_call_check");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _classNameTdzError = require("./_class_name_tdz_error");
var _classNameTdzErrorDefault = parcelHelpers.interopDefault(_classNameTdzError);
var _classPrivateFieldGet = require("./_class_private_field_get");
var _classPrivateFieldGetDefault = parcelHelpers.interopDefault(_classPrivateFieldGet);
var _classPrivateFieldLooseBase = require("./_class_private_field_loose_base");
var _classPrivateFieldLooseBaseDefault = parcelHelpers.interopDefault(_classPrivateFieldLooseBase);
var _classPrivateFieldSet = require("./_class_private_field_set");
var _classPrivateFieldSetDefault = parcelHelpers.interopDefault(_classPrivateFieldSet);
var _classPrivateMethodGet = require("./_class_private_method_get");
var _classPrivateMethodGetDefault = parcelHelpers.interopDefault(_classPrivateMethodGet);
var _classPrivateMethodSet = require("./_class_private_method_set");
var _classPrivateMethodSetDefault = parcelHelpers.interopDefault(_classPrivateMethodSet);
var _classStaticPrivateFieldSpecGet = require("./_class_static_private_field_spec_get");
var _classStaticPrivateFieldSpecGetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecGet);
var _classStaticPrivateFieldSpecSet = require("./_class_static_private_field_spec_set");
var _classStaticPrivateFieldSpecSetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecSet);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _createClass = require("./_create_class");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _decorate = require("./_decorate");
var _decorateDefault = parcelHelpers.interopDefault(_decorate);
var _defaults = require("./_defaults");
var _defaultsDefault = parcelHelpers.interopDefault(_defaults);
var _defineEnumerableProperties = require("./_define_enumerable_properties");
var _defineEnumerablePropertiesDefault = parcelHelpers.interopDefault(_defineEnumerableProperties);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("./_extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _get = require("./_get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _inherits = require("./_inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _inheritsLoose = require("./_inherits_loose");
var _inheritsLooseDefault = parcelHelpers.interopDefault(_inheritsLoose);
var _initializerDefineProperty = require("./_initializer_define_property");
var _initializerDefinePropertyDefault = parcelHelpers.interopDefault(_initializerDefineProperty);
var _initializerWarningHelper = require("./_initializer_warning_helper");
var _initializerWarningHelperDefault = parcelHelpers.interopDefault(_initializerWarningHelper);
var _instanceof = require("./_instanceof");
var _instanceofDefault = parcelHelpers.interopDefault(_instanceof);
var _interopRequireDefault = require("./_interop_require_default");
var _interopRequireDefaultDefault = parcelHelpers.interopDefault(_interopRequireDefault);
var _interopRequireWildcard = require("./_interop_require_wildcard");
var _interopRequireWildcardDefault = parcelHelpers.interopDefault(_interopRequireWildcard);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _iterableToArrayLimit = require("./_iterable_to_array_limit");
var _iterableToArrayLimitDefault = parcelHelpers.interopDefault(_iterableToArrayLimit);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _jsx = require("./_jsx");
var _jsxDefault = parcelHelpers.interopDefault(_jsx);
var _newArrowCheck = require("./_new_arrow_check");
var _newArrowCheckDefault = parcelHelpers.interopDefault(_newArrowCheck);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
var _objectSpread = require("./_object_spread");
var _objectSpreadDefault = parcelHelpers.interopDefault(_objectSpread);
var _objectWithoutProperties = require("./_object_without_properties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
var _possibleConstructorReturn = require("./_possible_constructor_return");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _readOnlyError = require("./_read_only_error");
var _readOnlyErrorDefault = parcelHelpers.interopDefault(_readOnlyError);
var _set = require("./_set");
var _setDefault = parcelHelpers.interopDefault(_set);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
var _skipFirstGeneratorNext = require("./_skip_first_generator_next");
var _skipFirstGeneratorNextDefault = parcelHelpers.interopDefault(_skipFirstGeneratorNext);
var _slicedToArray = require("./_sliced_to_array");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _slicedToArrayLoose = require("./_sliced_to_array_loose");
var _slicedToArrayLooseDefault = parcelHelpers.interopDefault(_slicedToArrayLoose);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
var _taggedTemplateLiteral = require("./_tagged_template_literal");
var _taggedTemplateLiteralDefault = parcelHelpers.interopDefault(_taggedTemplateLiteral);
var _taggedTemplateLiteralLoose = require("./_tagged_template_literal_loose");
var _taggedTemplateLiteralLooseDefault = parcelHelpers.interopDefault(_taggedTemplateLiteralLoose);
var _throw = require("./_throw");
var _throwDefault = parcelHelpers.interopDefault(_throw);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toConsumableArray = require("./_to_consumable_array");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _wrapAsyncGenerator = require("./_wrap_async_generator");
var _wrapAsyncGeneratorDefault = parcelHelpers.interopDefault(_wrapAsyncGenerator);
var _wrapNativeSuper = require("./_wrap_native_super");
var _wrapNativeSuperDefault = parcelHelpers.interopDefault(_wrapNativeSuper);

},{"./_apply_decorated_descriptor":"fF3o8","./_array_with_holes":"i4fv9","./_array_without_holes":"hY0H1","./_assert_this_initialized":"gfuHl","./_async_generator":"7KfI6","./_async_generator_delegate":"aev4Y","./_async_iterator":"arZH5","./_async_to_generator":"13kug","./_await_async_generator":"fBqNK","./_await_value":"eBwfd","./_class_call_check":"kpclz","./_class_name_tdz_error":"cQ94I","./_class_private_field_get":"bP0pt","./_class_private_field_loose_base":"1D13j","./_class_private_field_set":"4KIA8","./_class_private_method_get":"6fVzW","./_class_private_method_set":"XwTKx","./_class_static_private_field_spec_get":"7nx8T","./_class_static_private_field_spec_set":"aqa5U","./_construct":"9C2YK","./_create_class":"3rCC2","./_decorate":"4rug3","./_defaults":"liC7K","./_define_enumerable_properties":"6jEFS","./_define_property":"2bmJg","./_extends":"fYaca","./_get":"7gJhS","./_get_prototype_of":"ikGPQ","./_inherits":"87vFt","./_inherits_loose":"9TgEB","./_initializer_define_property":"ezySo","./_initializer_warning_helper":"27ivC","./_instanceof":"dVDnh","./_interop_require_default":"1t0PP","./_interop_require_wildcard":"9ajAL","./_is_native_function":"aSsLO","./_iterable_to_array":"5Iu1g","./_iterable_to_array_limit":"6QH01","./_iterable_to_array_limit_loose":"aqFO9","./_jsx":"lF2cu","./_new_arrow_check":"3Ywf9","./_non_iterable_rest":"49Jt8","./_non_iterable_spread":"kNq7W","./_object_spread":"lxDZV","./_object_without_properties":"k2Ccl","./_object_without_properties_loose":"8DAxj","./_possible_constructor_return":"4BPWR","./_read_only_error":"dNTSG","./_set":"9xNF2","./_set_prototype_of":"4G1v3","./_skip_first_generator_next":"jukzT","./_sliced_to_array":"eKK0h","./_sliced_to_array_loose":"hUTGQ","./_super_prop_base":"iJoDL","./_tagged_template_literal":"203A4","./_tagged_template_literal_loose":"dYzxq","./_throw":"cdJFd","./_to_array":"beitv","./_to_consumable_array":"9WPM8","./_to_primitive":"lA081","./_to_property_key":"i4s8F","./_type_of":"aUXAH","./_wrap_async_generator":"8vDM2","./_wrap_native_super":"87JgL","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"fF3o8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc1 = {
    };
    Object["keys"](descriptor).forEach(function(key) {
        desc1[key] = descriptor[key];
    });
    desc1.enumerable = !!desc1.enumerable;
    desc1.configurable = !!desc1.configurable;
    if ('value' in desc1 || desc1.initializer) desc1.writable = true;
    desc1 = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator ? decorator(target, property, desc) || desc : desc;
    }, desc1);
    if (context && desc1.initializer !== void 0) {
        desc1.value = desc1.initializer ? desc1.initializer.call(context) : void 0;
        desc1.initializer = undefined;
    }
    if (desc1.initializer === void 0) {
        Object["defineProperty"](target, property, desc1);
        desc1 = null;
    }
    return desc1;
}
exports.default = _applyDecoratedDescriptor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"lKO5T":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"i4fv9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
exports.default = _arrayWithHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"hY0H1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}
exports.default = _arrayWithoutHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"gfuHl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
exports.default = _assertThisInitialized;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"7KfI6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function AsyncGenerator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) back = back.next = request;
            else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg1) {
        try {
            var result = gen[key](arg1);
            var value = result.value;
            var wrappedAwait = value instanceof _awaitValueDefault.default;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) resume(front.key, front.arg);
        else back = null;
    }
    this._invoke = send;
    if (typeof gen.return !== "function") this.return = undefined;
}
exports.default = AsyncGenerator;
if (typeof Symbol === "function" && Symbol.asyncIterator) AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
    return this;
};
AsyncGenerator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
AsyncGenerator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
AsyncGenerator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};

},{"./_await_value":"eBwfd","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"eBwfd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _AwaitValue(value) {
    this.wrapped = value;
}
exports.default = _AwaitValue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"aev4Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {
    }, waiting = false;
    function pump(key, value) {
        waiting = true;
        value = new Promise(function(resolve) {
            resolve(inner[key](value));
        });
        return {
            done: false,
            value: awaitWrap(value)
        };
    }
    if (typeof Symbol === "function" && Symbol.iterator) iter[Symbol.iterator] = function() {
        return this;
    };
    iter.next = function(value) {
        if (waiting) {
            waiting = false;
            return value;
        }
        return pump("next", value);
    };
    if (typeof inner.throw === "function") iter.throw = function(value) {
        if (waiting) {
            waiting = false;
            throw value;
        }
        return pump("throw", value);
    };
    if (typeof inner.return === "function") iter.return = function(value) {
        return pump("return", value);
    };
    return iter;
}
exports.default = _asyncGeneratorDelegate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"arZH5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol === "function") {
        if (Symbol.asyncIterator) {
            method = iterable[Symbol.asyncIterator];
            if (method != null) return method.call(iterable);
        }
        if (Symbol.iterator) {
            method = iterable[Symbol.iterator];
            if (method != null) return method.call(iterable);
        }
    }
    throw new TypeError("Object is not async iterable");
}
exports.default = _asyncIterator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"13kug":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
exports.default = _asyncToGenerator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"fBqNK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function _awaitAsyncGenerator(value) {
    return new _awaitValueDefault.default(value);
}
exports.default = _awaitAsyncGenerator;

},{"./_await_value":"eBwfd","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"kpclz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
exports.default = _classCallCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"cQ94I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classNameTDZError(name) {
    throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
}
exports.default = _classNameTDZError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"bP0pt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver).value;
}
exports.default = _classPrivateFieldGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"1D13j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
exports.default = _classPrivateFieldBase;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"4KIA8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    var descriptor = privateMap.get(receiver);
    if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
    return value;
}
exports.default = _classPrivateFieldSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"6fVzW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
exports.default = _classPrivateMethodGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"XwTKx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
}
exports.default = _classPrivateMethodSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"7nx8T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
    return descriptor.value;
}
exports.default = _classStaticPrivateFieldSpecGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"aqa5U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
    if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
    return value;
}
exports.default = _classStaticPrivateFieldSpecSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"9C2YK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function construct(Parent1, args1, Class1) {
    if (isNativeReflectConstruct()) construct = Reflect.construct;
    else construct = function construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return construct.apply(null, arguments);
}
function _construct(Parent, args, Class) {
    return construct.apply(null, arguments);
}
exports.default = _construct;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"3rCC2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
exports.default = _createClass;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"4rug3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
function _decorate(decorators, factory, superClass) {
    var r = factory(function initialize(O) {
        _initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = _decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
    _initializeClassElements(r.F, decorated.elements);
    return _runClassFinishers(r.F, decorated.finishers);
}
exports.default = _decorate;
function _createElementDescriptor(def) {
    var key = _toPropertyKeyDefault.default(def.key);
    var descriptor;
    if (def.kind === "method") {
        descriptor = {
            value: def.value,
            writable: true,
            configurable: true,
            enumerable: false
        };
        Object.defineProperty(def.value, "name", {
            value: _typeof(key) === "symbol" ? "" : key,
            configurable: true
        });
    } else if (def.kind === "get") descriptor = {
        get: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "set") descriptor = {
        set: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "field") descriptor = {
        configurable: true,
        writable: true,
        enumerable: true
    };
    var element = {
        kind: def.kind === "field" ? "field" : "method",
        key: key,
        placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
        descriptor: descriptor
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;
    return element;
}
function _coalesceGetterSetter(element, other) {
    if (element.descriptor.get !== undefined) other.descriptor.get = element.descriptor.get;
    else other.descriptor.set = element.descriptor.set;
}
function _coalesceClassElements(elements) {
    var newElements = [];
    var isSameElement = function isSameElement(other) {
        return other.kind === "method" && other.key === element.key && other.placement === element.placement;
    };
    for(var i = 0; i < elements.length; i++){
        var element = elements[i];
        var other1;
        if (element.kind === "method" && (other1 = newElements.find(isSameElement))) {
            if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other1.descriptor)) {
                if (_hasDecorators(element) || _hasDecorators(other1)) throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
                other1.descriptor = element.descriptor;
            } else {
                if (_hasDecorators(element)) {
                    if (_hasDecorators(other1)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + element.key + ").");
                    other1.decorators = element.decorators;
                }
                _coalesceGetterSetter(element, other1);
            }
        } else newElements.push(element);
    }
    return newElements;
}
function _hasDecorators(element) {
    return element.decorators && element.decorators.length;
}
function _isDataDescriptor(desc) {
    return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
}
function _initializeClassElements(F, elements) {
    var proto = F.prototype;
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            var placement = element.placement;
            if (element.kind === kind && (placement === "static" || placement === "prototype")) {
                var receiver = placement === "static" ? F : proto;
                _defineClassElement(receiver, element);
            }
        });
    });
}
function _initializeInstanceElements(O, elements) {
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            if (element.kind === kind && element.placement === "own") _defineClassElement(O, element);
        });
    });
}
function _defineClassElement(receiver, element) {
    var descriptor = element.descriptor;
    if (element.kind === "field") {
        var initializer = element.initializer;
        descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
    }
    Object.defineProperty(receiver, element.key, descriptor);
}
function _decorateClass(elements, decorators) {
    var newElements = [];
    var finishers = [];
    var placements = {
        static: [],
        prototype: [],
        own: []
    };
    elements.forEach(function(element) {
        _addElementPlacement(element, placements);
    });
    elements.forEach(function(element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = _decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
    });
    if (!decorators) return {
        elements: newElements,
        finishers: finishers
    };
    var result = _decorateConstructor(newElements, decorators);
    finishers.push.apply(finishers, result.finishers);
    result.finishers = finishers;
    return result;
}
function _addElementPlacement(element, placements, silent) {
    var keys = placements[element.placement];
    if (!silent && keys.indexOf(element.key) !== -1) throw new TypeError("Duplicated element (" + element.key + ")");
    keys.push(element.key);
}
function _decorateElement(element, placements) {
    var extras = [];
    var finishers = [];
    for(var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--){
        var keys = placements[element.placement];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = _fromElementDescriptor(element);
        var elementFinisherExtras = _toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        _addElementPlacement(element, placements);
        if (elementFinisherExtras.finisher) finishers.push(elementFinisherExtras.finisher);
        var newExtras = elementFinisherExtras.extras;
        if (newExtras) {
            for(var j = 0; j < newExtras.length; j++)_addElementPlacement(newExtras[j], placements);
            extras.push.apply(extras, newExtras);
        }
    }
    return {
        element: element,
        finishers: finishers,
        extras: extras
    };
}
function _decorateConstructor(elements, decorators) {
    var finishers = [];
    for(var i = decorators.length - 1; i >= 0; i--){
        var obj = _fromClassDescriptor(elements);
        var elementsAndFinisher = _toClassDescriptor((0, decorators[i])(obj) || obj);
        if (elementsAndFinisher.finisher !== undefined) finishers.push(elementsAndFinisher.finisher);
        if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;
            for(var j = 0; j < elements.length - 1; j++)for(var k = j + 1; k < elements.length; k++){
                if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) throw new TypeError("Duplicated element (" + elements[j].key + ")");
            }
        }
    }
    return {
        elements: elements,
        finishers: finishers
    };
}
function _fromElementDescriptor(element) {
    var obj = {
        kind: element.kind,
        key: element.key,
        placement: element.placement,
        descriptor: element.descriptor
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    if (element.kind === "field") obj.initializer = element.initializer;
    return obj;
}
function _toElementDescriptors(elementObjects) {
    if (elementObjects === undefined) return;
    return _toArrayDefault.default(elementObjects).map(function(elementObject) {
        var element = _toElementDescriptor(elementObject);
        _disallowProperty(elementObject, "finisher", "An element descriptor");
        _disallowProperty(elementObject, "extras", "An element descriptor");
        return element;
    });
}
function _toElementDescriptor(elementObject) {
    var kind = String(elementObject.kind);
    if (kind !== "method" && kind !== "field") throw new TypeError("An element descriptor's .kind property must be either \"method\" or \"field\", but a decorator created an element descriptor with .kind \"" + kind + '"');
    var key = _toPropertyKeyDefault.default(elementObject.key);
    var placement = String(elementObject.placement);
    if (placement !== "static" && placement !== "prototype" && placement !== "own") throw new TypeError("An element descriptor's .placement property must be one of \"static\", \"prototype\" or \"own\", but a decorator created an element descriptor with .placement \"" + placement + '"');
    var descriptor = elementObject.descriptor;
    _disallowProperty(elementObject, "elements", "An element descriptor");
    var element = {
        kind: kind,
        key: key,
        placement: placement,
        descriptor: Object.assign({
        }, descriptor)
    };
    if (kind !== "field") _disallowProperty(elementObject, "initializer", "A method descriptor");
    else {
        _disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
        element.initializer = elementObject.initializer;
    }
    return element;
}
function _toElementFinisherExtras(elementObject) {
    var element = _toElementDescriptor(elementObject);
    var finisher = _optionalCallableProperty(elementObject, "finisher");
    var extras = _toElementDescriptors(elementObject.extras);
    return {
        element: element,
        finisher: finisher,
        extras: extras
    };
}
function _fromClassDescriptor(elements) {
    var obj = {
        kind: "class",
        elements: elements.map(_fromElementDescriptor)
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    return obj;
}
function _toClassDescriptor(obj) {
    var kind = String(obj.kind);
    if (kind !== "class") throw new TypeError("A class descriptor's .kind property must be \"class\", but a decorator created a class descriptor with .kind \"" + kind + '"');
    _disallowProperty(obj, "key", "A class descriptor");
    _disallowProperty(obj, "placement", "A class descriptor");
    _disallowProperty(obj, "descriptor", "A class descriptor");
    _disallowProperty(obj, "initializer", "A class descriptor");
    _disallowProperty(obj, "extras", "A class descriptor");
    var finisher = _optionalCallableProperty(obj, "finisher");
    var elements = _toElementDescriptors(obj.elements);
    return {
        elements: elements,
        finisher: finisher
    };
}
function _disallowProperty(obj, name, objectType) {
    if (obj[name] !== undefined) throw new TypeError(objectType + " can't have a ." + name + " property.");
}
function _optionalCallableProperty(obj, name) {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") throw new TypeError("Expected '" + name + "' to be a function");
    return value;
}
function _runClassFinishers(constructor, finishers) {
    for(var i = 0; i < finishers.length; i++){
        var newConstructor = (0, finishers[i])(constructor);
        if (newConstructor !== undefined) {
            if (typeof newConstructor !== "function") throw new TypeError("Finishers must return a constructor.");
            constructor = newConstructor;
        }
    }
    return constructor;
}

},{"./_to_array":"beitv","./_to_property_key":"i4s8F","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"beitv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _toArray(arr) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _nonIterableRestDefault.default();
}
exports.default = _toArray;

},{"./_array_with_holes":"i4fv9","./_iterable_to_array":"5Iu1g","./_non_iterable_rest":"49Jt8","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"5Iu1g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
exports.default = _iterableToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"49Jt8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
exports.default = _nonIterableRest;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"i4s8F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
function _toPropertyKey(arg) {
    var key = _toPrimitiveDefault.default(arg, "string");
    return _typeOfDefault.default(key) === "symbol" ? key : String(key);
}
exports.default = _toPropertyKey;

},{"./_type_of":"aUXAH","./_to_primitive":"lA081","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"aUXAH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}
exports.default = _typeof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"lA081":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _toPrimitive(input, hint) {
    if (_typeOfDefault.default(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeOfDefault.default(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
exports.default = _toPrimitive;

},{"./_type_of":"aUXAH","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"liC7K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        var value = Object.getOwnPropertyDescriptor(defaults, key);
        if (value && value.configurable && obj[key] === undefined) Object.defineProperty(obj, key, value);
    }
    return obj;
}
exports.default = _defaults;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"6jEFS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineEnumerableProperties(obj, descs) {
    for(var key in descs){
        var desc = descs[key];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, key, desc);
    }
    if (Object.getOwnPropertySymbols) {
        var objectSymbols = Object.getOwnPropertySymbols(descs);
        for(var i = 0; i < objectSymbols.length; i++){
            var sym = objectSymbols[i];
            var desc = descs[sym];
            desc.configurable = desc.enumerable = true;
            if ("value" in desc) desc.writable = true;
            Object.defineProperty(obj, sym, desc);
        }
    }
    return obj;
}
exports.default = _defineEnumerableProperties;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"2bmJg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _defineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"fYaca":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return extends_.apply(this, arguments);
}
function _extends() {
    return extends_.apply(this, arguments);
}
exports.default = _extends;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"7gJhS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function get(target1, property1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.get) get = Reflect.get;
    else get = function get(target, property, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(receiver || target);
        return desc.value;
    };
    return get(target1, property1, receiver1);
}
function _get(target, property, reciever) {
    return get(target, property, reciever);
}
exports.default = _get;

},{"./_super_prop_base":"iJoDL","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"iJoDL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOfDefault.default(object);
        if (object === null) break;
    }
    return object;
}
exports.default = _superPropBase;

},{"./_get_prototype_of":"ikGPQ","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"ikGPQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getPrototypeOf(o1) {
    getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return getPrototypeOf(o1);
}
function _getPrototypeOf(o) {
    return getPrototypeOf(o);
}
exports.default = _getPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"87vFt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOfDefault.default(subClass, superClass);
}
exports.default = _inherits;

},{"./_set_prototype_of":"4G1v3","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"4G1v3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setPrototypeOf(o1, p1) {
    setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return setPrototypeOf(o1, p1);
}
function _setPrototypeOf(o, p) {
    return setPrototypeOf(o, p);
}
exports.default = _setPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"9TgEB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
exports.default = _inheritsLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"ezySo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
exports.default = _initializerDefineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"27ivC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and set to use loose mode. To use proposal-class-properties in spec mode with decorators, wait for the next major version of decorators in stage 2.");
}
exports.default = _initializerWarningHelper;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"dVDnh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) return right[Symbol.hasInstance](left);
    else return left instanceof right;
}
exports.default = _instanceof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"1t0PP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = _interopRequireDefault;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"9ajAL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {
                };
                if (desc.get || desc.set) Object.defineProperty(newObj, key, desc);
                else newObj[key] = obj[key];
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
exports.default = _interopRequireWildcard;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"aSsLO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
exports.default = _isNativeFunction;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"6QH01":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
exports.default = _iterableToArrayLimit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"aqFO9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimitLoose(arr, i) {
    var _arr = [];
    for(var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;){
        _arr.push(_step.value);
        if (i && _arr.length === i) break;
    }
    return _arr;
}
exports.default = _iterableToArrayLimitLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"lF2cu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var REACT_ELEMENT_TYPE;
function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;
    if (!props && childrenLength !== 0) props = {
        children: void 0
    };
    if (props && defaultProps) {
        for(var propName in defaultProps)if (props[propName] === void 0) props[propName] = defaultProps[propName];
    } else if (!props) props = defaultProps || {
    };
    if (childrenLength === 1) props.children = children;
    else if (childrenLength > 1) {
        var childArray = new Array(childrenLength);
        for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 3];
        props.children = childArray;
    }
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key === undefined ? null : '' + key,
        ref: null,
        props: props,
        _owner: null
    };
}
exports.default = _createRawReactElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"3Ywf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) throw new TypeError("Cannot instantiate an arrow function");
}
exports.default = _newArrowCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"kNq7W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
exports.default = _nonIterableSpread;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"lxDZV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _definePropertyDefault.default(target, key, source[key]);
        });
    }
    return target;
}
exports.default = _objectSpread;

},{"./_define_property":"2bmJg","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"k2Ccl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLooseDefault.default(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
exports.default = _objectWithoutProperties;

},{"./_object_without_properties_loose":"8DAxj","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"8DAxj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
exports.default = _objectWithoutPropertiesLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"4BPWR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _possibleConstructorReturn(self, call) {
    if (call && (_typeOfDefault.default(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitializedDefault.default(self);
}
exports.default = _possibleConstructorReturn;

},{"./_assert_this_initialized":"gfuHl","./_type_of":"aUXAH","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"dNTSG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
}
exports.default = _readOnlyError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"9xNF2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function set(target1, property1, value1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.set) set = Reflect.set;
    else set = function set(target, property, value, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        var desc;
        if (base) {
            desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.set) {
                desc.set.call(receiver, value);
                return true;
            } else if (!desc.writable) return false;
        }
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
            if (!desc.writable) return false;
            desc.value = value;
            Object.defineProperty(receiver, property, desc);
        } else _definePropertyDefault.default(receiver, property, value);
        return true;
    };
    return set(target1, property1, value1, receiver1);
}
function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) throw new Error('failed to set property');
    return value;
}
exports.default = _set;

},{"./_define_property":"2bmJg","./_super_prop_base":"iJoDL","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"jukzT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _skipFirstGeneratorNext(fn) {
    return function() {
        var it = fn.apply(this, arguments);
        it.next();
        return it;
    };
}
exports.default = _skipFirstGeneratorNext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"eKK0h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _slicedToArray(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArray;

},{"./_array_with_holes":"i4fv9","./_iterable_to_array":"5Iu1g","./_non_iterable_rest":"49Jt8","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"hUTGQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _slicedToArrayLoose(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayLimitLooseDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArrayLoose;

},{"./_array_with_holes":"i4fv9","./_iterable_to_array_limit_loose":"aqFO9","./_non_iterable_rest":"49Jt8","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"203A4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
exports.default = _taggedTemplateLiteral;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"dYzxq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) raw = strings.slice(0);
    strings.raw = raw;
    return strings;
}
exports.default = _taggedTemplateLiteralLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"cdJFd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _throw(e) {
    throw e;
}
exports.default = _throw;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"9WPM8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
function _toConsumableArray(arr) {
    return _arrayWithoutHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _nonIterableSpreadDefault.default();
}
exports.default = _toConsumableArray;

},{"./_array_without_holes":"hY0H1","./_iterable_to_array":"5Iu1g","./_non_iterable_spread":"kNq7W","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"8vDM2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
function _wrapAsyncGenerator(fn) {
    return function() {
        return new _asyncGeneratorDefault.default(fn.apply(this, arguments));
    };
}
exports.default = _wrapAsyncGenerator;

},{"./_async_generator":"7KfI6","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"87JgL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function wrapNativeSuper(Class1) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    wrapNativeSuper = function wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunctionDefault.default(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _constructDefault.default(Class, arguments, _getPrototypeOfDefault.default(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOfDefault.default(Wrapper, Class);
    };
    return wrapNativeSuper(Class1);
}
function _wrapNativeSuper(Class) {
    return wrapNativeSuper(Class);
}
exports.default = _wrapNativeSuper;

},{"./_construct":"9C2YK","./_is_native_function":"aSsLO","./_get_prototype_of":"ikGPQ","./_set_prototype_of":"4G1v3","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"5yfXX":[function(require,module,exports) {
var _functions = require("../functions");
if (!_functions.isset(Array.prototype.FirstOrDefault)) Object.defineProperty(Array.prototype, 'FirstOrDefault', {
    value: function(predicateFunc, defaultValue = null) {
        const arr = this;
        if (_functions.isNullOrEmpty(arr)) return defaultValue;
        if (typeof predicateFunc !== "function") return arr[0];
        for(let i = 0; i < arr.length; i++){
            const item = arr[i];
            if (predicateFunc(item)) return item;
        }
        return defaultValue;
    }
});
if (!_functions.isset(Array.prototype.IndexOf)) Object.defineProperty(Array.prototype, 'IndexOf', {
    value: function(predicateFunc) {
        const arr = this;
        for(let i = 0; i < arr.length; i++){
            const item = arr[i];
            if (predicateFunc(item)) return i;
        }
        return -1;
    }
});
if (!_functions.isset(Array.prototype.Where)) Object.defineProperty(Array.prototype, 'Where', {
    value: function(predicateFunc) {
        const arr = this;
        const result = [];
        for(let i = 0; i < arr.length; i++){
            const item = arr[i];
            if (predicateFunc(item)) result.push(item);
        }
        return result;
    }
});
if (!_functions.isset(Array.prototype.OrderBy)) Object.defineProperty(Array.prototype, 'OrderBy', {
    value: function(keySelector) {
        const arr = this;
        // const result: T[] = [];
        const compareFunction = (item1, item2)=>{
            const keySelectorValue1 = keySelector(item1);
            const keySelectorValue2 = keySelector(item2);
            return keySelectorValue1 > keySelectorValue2 ? 1 : keySelectorValue2 > keySelectorValue1 ? -1 : 0;
        };
        // for (let i: number = 0; i < arr.length; i++) {
        //     return arr.sort(compareFunction);
        // }
        return arr.sort(compareFunction);
    // return result;
    }
});
if (!_functions.isset(Array.prototype.OrderByDescending)) Object.defineProperty(Array.prototype, 'OrderByDescending', {
    value: function(keySelector) {
        const arr = this;
        // const result: T[] = [];
        const compareFunction = (item1, item2)=>{
            const keySelectorValue1 = keySelector(item1);
            const keySelectorValue2 = keySelector(item2);
            return keySelectorValue1 > keySelectorValue2 ? -1 : keySelectorValue2 > keySelectorValue1 ? 1 : 0;
        };
        // for (let i: number = 0; i < arr.length; i++) {
        // return arr.sort(compareFunction);
        // }
        return arr.sort(compareFunction);
    // return result;
    }
});
if (!_functions.isset(Array.prototype.OrderByMultiple)) Object.defineProperty(Array.prototype, 'OrderByMultiple', {
    value: function(keySelectors) {
        const arr = [
            ...this
        ];
        // const result: T[] = [];
        const compareFunction = (item1, item2)=>{
            for(let i = 0; i < keySelectors.length; i++){
                const keySelector = keySelectors[i];
                const keySelectorValue1 = keySelector(item1);
                const keySelectorValue2 = keySelector(item2);
                if (keySelectorValue1 > keySelectorValue2) return 1;
                if (keySelectorValue2 > keySelectorValue1) return -1;
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
if (!_functions.isset(Array.prototype.OrderByMultipleDescending)) Object.defineProperty(Array.prototype, 'OrderByMultipleDescending', {
    value: function(keySelectors) {
        const arr = [
            ...this
        ];
        // const result: T[] = [];
        const compareFunction = (item1, item2)=>{
            for(let i = 0; i < keySelectors.length; i++){
                const keySelector = keySelectors[i];
                const keySelectorValue1 = keySelector(item1);
                const keySelectorValue2 = keySelector(item2);
                if (keySelectorValue1 > keySelectorValue2) return -1;
                if (keySelectorValue2 > keySelectorValue1) return 1;
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
if (!_functions.isset(Array.prototype.Contains)) Object.defineProperty(Array.prototype, 'Contains', {
    value: function(predicateFunc) {
        const arr = this;
        return _functions.isset(this.FirstOrDefault(predicateFunc, null));
    }
});
if (!_functions.isset(Array.prototype.Count)) Object.defineProperty(Array.prototype, 'Count', {
    value: function(predicateFunc) {
        const allItems = this.Where(predicateFunc);
        if (_functions.isNullOrEmpty(allItems)) return 0;
        return allItems.length;
    }
});
if (!_functions.isset(Array.prototype.LastOrDefault)) Object.defineProperty(Array.prototype, 'LastOrDefault', {
    value: function(predicateFunc, defaultValue = null) {
        const arr = this;
        if (_functions.isNullOrEmpty(arr)) return defaultValue;
        if (typeof predicateFunc !== "function") return arr[arr.length - 1];
        for(let i = arr.length - 1; i >= 0; i--){
            const item = arr[i];
            if (predicateFunc(item)) return item;
        }
        return defaultValue;
    }
});
if (!_functions.isset(Array.prototype.AddAt)) Object.defineProperty(Array.prototype, 'AddAt', {
    value: function(index, ...itemsToAdd) {
        this.splice(index, 0, ...itemsToAdd);
    }
});
if (!_functions.isset(Array.prototype.RemoveAt)) Object.defineProperty(Array.prototype, 'RemoveAt', {
    value: function(index, totalItemsToRemove = 1) {
        this.splice(index, totalItemsToRemove);
    }
});

},{"../functions":"9XwLJ"}],"9XwLJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrayFrom", ()=>_arrayFromDefault.default
);
parcelHelpers.export(exports, "cssClasses", ()=>_cssClassesDefault.default
);
parcelHelpers.export(exports, "extend", ()=>_extendDefault.default
);
parcelHelpers.export(exports, "getDeepOrDefault", ()=>_getDeepOrDefaultDefault.default
);
parcelHelpers.export(exports, "getUrlParameter", ()=>_getUrlParameterDefault.default
);
parcelHelpers.export(exports, "isFunction", ()=>_isFunctionDefault.default
);
parcelHelpers.export(exports, "isNullOrEmpty", ()=>_isNullOrEmptyDefault.default
);
parcelHelpers.export(exports, "isset", ()=>_issetDefault.default
);
parcelHelpers.export(exports, "issetDeep", ()=>_issetDeepDefault.default
);
parcelHelpers.export(exports, "toBoolean", ()=>_toBooleanDefault.default
);
parcelHelpers.export(exports, "asyncFn", ()=>_asyncFnDefault.default
);
parcelHelpers.export(exports, "promiseQueue", ()=>_promiseQueueDefault.default
);
parcelHelpers.export(exports, "PromiseQueue", ()=>_promiseQueue.PromiseQueue
);
parcelHelpers.export(exports, "toParameterlessPromiseQueueFunc", ()=>_promiseQueue.toParameterlessPromiseQueueFunc
);
parcelHelpers.export(exports, "isValidEmail", ()=>_isValidEmailDefault.default
);
parcelHelpers.export(exports, "randomString", ()=>_randomStringDefault.default
);
parcelHelpers.export(exports, "replaceNonAlphanumeric", ()=>_replaceNonAlphanumericDefault.default
);
parcelHelpers.export(exports, "stripHTML", ()=>_stripHTMLDefault.default
);
parcelHelpers.export(exports, "replaceTpl", ()=>_replaceTplDefault.default
);
parcelHelpers.export(exports, "removeAllParametersFromUrl", ()=>_removeAllParametersFromUrlDefault.default
);
var _arrayFrom = require("./arrayFrom");
var _arrayFromDefault = parcelHelpers.interopDefault(_arrayFrom);
var _cssClasses = require("./cssClasses");
var _cssClassesDefault = parcelHelpers.interopDefault(_cssClasses);
var _extend = require("./extend");
var _extendDefault = parcelHelpers.interopDefault(_extend);
var _getDeepOrDefault = require("./getDeepOrDefault");
var _getDeepOrDefaultDefault = parcelHelpers.interopDefault(_getDeepOrDefault);
var _getUrlParameter = require("./getUrlParameter");
var _getUrlParameterDefault = parcelHelpers.interopDefault(_getUrlParameter);
var _isFunction = require("./isFunction");
var _isFunctionDefault = parcelHelpers.interopDefault(_isFunction);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
var _issetDeep = require("./issetDeep");
var _issetDeepDefault = parcelHelpers.interopDefault(_issetDeep);
var _toBoolean = require("./toBoolean");
var _toBooleanDefault = parcelHelpers.interopDefault(_toBoolean);
var _asyncFn = require("./asyncFn");
var _asyncFnDefault = parcelHelpers.interopDefault(_asyncFn);
var _promiseQueue = require("./promiseQueue");
var _promiseQueueDefault = parcelHelpers.interopDefault(_promiseQueue);
var _isValidEmail = require("./isValidEmail");
var _isValidEmailDefault = parcelHelpers.interopDefault(_isValidEmail);
var _randomString = require("./randomString");
var _randomStringDefault = parcelHelpers.interopDefault(_randomString);
var _replaceNonAlphanumeric = require("./replaceNonAlphanumeric");
var _replaceNonAlphanumericDefault = parcelHelpers.interopDefault(_replaceNonAlphanumeric);
var _stripHTML = require("./stripHTML");
var _stripHTMLDefault = parcelHelpers.interopDefault(_stripHTML);
var _replaceTpl = require("./replaceTpl");
var _replaceTplDefault = parcelHelpers.interopDefault(_replaceTpl);
var _removeAllParametersFromUrl = require("./removeAllParametersFromUrl");
var _removeAllParametersFromUrlDefault = parcelHelpers.interopDefault(_removeAllParametersFromUrl);
var _date = require("./date");
parcelHelpers.exportAll(_date, exports);

},{"./arrayFrom":"hu7j7","./cssClasses":"2uGKr","./extend":"7Mt2R","./getDeepOrDefault":"9VIeB","./getUrlParameter":"37mFu","./isFunction":"1GzP8","./isNullOrEmpty":"9jyXv","./isset":"7dh4l","./issetDeep":"cEyNa","./toBoolean":"ftd9X","./asyncFn":"knIu2","./promiseQueue":"2isMt","./isValidEmail":"7GoUj","./randomString":"btUYL","./replaceNonAlphanumeric":"6e5c0","./stripHTML":"13l2T","./replaceTpl":"8bHKJ","./removeAllParametersFromUrl":"gEr3a","./date":"bR4DB","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"hu7j7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function arrayFrom(arrLike, mapFunc, thisArgs) {
    if (!Array["from"]) Array["from"] = ()=>{
        var toStr = Object.prototype.toString;
        var isCallable = (fn)=>{
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = (value)=>{
            var numberVal = Number(value);
            if (isNaN(numberVal)) return 0;
            if (numberVal === 0 || !isFinite(numberVal)) return numberVal;
            return (numberVal > 0 ? 1 : -1) * Math.floor(Math.abs(numberVal));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = (value)=>{
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };
        return function from(arrayLike) {
            var C = this;
            var items = Object(arrayLike);
            if (arrayLike == null) throw new TypeError('Array.from requires an array-like object - not null or undefined');
            var mapFn;
            let args = arguments;
            if (args.length > 1) mapFn = args[1];
            var T;
            if (typeof mapFn !== 'undefined') {
                if (!isCallable(mapFn)) throw new TypeError('Array.from: when provided, the second argument must be a function');
                if (args.length > 2) T = args[2];
            }
            var len = toLength(items.length);
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);
            // 16. Let k be 0.
            var k = 0;
            // 17. Repeat, while k < len… (also steps a - h)
            var kValue;
            while(k < len){
                kValue = items[k];
                if (mapFn) A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                else A[k] = kValue;
                k += 1;
            }
            // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len;
            // 20. Return A.
            return A;
        };
    };
    return Array["from"](arrLike, mapFunc, thisArgs);
}
exports.default = arrayFrom;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"2uGKr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function cssClasses(...args) {
    const classes = [];
    const self = cssClasses;
    for(let i = 0; i < args.length; i++){
        const arg = args[i];
        if (!_issetDefault.default(arg)) continue;
        const argType = typeof arg;
        if (argType === 'string') {
            classes.push(arg);
            continue;
        }
        if (Array.isArray(arg) && arg.length > 0) {
            const classNamesFromArray = self.apply(null, arg);
            if (_issetDefault.default(classNamesFromArray) && !_isNullOrEmptyDefault.default(classNamesFromArray)) classes.push(classNamesFromArray);
            continue;
        }
        if (argType === 'object') {
            if (arg.toString !== Object.prototype.toString) {
                classes.push(arg.toString());
                continue;
            }
            for(const className in arg)if (arg.hasOwnProperty(className) && arg[className]) classes.push(className);
        }
    }
    return classes.join(' ');
}
exports.default = cssClasses;

},{"./isset":"7dh4l","./isNullOrEmpty":"9jyXv","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"7dh4l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isset(property) {
    return typeof property !== 'undefined' && property != null;
}
exports.default = isset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"9jyXv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function isNullOrEmpty(property) {
    if (!_issetDefault.default(property)) return true;
    if (typeof property === 'string') return property.trim().length < 1;
    if (!property.hasOwnProperty('length')) return false;
    return property.length < 1;
}
exports.default = isNullOrEmpty;

},{"./isset":"7dh4l","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"7Mt2R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayFrom = require("./arrayFrom");
var _arrayFromDefault = parcelHelpers.interopDefault(_arrayFrom);
function extend(target, source, inCaseOfArrayUseSourceObject = true) {
    if (Array.isArray(target) && Array.isArray(source)) {
        if (inCaseOfArrayUseSourceObject) return source;
        return _arrayFromDefault.default(new Set(target.concat(source)));
    }
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (const key of Object.keys(source)){
        if (Array.isArray(source[key])) {
            const targetValue = target[key] || [];
            source[key] = extend(targetValue, source[key], inCaseOfArrayUseSourceObject);
        } else if (source[key] instanceof Object) {
            const targetValue = target[key] || {
            };
            source[key] = extend(targetValue, source[key], inCaseOfArrayUseSourceObject);
        }
    }
    // Join `target` and modified `source`
    target = target || {
    };
    const tempTarget = {
        ...target,
        ...source
    };
    return tempTarget;
}
exports.default = extend;

},{"./arrayFrom":"hu7j7","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"9VIeB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function getDeepOrDefault(objectToCheck, keyNameSpace, defaultValue = null) {
    if (!_issetDefault.default(objectToCheck)) return defaultValue;
    const namespaceKeys = keyNameSpace.split('.');
    let currentObjectPath = objectToCheck;
    for(let i = 0; i < namespaceKeys.length; i++){
        const currentKey = namespaceKeys[i];
        if (!_issetDefault.default(currentObjectPath[currentKey])) return defaultValue;
        currentObjectPath = currentObjectPath[currentKey];
    }
    return !_issetDefault.default(currentObjectPath) ? defaultValue : currentObjectPath;
}
exports.default = getDeepOrDefault;

},{"./isset":"7dh4l","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"37mFu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function getUrlParameter(parameterName, url = null) {
    if (_isNullOrEmptyDefault.default(url)) url = window.location.href;
    url = url.toLowerCase();
    let name = parameterName.toLowerCase();
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    const regexS = '[\\?&]' + name + '=([^&#]*)';
    const regex = new RegExp(regexS);
    const results = regex.exec(url);
    if (results == null) return null;
    return results[1];
}
exports.default = getUrlParameter;

},{"./isNullOrEmpty":"9jyXv","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"1GzP8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function isFunction(property) {
    return _issetDefault.default(property) && typeof property === 'function';
}
exports.default = isFunction;

},{"./isset":"7dh4l","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"cEyNa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function issetDeep(objectToCheck, keyNameSpace) {
    if (!_issetDefault.default(objectToCheck)) return false;
    const namespaceKeys = keyNameSpace.split('.');
    let currentObjectPath = objectToCheck;
    for(let i = 0; i < namespaceKeys.length; i++){
        const currentKey = namespaceKeys[i];
        if (!_issetDefault.default(currentObjectPath)) return false;
        currentObjectPath = currentObjectPath[currentKey];
    }
    return _issetDefault.default(currentObjectPath);
}
exports.default = issetDeep;

},{"./isset":"7dh4l","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"ftd9X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function toBoolean(value) {
    if (!_issetDefault.default(value)) return false;
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') value = value.toLowerCase();
    if (value !== 'false' && value !== 'true' && value !== '0' && value !== '1' && value !== 0 && value !== 1) return false;
    return value === 'false' || value === '0' || value === 0 ? false : true;
}
exports.default = toBoolean;

},{"./isset":"7dh4l","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"knIu2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
async function asyncFn(promiseFn) {
    try {
        const r = await promiseFn;
        return [
            r,
            null
        ];
    } catch (e) {
        return [
            null,
            e
        ];
    }
}
exports.default = asyncFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"2isMt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toParameterlessPromiseQueueFunc", ()=>toParameterlessPromiseQueueFunc
);
var _ = require(".");
function toParameterlessPromiseQueueFunc(promiseFunc, ...funcParams) {
    const wrapper = function() {
        return promiseFunc(...funcParams);
    };
    return wrapper;
}
async function promiseQueue1(promiseArray, delayBetweenCalls = 500) {
    await promiseQueueExecutor(promiseArray, 0, delayBetweenCalls);
}
exports.default = promiseQueue1;
const promiseQueueExecutor = async (promiseArray, index, delayBetweenCalls)=>{
    return new Promise((resolve, reject)=>{
        let currentPromise;
        let callbackFunc = undefined;
        let errorFunc = undefined;
        if (_.isFunction(promiseArray[index])) currentPromise = promiseArray[index];
        else if (_.isFunction(promiseArray[index].promiseFunc)) {
            const promiseQueue = promiseArray[index];
            currentPromise = promiseQueue.promiseFunc;
            callbackFunc = _.isFunction(promiseQueue.callback) ? promiseQueue.callback : callbackFunc;
            errorFunc = _.isFunction(promiseQueue.onError) ? promiseQueue.onError : errorFunc;
        }
        // if(!isset(currentPromise)) {
        //     if(index + 1 >= promiseArray.length) {
        //         return resolve();
        //     }
        //     setTimeout(async () => {
        //         await promiseQueueExecutor(promiseArray, index+1, delayBetweenCalls);
        //         return resolve();
        //     }, delayBetweenCalls);
        // }
        currentPromise().then(async (promiseResult)=>{
            if (_.isFunction(callbackFunc)) {
                const callbackResult = callbackFunc(promiseResult, index);
                if (callbackResult instanceof Promise) try {
                    await callbackResult;
                } catch (e) {
                }
            }
            if (index + 1 >= promiseArray.length) return resolve();
            setTimeout(async ()=>{
                await promiseQueueExecutor(promiseArray, index + 1, delayBetweenCalls);
                return resolve();
            }, delayBetweenCalls);
        }).catch(async (error)=>{
            if (_.isFunction(errorFunc)) {
                const errorResult = errorFunc(error, index);
                if (errorResult instanceof Promise) try {
                    await errorResult;
                } catch (e) {
                }
            }
            if (index + 1 >= promiseArray.length) return resolve();
            await promiseQueueExecutor(promiseArray, index + 1, delayBetweenCalls);
            return resolve();
        });
    });
};

},{".":"9XwLJ","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"7GoUj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function isValidEmail(email) {
    if (_isNullOrEmptyDefault.default(email)) return false;
    if (typeof email !== "string") return false;
    return !_isNullOrEmptyDefault.default(email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
}
exports.default = isValidEmail;

},{"./isNullOrEmpty":"9jyXv","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"btUYL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function randomString(randomStringLength = 5, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
    let result = '';
    const charactersLength = characters.length;
    for(let i = 0; i < randomStringLength; i++)result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}
exports.default = randomString;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"6e5c0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function replaceNonAlphanumeric(value, replaceValue = '') {
    if (_isNullOrEmptyDefault.default(value)) return value;
    if (typeof value !== "string") return value;
    return value.replace(/[^\w]/gi, replaceValue);
}
exports.default = replaceNonAlphanumeric;

},{"./isNullOrEmpty":"9jyXv","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"13l2T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function stripHtml(htmlValue) {
    if (_isNullOrEmptyDefault.default(htmlValue)) return '';
    return new DOMParser().parseFromString(htmlValue, 'text/html').body.textContent;
}
exports.default = stripHtml;

},{"./isNullOrEmpty":"9jyXv","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"8bHKJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getDeepOrDefault = require("./getDeepOrDefault");
var _getDeepOrDefaultDefault = parcelHelpers.interopDefault(_getDeepOrDefault);
var _isFunction = require("./isFunction");
var _isFunctionDefault = parcelHelpers.interopDefault(_isFunction);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function replaceTpl(template, placeholderData, replaceMissingPlaceholderWith) {
    let result = template.slice();
    result = result.replace(/\{([\w\.]*)\}/g, (placeholderMatch, placeholderKey)=>{
        const placeholderValue = _getDeepOrDefaultDefault.default(placeholderData, placeholderKey);
        if (!_issetDefault.default(placeholderValue)) {
            if (_issetDefault.default(replaceMissingPlaceholderWith)) return replaceMissingPlaceholderWith;
            return placeholderMatch;
        }
        if (_isFunctionDefault.default(placeholderValue)) return placeholderValue.apply(placeholderData, null);
        return placeholderValue;
    });
    return result;
}
exports.default = replaceTpl;

},{"./getDeepOrDefault":"9VIeB","./isFunction":"1GzP8","./isset":"7dh4l","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"gEr3a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stringExtensions = require("../extensions/StringExtensions");
var _arrayExtensions = require("../extensions/ArrayExtensions");
function removeAllParametersFromUrl(url) {
    if (typeof url !== 'string') return '';
    let urlCopy = url.slice();
    if (urlCopy.Contains("#")) {
        let splittedUrl = urlCopy.split('#');
        do {
            const hashValue = splittedUrl.LastOrDefault();
            if (!urlCopy.EndsWith('#' + hashValue) || hashValue.Contains("?")) break;
            splittedUrl.RemoveAt(-1, 1);
            urlCopy = splittedUrl.join('#');
            splittedUrl = urlCopy.split('#');
        }while (splittedUrl.length > 1)
    }
    return urlCopy.split('?')[0].split('&')[0];
}
exports.default = removeAllParametersFromUrl;

},{"../extensions/StringExtensions":"djiyg","../extensions/ArrayExtensions":"5yfXX","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"djiyg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
String.prototype.StartsWith = function(searchTerm, ignoreCase = true) {
    let searchIn = this;
    if (ignoreCase) {
        searchTerm = searchTerm.toLocaleLowerCase();
        searchIn = searchIn.toLocaleLowerCase();
    }
    return searchIn.indexOf(searchTerm) === 0;
};
String.prototype.EndsWith = function(searchTerm, ignoreCase = true) {
    let searchIn = this;
    if (searchTerm.length > searchIn.length) return false;
    if (ignoreCase) {
        searchTerm = searchTerm.toLocaleLowerCase();
        searchIn = searchIn.toLocaleLowerCase();
    }
    const position = searchIn.length - searchTerm.length;
    const lastIndex = searchIn.indexOf(searchTerm, position);
    return lastIndex !== -1 && lastIndex === position;
};
String.prototype.Contains = function(searchTerm, ignoreCase = true) {
    let searchIn = this;
    if (ignoreCase) {
        searchTerm = searchTerm.toLocaleLowerCase();
        searchIn = searchIn.toLocaleLowerCase();
    }
    return searchIn.indexOf(searchTerm) >= 0;
};
String.prototype.IndexOf = function(searchTerm, ignoreCase = true) {
    let searchIn = this;
    if (ignoreCase) {
        searchTerm = searchTerm.toLocaleLowerCase();
        searchIn = searchIn.toLocaleLowerCase();
    }
    return searchIn.indexOf(searchTerm);
};
String.prototype.Insert = function(startIndex, valueToInsert) {
    const text = this;
    const first = text.substring(0, startIndex);
    const second = text.substring(startIndex, text.length);
    return first + valueToInsert + second;
};
String.prototype.Equals = function(value, ignoreCase = true) {
    let s = this.slice(0);
    if (ignoreCase) {
        s = s.toLocaleLowerCase();
        value = value.toLocaleLowerCase();
    }
    return value === s;
};
String.prototype.IsEmpty = function() {
    const s = this;
    return s.length < 1 || s.trim().length < 1;
};
String.prototype.ReplaceAll = function(searchTerm, replaceWith) {
    let s = this.slice();
    if (typeof this.replaceAll == "function") return this.replaceAll(searchTerm, replaceWith);
    return s.replace(new RegExp(searchTerm, 'g'), replaceWith);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"bR4DB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "countWorkdays", ()=>_countWorkdaysDefault.default
);
parcelHelpers.export(exports, "CountWorkdaysValues", ()=>_countWorkdays.CountWorkdaysValues
);
parcelHelpers.export(exports, "firstDayOfMonth", ()=>_firstDayOfMonthDefault.default
);
parcelHelpers.export(exports, "lastDayOfMonth", ()=>_lastDayOfMonthDefault.default
);
parcelHelpers.export(exports, "firstDayOfWeek", ()=>_firstDayOfWeekDefault.default
);
parcelHelpers.export(exports, "lastDayOfWeek", ()=>_lastDayOfWeekDefault.default
);
parcelHelpers.export(exports, "formatDate", ()=>_formatDateDefault.default
);
parcelHelpers.export(exports, "weekNumber", ()=>_weekNumberDefault.default
);
parcelHelpers.export(exports, "Weekday", ()=>_weekdayEnum.Weekday
);
var _countWorkdays = require("./countWorkdays");
var _countWorkdaysDefault = parcelHelpers.interopDefault(_countWorkdays);
var _firstDayOfMonth = require("./firstDayOfMonth");
var _firstDayOfMonthDefault = parcelHelpers.interopDefault(_firstDayOfMonth);
var _lastDayOfMonth = require("./lastDayOfMonth");
var _lastDayOfMonthDefault = parcelHelpers.interopDefault(_lastDayOfMonth);
var _firstDayOfWeek = require("./firstDayOfWeek");
var _firstDayOfWeekDefault = parcelHelpers.interopDefault(_firstDayOfWeek);
var _lastDayOfWeek = require("./lastDayOfWeek");
var _lastDayOfWeekDefault = parcelHelpers.interopDefault(_lastDayOfWeek);
var _formatDate = require("./formatDate");
var _formatDateDefault = parcelHelpers.interopDefault(_formatDate);
var _weekNumber = require("./weekNumber");
var _weekNumberDefault = parcelHelpers.interopDefault(_weekNumber);
var _weekdayEnum = require("./Weekday.enum");

},{"./countWorkdays":"dA47m","./firstDayOfMonth":"5ubaK","./lastDayOfMonth":"1vIpl","./firstDayOfWeek":"hO5K5","./lastDayOfWeek":"4wKvk","./formatDate":"gkmZM","./weekNumber":"jer1o","./Weekday.enum":"04tdi","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"dA47m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _firstDayOfMonth = require("./firstDayOfMonth");
var _firstDayOfMonthDefault = parcelHelpers.interopDefault(_firstDayOfMonth);
var _lastDayOfMonth = require("./lastDayOfMonth");
var _lastDayOfMonthDefault = parcelHelpers.interopDefault(_lastDayOfMonth);
var _arrayExtensions = require("../../extensions/ArrayExtensions");
var _isNullOrEmpty = require("../isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function countWorkdays(startDate, endDate, fromWeekDay, toWeekDay, excludedDates) {
    const defaultValues = {
        startDate: _firstDayOfMonthDefault.default(),
        endDate: _lastDayOfMonthDefault.default(startDate),
        fromWeekDay: 1,
        toWeekDay: 5,
        excludedDates: []
    };
    const values = {
        startDate: startDate || defaultValues.startDate,
        endDate: endDate || defaultValues.endDate,
        fromWeekDay: fromWeekDay || defaultValues.fromWeekDay,
        toWeekDay: toWeekDay || defaultValues.toWeekDay,
        excludedDates: excludedDates || defaultValues.excludedDates
    };
    let workday = 0;
    let fromDate = new Date(values.startDate.toDateString());
    let toDate = new Date(values.endDate.toDateString());
    while(fromDate <= toDate){
        const dayOfWeek = fromDate.getDay();
        if (!(dayOfWeek >= values.fromWeekDay && dayOfWeek <= values.toWeekDay)) {
            fromDate.setDate(fromDate.getDate() + 1);
            continue;
        }
        if (!_isNullOrEmptyDefault.default(excludedDates) && excludedDates.Contains((excludedDate)=>{
            const h = new Date(excludedDate.toDateString());
            return h.getTime() == fromDate.getTime();
        })) {
            fromDate.setDate(fromDate.getDate() + 1);
            continue;
        }
        fromDate.setDate(fromDate.getDate() + 1);
        workday++;
    }
    return workday;
}
exports.default = countWorkdays;

},{"./firstDayOfMonth":"5ubaK","./lastDayOfMonth":"1vIpl","../../extensions/ArrayExtensions":"5yfXX","../isNullOrEmpty":"9jyXv","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"5ubaK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function firstDayOfMonth1(date) {
    if (!_issetDefault.default(date)) date = new Date();
    const firstDayOfMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    firstDayOfMonth.setDate(1);
    return firstDayOfMonth;
}
exports.default = firstDayOfMonth1;

},{"../isset":"7dh4l","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"1vIpl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function lastDayOfMonth1(date) {
    if (!_issetDefault.default(date)) date = new Date();
    const lastDayOfMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1);
    lastDayOfMonth.setDate(0);
    return lastDayOfMonth;
}
exports.default = lastDayOfMonth1;

},{"../isset":"7dh4l","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"hO5K5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
var _weekdayEnum = require("./Weekday.enum");
function firstDayOfWeek1(date, startDay = _weekdayEnum.Weekday.Monday) {
    if (!_issetDefault.default(date)) date = new Date();
    const firstDayOfWeek = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const day = firstDayOfWeek.getDay();
    if (day == startDay) return firstDayOfWeek;
    const diff = day >= startDay ? day - startDay : 7 - (startDay - day);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - diff);
    return firstDayOfWeek;
}
exports.default = firstDayOfWeek1;

},{"../isset":"7dh4l","./Weekday.enum":"04tdi","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"04tdi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Weekday", ()=>Weekday1
);
var Weekday1;
(function(Weekday) {
    Weekday[Weekday["Sunday"] = 0] = "Sunday";
    Weekday[Weekday["Monday"] = 1] = "Monday";
    Weekday[Weekday["Tuesday"] = 2] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 3] = "Wednesday";
    Weekday[Weekday["Thursday"] = 4] = "Thursday";
    Weekday[Weekday["Friday"] = 5] = "Friday";
    Weekday[Weekday["Saturday"] = 6] = "Saturday";
})(Weekday1 || (Weekday1 = {
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"4wKvk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
var _firstDayOfWeek = require("./firstDayOfWeek");
var _firstDayOfWeekDefault = parcelHelpers.interopDefault(_firstDayOfWeek);
var _weekdayEnum = require("./Weekday.enum");
function lastDayOfWeek1(date, startDay = _weekdayEnum.Weekday.Monday) {
    if (!_issetDefault.default(date)) date = new Date();
    const lastDayOfWeek = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const firstDay = _firstDayOfWeekDefault.default(date, startDay);
    lastDayOfWeek.setDate(firstDay.getDate() + 6);
    return lastDayOfWeek;
}
exports.default = lastDayOfWeek1;

},{"../isset":"7dh4l","./firstDayOfWeek":"hO5K5","./Weekday.enum":"04tdi","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"gkmZM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
var _isNullOrEmpty = require("../isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
var _stringExtensions = require("../../extensions/StringExtensions");
function formatDate(format, date) {
    if (_isNullOrEmptyDefault.default(format)) return '';
    if (!_issetDefault.default(date)) date = new Date();
    //yy and yyyy
    const yyyy = date.getFullYear();
    const yy = yyyy.toString().substring(2);
    //MM or M
    const M = date.getMonth() + 1;
    const MM = M <= 9 ? `0${M}` : M.toString();
    //d or dd
    const d = date.getDate();
    const dd = d <= 9 ? `0${d}` : d.toString();
    //H or HH
    const H = date.getHours();
    const HH = H <= 9 ? `0${H}` : H.toString();
    //m or mm
    const m = date.getMinutes();
    const mm = m <= 9 ? `0${m}` : m.toString();
    //s or ss
    const s = date.getSeconds();
    const ss = s <= 9 ? `0${s}` : s.toString();
    format = format.ReplaceAll("yyyy", yyyy.toString());
    format = format.ReplaceAll("yy", yy);
    format = format.ReplaceAll("MM", MM);
    format = format.ReplaceAll("M", M.toString());
    format = format.ReplaceAll("dd", dd);
    format = format.ReplaceAll("d", d.toString());
    format = format.ReplaceAll("HH", HH);
    format = format.ReplaceAll("H", H.toString());
    format = format.ReplaceAll("mm", mm);
    format = format.ReplaceAll("m", m.toString());
    format = format.ReplaceAll("ss", ss);
    format = format.ReplaceAll("s", s.toString());
    return format;
}
exports.default = formatDate;

},{"../isset":"7dh4l","../isNullOrEmpty":"9jyXv","../../extensions/StringExtensions":"djiyg","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"jer1o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function weekNumber(date) {
    if (!_issetDefault.default(date)) date = new Date();
    const currentDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // If currentDate is Sunday, then calculate with -7 instead of 0
    currentDate.setDate(currentDate.getDate() + 4 - (currentDate.getDay() || 7));
    const firstJanuary = new Date(Date.UTC(currentDate.getFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    const weekNo = Math.ceil(((currentDate.getTime() - firstJanuary.getTime()) / 86400000 + 1) / 7);
    // Return array of year and week number
    return weekNo;
}
exports.default = weekNumber;

},{"../isset":"7dh4l","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"ljGDl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functions = require("./functions");
parcelHelpers.exportAll(_functions, exports);
var _classes = require("./classes");
parcelHelpers.exportAll(_classes, exports);
var _events = require("./events");
parcelHelpers.exportAll(_events, exports);

},{"./functions":"9XwLJ","./classes":"cbqoL","./events":"cr8Pc","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"cbqoL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uri = require("./Uri");
parcelHelpers.exportAll(_uri, exports);

},{"./Uri":"1F2hA","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"1F2hA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UrlParameter", ()=>UrlParameter
);
parcelHelpers.export(exports, "Uri", ()=>Uri
);
var _functions = require("../functions");
var _arrayExtensions = require("../extensions/ArrayExtensions");
var _stringExtensions = require("../extensions/StringExtensions");
class UrlParameter {
    constructor(query){
        this.Query = query;
        this.Parameters = this.buildParametersArray();
    }
    add(name, value1, encode = true) {
        this.remove(name);
        if (encode) value1 = encodeURIComponent(value1);
        this.Parameters.push({
            Key: name,
            Value: value1
        });
        this.buildQuery();
    }
    get(name1, decode = true) {
        const value = _functions.getUrlParameter(name1, this.getQuery());
        if (value && decode) return decodeURIComponent(value);
        return value;
    }
    getAll() {
        return this.Parameters;
    }
    remove(name2) {
        const existingParameterIndex = this.Parameters.IndexOf((p)=>p.Key.Equals(name2, true)
        );
        if (existingParameterIndex < 0) return;
        this.Parameters.splice(existingParameterIndex, 1);
        this.buildQuery();
    }
    removeAll() {
        this.Parameters = [];
        this.buildQuery();
    }
    getQuery() {
        this.buildQuery(false);
        return this.Query;
    }
    toString() {
        return this.getQuery();
    }
    buildParametersArray() {
        const parameters = [];
        this.Query.replace(/[?&]+([^=&]+)=([^&]*)/gi, (match, key, value)=>{
            parameters.push({
                Key: key,
                Value: value
            });
            return value;
        });
        return parameters;
    }
    buildQuery(fireOnChangeEvent = true) {
        if (_functions.isNullOrEmpty(this.Parameters)) {
            this.Query = '';
            return;
        }
        const queryArray = [];
        this.Parameters.forEach((param)=>{
            queryArray.push(`${param.Key}=${param.Value}`);
        });
        const query = queryArray.join('&');
        this.Query = '?' + query;
        if (fireOnChangeEvent && typeof this.onQueryChanged === 'function') this.onQueryChanged();
    }
}
class Uri {
    get hash() {
        return _functions.isNullOrEmpty(this.Hash) ? '' : `#${this.Hash}`;
    }
    constructor(url){
        this.OriginalUrl = url;
        this.Hash = this.getHash(url);
        if (!_functions.isNullOrEmpty(this.hash)) url = url.replace(this.hash, '');
        this.createUrlContext(url);
    }
    toString() {
        return this.Url.Contains(this.hash) ? this.Url : this.Url + this.hash;
    }
    Combine(urlToCombine) {
        const absoluteUrl = this.makeAbsoluteUrl(urlToCombine);
        this.createUrlContext(absoluteUrl);
    }
    createUrlContext(url1) {
        this.Url = url1;
        this.Host = this.getHost(url1);
        this.WebUrl = this.getWebUrl(url1);
        this.Path = this.getPath(url1);
        this.Query = this.getQuery(url1);
        this.Protocol = this.getProtocol(url1);
        this.Parameters = new UrlParameter(this.Query);
        const self = this;
        this.Parameters.onQueryChanged = ()=>{
            self.onParameterQueryChanged();
        };
    }
    onParameterQueryChanged() {
        // this.Query = this.Parameters.toString();
        const newUrl = _functions.removeAllParametersFromUrl(this.Url) + this.Parameters.toString();
        this.createUrlContext(newUrl);
    }
    makeAbsoluteUrl(urlToCombine1) {
        if (urlToCombine1.StartsWith('http://') || urlToCombine1.StartsWith('https://')) return urlToCombine1;
        if (urlToCombine1.StartsWith('?') || urlToCombine1.StartsWith('&')) {
            const params = new UrlParameter(urlToCombine1);
            params.getAll().forEach((param)=>{
                this.Parameters.add(param.Key, param.Value);
            });
            return this.toString();
        }
        let absoluteUrl = this.WebUrl;
        const relativeUrl = this.Path;
        if (absoluteUrl.EndsWith('/')) absoluteUrl = absoluteUrl.substring(0, absoluteUrl.length - 1);
        if (relativeUrl.length > 0 && urlToCombine1.StartsWith(relativeUrl)) urlToCombine1 = urlToCombine1.substr(urlToCombine1.IndexOf(relativeUrl) + urlToCombine1.length);
        if (urlToCombine1.StartsWith('/')) urlToCombine1 = urlToCombine1.substr(1);
        const url = absoluteUrl + '/' + urlToCombine1 + this.Parameters.toString();
        return url;
    }
    getSplittedUrl(url2) {
        if (this.SplittedUrl) return this.SplittedUrl;
        this.SplittedUrl = url2.split('/');
        return this.SplittedUrl;
    }
    getWebUrl(url3) {
        url3 = _functions.removeAllParametersFromUrl(url3);
        return url3;
    }
    getProtocol(url4) {
        const pathArray = this.getSplittedUrl(url4);
        return pathArray[0];
    }
    getHost(url5) {
        const pathArray = this.getSplittedUrl(url5);
        return pathArray[2];
    }
    getHostWithProtocol(url6) {
        const protocol = this.getProtocol(url6);
        const host = this.getHost(url6);
        return `${protocol}//${host}`;
    }
    getPath(url7) {
        const webUrl = this.getWebUrl(url7);
        const hostWithProtocol = this.getHostWithProtocol(url7);
        return webUrl.replace(hostWithProtocol, '');
    }
    getQuery(url8) {
        const webUrl = this.getWebUrl(url8);
        return url8.replace(webUrl, '');
    }
    getHash(url9) {
        let urlCopy = url9.slice();
        let hashValue = "";
        if (!urlCopy.Contains("#")) return hashValue;
        let splittedUrl = urlCopy.split('#');
        hashValue = splittedUrl.LastOrDefault();
        if (!urlCopy.EndsWith('#' + hashValue) || hashValue.Contains("?")) hashValue = "";
        return hashValue;
    }
}

},{"../functions":"9XwLJ","../extensions/ArrayExtensions":"5yfXX","../extensions/StringExtensions":"djiyg","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"cr8Pc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventHandler", ()=>_eventHandler.EventHandler
);
parcelHelpers.export(exports, "IEventListener", ()=>_eventListener.IEventListener
);
parcelHelpers.export(exports, "IEventListenerResult", ()=>_eventListener.IEventListenerResult
);
parcelHelpers.export(exports, "EventListenerBase", ()=>_eventListener.EventListenerBase
);
var _eventHandler = require("./EventHandler");
var _eventListener = require("./EventListener");

},{"./EventHandler":"kOsJ5","./EventListener":"6FM4T","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"kOsJ5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventHandler", ()=>EventHandler
);
var _functions = require("../functions");
var _arrayExtensions = require("../extensions/ArrayExtensions");
class EventHandler {
    static Listen(name, listener1, uniqueEventId) {
        if (_functions.isNullOrEmpty(uniqueEventId)) uniqueEventId = _functions.randomString(32, "abcdef0123456789");
        if (EventHandler.allUniqueEventIds.IndexOf((id)=>id.Equals(uniqueEventId, true)
        ) >= 0) return;
        EventHandler.allUniqueEventIds.push(uniqueEventId);
        EventHandler.register(name, listener1);
    }
    static Fire(name1, ...args) {
        const allListener = EventHandler.getListener(name1);
        if (_functions.isNullOrEmpty(allListener)) return '';
        const result = [];
        let lastEventResult = null;
        const sortedListener = allListener.OrderBy((listener)=>listener.Sequence
        );
        for(let i = 0; i < sortedListener.length; i++){
            const listener = sortedListener[i];
            lastEventResult = listener.Execute(name1, lastEventResult, ...args);
            if (_functions.isNullOrEmpty(lastEventResult) || lastEventResult.ErrorOccurred) continue;
            if (!_functions.isNullOrEmpty(lastEventResult.Result)) result.push(lastEventResult.Result);
            if (lastEventResult.DisableEventListening) break;
        }
        return result;
    }
    static generateWindowListenerObject(name2) {
        window['SPFxAppDevEventListener'] = window['SPFxAppDevEventListener'] || {
        };
        window['SPFxAppDevEventListener'][name2] = window['SPFxAppDevEventListener'][name2] || [];
    }
    static register(name3, listener) {
        EventHandler.generateWindowListenerObject(name3);
        window['SPFxAppDevEventListener'][name3].push(listener);
    }
    static getListener(name4) {
        EventHandler.generateWindowListenerObject(name4);
        const allListener = window['SPFxAppDevEventListener'][name4];
        if (_functions.isNullOrEmpty(allListener)) return null;
        return allListener;
    }
}
EventHandler.allUniqueEventIds = [];

},{"../functions":"9XwLJ","../extensions/ArrayExtensions":"5yfXX","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"6FM4T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventListenerBase", ()=>EventListenerBase
);
class EventListenerBase {
    Execute(name, lastEventResult, ...args) {
        throw new Error('Method not implemented.');
    }
    constructor(){
        this.Sequence = 0;
        this.ErrorOccurred = false;
        this.Error = null;
        this.Result = null;
        this.DisableEventListening = false;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"ibqB2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Logger", ()=>_logger.Logger
);
parcelHelpers.export(exports, "LogType", ()=>_logger.LogType
);
parcelHelpers.export(exports, "LogLevel", ()=>_logger.LogLevel
);
parcelHelpers.export(exports, "ClassLoggerBase", ()=>_classLoggerBase.ClassLoggerBase
);
parcelHelpers.export(exports, "log", ()=>_logFactoryDecorators.log
);
var _logger = require("./logger/Logger");
var _classLoggerBase = require("./logger/ClassLoggerBase");
var _logFactoryDecorators = require("./logger/decorators/logFactory.decorators");

},{"./logger/Logger":"hY1Hm","./logger/ClassLoggerBase":"86D9y","./logger/decorators/logFactory.decorators":"4fMaB","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"hY1Hm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogLevel", ()=>LogLevel1
);
parcelHelpers.export(exports, "LogType", ()=>LogType1
);
parcelHelpers.export(exports, "Logger", ()=>Logger1
);
var _utility = require("@spfxappdev/utility");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
var LogLevel1;
(function(LogLevel) {
    LogLevel[LogLevel["None"] = 0] = "None";
    LogLevel[LogLevel["Log"] = 1] = "Log";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Warning"] = 4] = "Warning";
    LogLevel[LogLevel["Error"] = 8] = "Error";
    LogLevel[LogLevel["Table"] = 16] = "Table";
    LogLevel[LogLevel["All"] = 31] = "All";
})(LogLevel1 || (LogLevel1 = {
}));
var DefaultLoggerSettings = {
    LogNamespaceUrlParameterName: 'LogOnly',
    LoggingEnabledUrlParameterName: 'EnableConsoleLogging',
    LogLevel: LogLevel1.All
};
var LogType1;
(function(LogType) {
    LogType[LogType["Warning"] = 0] = "Warning";
    LogType[LogType["Info"] = 1] = "Info";
    LogType[LogType["Error"] = 2] = "Error";
    LogType[LogType["Table"] = 3] = "Table";
    LogType[LogType["Log"] = 4] = "Log";
})(LogType1 || (LogType1 = {
}));
var Logger1 = function() {
    function Logger(logNamespace, settings) {
        if (settings === void 0) settings = null;
        this.logNamespace = logNamespace;
        this.settings = settings;
        this._loggingEnabledByUrl = undefined;
        this._namespacesToLog = undefined;
        if (!_utility.isset(settings)) settings = __assign({
        }, Logger.DefaultSettings);
        this.settings = __assign(__assign(__assign({
        }, DefaultLoggerSettings), Logger.DefaultSettings), settings);
    }
    Object.defineProperty(Logger.prototype, "isLoggingEnabledByUrl", {
        get: function() {
            // URL Parameter already checked, return value from Parameter
            if (_utility.isset(this._loggingEnabledByUrl)) return this._loggingEnabledByUrl;
            // URL Parameter is not checked. Check and set Parameter
            var isEnabledValue = _utility.getUrlParameter(this.settings.LoggingEnabledUrlParameterName);
            if (!_utility.isset(isEnabledValue)) {
                this._loggingEnabledByUrl = false;
                return this._loggingEnabledByUrl;
            }
            this._loggingEnabledByUrl = _utility.toBoolean(isEnabledValue);
            return this._loggingEnabledByUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "isLoggingEnabledBySettings", {
        get: function() {
            return LogLevel1.None != (this.settings.LogLevel | LogLevel1.None);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "namespacesToLogFromUrl", {
        get: function() {
            if (_utility.isset(this._namespacesToLog)) return this._namespacesToLog;
            var modules = _utility.getUrlParameter(this.settings.LogNamespaceUrlParameterName);
            if (_utility.isNullOrEmpty(modules)) {
                this._namespacesToLog = [];
                return this._namespacesToLog;
            }
            this._namespacesToLog = modules.toLowerCase().split(',');
            return this._namespacesToLog;
        },
        enumerable: false,
        configurable: true
    });
    Logger.prototype.getCurrentSettings = function() {
        return __assign({
        }, this.settings);
    };
    Logger.prototype.logToConsole = function(logType) {
        var _this = this;
        var data = [];
        for(var _i = 1; _i < arguments.length; _i++)data[_i - 1] = arguments[_i];
        if (!_utility.isset(console)) return;
        if (!this.isLoggingEnabledBySettings && !this.isLoggingEnabledByUrl) return;
        //If namespaces are filtered by URL and the current namespace is NOT one of it
        if (!_utility.isNullOrEmpty(this.namespacesToLogFromUrl) && this.namespacesToLogFromUrl.indexOf(this.logNamespace.toLowerCase()) < 0) return;
        var valuesToLog = __spreadArray(__spreadArray([], data), [
            this.logNamespace
        ]);
        var logEnabled = this.isLoggingEnabledByUrl;
        var currentLogLevel = this.settings.LogLevel;
        switch(logType){
            case LogType1.Warning:
                if (logEnabled || LogLevel1.Warning == (currentLogLevel & LogLevel1.Warning)) console.warn.apply(console, valuesToLog);
                break;
            case LogType1.Info:
                if (logEnabled || LogLevel1.Info == (currentLogLevel & LogLevel1.Info)) /* tslint:disable:no-console */ console.info.apply(console, valuesToLog);
                break;
            case LogType1.Error:
                if (logEnabled || LogLevel1.Info == (currentLogLevel & LogLevel1.Info)) console.error.apply(console, valuesToLog);
                break;
            case LogType1.Table:
                if (!(logEnabled || LogLevel1.Table == (currentLogLevel & LogLevel1.Table))) break;
                if (typeof console.table !== 'function') {
                    /* tslint:disable:no-console */ console.info('Your browser does not support console.table, console.log was used instead', this.logNamespace);
                    console.log.apply(console, valuesToLog);
                    break;
                }
                data.forEach(function(d) {
                    var valueType = typeof d;
                    if (valueType !== 'array' && valueType !== 'object') {
                        /* tslint:disable:no-console */ console.info('It is not possible to log table if logValue is not an array or object, console.log was used instead', _this.logNamespace);
                        console.log(d, _this.logNamespace);
                        return;
                    }
                    console.table(d, [
                        _this.logNamespace
                    ]);
                });
                break;
            case LogType1.Log:
            default:
                if (logEnabled || LogLevel1.Log == (currentLogLevel & LogLevel1.Log)) console.log.apply(console, valuesToLog);
                break;
        }
    };
    Logger.prototype.log = function() {
        var data = [];
        for(var _i = 0; _i < arguments.length; _i++)data[_i] = arguments[_i];
        this.logToConsole.apply(this, __spreadArray([
            LogType1.Log
        ], data));
    };
    Logger.prototype.warn = function() {
        var data = [];
        for(var _i = 0; _i < arguments.length; _i++)data[_i] = arguments[_i];
        this.logToConsole.apply(this, __spreadArray([
            LogType1.Warning
        ], data));
    };
    Logger.prototype.info = function() {
        var data = [];
        for(var _i = 0; _i < arguments.length; _i++)data[_i] = arguments[_i];
        this.logToConsole.apply(this, __spreadArray([
            LogType1.Info
        ], data));
    };
    Logger.prototype.error = function() {
        var data = [];
        for(var _i = 0; _i < arguments.length; _i++)data[_i] = arguments[_i];
        this.logToConsole.apply(this, __spreadArray([
            LogType1.Error
        ], data));
    };
    Logger.prototype.table = function() {
        var data = [];
        for(var _i = 0; _i < arguments.length; _i++)data[_i] = arguments[_i];
        this.logToConsole.apply(this, __spreadArray([
            LogType1.Table
        ], data));
    };
    Logger.Log = function(logNamespace, logType) {
        var data = [];
        for(var _i = 2; _i < arguments.length; _i++)data[_i - 2] = arguments[_i];
        var logger = new Logger(logNamespace);
        switch(logType){
            case LogType1.Error:
                logger.error.apply(logger, data);
                break;
            case LogType1.Info:
                logger.info.apply(logger, data);
                break;
            case LogType1.Table:
                logger.table.apply(logger, data);
                break;
            case LogType1.Warning:
                logger.warn.apply(logger, data);
                break;
            case LogType1.Log:
            default:
                logger.log.apply(logger, data);
                break;
        }
    };
    Logger.DefaultSettings = DefaultLoggerSettings;
    return Logger;
}();

},{"@spfxappdev/utility":"ju5EQ","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"ju5EQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functions = require("./functions");
parcelHelpers.exportAll(_functions, exports);

},{"./functions":"ifjVk","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"ifjVk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrayFrom", ()=>_arrayFromDefault.default
);
parcelHelpers.export(exports, "cssClasses", ()=>_cssClassesDefault.default
);
parcelHelpers.export(exports, "extend", ()=>_extendDefault.default
);
parcelHelpers.export(exports, "getDeepOrDefault", ()=>_getDeepOrDefaultDefault.default
);
parcelHelpers.export(exports, "getUrlParameter", ()=>_getUrlParameterDefault.default
);
parcelHelpers.export(exports, "isFunction", ()=>_isFunctionDefault.default
);
parcelHelpers.export(exports, "isNullOrEmpty", ()=>_isNullOrEmptyDefault.default
);
parcelHelpers.export(exports, "isset", ()=>_issetDefault.default
);
parcelHelpers.export(exports, "issetDeep", ()=>_issetDeepDefault.default
);
parcelHelpers.export(exports, "toBoolean", ()=>_toBooleanDefault.default
);
parcelHelpers.export(exports, "asyncFn", ()=>_asyncFnDefault.default
);
parcelHelpers.export(exports, "promiseQueue", ()=>_promiseQueueDefault.default
);
parcelHelpers.export(exports, "toParameterlessPromiseQueueFunc", ()=>_promiseQueue.toParameterlessPromiseQueueFunc
);
parcelHelpers.export(exports, "isValidEmail", ()=>_isValidEmailDefault.default
);
parcelHelpers.export(exports, "randomString", ()=>_randomStringDefault.default
);
parcelHelpers.export(exports, "replaceNonAlphanumeric", ()=>_replaceNonAlphanumericDefault.default
);
parcelHelpers.export(exports, "stripHTML", ()=>_stripHTMLDefault.default
);
var _arrayFrom = require("./arrayFrom");
var _arrayFromDefault = parcelHelpers.interopDefault(_arrayFrom);
var _cssClasses = require("./cssClasses");
var _cssClassesDefault = parcelHelpers.interopDefault(_cssClasses);
var _extend = require("./extend");
var _extendDefault = parcelHelpers.interopDefault(_extend);
var _getDeepOrDefault = require("./getDeepOrDefault");
var _getDeepOrDefaultDefault = parcelHelpers.interopDefault(_getDeepOrDefault);
var _getUrlParameter = require("./getUrlParameter");
var _getUrlParameterDefault = parcelHelpers.interopDefault(_getUrlParameter);
var _isFunction = require("./isFunction");
var _isFunctionDefault = parcelHelpers.interopDefault(_isFunction);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
var _issetDeep = require("./issetDeep");
var _issetDeepDefault = parcelHelpers.interopDefault(_issetDeep);
var _toBoolean = require("./toBoolean");
var _toBooleanDefault = parcelHelpers.interopDefault(_toBoolean);
var _asyncFn = require("./asyncFn");
var _asyncFnDefault = parcelHelpers.interopDefault(_asyncFn);
var _promiseQueue = require("./promiseQueue");
var _promiseQueueDefault = parcelHelpers.interopDefault(_promiseQueue);
var _isValidEmail = require("./isValidEmail");
var _isValidEmailDefault = parcelHelpers.interopDefault(_isValidEmail);
var _randomString = require("./randomString");
var _randomStringDefault = parcelHelpers.interopDefault(_randomString);
var _replaceNonAlphanumeric = require("./replaceNonAlphanumeric");
var _replaceNonAlphanumericDefault = parcelHelpers.interopDefault(_replaceNonAlphanumeric);
var _stripHTML = require("./stripHTML");
var _stripHTMLDefault = parcelHelpers.interopDefault(_stripHTML);

},{"./arrayFrom":"86CW9","./cssClasses":"gM9zx","./extend":"etygz","./getDeepOrDefault":"6fphV","./getUrlParameter":"8lZOr","./isFunction":"dcFSt","./isNullOrEmpty":"4AZS9","./isset":"UAARg","./issetDeep":"eL1QQ","./toBoolean":"2kjgt","./asyncFn":"72hbv","./promiseQueue":"3Ki67","./isValidEmail":"di2Ye","./randomString":"ISlJM","./replaceNonAlphanumeric":"f2QWf","./stripHTML":"6zqXC","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"86CW9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function arrayFrom(arrLike, mapFunc, thisArgs) {
    if (!Array["from"]) Array["from"] = function() {
        var toStr = Object.prototype.toString;
        var isCallable = function(fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function(value) {
            var numberVal = Number(value);
            if (isNaN(numberVal)) return 0;
            if (numberVal === 0 || !isFinite(numberVal)) return numberVal;
            return (numberVal > 0 ? 1 : -1) * Math.floor(Math.abs(numberVal));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function(value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };
        return function from(arrayLike) {
            var C = this;
            var items = Object(arrayLike);
            if (arrayLike == null) throw new TypeError('Array.from requires an array-like object - not null or undefined');
            var mapFn;
            var args = arguments;
            if (args.length > 1) mapFn = args[1];
            var T;
            if (typeof mapFn !== 'undefined') {
                if (!isCallable(mapFn)) throw new TypeError('Array.from: when provided, the second argument must be a function');
                if (args.length > 2) T = args[2];
            }
            var len = toLength(items.length);
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);
            // 16. Let k be 0.
            var k = 0;
            // 17. Repeat, while k < len… (also steps a - h)
            var kValue;
            while(k < len){
                kValue = items[k];
                if (mapFn) A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                else A[k] = kValue;
                k += 1;
            }
            // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len;
            // 20. Return A.
            return A;
        };
    };
    return Array["from"](arrLike, mapFunc, thisArgs);
}
exports.default = arrayFrom;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"gM9zx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function cssClasses() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var classes = [];
    var self = cssClasses;
    for(var i = 0; i < args.length; i++){
        var arg = args[i];
        if (!_issetDefault.default(arg)) continue;
        var argType = typeof arg;
        if (argType === 'string') {
            classes.push(arg);
            continue;
        }
        if (Array.isArray(arg) && arg.length > 0) {
            var classNamesFromArray = self.apply(null, arg);
            if (_issetDefault.default(classNamesFromArray) && !_isNullOrEmptyDefault.default(classNamesFromArray)) classes.push(classNamesFromArray);
            continue;
        }
        if (argType === 'object') {
            if (arg.toString !== Object.prototype.toString) {
                classes.push(arg.toString());
                continue;
            }
            for(var className in arg)if (arg.hasOwnProperty(className) && arg[className]) classes.push(className);
        }
    }
    return classes.join(' ');
}
exports.default = cssClasses;

},{"./isset":"UAARg","./isNullOrEmpty":"4AZS9","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"UAARg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isset(property) {
    return typeof property !== 'undefined' && property != null;
}
exports.default = isset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"4AZS9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function isNullOrEmpty(property) {
    if (!_issetDefault.default(property)) return true;
    if (typeof property === 'string') return property.trim().length < 1;
    if (!property.hasOwnProperty('length')) return false;
    return property.length < 1;
}
exports.default = isNullOrEmpty;

},{"./isset":"UAARg","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"etygz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayFrom = require("./arrayFrom");
var _arrayFromDefault = parcelHelpers.interopDefault(_arrayFrom);
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function extend(target, source, inCaseOfArrayUseSourceObject) {
    if (inCaseOfArrayUseSourceObject === void 0) inCaseOfArrayUseSourceObject = true;
    if (Array.isArray(target) && Array.isArray(source)) {
        if (inCaseOfArrayUseSourceObject) return source;
        return _arrayFromDefault.default(new Set(target.concat(source)));
    }
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for(var _i = 0, _a = Object.keys(source); _i < _a.length; _i++){
        var key = _a[_i];
        if (Array.isArray(source[key])) {
            var targetValue = target[key] || [];
            source[key] = extend(targetValue, source[key], inCaseOfArrayUseSourceObject);
        } else if (source[key] instanceof Object) {
            var targetValue = target[key] || {
            };
            source[key] = extend(targetValue, source[key], inCaseOfArrayUseSourceObject);
        }
    }
    // Join `target` and modified `source`
    target = target || {
    };
    var tempTarget = __assign(__assign({
    }, target), source);
    return tempTarget;
}
exports.default = extend;

},{"./arrayFrom":"86CW9","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"6fphV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function getDeepOrDefault(objectToCheck, keyNameSpace, defaultValue) {
    if (defaultValue === void 0) defaultValue = null;
    if (!_issetDefault.default(objectToCheck)) return defaultValue;
    var namespaceKeys = keyNameSpace.split('.');
    var currentObjectPath = objectToCheck;
    for(var i = 0; i < namespaceKeys.length; i++){
        var currentKey = namespaceKeys[i];
        if (!_issetDefault.default(currentObjectPath[currentKey])) return defaultValue;
        currentObjectPath = currentObjectPath[currentKey];
    }
    return !_issetDefault.default(currentObjectPath) ? defaultValue : currentObjectPath;
}
exports.default = getDeepOrDefault;

},{"./isset":"UAARg","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"8lZOr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function getUrlParameter(parameterName, url) {
    if (url === void 0) url = null;
    if (_isNullOrEmptyDefault.default(url)) url = window.location.href;
    url = url.toLowerCase();
    var name = parameterName.toLowerCase();
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    var regexS = '[\\?&]' + name + '=([^&#]*)';
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    if (results == null) return null;
    return results[1];
}
exports.default = getUrlParameter;

},{"./isNullOrEmpty":"4AZS9","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"dcFSt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function isFunction(property) {
    return _issetDefault.default(property) && typeof property === 'function';
}
exports.default = isFunction;

},{"./isset":"UAARg","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"eL1QQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function issetDeep(objectToCheck, keyNameSpace) {
    if (!_issetDefault.default(objectToCheck)) return false;
    var namespaceKeys = keyNameSpace.split('.');
    var currentObjectPath = objectToCheck;
    for(var i = 0; i < namespaceKeys.length; i++){
        var currentKey = namespaceKeys[i];
        if (!_issetDefault.default(currentObjectPath)) return false;
        currentObjectPath = currentObjectPath[currentKey];
    }
    return _issetDefault.default(currentObjectPath);
}
exports.default = issetDeep;

},{"./isset":"UAARg","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"2kjgt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function toBoolean(value) {
    if (!_issetDefault.default(value)) return false;
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') value = value.toLowerCase();
    if (value !== 'false' && value !== 'true' && value !== '0' && value !== '1' && value !== 0 && value !== 1) return false;
    return value === 'false' || value === '0' || value === 0 ? false : true;
}
exports.default = toBoolean;

},{"./isset":"UAARg","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"72hbv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
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
                    op = [
                        0
                    ];
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
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
};
function asyncFn(promiseFn) {
    return __awaiter(this, void 0, void 0, function() {
        var r, e_1;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    _a.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4 /*yield*/ ,
                        promiseFn
                    ];
                case 1:
                    r = _a.sent();
                    return [
                        2 /*return*/ ,
                        [
                            r,
                            null
                        ]
                    ];
                case 2:
                    e_1 = _a.sent();
                    return [
                        2 /*return*/ ,
                        [
                            null,
                            e_1
                        ]
                    ];
                case 3:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
exports.default = asyncFn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"3Ki67":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toParameterlessPromiseQueueFunc", ()=>toParameterlessPromiseQueueFunc
);
var _1 = require(".");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
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
                    op = [
                        0
                    ];
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
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
};
function toParameterlessPromiseQueueFunc(promiseFunc) {
    var funcParams = [];
    for(var _i = 1; _i < arguments.length; _i++)funcParams[_i - 1] = arguments[_i];
    var wrapper = function() {
        return promiseFunc.apply(void 0, funcParams);
    };
    return wrapper;
}
function promiseQueue(promiseArray, delayBetweenCalls) {
    if (delayBetweenCalls === void 0) delayBetweenCalls = 500;
    return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4 /*yield*/ ,
                        promiseQueueExecutor(promiseArray, 0, delayBetweenCalls)
                    ];
                case 1:
                    _a.sent();
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
}
exports.default = promiseQueue;
var promiseQueueExecutor = function(promiseArray, index, delayBetweenCalls) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(_a1) {
            return [
                2 /*return*/ ,
                new Promise(function(resolve, reject) {
                    var currentPromise;
                    var callbackFunc = undefined;
                    var errorFunc = undefined;
                    if (_1.isFunction(promiseArray[index])) currentPromise = promiseArray[index];
                    else if (_1.isFunction(promiseArray[index].promiseFunc)) {
                        var promiseQueue_1 = promiseArray[index];
                        currentPromise = promiseQueue_1.promiseFunc;
                        callbackFunc = _1.isFunction(promiseQueue_1.callback) ? promiseQueue_1.callback : callbackFunc;
                        errorFunc = _1.isFunction(promiseQueue_1.onError) ? promiseQueue_1.onError : errorFunc;
                    }
                    // if(!isset(currentPromise)) {
                    //     if(index + 1 >= promiseArray.length) {
                    //         return resolve();
                    //     }
                    //     setTimeout(async () => {
                    //         await promiseQueueExecutor(promiseArray, index+1, delayBetweenCalls);
                    //         return resolve();
                    //     }, delayBetweenCalls);
                    // }
                    currentPromise().then(function(promiseResult) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            var callbackResult, e_1;
                            return __generator(this, function(_a2) {
                                switch(_a2.label){
                                    case 0:
                                        if (!_1.isFunction(callbackFunc)) return [
                                            3 /*break*/ ,
                                            4
                                        ];
                                        callbackResult = callbackFunc(promiseResult, index);
                                        if (!(callbackResult instanceof Promise)) return [
                                            3 /*break*/ ,
                                            4
                                        ];
                                        _a2.label = 1;
                                    case 1:
                                        _a2.trys.push([
                                            1,
                                            3,
                                            ,
                                            4
                                        ]);
                                        return [
                                            4 /*yield*/ ,
                                            callbackResult
                                        ];
                                    case 2:
                                        _a2.sent();
                                        return [
                                            3 /*break*/ ,
                                            4
                                        ];
                                    case 3:
                                        e_1 = _a2.sent();
                                        return [
                                            3 /*break*/ ,
                                            4
                                        ];
                                    case 4:
                                        if (index + 1 >= promiseArray.length) return [
                                            2 /*return*/ ,
                                            resolve()
                                        ];
                                        setTimeout(function() {
                                            return __awaiter(void 0, void 0, void 0, function() {
                                                return __generator(this, function(_a) {
                                                    switch(_a.label){
                                                        case 0:
                                                            return [
                                                                4 /*yield*/ ,
                                                                promiseQueueExecutor(promiseArray, index + 1, delayBetweenCalls)
                                                            ];
                                                        case 1:
                                                            _a.sent();
                                                            return [
                                                                2 /*return*/ ,
                                                                resolve()
                                                            ];
                                                    }
                                                });
                                            });
                                        }, delayBetweenCalls);
                                        return [
                                            2 /*return*/ 
                                        ];
                                }
                            });
                        });
                    }).catch(function(error) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            var errorResult, e_2;
                            return __generator(this, function(_a) {
                                switch(_a.label){
                                    case 0:
                                        if (!_1.isFunction(errorFunc)) return [
                                            3 /*break*/ ,
                                            4
                                        ];
                                        errorResult = errorFunc(error, index);
                                        if (!(errorResult instanceof Promise)) return [
                                            3 /*break*/ ,
                                            4
                                        ];
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([
                                            1,
                                            3,
                                            ,
                                            4
                                        ]);
                                        return [
                                            4 /*yield*/ ,
                                            errorResult
                                        ];
                                    case 2:
                                        _a.sent();
                                        return [
                                            3 /*break*/ ,
                                            4
                                        ];
                                    case 3:
                                        e_2 = _a.sent();
                                        return [
                                            3 /*break*/ ,
                                            4
                                        ];
                                    case 4:
                                        if (index + 1 >= promiseArray.length) return [
                                            2 /*return*/ ,
                                            resolve()
                                        ];
                                        return [
                                            4 /*yield*/ ,
                                            promiseQueueExecutor(promiseArray, index + 1, delayBetweenCalls)
                                        ];
                                    case 5:
                                        _a.sent();
                                        return [
                                            2 /*return*/ ,
                                            resolve()
                                        ];
                                }
                            });
                        });
                    });
                })
            ];
        });
    });
};

},{".":"ifjVk","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"di2Ye":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function isValidEmail(email) {
    if (_isNullOrEmptyDefault.default(email)) return false;
    if (typeof email !== "string") return false;
    return !_isNullOrEmptyDefault.default(email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
}
exports.default = isValidEmail;

},{"./isNullOrEmpty":"4AZS9","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"ISlJM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function randomString(randomStringLength, characters) {
    if (randomStringLength === void 0) randomStringLength = 5;
    if (characters === void 0) characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    var charactersLength = characters.length;
    for(var i = 0; i < randomStringLength; i++)result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}
exports.default = randomString;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"f2QWf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function replaceNonAlphanumeric(value, replaceValue) {
    if (replaceValue === void 0) replaceValue = '';
    if (_isNullOrEmptyDefault.default(value)) return value;
    if (typeof value !== "string") return value;
    return value.replace(/[^\w]/gi, replaceValue);
}
exports.default = replaceNonAlphanumeric;

},{"./isNullOrEmpty":"4AZS9","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"6zqXC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function stripHtml(htmlValue) {
    if (_isNullOrEmptyDefault.default(htmlValue)) return '';
    return new DOMParser().parseFromString(htmlValue, 'text/html').body.textContent;
}
exports.default = stripHtml;

},{"./isNullOrEmpty":"4AZS9","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"86D9y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClassLoggerBase", ()=>ClassLoggerBase1
);
var _logger = require("./Logger");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
/**
* A Base Class for Console Logger
* For Intellisense with the @classLogger(), use this:
* @example export interface MyClass extends ClassLoggerBase {}; export class MyClass;
*/ var ClassLoggerBase1 = function() {
    function ClassLoggerBase() {
        this.assignLogger();
    }
    ClassLoggerBase.prototype.log = function(logType) {
        var _a;
        var data = [];
        for(var _i = 1; _i < arguments.length; _i++)data[_i - 1] = arguments[_i];
        (_a = this.logger).logToConsole.apply(_a, __spreadArray([
            logType
        ], data));
    };
    ClassLoggerBase.prototype.getLogCategory = function() {
        return 'SPFxAppDev Logger BASE';
    };
    ClassLoggerBase.prototype.getLogSettings = function() {
        return __assign({
        }, _logger.Logger.DefaultSettings);
    };
    ClassLoggerBase.prototype.assignLogger = function() {
        if (!this.logger) {
            var loggingSettings = this.getLogSettings();
            this.logger = new _logger.Logger(this.getLogCategory(), loggingSettings);
        }
        return this.logger;
    };
    return ClassLoggerBase;
}();

},{"./Logger":"hY1Hm","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"4fMaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "log", ()=>log
);
var _classDecorators = require("./class.decorators");
var _methodDecorators = require("./method.decorators");
var _propertyDecorators = require("./property.decorators");
var _this = undefined;
var log = function(options) {
    if (options === void 0) options = null;
    var factoryFunction = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        switch(args.length){
            case 3:
                if (typeof args[2] === 'number' || typeof args[2] === 'undefined') return _propertyDecorators.propertyLogger(options).apply(_this, args);
                return _methodDecorators.methodLogger(options).apply(_this, args);
            case 2:
                return _propertyDecorators.propertyLogger(options).apply(_this, args);
            case 1:
                // return classLogger.apply(this, args);
                return _classDecorators.classLogger(options).apply(_this, args);
            default:
                throw new Error('Not a valid decorator');
        }
    };
    return factoryFunction;
};

},{"./class.decorators":"KuAgl","./method.decorators":"3YHGY","./property.decorators":"gwd7U","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"KuAgl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "classLogger", ()=>classLogger
);
var _logger = require("../Logger");
var _decoratorsUtility = require("./decorators.utility");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
var defaultOptions = {
    customLogCategory: null,
    logLevel: null,
    override: true
};
var classLogger = function(options) {
    if (options === void 0) options = null;
    options = __assign(__assign({
    }, defaultOptions), options);
    var classLoggerFunc = function(Base) {
        // save a reference to the original constructor
        var original = Base;
        var fallbackName = original && original.name ? original.name : ''; // deepscan-disable-line INSUFFICIENT_NULL_CHECK
        var enableConsoleLogging = options.logLevel ? options.logLevel : __assign({
        }, _logger.Logger.DefaultSettings).LogLevel;
        var loggingCategory = _decoratorsUtility.getLogCategoryOrCustom(original, options.customLogCategory, fallbackName);
        var getLogCategoryFunc = function() {
            return _decoratorsUtility.getLogCategoryOrCustom(original, options.customLogCategory, fallbackName);
        };
        var logFunc = function(logType) {
            var logData = [];
            for(var _i = 1; _i < arguments.length; _i++)logData[_i - 1] = arguments[_i];
            _decoratorsUtility.logFunc.apply(void 0, __spreadArray([
                original,
                enableConsoleLogging,
                loggingCategory,
                logType
            ], logData));
        };
        var logSettingsFunc = function() {
            return _decoratorsUtility.getLogSettings();
        };
        if (options.override) {
            original.prototype.getLogCategory = getLogCategoryFunc;
            original.prototype.log = logFunc;
            original.prototype.getLogSettings = logSettingsFunc;
        } else {
            original.prototype.getLogCategory = original.prototype.getLogCategory || getLogCategoryFunc;
            original.prototype.log = original.prototype.log || logFunc;
            original.prototype.getLogSettings = original.prototype.getLogSettings || logSettingsFunc;
        }
        // a utility function to generate instances of a class
        function construct(classConstructor, args) {
            var c = function() {
                return classConstructor.apply(this, args);
            };
            c.prototype = classConstructor.prototype;
            var instanceObj = new c();
            instanceObj.logger = new _logger.Logger(instanceObj.getLogCategory(), instanceObj.getLogSettings());
            return instanceObj;
        }
        // the new constructor behaviour
        var f = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return construct(original, args);
        };
        // copy prototype so intanceof operator still works
        f.prototype = original.prototype; // deepscan-disable-line INSUFFICIENT_NULL_CHECK
        // return new constructor (will override original)
        return f;
    };
    return classLoggerFunc;
};

},{"../Logger":"hY1Hm","./decorators.utility":"l9MRD","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"l9MRD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "logFunc", ()=>logFunc
);
parcelHelpers.export(exports, "getLogCategoryOrCustom", ()=>getLogCategoryOrCustom
);
parcelHelpers.export(exports, "getLogSettings", ()=>getLogSettings
);
var _logger = require("../Logger");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
var logFunc = function(target, logLevel, loggingCategory, logType) {
    var logData = [];
    for(var _i = 4; _i < arguments.length; _i++)logData[_i - 4] = arguments[_i];
    var containsLogger = typeof target['logger'] === 'object'; // && (target as any).getLogger() instanceof Logger;
    var loggingSettings = containsLogger ? target.logger.getCurrentSettings() : __assign({
    }, _logger.Logger.DefaultSettings);
    loggingSettings.LogLevel = logLevel;
    var logger = new _logger.Logger(loggingCategory, loggingSettings);
    logger.logToConsole.apply(logger, __spreadArray([
        logType
    ], logData));
};
var getLogCategoryOrCustom = function(target, customLogCategory, fallbackValue) {
    if (customLogCategory === void 0) customLogCategory = null;
    if (fallbackValue === void 0) fallbackValue = '';
    var loggingCategory = '';
    if (typeof customLogCategory === 'string') loggingCategory = customLogCategory;
    else {
        var containsLoggingCategory = typeof target['getLogCategory'] === 'function' && typeof target.getLogCategory() === 'string';
        // console.log("SSC", typeof target['getLogCategory'], (" loggingCategory: " +loggingCategory.slice(0) ), (" customLogCategory: " + customLogCategory));
        loggingCategory = containsLoggingCategory ? target.getLogCategory() : fallbackValue;
    }
    return loggingCategory;
};
var getLogSettings = function() {
    return _logger.Logger.DefaultSettings;
};

},{"../Logger":"hY1Hm","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"3YHGY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "methodLogger", ()=>methodLogger
);
var _logger = require("../Logger");
var _decoratorsUtility = require("./decorators.utility");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
var defaultOptions = {
    customLogCategory: null,
    logLevel: null
};
var methodLogger = function(options) {
    if (options === void 0) options = null;
    options = __assign(__assign({
    }, defaultOptions), options);
    return function(target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function() {
            var logLevel = options.logLevel;
            var loggingCategory = _decoratorsUtility.getLogCategoryOrCustom(target, options.customLogCategory, propertyKey);
            var containsLogLevel = typeof logLevel !== 'undefined' && logLevel !== null;
            var targetContainsGetLogSettings = typeof target["getLogSettings"] == "function";
            if (!containsLogLevel && targetContainsGetLogSettings) {
                var settings = target["getLogSettings"]();
                if (settings && typeof settings["LogLevel"] == "number") {
                    logLevel = settings["LogLevel"];
                    containsLogLevel = true;
                }
            }
            logLevel = containsLogLevel ? logLevel : _logger.Logger.DefaultSettings.LogLevel;
            var logFunc = function(logType) {
                var logData = [];
                for(var _i = 1; _i < arguments.length; _i++)logData[_i - 1] = arguments[_i];
                _decoratorsUtility.logFunc.apply(void 0, __spreadArray([
                    target,
                    logLevel,
                    loggingCategory,
                    logType
                ], logData));
            };
            if (arguments && arguments.length > 0) logFunc(_logger.LogType.Log, [
                propertyKey + " START with params",
                arguments
            ]);
            else logFunc(_logger.LogType.Log, propertyKey + " START");
            var result = originalMethod.apply(this, arguments);
            if (!(result instanceof Promise)) {
                logFunc(_logger.LogType.Log, propertyKey + " END");
                return result;
            }
            return Promise.resolve(result).then(function(value) {
                logFunc(_logger.LogType.Log, propertyKey + " END");
                return value;
            }).catch(function(error) {
                logFunc(_logger.LogType.Error, "ERROR occurred in " + propertyKey);
                logFunc(_logger.LogType.Error, error);
                logFunc(_logger.LogType.Log, propertyKey + " END");
                return Promise.reject(error);
            });
        };
    };
};

},{"../Logger":"hY1Hm","./decorators.utility":"l9MRD","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}],"gwd7U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "propertyLogger", ()=>propertyLogger
);
var _logger = require("../Logger");
var _decoratorsUtility = require("./decorators.utility");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = undefined && undefined.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
var defaultOptions = {
    customLogCategory: null,
    logLevel: null
};
var propertyLogger = function(options) {
    if (options === void 0) options = null;
    options = __assign(__assign({
    }, defaultOptions), options);
    return function(target, propertyName) {
        var logLevel = options.logLevel;
        var containsLogLevel = typeof logLevel !== 'undefined' && logLevel !== null;
        var logFunc = function(currentInstance, logType) {
            var logData = [];
            for(var _i = 2; _i < arguments.length; _i++)logData[_i - 2] = arguments[_i];
            var loggingCategory = _decoratorsUtility.getLogCategoryOrCustom(currentInstance, options.customLogCategory, target.constructor['name'] + "." + propertyName);
            var targetContainsGetLogSettings = typeof currentInstance["getLogSettings"] == "function";
            if (!containsLogLevel && targetContainsGetLogSettings) {
                var settings = currentInstance["getLogSettings"]();
                if (settings && typeof settings["LogLevel"] == "number") {
                    logLevel = settings["LogLevel"];
                    containsLogLevel = true;
                }
            }
            _decoratorsUtility.logFunc.apply(void 0, __spreadArray([
                target,
                logLevel,
                loggingCategory,
                logType
            ], logData));
        };
        // property value
        var _val = target[propertyName];
        // property getter method
        var getter = function() {
            logFunc(target, _logger.LogType.Log, "Get: " + propertyName + " => " + _val);
            return _val;
        };
        // property setter method
        var setter = function(newVal) {
            logFunc(target, _logger.LogType.Log, "Set: " + propertyName + " => " + newVal);
            _val = newVal;
        };
        // Delete property.
        if (delete target[propertyName]) // Create new property with getter and setter
        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
};

},{"../Logger":"hY1Hm","./decorators.utility":"l9MRD","@parcel/transformer-js/src/esmodule-helpers.js":"lKO5T"}]},["dlajg","kNdr8"], "kNdr8", "parcelRequirebc7a")

//# sourceMappingURL=index.3aba37ab.js.map
