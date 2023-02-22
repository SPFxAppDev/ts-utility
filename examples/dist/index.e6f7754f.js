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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
})({"4litF":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2466ce0ee6f7754f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"lyqAI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _tsDecorateMjs = require("@swc/helpers/src/_ts_decorate.mjs");
var _tsDecorateMjsDefault = parcelHelpers.interopDefault(_tsDecorateMjs);
var _arrayExtensions = require("../../src/extensions/ArrayExtensions");
var _stringExtensions = require("../../src/extensions/StringExtensions");
var _src = require("../../src");
var _logger = require("@spfxappdev/logger");
const simpleArray = [
    {
        id: (0, _src.randomString)(),
        name: "App",
        sequence: 2
    },
    {
        id: (0, _src.randomString)(),
        name: "SPFx",
        sequence: 1
    },
    {
        id: (0, _src.randomString)(),
        name: "Dev",
        sequence: 3
    }
];
class ArrayApp {
    simpleArray = simpleArray;
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
        const spfxItem = myArr.FirstOrDefault((i)=>i.name.Equals("spfx"));
        console.log(spfxItem);
        const firstItem = myArr.FirstOrDefault();
        console.log(firstItem);
        const defaultItem = myArr.FirstOrDefault((i)=>i.name.Equals("404"), {
            id: (0, _src.randomString)(),
            name: "This is item is the default item, because the searched item was not found",
            sequence: 404
        });
        console.log(defaultItem);
        const defaultNullItem = myArr.FirstOrDefault((i)=>i.name.Equals("404"));
        console.log(defaultNullItem);
    }
    indexOfExamples() {
        var myArr = this.simpleClone();
        const spfxItemIndex = myArr.IndexOf((i)=>i.name.Equals("spfx"));
        console.log(spfxItemIndex);
        const notFoundIndex = myArr.IndexOf((i)=>i.name.Equals("404"));
        console.log(notFoundIndex);
    }
    whereExamples() {
        var myArr = this.simpleClone();
        const allItemsWhereSequenceGt1 = myArr.Where((i)=>i.sequence > 1);
        console.log(allItemsWhereSequenceGt1);
        const notFoundItems = myArr.Where((i)=>i.name.Equals("404"));
        console.log(notFoundItems);
    }
    orderByExamples() {
        var myArr1 = this.simpleClone();
        var myArr2 = this.simpleClone();
        const allItemsOrderedBySequence = myArr1.OrderBy((i)=>i.sequence);
        console.log(allItemsOrderedBySequence);
        const allItemsOrderedByName = myArr2.OrderBy((i)=>i.name);
        console.log(allItemsOrderedByName);
    }
    orderByDescendingExamples() {
        var myArr1 = this.simpleClone();
        var myArr2 = this.simpleClone();
        const allItemsOrderedBySequenceDescending = myArr1.OrderByDescending((i)=>i.sequence);
        console.log(allItemsOrderedBySequenceDescending);
        const allItemsOrderedByNameDescending = myArr2.OrderByDescending((i)=>i.name);
        console.log(allItemsOrderedByNameDescending);
    }
    orderByMultipleExamples() {
        var myArr1 = this.simpleClone();
        myArr1.push({
            id: (0, _src.randomString)(),
            name: "App",
            sequence: 1
        });
        const allItemsOrderedByNameAndThenSequence = myArr1.OrderByMultiple([
            (item)=>item.name,
            (item)=>item.sequence
        ]);
        console.log(allItemsOrderedByNameAndThenSequence);
    }
    orderByMultipleDescendingExamples() {
        var myArr1 = this.simpleClone();
        myArr1.push({
            id: (0, _src.randomString)(),
            name: "App",
            sequence: 1
        });
        const allItemsOrderedByNameAndThenSequenceDescending = myArr1.OrderByMultipleDescending([
            (item)=>item.name,
            (item)=>item.sequence
        ]);
        console.log(allItemsOrderedByNameAndThenSequenceDescending);
    }
    containsExamples() {
        var myArr = this.simpleClone();
        const containsSpfxItem = myArr.Contains((i)=>i.name.Equals("spfx"));
        console.log(containsSpfxItem);
        const contains404Item = myArr.Contains((i)=>i.name.Equals("404"));
        console.log(contains404Item);
        const multipleConditions = myArr.Contains((i)=>i.name.Equals("404") || i.name.Equals("spfx"));
        console.log(multipleConditions);
        const emptyArrayContains = [].Contains((i)=>i.name.Equals("404") || i.name.Equals("spfx"));
        console.log(emptyArrayContains);
    }
    countExamples() {
        var myArr = this.simpleClone();
        myArr.push({
            id: (0, _src.randomString)(),
            name: "App",
            sequence: 1
        });
        myArr.push({
            id: (0, _src.randomString)(),
            name: "Dev",
            sequence: 1
        });
        myArr.push({
            id: (0, _src.randomString)(),
            name: "Dev",
            sequence: 5
        });
        const totalAppItems = myArr.Count((i)=>i.name.Equals("app"));
        console.log(totalAppItems);
        const total404Items = myArr.Count((i)=>i.name.Equals("404"));
        console.log(total404Items);
        const totalAppOrDevItems = myArr.Count((i)=>i.name.Equals("app") || i.name.Equals("dEv"));
        console.log(totalAppOrDevItems);
        const emptyArrayCount = [].Count((i)=>i.name.Equals("404") || i.name.Equals("spfx"));
        console.log(emptyArrayCount);
    }
    lastOrDefaultExamples() {
        var myArr = this.simpleClone();
        myArr.push({
            id: (0, _src.randomString)(),
            name: "SPFx",
            sequence: 4
        });
        myArr.push({
            id: (0, _src.randomString)(),
            name: "SPFx",
            sequence: 5
        });
        myArr.push({
            id: (0, _src.randomString)(),
            name: "SPFx",
            sequence: 6
        });
        myArr.push({
            id: (0, _src.randomString)(),
            name: "Dev",
            sequence: 1000
        });
        const spfxItem = myArr.LastOrDefault((i)=>i.name.Equals("spfx"));
        console.log(spfxItem);
        const lastItem = myArr.LastOrDefault();
        console.log(lastItem);
        const defaultItem = myArr.LastOrDefault((i)=>i.name.Equals("404"), {
            id: (0, _src.randomString)(),
            name: "This is item is the default item, because the searched item was not found",
            sequence: 404
        });
        console.log(defaultItem);
        const defaultNullItem = myArr.LastOrDefault((i)=>i.name.Equals("404"));
        console.log(defaultNullItem);
        const emptyArrCheck = [].LastOrDefault((i)=>i.name.Equals("404"));
        console.log(emptyArrCheck);
    }
    addAtExamples() {
        var myArr = this.simpleClone();
        myArr.AddAt(0, {
            id: (0, _src.randomString)(),
            name: "First Item",
            sequence: 0
        });
        myArr.AddAt(1, {
            id: (0, _src.randomString)(),
            name: "Second Item",
            sequence: 1
        });
        myArr.AddAt(1000, {
            id: (0, _src.randomString)(),
            name: "LAST Item",
            sequence: 10000
        });
        myArr.AddAt(-3, {
            id: (0, _src.randomString)(),
            name: "LAST Item - 3",
            sequence: 10000
        });
        console.log(myArr, JSON.stringify(myArr));
    }
    removeAtExamples() {
        var myArr = this.simpleClone();
        myArr.AddAt(0, {
            id: (0, _src.randomString)(),
            name: "First Item",
            sequence: 0
        });
        myArr.AddAt(1, {
            id: (0, _src.randomString)(),
            name: "Second Item",
            sequence: 1
        });
        myArr.AddAt(1000, {
            id: (0, _src.randomString)(),
            name: "LAST Item",
            sequence: 10000
        });
        myArr.AddAt(-3, {
            id: (0, _src.randomString)(),
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
}
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], ArrayApp.prototype, "simpleClone", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], ArrayApp.prototype, "firstOrDefaultExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], ArrayApp.prototype, "indexOfExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], ArrayApp.prototype, "whereExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], ArrayApp.prototype, "orderByExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], ArrayApp.prototype, "orderByDescendingExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], ArrayApp.prototype, "orderByMultipleExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], ArrayApp.prototype, "orderByMultipleDescendingExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], ArrayApp.prototype, "containsExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], ArrayApp.prototype, "countExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], ArrayApp.prototype, "lastOrDefaultExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], ArrayApp.prototype, "addAtExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], ArrayApp.prototype, "removeAtExamples", null);
class StringsApp {
    testString = "Hello @spfxappdev/utility";
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
}
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], StringsApp.prototype, "startsWithExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], StringsApp.prototype, "endsWithExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], StringsApp.prototype, "containsExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], StringsApp.prototype, "indexOfExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], StringsApp.prototype, "insertExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], StringsApp.prototype, "equalsExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], StringsApp.prototype, "isEmptyExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], StringsApp.prototype, "replaceAllExamples", null);
class FunctionsApp {
    testString = "Hello @spfxappdev/utility";
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
        // this.replaceTplExample();
        // this.removeAllUrlParametersExample();
        // this.formatDateExample();
        // this.wokdaysExample();
        // this.firstAndLastDateExample();
        // this.weekNumberExample();
        // this.firstAndLastWeekDateExample();
        this.isAnySetExample();
        this.isAnyNullOrEmptyExample();
        const btn = document.getElementById("copyBtn");
        btn?.addEventListener("click", ()=>{
            this.copyToClipboardExample();
        });
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
        const [result, error] = await (0, _src.asyncFn)(this.dummyPromise(true, 2000));
        console.log(result, error);
        if (error) console.error("ERROR occurred...");
        const [result2, error2] = await (0, _src.asyncFn)(this.dummyPromise(false, 2000));
        console.log(result2, error2);
        if (error2) console.error("ERROR occurred...");
    }
    cssClassesExamples() {
        console.log(`cssClasses('spfx-app-dev', 'theme') ==> `, (0, _src.cssClasses)("spfx-app-dev", "theme"));
        console.log(`cssClasses('spfx-app-dev', { theme: false }) ==> `, (0, _src.cssClasses)("spfx-app-dev", {
            theme: false
        }));
        console.log(`cssClasses('spfx-app-dev', ['theme', { active: true, item: false }, null, false, undefined, 0, 1, 'container']) ==> `, (0, _src.cssClasses)("spfx-app-dev", [
            "theme",
            {
                active: true,
                item: false
            },
            null,
            false,
            undefined,
            0,
            1,
            "container"
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
        console.log(myObj, `getDeepOrDefault(myObj, "My.nested.property") ==> `, (0, _src.getDeepOrDefault)(myObj, "My.nested.property"));
        console.log(myObj, `ARRAY: getDeepOrDefault(myObj, "items.2") ==> `, (0, _src.getDeepOrDefault)(myObj, "items.2"));
        const arr = (0, _src.getDeepOrDefault)(myObj, "items");
        console.log(myObj, `TypeSafe: getDeepOrDefault<ISimpleItem[]>(myObj, "items") ==> `, arr);
        console.log(myObj, `Default: getDeepOrDefault(myObj, "404", "this string is returend as default, because 404 does not exist in myObj") ==> `, (0, _src.getDeepOrDefault)(myObj, "404", "this string is returend as default, because 404 does not exist in myObj"));
    }
    getUrlParameterExamples() {
        console.log(`getUrlParameter("from-window-location") ==> `, (0, _src.getUrlParameter)("from-window-location"));
        console.log(`getUrlParameter("from-passed-url", 'http://localhost:1234/?from-passed-url=hello') ==> `, (0, _src.getUrlParameter)("from-passed-url", "http://localhost:1234/?from-passed-url=hello"));
        console.log(`getUrlParameter("anotherparam", 'http://localhost:1234/?from-passed-url=hello&anotherparam=2') ==> `, (0, _src.getUrlParameter)("anotherparam", "http://localhost:1234/?from-passed-url=hello&anotherparam=2"));
    }
    isFunctionExamples() {
        console.log(`isFunction("this is a string") ==> `, (0, _src.isFunction)("this is a string"));
        console.log(`isFunction(1) ==> `, (0, _src.isFunction)(1));
        console.log(`isFunction(() => { }) ==> `, (0, _src.isFunction)(()=>{}));
        console.log(`isFunction(window.addEventListener) ==> `, (0, _src.isFunction)(window.addEventListener));
    }
    isNullOrEmptyExamples() {
        console.log(`isNullOrEmpty("this is a string") ==> `, (0, _src.isNullOrEmpty)("this is a string"));
        console.log(`isNullOrEmpty(1) ==> `, (0, _src.isNullOrEmpty)(1));
        console.log(`isNullOrEmpty(() => { }) ==> `, (0, _src.isNullOrEmpty)(()=>{}));
        console.log(`isNullOrEmpty(null) ==> `, (0, _src.isNullOrEmpty)(null));
        console.log(`isNullOrEmpty(undefined) ==> `, (0, _src.isNullOrEmpty)(undefined));
        console.log(`isNullOrEmpty([]) ==> `, (0, _src.isNullOrEmpty)([]));
        console.log(`isNullOrEmpty([1,2]) ==> `, (0, _src.isNullOrEmpty)([
            1,
            2
        ]));
        console.log(`isNullOrEmpty({}) ==> `, (0, _src.isNullOrEmpty)({}));
        console.log(`isNullOrEmpty("") ==> `, (0, _src.isNullOrEmpty)(""));
        console.log(`isNullOrEmpty("     ") ==> `, (0, _src.isNullOrEmpty)("     "));
    }
    issetExamples() {
        console.log(`isset("this is a string") ==> `, (0, _src.isset)("this is a string"));
        console.log(`isset(1) ==> `, (0, _src.isset)(1));
        console.log(`isset(() => { }) ==> `, (0, _src.isset)(()=>{}));
        console.log(`isset(null) ==> `, (0, _src.isset)(null));
        console.log(`isset(undefined) ==> `, (0, _src.isset)(undefined));
        console.log(`isset([]) ==> `, (0, _src.isset)([]));
        console.log(`isset([1,2]) ==> `, (0, _src.isset)([
            1,
            2
        ]));
        console.log(`isset({}) ==> `, (0, _src.isset)({}));
        console.log(`isset("") ==> `, (0, _src.isset)(""));
        console.log(`isset("     ") ==> `, (0, _src.isset)("     "));
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
        console.log(myObj, `issetDeep(myObj, "My.nested.property") ==> `, (0, _src.issetDeep)(myObj, "My.nested.property"));
        console.log(myObj, `ARRAY: issetDeep(myObj, "items.2") ==> `, (0, _src.issetDeep)(myObj, "items.2"));
        console.log(myObj, `Not set: issetDeep(myObj, "404") ==> `, (0, _src.issetDeep)(myObj, "404"));
    }
    isValidEmailExamples() {
        console.log(`isValidEmail('seryoga@spfx-app.dev') ==> `, (0, _src.isValidEmail)("seryoga@spfx-app.dev"));
        console.log(`isValidEmail('spfx-app.dev') ==> `, (0, _src.isValidEmail)("spfx-app.dev"));
        console.log(`isValidEmail('my@mail.c') ==> `, (0, _src.isValidEmail)("my@mail.c"));
        console.log(`isValidEmail('my@mail.12') ==> `, (0, _src.isValidEmail)("my@mail.12"));
        console.log(`isValidEmail('my@mail.co') ==> `, (0, _src.isValidEmail)("my@mail.co"));
    }
    async promiseQueueExamples() {
        const promise1 = (0, _src.toParameterlessPromiseQueueFunc)(this.dummyPromise, true, 10000);
        const promise2 = this.parameterlessPromiseFunc;
        const promise3 = (0, _src.toParameterlessPromiseQueueFunc)(this.dummyPromise, false, 2000);
        const promise4 = (0, _src.toParameterlessPromiseQueueFunc)(this.dummyPromise, true, 600);
        console.log("const promise1 = toParameterlessPromiseQueueFunc(this.dummyPromise, true, 10000);");
        console.log("const promise2 = this.parameterlessPromiseFunc;");
        console.log("const promise3 = toParameterlessPromiseQueueFunc(this.dummyPromise, false, 2000);");
        console.log("const promise4 = toParameterlessPromiseQueueFunc(this.dummyPromise, true, 600);");
        // const promise1 = this.dummyPromise(true, 6000);
        // const promise2 = this.dummyPromise(true, 1000);
        // const promise3 = this.dummyPromise(false, 1000);
        // const promise4 = this.dummyPromise(true, 1000);
        console.log(`await promiseQueue([promise1, promise2, promise3, promise4], 0)`, await (0, _src.promiseQueue)([
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
        console.log(`await promiseQueue([promise1, promise2, promise3, promise4], 0)`, await (0, _src.promiseQueue)(promises, 0));
    }
    randomStringExamples() {
        console.log(`randomString() ==> `, (0, _src.randomString)());
        console.log(`randomString(15) ==> `, (0, _src.randomString)(15));
        console.log(`randomString(6, 'abcdef0123456789') ==> `, (0, _src.randomString)(6, "abcdef0123456789"));
    }
    replaceNonAlphanumericExamples() {
        console.log(`replaceNonAlphanumeric('This is a text with non alphanumberic and not underscore characters: 1234567890ß!"§$%&/()=?+#____<---->') ==> `, (0, _src.replaceNonAlphanumeric)('This is a text with non alphanumberic and not underscore characters: 1234567890\xdf!"\xa7$%&/()=?+#____<---->'));
        console.log(`replaceNonAlphanumeric('This is a text with non alphanumberic and not underscore characters: öäü1234567890ß!"§$%&/()=?+#____<---->', '*') ==> `, (0, _src.replaceNonAlphanumeric)('This is a text with non alphanumberic and not underscore characters: \xf6\xe4\xfc1234567890\xdf!"\xa7$%&/()=?+#____<---->', "*"));
        console.log(`randomString(6, 'abcdef0123456789') ==> `, (0, _src.randomString)(6, "abcdef0123456789"));
    }
    stripHTMLExamples() {
        console.log("stripHTML(`<div class='abc'>Hello <strong>spfxappdev</strong></div>) ==> ", (0, _src.stripHTML)(`<div class="abc">Hello <strong>spfxappdev</strong></div>`));
        console.log("stripHTML(`Hello spfxappdev`) ==> ", (0, _src.stripHTML)(`Hello spfxappdev`));
    }
    toBooleanExamples() {
        console.log(`toBoolean(true) ==> `, (0, _src.toBoolean)(true));
        console.log(`toBoolean("true") ==> `, (0, _src.toBoolean)("true"));
        console.log(`toBoolean("1") ==> `, (0, _src.toBoolean)("1"));
        console.log(`toBoolean(1) ==> `, (0, _src.toBoolean)(1));
        console.log(`toBoolean(false) ==> `, (0, _src.toBoolean)(false));
        console.log(`toBoolean("false") ==> `, (0, _src.toBoolean)("false"));
        console.log(`toBoolean("0") ==> `, (0, _src.toBoolean)("0"));
        console.log(`toBoolean(0) ==> `, (0, _src.toBoolean)(0));
        console.log(`toBoolean(2) ==> `, (0, _src.toBoolean)(2));
        console.log(`toBoolean("this is a string") ==> `, (0, _src.toBoolean)("this is a string"));
        console.log(`toBoolean("") ==> `, (0, _src.toBoolean)(""));
    }
    replaceTplExample() {
        console.log((0, _src.replaceTpl)("Hello {UserName}. Welcome {UserName}, this placeholder is not available: {SPFxAppDev}", {
            UserName: "SPFxAppDev"
        }));
        //Hello SPFxAppDev. Welcome SPFxAppDev, this placeholder is not available: {SPFxAppDev}
        console.log((0, _src.replaceTpl)("Hello {User.FirstName} {User.LastName}, last login: {User.LastLogin}", {
            User: {
                FirstName: "SPFxApp",
                LastName: "Dev",
                LastLogin: ()=>{
                    return new Date().toString();
                }
            }
        }));
        //Hello SPFxApp Dev, last login: Tue Nov 15 2022 15:59:34 GMT+0100 (Central European Standard Time)
        console.log((0, _src.replaceTpl)("Hello {404}", {
            User: {
                FirstName: "SPFxApp",
                LastName: "Dev"
            }
        }, ""));
    //Hello 
    }
    removeAllUrlParametersExample() {
        console.log((0, _src.removeAllParametersFromUrl)("https://spfx-app.dev#firstAnchor#secondAnchor"));
        //removeAllParametersFromUrl("https://spfx-app.dev#firstAnchor#secondAnchor")
        console.log((0, _src.removeAllParametersFromUrl)("https://spfx-app.dev/path1/path2?param1=1&param2=2#firstAnchor#secondAnchor"));
        //https://spfx-app.dev/path1/path2
        console.log((0, _src.removeAllParametersFromUrl)("https://spfx-app.dev/#/routedpath"));
    //https://spfx-app.dev/
    }
    formatDateExample() {
        console.log((0, _src.formatDate)("dd.MM.yyyy")); //Now ==> 14.11.2022
        console.log((0, _src.formatDate)("MM/dd/yyyy", new Date(2022, 1, 1))); //result: 02/01/2022
        console.log((0, _src.formatDate)("M/d/yy", new Date(2022, 1, 1))); // result: 2/1/22
    }
    wokdaysExample() {
        console.log((0, _src.countWorkdays)()); //workdays in November 2022, Monday-Friday ==> 22
        console.log((0, _src.countWorkdays)(new Date(2022, 10, 14))); //workdays from 14th November 2022 until end of month, Monday-Friday ==> 13
        console.log((0, _src.countWorkdays)(new Date(2022, 10, 14), new Date(2022, 10, 20))); //workdays from 14th November 2022 until 20th Nov 2022, Monday-Friday ==> 5
        console.log((0, _src.countWorkdays)(undefined, undefined, 1, (0, _src.Weekday).Saturday)); //workdays in November 2022, Monday-Saturday ==> 26
        console.log((0, _src.countWorkdays)(new Date(2022, 11, 1), undefined, undefined, undefined, [
            new Date(2022, 11, 24),
            new Date(2022, 11, 25),
            new Date(2022, 11, 26),
            new Date(2022, 11, 31)
        ])); //workdays in December 2022, Monday-Friday and day off (24-26th + 31st) ==> 21
    }
    firstAndLastDateExample() {
        console.log("First date of current month is: ", (0, _src.firstDayOfMonth)()); //Tue Nov 01 2022
        console.log("Last date of current month is: ", (0, _src.lastDayOfMonth)()); //Wed Nov 30 2022
        console.log("First date of 15 February 2022 is: ", (0, _src.firstDayOfMonth)(new Date(2022, 1, 15))); //Tue Feb 01 2022
        console.log("Last date of 15 February 2022 is: ", (0, _src.lastDayOfMonth)(new Date(2022, 1, 15))); //Mon Feb 28 2022
    }
    firstAndLastWeekDateExample() {
        console.log("First date of current week is: ", (0, _src.firstDayOfWeek)()); //Mon Nov 14 2022
        console.log("Last date of current week is: ", (0, _src.lastDayOfWeek)()); //Sun Nov 20 2022
        console.log("First date of week of 15 February 2022 is: ", (0, _src.firstDayOfWeek)(new Date(2022, 1, 15))); //Mon Feb 14 2022
        console.log("Last date of week of 15 February 2022 is: ", (0, _src.lastDayOfWeek)(new Date(2022, 1, 15))); //Sun Feb 20 2022
        console.log("First date of current week by starting with Sunday is: ", (0, _src.firstDayOfWeek)(null, (0, _src.Weekday).Sunday)); //Sun Nov 13 2022
        console.log("Last date of current week by starting with Sunday is: ", (0, _src.lastDayOfWeek)(null, (0, _src.Weekday).Sunday)); //Sat Nov 19 2022
    }
    weekNumberExample() {
        console.log("Current week number: ", (0, _src.weekNumber)()); //2022 Nov 14 ==> 46
        console.log("15 February 2022 week number: ", (0, _src.weekNumber)(new Date(2022, 1, 15))); //2022 Feb 15 ==> 7
        console.log("30 December 2019 week number: ", (0, _src.weekNumber)(new Date(2019, 11, 30))); //2019 Dec 30 (special case) ==> 1
    }
    async copyToClipboardExample() {
        //await copyToClipboard("Hello from clipboard");
        await window.navigator.clipboard.writeText("Hello from clipboard");
    }
    isAnySetExample() {
        let a;
        console.log((0, _src.isAnySet)(undefined, null, a, "hello"));
        console.log((0, _src.isAnySet)(undefined, null, a));
    }
    isAnyNullOrEmptyExample() {
        let a;
        console.log((0, _src.isAnyNullOrEmpty)(undefined, null, a, "hello"));
        console.log((0, _src.isAnyNullOrEmpty)(undefined, null, a));
        a = "world";
        console.log((0, _src.isAnyNullOrEmpty)("hello", a));
    }
}
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "ayncFnExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "cssClassesExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "getDeepOrDefaultExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "getUrlParameterExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "isFunctionExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "isNullOrEmptyExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "issetExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "issetDeepExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "isValidEmailExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "promiseQueueExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "randomStringExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "replaceNonAlphanumericExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "stripHTMLExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "toBooleanExamples", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "replaceTplExample", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "removeAllUrlParametersExample", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "formatDateExample", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "wokdaysExample", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "firstAndLastDateExample", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "firstAndLastWeekDateExample", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "weekNumberExample", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "copyToClipboardExample", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "isAnySetExample", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], FunctionsApp.prototype, "isAnyNullOrEmptyExample", null);
class ClassesApp {
    start() {
        this.uriExample();
    }
    uriExample() {
        const u1 = new (0, _src.Uri)("https://spfx-app.dev#firstAnchor#secondAnchor");
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
}
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], ClassesApp.prototype, "uriExample", null);
class EventExample extends (0, _src.EventListenerBase) {
    Execute(name, lastEventResult, ...args) {
        if (name.Equals("exampleListener", true)) {
            const text = (0, _src.getDeepOrDefault)(lastEventResult, "Result", args[0]);
            this.Result = text + " and this text was added in Listener";
        } else {
            args[0] = "changed original";
            this.Result = args[0];
        }
        return this;
    }
}
class EventListenerApp {
    start() {
        this.registerEventListenerExample();
        this.fireEventExample();
    }
    registerEventListenerExample() {
        (0, _src.EventHandler).Listen("exampleListener", new EventExample(), "uniqueEventId");
        (0, _src.EventHandler).Listen("exampleListener", new EventExample(), "abc");
        (0, _src.EventHandler).Listen("exampleListener2", new EventExample(), "uniqueEventId2");
    }
    fireEventExample() {
        console.log((0, _src.EventHandler).Fire("exampleListener", "This is a dummy event"));
        console.log((0, _src.EventHandler).Fire("exampleListener", "This is a dummy event2"));
    }
}
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], EventListenerApp.prototype, "registerEventListenerExample", null);
(0, _tsDecorateMjsDefault.default)([
    (0, _logger.log)()
], EventListenerApp.prototype, "fireEventExample", null);
// new ArrayApp().start();
// new StringsApp().start();
new FunctionsApp().start(); // new ClassesApp().start();
 // new EventListenerApp().start();

},{"@swc/helpers/src/_ts_decorate.mjs":"6yrWP","../../src/extensions/ArrayExtensions":"iAHJd","../../src/extensions/StringExtensions":"bZeFs","../../src":"gBgwL","@spfxappdev/logger":"cUCDD","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"6yrWP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _tslib.__decorate));
var _tslib = require("tslib");

},{"tslib":"aZC6N","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"aZC6N":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
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
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
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
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
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
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"hMyTC":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"iAHJd":[function(require,module,exports) {
var _functions = require("../functions");
if (!(0, _functions.isset)(Array.prototype.FirstOrDefault)) Object.defineProperty(Array.prototype, "FirstOrDefault", {
    value: function(predicateFunc, defaultValue = null) {
        const arr = this;
        if ((0, _functions.isNullOrEmpty)(arr)) return defaultValue;
        if (typeof predicateFunc !== "function") return arr[0];
        for(let i = 0; i < arr.length; i++){
            const item = arr[i];
            if (predicateFunc(item)) return item;
        }
        return defaultValue;
    }
});
if (!(0, _functions.isset)(Array.prototype.IndexOf)) Object.defineProperty(Array.prototype, "IndexOf", {
    value: function(predicateFunc) {
        const arr = this;
        for(let i = 0; i < arr.length; i++){
            const item = arr[i];
            if (predicateFunc(item)) return i;
        }
        return -1;
    }
});
if (!(0, _functions.isset)(Array.prototype.Where)) Object.defineProperty(Array.prototype, "Where", {
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
if (!(0, _functions.isset)(Array.prototype.OrderBy)) Object.defineProperty(Array.prototype, "OrderBy", {
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
if (!(0, _functions.isset)(Array.prototype.OrderByDescending)) Object.defineProperty(Array.prototype, "OrderByDescending", {
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
if (!(0, _functions.isset)(Array.prototype.OrderByMultiple)) Object.defineProperty(Array.prototype, "OrderByMultiple", {
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
if (!(0, _functions.isset)(Array.prototype.OrderByMultipleDescending)) Object.defineProperty(Array.prototype, "OrderByMultipleDescending", {
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
if (!(0, _functions.isset)(Array.prototype.Contains)) Object.defineProperty(Array.prototype, "Contains", {
    value: function(predicateFunc) {
        const arr = this;
        return (0, _functions.isset)(this.FirstOrDefault(predicateFunc, null));
    }
});
if (!(0, _functions.isset)(Array.prototype.Count)) Object.defineProperty(Array.prototype, "Count", {
    value: function(predicateFunc) {
        const allItems = this.Where(predicateFunc);
        if ((0, _functions.isNullOrEmpty)(allItems)) return 0;
        return allItems.length;
    }
});
if (!(0, _functions.isset)(Array.prototype.LastOrDefault)) Object.defineProperty(Array.prototype, "LastOrDefault", {
    value: function(predicateFunc, defaultValue = null) {
        const arr = this;
        if ((0, _functions.isNullOrEmpty)(arr)) return defaultValue;
        if (typeof predicateFunc !== "function") return arr[arr.length - 1];
        for(let i = arr.length - 1; i >= 0; i--){
            const item = arr[i];
            if (predicateFunc(item)) return item;
        }
        return defaultValue;
    }
});
if (!(0, _functions.isset)(Array.prototype.AddAt)) Object.defineProperty(Array.prototype, "AddAt", {
    value: function(index, ...itemsToAdd) {
        this.splice(index, 0, ...itemsToAdd);
    }
});
if (!(0, _functions.isset)(Array.prototype.RemoveAt)) Object.defineProperty(Array.prototype, "RemoveAt", {
    value: function(index, totalItemsToRemove = 1) {
        this.splice(index, totalItemsToRemove);
    }
});

},{"../functions":"fZyL3"}],"fZyL3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrayFrom", ()=>(0, _arrayFromDefault.default));
parcelHelpers.export(exports, "copyToClipboard", ()=>(0, _copyToClipboardDefault.default));
parcelHelpers.export(exports, "cssClasses", ()=>(0, _cssClassesDefault.default));
parcelHelpers.export(exports, "extend", ()=>(0, _extendDefault.default));
parcelHelpers.export(exports, "getDeepOrDefault", ()=>(0, _getDeepOrDefaultDefault.default));
parcelHelpers.export(exports, "getUrlParameter", ()=>(0, _getUrlParameterDefault.default));
parcelHelpers.export(exports, "isAnyNullOrEmpty", ()=>(0, _isAnyNullOrEmptyDefault.default));
parcelHelpers.export(exports, "isAnySet", ()=>(0, _isAnySetDefault.default));
parcelHelpers.export(exports, "isFunction", ()=>(0, _isFunctionDefault.default));
parcelHelpers.export(exports, "isNullOrEmpty", ()=>(0, _isNullOrEmptyDefault.default));
parcelHelpers.export(exports, "isset", ()=>(0, _issetDefault.default));
parcelHelpers.export(exports, "issetDeep", ()=>(0, _issetDeepDefault.default));
parcelHelpers.export(exports, "toBoolean", ()=>(0, _toBooleanDefault.default));
parcelHelpers.export(exports, "asyncFn", ()=>(0, _asyncFnDefault.default));
parcelHelpers.export(exports, "promiseQueue", ()=>(0, _promiseQueueDefault.default));
parcelHelpers.export(exports, "PromiseQueue", ()=>(0, _promiseQueue.PromiseQueue));
parcelHelpers.export(exports, "toParameterlessPromiseQueueFunc", ()=>(0, _promiseQueue.toParameterlessPromiseQueueFunc));
parcelHelpers.export(exports, "isValidEmail", ()=>(0, _isValidEmailDefault.default));
parcelHelpers.export(exports, "randomString", ()=>(0, _randomStringDefault.default));
parcelHelpers.export(exports, "replaceNonAlphanumeric", ()=>(0, _replaceNonAlphanumericDefault.default));
parcelHelpers.export(exports, "stripHTML", ()=>(0, _stripHTMLDefault.default));
parcelHelpers.export(exports, "replaceTpl", ()=>(0, _replaceTplDefault.default));
parcelHelpers.export(exports, "removeAllParametersFromUrl", ()=>(0, _removeAllParametersFromUrlDefault.default));
var _arrayFrom = require("./arrayFrom");
var _arrayFromDefault = parcelHelpers.interopDefault(_arrayFrom);
var _copyToClipboard = require("./copyToClipboard");
var _copyToClipboardDefault = parcelHelpers.interopDefault(_copyToClipboard);
var _cssClasses = require("./cssClasses");
var _cssClassesDefault = parcelHelpers.interopDefault(_cssClasses);
var _extend = require("./extend");
var _extendDefault = parcelHelpers.interopDefault(_extend);
var _getDeepOrDefault = require("./getDeepOrDefault");
var _getDeepOrDefaultDefault = parcelHelpers.interopDefault(_getDeepOrDefault);
var _getUrlParameter = require("./getUrlParameter");
var _getUrlParameterDefault = parcelHelpers.interopDefault(_getUrlParameter);
var _isAnyNullOrEmpty = require("./isAnyNullOrEmpty");
var _isAnyNullOrEmptyDefault = parcelHelpers.interopDefault(_isAnyNullOrEmpty);
var _isAnySet = require("./isAnySet");
var _isAnySetDefault = parcelHelpers.interopDefault(_isAnySet);
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

},{"./arrayFrom":"azDo8","./copyToClipboard":"iDVER","./cssClasses":"MnVqS","./extend":"5b4AA","./getDeepOrDefault":"2lIcC","./getUrlParameter":"6pMEM","./isAnyNullOrEmpty":"5IMM8","./isAnySet":"dFRtV","./isFunction":"keJuF","./isNullOrEmpty":"aPoSF","./isset":"eqi1m","./issetDeep":"ccx7w","./toBoolean":"4PZ4R","./asyncFn":"l1HTW","./promiseQueue":"fxMVR","./isValidEmail":"ba3pA","./randomString":"e1OV8","./replaceNonAlphanumeric":"awiEa","./stripHTML":"NiQyh","./replaceTpl":"cfEEI","./removeAllParametersFromUrl":"gxbB2","./date":"bMi6P","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"azDo8":[function(require,module,exports) {
/**
 * this functions calls Array.from() or make the same logic if not Exists.
 * The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
 * @param arrLike An array-like or iterable object to convert to an array.
 * @param mapFunc (optional) Map function to call on every element of the array.
 * @param thisArgs (optional) Value to use as this when executing mapFn.
 * @since 1.0.0
 */ /* tslint:disable */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function arrayFrom(arrLike, mapFunc, thisArgs) {
    if (!Array["from"]) Array["from"] = ()=>{
        var toStr = Object.prototype.toString;
        var isCallable = (fn)=>{
            return typeof fn === "function" || toStr.call(fn) === "[object Function]";
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
            if (arrayLike == null) throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var mapFn;
            let args = arguments;
            if (args.length > 1) mapFn = args[1];
            var T;
            if (typeof mapFn !== "undefined") {
                if (!isCallable(mapFn)) throw new TypeError("Array.from: when provided, the second argument must be a function");
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
                if (mapFn) A[k] = typeof T === "undefined" ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"iDVER":[function(require,module,exports) {
/**
 * Writes the specified TEXT string to the system clipboard
 * @param data The string to be written to the clipboard.
 * @since 1.3.0
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
async function copyToClipboard(data) {
    await window.navigator.clipboard.writeText(data);
}
exports.default = copyToClipboard;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"MnVqS":[function(require,module,exports) {
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
        if (!(0, _issetDefault.default)(arg)) continue;
        const argType = typeof arg;
        if (argType === "string") {
            classes.push(arg);
            continue;
        }
        if (Array.isArray(arg) && arg.length > 0) {
            const classNamesFromArray = self.apply(null, arg);
            if ((0, _issetDefault.default)(classNamesFromArray) && !(0, _isNullOrEmptyDefault.default)(classNamesFromArray)) classes.push(classNamesFromArray);
            continue;
        }
        if (argType === "object") {
            if (arg.toString !== Object.prototype.toString) {
                classes.push(arg.toString());
                continue;
            }
            for(const className in arg)if (arg.hasOwnProperty(className) && arg[className]) classes.push(className);
        }
    }
    return classes.join(" ");
}
exports.default = cssClasses;

},{"./isset":"eqi1m","./isNullOrEmpty":"aPoSF","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"eqi1m":[function(require,module,exports) {
/**
 * Determines if the provided Property is set.
 * @param {any} property The Property to checked.
 * @returns {boolean} If the Property is set <c>true</c> otherwise <c>false</c>.
 * @since 1.0.0
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isset(property) {
    return typeof property !== "undefined" && property != null;
}
exports.default = isset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"aPoSF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function isNullOrEmpty(property) {
    if (!(0, _issetDefault.default)(property)) return true;
    if (typeof property === "string") return property.trim().length < 1;
    if (!property.hasOwnProperty("length")) return false;
    return property.length < 1;
}
exports.default = isNullOrEmpty;

},{"./isset":"eqi1m","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"5b4AA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayFrom = require("./arrayFrom");
var _arrayFromDefault = parcelHelpers.interopDefault(_arrayFrom);
function extend(target, source, inCaseOfArrayUseSourceObject = true) {
    if (Array.isArray(target) && Array.isArray(source)) {
        if (inCaseOfArrayUseSourceObject) return source;
        return (0, _arrayFromDefault.default)(new Set(target.concat(source)));
    }
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (const key of Object.keys(source)){
        if (Array.isArray(source[key])) {
            const targetValue = target[key] || [];
            source[key] = extend(targetValue, source[key], inCaseOfArrayUseSourceObject);
        } else if (source[key] instanceof Object) {
            const targetValue = target[key] || {};
            source[key] = extend(targetValue, source[key], inCaseOfArrayUseSourceObject);
        }
    }
    // Join `target` and modified `source`
    target = target || {};
    const tempTarget = {
        ...target,
        ...source
    };
    return tempTarget;
}
exports.default = extend;

},{"./arrayFrom":"azDo8","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"2lIcC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function getDeepOrDefault(objectToCheck, keyNameSpace, defaultValue = null) {
    if (!(0, _issetDefault.default)(objectToCheck)) return defaultValue;
    const namespaceKeys = keyNameSpace.split(".");
    let currentObjectPath = objectToCheck;
    for(let i = 0; i < namespaceKeys.length; i++){
        const currentKey = namespaceKeys[i];
        if (!(0, _issetDefault.default)(currentObjectPath[currentKey])) return defaultValue;
        currentObjectPath = currentObjectPath[currentKey];
    }
    return !(0, _issetDefault.default)(currentObjectPath) ? defaultValue : currentObjectPath;
}
exports.default = getDeepOrDefault;

},{"./isset":"eqi1m","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"6pMEM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function getUrlParameter(parameterName, url = null) {
    if ((0, _isNullOrEmptyDefault.default)(url)) url = window.location.href;
    url = url.toLowerCase();
    let name = parameterName.toLowerCase();
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regexS = "[\\?&]" + name + "=([^&#]*)";
    const regex = new RegExp(regexS);
    const results = regex.exec(url);
    if (results == null) return null;
    return results[1];
}
exports.default = getUrlParameter;

},{"./isNullOrEmpty":"aPoSF","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"5IMM8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function isAnyNullOrEmpty(...args) {
    let returnValue = false;
    for (let arg of args)if ((0, _isNullOrEmptyDefault.default)(arg)) {
        returnValue = true;
        break;
    }
    return returnValue;
}
exports.default = isAnyNullOrEmpty;

},{"./isNullOrEmpty":"aPoSF","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"dFRtV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function isAnySet(...args) {
    let returnValue = false;
    for (let arg of args)if ((0, _issetDefault.default)(arg)) {
        returnValue = true;
        break;
    }
    return returnValue;
}
exports.default = isAnySet;

},{"./isset":"eqi1m","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"keJuF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function isFunction(property) {
    return (0, _issetDefault.default)(property) && typeof property === "function";
}
exports.default = isFunction;

},{"./isset":"eqi1m","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"ccx7w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function issetDeep(objectToCheck, keyNameSpace) {
    if (!(0, _issetDefault.default)(objectToCheck)) return false;
    const namespaceKeys = keyNameSpace.split(".");
    let currentObjectPath = objectToCheck;
    for(let i = 0; i < namespaceKeys.length; i++){
        const currentKey = namespaceKeys[i];
        if (!(0, _issetDefault.default)(currentObjectPath)) return false;
        currentObjectPath = currentObjectPath[currentKey];
    }
    return (0, _issetDefault.default)(currentObjectPath);
}
exports.default = issetDeep;

},{"./isset":"eqi1m","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"4PZ4R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function toBoolean(value) {
    if (!(0, _issetDefault.default)(value)) return false;
    if (typeof value === "boolean") return value;
    if (typeof value === "string") value = value.toLowerCase();
    if (value !== "false" && value !== "true" && value !== "0" && value !== "1" && value !== 0 && value !== 1) return false;
    return value === "false" || value === "0" || value === 0 ? false : true;
}
exports.default = toBoolean;

},{"./isset":"eqi1m","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"l1HTW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
async function asyncFn(promiseFn, ...promiseFnArgs) {
    try {
        const r = await promiseFn(...promiseFnArgs);
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"fxMVR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toParameterlessPromiseQueueFunc", ()=>toParameterlessPromiseQueueFunc);
var _ = require(".");
function toParameterlessPromiseQueueFunc(promiseFunc, ...funcParams) {
    const wrapper = function() {
        return promiseFunc(...funcParams);
    };
    return wrapper;
}
async function promiseQueue(promiseArray, delayBetweenCalls = 500) {
    await promiseQueueExecutor(promiseArray, 0, delayBetweenCalls);
}
exports.default = promiseQueue;
const promiseQueueExecutor = async (promiseArray, index, delayBetweenCalls)=>{
    return new Promise((resolve, reject)=>{
        let currentPromise;
        let callbackFunc = undefined;
        let errorFunc = undefined;
        if ((0, _.isFunction)(promiseArray[index])) currentPromise = promiseArray[index];
        else if ((0, _.isFunction)(promiseArray[index].promiseFunc)) {
            const promiseQueue = promiseArray[index];
            currentPromise = promiseQueue.promiseFunc;
            callbackFunc = (0, _.isFunction)(promiseQueue.callback) ? promiseQueue.callback : callbackFunc;
            errorFunc = (0, _.isFunction)(promiseQueue.onError) ? promiseQueue.onError : errorFunc;
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
            if ((0, _.isFunction)(callbackFunc)) {
                const callbackResult = callbackFunc(promiseResult, index);
                if (callbackResult instanceof Promise) try {
                    await callbackResult;
                } catch (e) {}
            }
            if (index + 1 >= promiseArray.length) return resolve();
            setTimeout(async ()=>{
                await promiseQueueExecutor(promiseArray, index + 1, delayBetweenCalls);
                return resolve();
            }, delayBetweenCalls);
        }).catch(async (error)=>{
            if ((0, _.isFunction)(errorFunc)) {
                const errorResult = errorFunc(error, index);
                if (errorResult instanceof Promise) try {
                    await errorResult;
                } catch (e) {}
            }
            if (index + 1 >= promiseArray.length) return resolve();
            await promiseQueueExecutor(promiseArray, index + 1, delayBetweenCalls);
            return resolve();
        });
    });
};

},{".":"fZyL3","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"ba3pA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function isValidEmail(email) {
    if ((0, _isNullOrEmptyDefault.default)(email)) return false;
    if (typeof email !== "string") return false;
    return !(0, _isNullOrEmptyDefault.default)(email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
}
exports.default = isValidEmail;

},{"./isNullOrEmpty":"aPoSF","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"e1OV8":[function(require,module,exports) {
/**
 * Generates a new and random string
 * @param {number} [randomStringLength=5] The length of the new created string. Defaultvalue: 5
 * @param {string} [characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'] The characters, that will be used for the random string. Defaultvalues: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
 * @return {string} Returns a new and random string with the length of randomStringLength and random characters that is passed in characters parameter
 * @since 1.1.0
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function randomString(randomStringLength = 5, characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    let result = "";
    const charactersLength = characters.length;
    for(let i = 0; i < randomStringLength; i++)result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}
exports.default = randomString;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"awiEa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function replaceNonAlphanumeric(value, replaceValue = "") {
    if ((0, _isNullOrEmptyDefault.default)(value)) return value;
    if (typeof value !== "string") return value;
    return value.replace(/[^\w]/gi, replaceValue);
}
exports.default = replaceNonAlphanumeric;

},{"./isNullOrEmpty":"aPoSF","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"NiQyh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function stripHtml(htmlValue) {
    if ((0, _isNullOrEmptyDefault.default)(htmlValue)) return "";
    return new DOMParser().parseFromString(htmlValue, "text/html").body.textContent;
}
exports.default = stripHtml;

},{"./isNullOrEmpty":"aPoSF","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"cfEEI":[function(require,module,exports) {
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
        const placeholderValue = (0, _getDeepOrDefaultDefault.default)(placeholderData, placeholderKey);
        if (!(0, _issetDefault.default)(placeholderValue)) {
            if ((0, _issetDefault.default)(replaceMissingPlaceholderWith)) return replaceMissingPlaceholderWith;
            return placeholderMatch;
        }
        if ((0, _isFunctionDefault.default)(placeholderValue)) return placeholderValue.apply(placeholderData, null);
        return placeholderValue;
    });
    return result;
}
exports.default = replaceTpl;

},{"./getDeepOrDefault":"2lIcC","./isFunction":"keJuF","./isset":"eqi1m","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"gxbB2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stringExtensions = require("../extensions/StringExtensions");
var _arrayExtensions = require("../extensions/ArrayExtensions");
function removeAllParametersFromUrl(url) {
    if (typeof url !== "string") return "";
    let urlCopy = url.slice();
    if (urlCopy.Contains("#")) {
        let splittedUrl = urlCopy.split("#");
        do {
            const hashValue = splittedUrl.LastOrDefault();
            if (!urlCopy.EndsWith("#" + hashValue) || hashValue.Contains("?")) break;
            splittedUrl.RemoveAt(-1, 1);
            urlCopy = splittedUrl.join("#");
            splittedUrl = urlCopy.split("#");
        }while (splittedUrl.length > 1);
    }
    return urlCopy.split("?")[0].split("&")[0];
}
exports.default = removeAllParametersFromUrl;

},{"../extensions/StringExtensions":"bZeFs","../extensions/ArrayExtensions":"iAHJd","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"bZeFs":[function(require,module,exports) {
/* tslint:disable:interface-name */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
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
    return s.replace(new RegExp(searchTerm, "g"), replaceWith);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"bMi6P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "countWorkdays", ()=>(0, _countWorkdaysDefault.default));
parcelHelpers.export(exports, "CountWorkdaysValues", ()=>(0, _countWorkdays.CountWorkdaysValues));
parcelHelpers.export(exports, "firstDayOfMonth", ()=>(0, _firstDayOfMonthDefault.default));
parcelHelpers.export(exports, "lastDayOfMonth", ()=>(0, _lastDayOfMonthDefault.default));
parcelHelpers.export(exports, "firstDayOfWeek", ()=>(0, _firstDayOfWeekDefault.default));
parcelHelpers.export(exports, "lastDayOfWeek", ()=>(0, _lastDayOfWeekDefault.default));
parcelHelpers.export(exports, "formatDate", ()=>(0, _formatDateDefault.default));
parcelHelpers.export(exports, "weekNumber", ()=>(0, _weekNumberDefault.default));
parcelHelpers.export(exports, "Weekday", ()=>(0, _weekdayEnum.Weekday));
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

},{"./countWorkdays":"bxXEv","./firstDayOfMonth":"gIJ7l","./lastDayOfMonth":"3yCif","./firstDayOfWeek":"6OPrf","./lastDayOfWeek":"iDP1x","./formatDate":"jp7Cc","./weekNumber":"aMyMU","./Weekday.enum":"lgIA8","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"bxXEv":[function(require,module,exports) {
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
        startDate: (0, _firstDayOfMonthDefault.default)(),
        endDate: (0, _lastDayOfMonthDefault.default)(startDate),
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
    let fromDate = new Date(Date.UTC(values.startDate.getFullYear(), values.startDate.getMonth(), values.startDate.getDate()));
    let toDate = new Date(Date.UTC(values.endDate.getFullYear(), values.endDate.getMonth(), values.endDate.getDate()));
    while(fromDate <= toDate){
        const dayOfWeek = fromDate.getDay();
        if (!(dayOfWeek >= values.fromWeekDay && dayOfWeek <= values.toWeekDay)) {
            fromDate.setDate(fromDate.getDate() + 1);
            continue;
        }
        if (!(0, _isNullOrEmptyDefault.default)(excludedDates) && excludedDates.Contains((excludedDate)=>{
            const h = new Date(Date.UTC(excludedDate.getFullYear(), excludedDate.getMonth(), excludedDate.getDate()));
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

},{"./firstDayOfMonth":"gIJ7l","./lastDayOfMonth":"3yCif","../../extensions/ArrayExtensions":"iAHJd","../isNullOrEmpty":"aPoSF","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"gIJ7l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function firstDayOfMonth(date) {
    if (!(0, _issetDefault.default)(date)) date = new Date();
    const firstDayOfMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    firstDayOfMonth.setDate(1);
    return firstDayOfMonth;
}
exports.default = firstDayOfMonth;

},{"../isset":"eqi1m","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"3yCif":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function lastDayOfMonth(date) {
    if (!(0, _issetDefault.default)(date)) date = new Date();
    const lastDayOfMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1);
    lastDayOfMonth.setDate(0);
    return lastDayOfMonth;
}
exports.default = lastDayOfMonth;

},{"../isset":"eqi1m","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"6OPrf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
var _weekdayEnum = require("./Weekday.enum");
function firstDayOfWeek(date, startDay = (0, _weekdayEnum.Weekday).Monday) {
    if (!(0, _issetDefault.default)(date)) date = new Date();
    const firstDayOfWeek = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const day = firstDayOfWeek.getDay();
    if (day == startDay) return firstDayOfWeek;
    const diff = day >= startDay ? day - startDay : 7 - (startDay - day);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - diff);
    return firstDayOfWeek;
}
exports.default = firstDayOfWeek;

},{"../isset":"eqi1m","./Weekday.enum":"lgIA8","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"lgIA8":[function(require,module,exports) {
/**
 * An (helper) enum which can be used for the days of the week
 * @since 1.2.0
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Weekday", ()=>Weekday);
let Weekday;
(function(Weekday) {
    Weekday[Weekday["Sunday"] = 0] = "Sunday";
    Weekday[Weekday["Monday"] = 1] = "Monday";
    Weekday[Weekday["Tuesday"] = 2] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 3] = "Wednesday";
    Weekday[Weekday["Thursday"] = 4] = "Thursday";
    Weekday[Weekday["Friday"] = 5] = "Friday";
    Weekday[Weekday["Saturday"] = 6] = "Saturday";
})(Weekday || (Weekday = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"iDP1x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
var _firstDayOfWeek = require("./firstDayOfWeek");
var _firstDayOfWeekDefault = parcelHelpers.interopDefault(_firstDayOfWeek);
var _weekdayEnum = require("./Weekday.enum");
function lastDayOfWeek(date, startDay = (0, _weekdayEnum.Weekday).Monday) {
    if (!(0, _issetDefault.default)(date)) date = new Date();
    const lastDayOfWeek = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const firstDay = (0, _firstDayOfWeekDefault.default)(date, startDay);
    lastDayOfWeek.setDate(firstDay.getDate() + 6);
    return lastDayOfWeek;
}
exports.default = lastDayOfWeek;

},{"../isset":"eqi1m","./firstDayOfWeek":"6OPrf","./Weekday.enum":"lgIA8","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"jp7Cc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
var _isNullOrEmpty = require("../isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
var _stringExtensions = require("../../extensions/StringExtensions");
function formatDate(format, date) {
    if ((0, _isNullOrEmptyDefault.default)(format)) return "";
    if (!(0, _issetDefault.default)(date)) date = new Date();
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

},{"../isset":"eqi1m","../isNullOrEmpty":"aPoSF","../../extensions/StringExtensions":"bZeFs","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"aMyMU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function weekNumber(date) {
    if (!(0, _issetDefault.default)(date)) date = new Date();
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

},{"../isset":"eqi1m","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"gBgwL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functions = require("./functions");
parcelHelpers.exportAll(_functions, exports);
var _classes = require("./classes");
parcelHelpers.exportAll(_classes, exports);
var _events = require("./events");
parcelHelpers.exportAll(_events, exports);

},{"./functions":"fZyL3","./classes":"lvbA5","./events":"5vG8m","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"lvbA5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uri = require("./Uri");
parcelHelpers.exportAll(_uri, exports);

},{"./Uri":"7U7JZ","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"7U7JZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UrlParameter", ()=>UrlParameter);
parcelHelpers.export(exports, "Uri", ()=>Uri);
var _functions = require("../functions");
var _arrayExtensions = require("../extensions/ArrayExtensions");
var _stringExtensions = require("../extensions/StringExtensions");
class UrlParameter {
    constructor(query){
        this.Query = query;
        this.Parameters = this.buildParametersArray();
    }
    add(name, value, encode = true) {
        this.remove(name);
        if (encode) value = encodeURIComponent(value);
        this.Parameters.push({
            Key: name,
            Value: value
        });
        this.buildQuery();
    }
    get(name, decode = true) {
        const value = (0, _functions.getUrlParameter)(name, this.getQuery());
        if (value && decode) return decodeURIComponent(value);
        return value;
    }
    getAll() {
        return this.Parameters;
    }
    remove(name) {
        const existingParameterIndex = this.Parameters.IndexOf((p)=>p.Key.Equals(name, true));
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
        if ((0, _functions.isNullOrEmpty)(this.Parameters)) {
            this.Query = "";
            return;
        }
        const queryArray = [];
        this.Parameters.forEach((param)=>{
            queryArray.push(`${param.Key}=${param.Value}`);
        });
        const query = queryArray.join("&");
        this.Query = "?" + query;
        if (fireOnChangeEvent && typeof this.onQueryChanged === "function") this.onQueryChanged();
    }
}
class Uri {
    get hash() {
        return (0, _functions.isNullOrEmpty)(this.Hash) ? "" : `#${this.Hash}`;
    }
    constructor(url){
        this.OriginalUrl = url;
        this.Hash = this.getHash(url);
        if (!(0, _functions.isNullOrEmpty)(this.hash)) url = url.replace(this.hash, "");
        this.createUrlContext(url);
    }
    toString() {
        return this.Url.Contains(this.hash) ? this.Url : this.Url + this.hash;
    }
    Combine(urlToCombine) {
        const absoluteUrl = this.makeAbsoluteUrl(urlToCombine);
        this.createUrlContext(absoluteUrl);
    }
    createUrlContext(url) {
        this.Url = url;
        this.Host = this.getHost(url);
        this.WebUrl = this.getWebUrl(url);
        this.Path = this.getPath(url);
        this.Query = this.getQuery(url);
        this.Protocol = this.getProtocol(url);
        this.Parameters = new UrlParameter(this.Query);
        const self = this;
        this.Parameters.onQueryChanged = ()=>{
            self.onParameterQueryChanged();
        };
    }
    onParameterQueryChanged() {
        // this.Query = this.Parameters.toString();
        const newUrl = (0, _functions.removeAllParametersFromUrl)(this.Url) + this.Parameters.toString();
        this.createUrlContext(newUrl);
    }
    makeAbsoluteUrl(urlToCombine) {
        if (urlToCombine.StartsWith("http://") || urlToCombine.StartsWith("https://")) return urlToCombine;
        if (urlToCombine.StartsWith("?") || urlToCombine.StartsWith("&")) {
            const params = new UrlParameter(urlToCombine);
            params.getAll().forEach((param)=>{
                this.Parameters.add(param.Key, param.Value);
            });
            return this.toString();
        }
        let absoluteUrl = this.WebUrl;
        const relativeUrl = this.Path;
        if (absoluteUrl.EndsWith("/")) absoluteUrl = absoluteUrl.substring(0, absoluteUrl.length - 1);
        if (relativeUrl.length > 0 && urlToCombine.StartsWith(relativeUrl)) urlToCombine = urlToCombine.substr(urlToCombine.IndexOf(relativeUrl) + urlToCombine.length);
        if (urlToCombine.StartsWith("/")) urlToCombine = urlToCombine.substr(1);
        const url = absoluteUrl + "/" + urlToCombine + this.Parameters.toString();
        return url;
    }
    getSplittedUrl(url) {
        if (this.SplittedUrl) return this.SplittedUrl;
        this.SplittedUrl = url.split("/");
        return this.SplittedUrl;
    }
    getWebUrl(url) {
        url = (0, _functions.removeAllParametersFromUrl)(url);
        return url;
    }
    getProtocol(url) {
        const pathArray = this.getSplittedUrl(url);
        return pathArray[0];
    }
    getHost(url) {
        const pathArray = this.getSplittedUrl(url);
        return pathArray[2];
    }
    getHostWithProtocol(url) {
        const protocol = this.getProtocol(url);
        const host = this.getHost(url);
        return `${protocol}//${host}`;
    }
    getPath(url) {
        const webUrl = this.getWebUrl(url);
        const hostWithProtocol = this.getHostWithProtocol(url);
        return webUrl.replace(hostWithProtocol, "");
    }
    getQuery(url) {
        const webUrl = this.getWebUrl(url);
        return url.replace(webUrl, "");
    }
    getHash(url) {
        let urlCopy = url.slice();
        let hashValue = "";
        if (!urlCopy.Contains("#")) return hashValue;
        let splittedUrl = urlCopy.split("#");
        hashValue = splittedUrl.LastOrDefault();
        if (!urlCopy.EndsWith("#" + hashValue) || hashValue.Contains("?")) hashValue = "";
        return hashValue;
    }
}

},{"../functions":"fZyL3","../extensions/ArrayExtensions":"iAHJd","../extensions/StringExtensions":"bZeFs","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"5vG8m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventHandler", ()=>(0, _eventHandler.EventHandler));
parcelHelpers.export(exports, "IEventListener", ()=>(0, _eventListener.IEventListener));
parcelHelpers.export(exports, "IEventListenerResult", ()=>(0, _eventListener.IEventListenerResult));
parcelHelpers.export(exports, "EventListenerBase", ()=>(0, _eventListener.EventListenerBase));
var _eventHandler = require("./EventHandler");
var _eventListener = require("./EventListener");

},{"./EventHandler":"foMPC","./EventListener":"bErHX","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"foMPC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventHandler", ()=>EventHandler);
var _functions = require("../functions");
var _arrayExtensions = require("../extensions/ArrayExtensions");
class EventHandler {
    static allUniqueEventIds = [];
    static Listen(name, listener, uniqueEventId) {
        if ((0, _functions.isNullOrEmpty)(uniqueEventId)) uniqueEventId = (0, _functions.randomString)(32, "abcdef0123456789");
        if (EventHandler.allUniqueEventIds.IndexOf((id)=>id.Equals(uniqueEventId, true)) >= 0) return;
        EventHandler.allUniqueEventIds.push(uniqueEventId);
        EventHandler.register(name, listener);
    }
    static Fire(name, ...args) {
        const allListener = EventHandler.getListener(name);
        if ((0, _functions.isNullOrEmpty)(allListener)) return "";
        const result = [];
        let lastEventResult = null;
        const sortedListener = allListener.OrderBy((listener)=>listener.Sequence);
        for(let i = 0; i < sortedListener.length; i++){
            const listener = sortedListener[i];
            lastEventResult = listener.Execute(name, lastEventResult, ...args);
            if ((0, _functions.isNullOrEmpty)(lastEventResult) || lastEventResult.ErrorOccurred) continue;
            if (!(0, _functions.isNullOrEmpty)(lastEventResult.Result)) result.push(lastEventResult.Result);
            if (lastEventResult.DisableEventListening) break;
        }
        return result;
    }
    static generateWindowListenerObject(name) {
        window["SPFxAppDevEventListener"] = window["SPFxAppDevEventListener"] || {};
        window["SPFxAppDevEventListener"][name] = window["SPFxAppDevEventListener"][name] || [];
    }
    static register(name, listener) {
        EventHandler.generateWindowListenerObject(name);
        window["SPFxAppDevEventListener"][name].push(listener);
    }
    static getListener(name) {
        EventHandler.generateWindowListenerObject(name);
        const allListener = window["SPFxAppDevEventListener"][name];
        if ((0, _functions.isNullOrEmpty)(allListener)) return null;
        return allListener;
    }
}

},{"../functions":"fZyL3","../extensions/ArrayExtensions":"iAHJd","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"bErHX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventListenerBase", ()=>EventListenerBase);
class EventListenerBase {
    Sequence = 0;
    ErrorOccurred = false;
    Error = null;
    Result = null;
    DisableEventListening = false;
    Execute(name, lastEventResult, ...args) {
        throw new Error("Method not implemented.");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"cUCDD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Logger", ()=>(0, _logger.Logger));
parcelHelpers.export(exports, "LogType", ()=>(0, _logger.LogType));
parcelHelpers.export(exports, "LogLevel", ()=>(0, _logger.LogLevel));
parcelHelpers.export(exports, "ClassLoggerBase", ()=>(0, _classLoggerBase.ClassLoggerBase));
parcelHelpers.export(exports, "log", ()=>(0, _logFactoryDecorators.log));
var _logger = require("./logger/Logger");
var _classLoggerBase = require("./logger/ClassLoggerBase");
var _logFactoryDecorators = require("./logger/decorators/logFactory.decorators");

},{"./logger/Logger":"70VkU","./logger/ClassLoggerBase":"5Jr1x","./logger/decorators/logFactory.decorators":"5ajKU","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"70VkU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogLevel", ()=>LogLevel);
parcelHelpers.export(exports, "LogType", ()=>LogType);
parcelHelpers.export(exports, "Logger", ()=>Logger);
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
var LogLevel;
(function(LogLevel) {
    LogLevel[LogLevel["None"] = 0] = "None";
    LogLevel[LogLevel["Log"] = 1] = "Log";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Warning"] = 4] = "Warning";
    LogLevel[LogLevel["Error"] = 8] = "Error";
    LogLevel[LogLevel["Table"] = 16] = "Table";
    LogLevel[LogLevel["All"] = 31] = "All";
})(LogLevel || (LogLevel = {}));
var DefaultLoggerSettings = {
    LogNamespaceUrlParameterName: "LogOnly",
    LoggingEnabledUrlParameterName: "EnableConsoleLogging",
    LogLevel: LogLevel.All
};
var LogType;
(function(LogType) {
    LogType[LogType["Warning"] = 0] = "Warning";
    LogType[LogType["Info"] = 1] = "Info";
    LogType[LogType["Error"] = 2] = "Error";
    LogType[LogType["Table"] = 3] = "Table";
    LogType[LogType["Log"] = 4] = "Log";
})(LogType || (LogType = {}));
var Logger = /** @class */ function() {
    function Logger(logNamespace, settings) {
        if (settings === void 0) settings = null;
        this.logNamespace = logNamespace;
        this.settings = settings;
        this._loggingEnabledByUrl = undefined;
        this._namespacesToLog = undefined;
        if (!(0, _utility.isset)(settings)) settings = __assign({}, Logger.DefaultSettings);
        this.settings = __assign(__assign(__assign({}, DefaultLoggerSettings), Logger.DefaultSettings), settings);
    }
    Object.defineProperty(Logger.prototype, "isLoggingEnabledByUrl", {
        get: function() {
            // URL Parameter already checked, return value from Parameter
            if ((0, _utility.isset)(this._loggingEnabledByUrl)) return this._loggingEnabledByUrl;
            // URL Parameter is not checked. Check and set Parameter
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
        get: function() {
            return LogLevel.None != (this.settings.LogLevel | LogLevel.None);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "namespacesToLogFromUrl", {
        get: function() {
            if ((0, _utility.isset)(this._namespacesToLog)) return this._namespacesToLog;
            var modules = (0, _utility.getUrlParameter)(this.settings.LogNamespaceUrlParameterName);
            if ((0, _utility.isNullOrEmpty)(modules)) {
                this._namespacesToLog = [];
                return this._namespacesToLog;
            }
            this._namespacesToLog = modules.toLowerCase().split(",");
            return this._namespacesToLog;
        },
        enumerable: false,
        configurable: true
    });
    Logger.prototype.getCurrentSettings = function() {
        return __assign({}, this.settings);
    };
    Logger.prototype.logToConsole = function(logType) {
        var _this = this;
        var data = [];
        for(var _i = 1; _i < arguments.length; _i++)data[_i - 1] = arguments[_i];
        if (!(0, _utility.isset)(console)) return;
        if (!this.isLoggingEnabledBySettings && !this.isLoggingEnabledByUrl) return;
        //If namespaces are filtered by URL and the current namespace is NOT one of it
        if (!(0, _utility.isNullOrEmpty)(this.namespacesToLogFromUrl) && this.namespacesToLogFromUrl.indexOf(this.logNamespace.toLowerCase()) < 0) return;
        var valuesToLog = __spreadArray(__spreadArray([], data), [
            this.logNamespace
        ]);
        var logEnabled = this.isLoggingEnabledByUrl;
        var currentLogLevel = this.settings.LogLevel;
        switch(logType){
            case LogType.Warning:
                if (logEnabled || LogLevel.Warning == (currentLogLevel & LogLevel.Warning)) console.warn.apply(console, valuesToLog);
                break;
            case LogType.Info:
                if (logEnabled || LogLevel.Info == (currentLogLevel & LogLevel.Info)) /* tslint:disable:no-console */ console.info.apply(console, valuesToLog);
                break;
            case LogType.Error:
                if (logEnabled || LogLevel.Info == (currentLogLevel & LogLevel.Info)) console.error.apply(console, valuesToLog);
                break;
            case LogType.Table:
                if (!(logEnabled || LogLevel.Table == (currentLogLevel & LogLevel.Table))) break;
                if (typeof console.table !== "function") {
                    /* tslint:disable:no-console */ console.info("Your browser does not support console.table, console.log was used instead", this.logNamespace);
                    console.log.apply(console, valuesToLog);
                    break;
                }
                data.forEach(function(d) {
                    var valueType = typeof d;
                    if (valueType !== "array" && valueType !== "object") {
                        /* tslint:disable:no-console */ console.info("It is not possible to log table if logValue is not an array or object, console.log was used instead", _this.logNamespace);
                        console.log(d, _this.logNamespace);
                        return;
                    }
                    console.table(d, [
                        _this.logNamespace
                    ]);
                });
                break;
            case LogType.Log:
            default:
                if (logEnabled || LogLevel.Log == (currentLogLevel & LogLevel.Log)) console.log.apply(console, valuesToLog);
                break;
        }
    };
    Logger.prototype.log = function() {
        var data = [];
        for(var _i = 0; _i < arguments.length; _i++)data[_i] = arguments[_i];
        this.logToConsole.apply(this, __spreadArray([
            LogType.Log
        ], data));
    };
    Logger.prototype.warn = function() {
        var data = [];
        for(var _i = 0; _i < arguments.length; _i++)data[_i] = arguments[_i];
        this.logToConsole.apply(this, __spreadArray([
            LogType.Warning
        ], data));
    };
    Logger.prototype.info = function() {
        var data = [];
        for(var _i = 0; _i < arguments.length; _i++)data[_i] = arguments[_i];
        this.logToConsole.apply(this, __spreadArray([
            LogType.Info
        ], data));
    };
    Logger.prototype.error = function() {
        var data = [];
        for(var _i = 0; _i < arguments.length; _i++)data[_i] = arguments[_i];
        this.logToConsole.apply(this, __spreadArray([
            LogType.Error
        ], data));
    };
    Logger.prototype.table = function() {
        var data = [];
        for(var _i = 0; _i < arguments.length; _i++)data[_i] = arguments[_i];
        this.logToConsole.apply(this, __spreadArray([
            LogType.Table
        ], data));
    };
    Logger.Log = function(logNamespace, logType) {
        var data = [];
        for(var _i = 2; _i < arguments.length; _i++)data[_i - 2] = arguments[_i];
        var logger = new Logger(logNamespace);
        switch(logType){
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

},{"@spfxappdev/utility":"9WiOB","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"9WiOB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _functions = require("./functions");
parcelHelpers.exportAll(_functions, exports);
var _classes = require("./classes");
parcelHelpers.exportAll(_classes, exports);
var _events = require("./events");
parcelHelpers.exportAll(_events, exports);

},{"./functions":"2Yyvd","./classes":"eeRJ1","./events":"LgRy5","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"2Yyvd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrayFrom", ()=>(0, _arrayFromDefault.default));
parcelHelpers.export(exports, "cssClasses", ()=>(0, _cssClassesDefault.default));
parcelHelpers.export(exports, "extend", ()=>(0, _extendDefault.default));
parcelHelpers.export(exports, "getDeepOrDefault", ()=>(0, _getDeepOrDefaultDefault.default));
parcelHelpers.export(exports, "getUrlParameter", ()=>(0, _getUrlParameterDefault.default));
parcelHelpers.export(exports, "isFunction", ()=>(0, _isFunctionDefault.default));
parcelHelpers.export(exports, "isNullOrEmpty", ()=>(0, _isNullOrEmptyDefault.default));
parcelHelpers.export(exports, "isset", ()=>(0, _issetDefault.default));
parcelHelpers.export(exports, "issetDeep", ()=>(0, _issetDeepDefault.default));
parcelHelpers.export(exports, "toBoolean", ()=>(0, _toBooleanDefault.default));
parcelHelpers.export(exports, "asyncFn", ()=>(0, _asyncFnDefault.default));
parcelHelpers.export(exports, "promiseQueue", ()=>(0, _promiseQueueDefault.default));
parcelHelpers.export(exports, "toParameterlessPromiseQueueFunc", ()=>(0, _promiseQueue.toParameterlessPromiseQueueFunc));
parcelHelpers.export(exports, "isValidEmail", ()=>(0, _isValidEmailDefault.default));
parcelHelpers.export(exports, "randomString", ()=>(0, _randomStringDefault.default));
parcelHelpers.export(exports, "replaceNonAlphanumeric", ()=>(0, _replaceNonAlphanumericDefault.default));
parcelHelpers.export(exports, "stripHTML", ()=>(0, _stripHTMLDefault.default));
parcelHelpers.export(exports, "replaceTpl", ()=>(0, _replaceTplDefault.default));
parcelHelpers.export(exports, "removeAllParametersFromUrl", ()=>(0, _removeAllParametersFromUrlDefault.default));
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

},{"./arrayFrom":"hKc93","./cssClasses":"12XaM","./extend":"k89gr","./getDeepOrDefault":"gxD7p","./getUrlParameter":"BKViH","./isFunction":"jSPQN","./isNullOrEmpty":"7hDR9","./isset":"b1lXD","./issetDeep":"1cPt3","./toBoolean":"c6Pky","./asyncFn":"8Nkaa","./promiseQueue":"eBlg4","./isValidEmail":"btj7T","./randomString":"fTnMj","./replaceNonAlphanumeric":"4sclK","./stripHTML":"kFMRJ","./replaceTpl":"l30U2","./removeAllParametersFromUrl":"5KUNH","./date":"4wWSj","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"hKc93":[function(require,module,exports) {
/**
 * this functions calls Array.from() or make the same logic if not Exists.
 * The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
 * @param arrLike An array-like or iterable object to convert to an array.
 * @param mapFunc (optional) Map function to call on every element of the array.
 * @param thisArgs (optional) Value to use as this when executing mapFn.
 * @since 1.0.0
 */ /* tslint:disable */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function arrayFrom(arrLike, mapFunc, thisArgs) {
    if (!Array["from"]) Array["from"] = function() {
        var toStr = Object.prototype.toString;
        var isCallable = function(fn) {
            return typeof fn === "function" || toStr.call(fn) === "[object Function]";
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
            if (arrayLike == null) throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var mapFn;
            var args = arguments;
            if (args.length > 1) mapFn = args[1];
            var T;
            if (typeof mapFn !== "undefined") {
                if (!isCallable(mapFn)) throw new TypeError("Array.from: when provided, the second argument must be a function");
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
                if (mapFn) A[k] = typeof T === "undefined" ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"12XaM":[function(require,module,exports) {
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
        if (!(0, _issetDefault.default)(arg)) continue;
        var argType = typeof arg;
        if (argType === "string") {
            classes.push(arg);
            continue;
        }
        if (Array.isArray(arg) && arg.length > 0) {
            var classNamesFromArray = self.apply(null, arg);
            if ((0, _issetDefault.default)(classNamesFromArray) && !(0, _isNullOrEmptyDefault.default)(classNamesFromArray)) classes.push(classNamesFromArray);
            continue;
        }
        if (argType === "object") {
            if (arg.toString !== Object.prototype.toString) {
                classes.push(arg.toString());
                continue;
            }
            for(var className in arg)if (arg.hasOwnProperty(className) && arg[className]) classes.push(className);
        }
    }
    return classes.join(" ");
}
exports.default = cssClasses;

},{"./isset":"b1lXD","./isNullOrEmpty":"7hDR9","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"b1lXD":[function(require,module,exports) {
/**
 * Determines if the provided Property is set.
 * @param {any} property The Property to checked.
 * @returns {boolean} If the Property is set <c>true</c> otherwise <c>false</c>.
 * @since 1.0.0
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isset(property) {
    return typeof property !== "undefined" && property != null;
}
exports.default = isset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"7hDR9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function isNullOrEmpty(property) {
    if (!(0, _issetDefault.default)(property)) return true;
    if (typeof property === "string") return property.trim().length < 1;
    if (!property.hasOwnProperty("length")) return false;
    return property.length < 1;
}
exports.default = isNullOrEmpty;

},{"./isset":"b1lXD","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"k89gr":[function(require,module,exports) {
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
        return (0, _arrayFromDefault.default)(new Set(target.concat(source)));
    }
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for(var _i = 0, _a = Object.keys(source); _i < _a.length; _i++){
        var key = _a[_i];
        if (Array.isArray(source[key])) {
            var targetValue = target[key] || [];
            source[key] = extend(targetValue, source[key], inCaseOfArrayUseSourceObject);
        } else if (source[key] instanceof Object) {
            var targetValue = target[key] || {};
            source[key] = extend(targetValue, source[key], inCaseOfArrayUseSourceObject);
        }
    }
    // Join `target` and modified `source`
    target = target || {};
    var tempTarget = __assign(__assign({}, target), source);
    return tempTarget;
}
exports.default = extend;

},{"./arrayFrom":"hKc93","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"gxD7p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function getDeepOrDefault(objectToCheck, keyNameSpace, defaultValue) {
    if (defaultValue === void 0) defaultValue = null;
    if (!(0, _issetDefault.default)(objectToCheck)) return defaultValue;
    var namespaceKeys = keyNameSpace.split(".");
    var currentObjectPath = objectToCheck;
    for(var i = 0; i < namespaceKeys.length; i++){
        var currentKey = namespaceKeys[i];
        if (!(0, _issetDefault.default)(currentObjectPath[currentKey])) return defaultValue;
        currentObjectPath = currentObjectPath[currentKey];
    }
    return !(0, _issetDefault.default)(currentObjectPath) ? defaultValue : currentObjectPath;
}
exports.default = getDeepOrDefault;

},{"./isset":"b1lXD","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"BKViH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function getUrlParameter(parameterName, url) {
    if (url === void 0) url = null;
    if ((0, _isNullOrEmptyDefault.default)(url)) url = window.location.href;
    url = url.toLowerCase();
    var name = parameterName.toLowerCase();
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    if (results == null) return null;
    return results[1];
}
exports.default = getUrlParameter;

},{"./isNullOrEmpty":"7hDR9","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"jSPQN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function isFunction(property) {
    return (0, _issetDefault.default)(property) && typeof property === "function";
}
exports.default = isFunction;

},{"./isset":"b1lXD","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"1cPt3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function issetDeep(objectToCheck, keyNameSpace) {
    if (!(0, _issetDefault.default)(objectToCheck)) return false;
    var namespaceKeys = keyNameSpace.split(".");
    var currentObjectPath = objectToCheck;
    for(var i = 0; i < namespaceKeys.length; i++){
        var currentKey = namespaceKeys[i];
        if (!(0, _issetDefault.default)(currentObjectPath)) return false;
        currentObjectPath = currentObjectPath[currentKey];
    }
    return (0, _issetDefault.default)(currentObjectPath);
}
exports.default = issetDeep;

},{"./isset":"b1lXD","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"c6Pky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function toBoolean(value) {
    if (!(0, _issetDefault.default)(value)) return false;
    if (typeof value === "boolean") return value;
    if (typeof value === "string") value = value.toLowerCase();
    if (value !== "false" && value !== "true" && value !== "0" && value !== "1" && value !== 0 && value !== 1) return false;
    return value === "false" || value === "0" || value === 0 ? false : true;
}
exports.default = toBoolean;

},{"./isset":"b1lXD","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"8Nkaa":[function(require,module,exports) {
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
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"eBlg4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toParameterlessPromiseQueueFunc", ()=>toParameterlessPromiseQueueFunc);
var _ = require(".");
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
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
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
        return __generator(this, function(_a) {
            return [
                2 /*return*/ ,
                new Promise(function(resolve, reject) {
                    var currentPromise;
                    var callbackFunc = undefined;
                    var errorFunc = undefined;
                    if ((0, _.isFunction)(promiseArray[index])) currentPromise = promiseArray[index];
                    else if ((0, _.isFunction)(promiseArray[index].promiseFunc)) {
                        var promiseQueue_1 = promiseArray[index];
                        currentPromise = promiseQueue_1.promiseFunc;
                        callbackFunc = (0, _.isFunction)(promiseQueue_1.callback) ? promiseQueue_1.callback : callbackFunc;
                        errorFunc = (0, _.isFunction)(promiseQueue_1.onError) ? promiseQueue_1.onError : errorFunc;
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
                            return __generator(this, function(_a) {
                                switch(_a.label){
                                    case 0:
                                        if (!(0, _.isFunction)(callbackFunc)) return [
                                            3 /*break*/ ,
                                            4
                                        ];
                                        callbackResult = callbackFunc(promiseResult, index);
                                        if (!(callbackResult instanceof Promise)) return [
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
                                            callbackResult
                                        ];
                                    case 2:
                                        _a.sent();
                                        return [
                                            3 /*break*/ ,
                                            4
                                        ];
                                    case 3:
                                        e_1 = _a.sent();
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
                                        if (!(0, _.isFunction)(errorFunc)) return [
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

},{".":"2Yyvd","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"btj7T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function isValidEmail(email) {
    if ((0, _isNullOrEmptyDefault.default)(email)) return false;
    if (typeof email !== "string") return false;
    return !(0, _isNullOrEmptyDefault.default)(email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
}
exports.default = isValidEmail;

},{"./isNullOrEmpty":"7hDR9","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"fTnMj":[function(require,module,exports) {
/**
 * Generates a new and random string
 * @param {number} [randomStringLength=5] The length of the new created string. Defaultvalue: 5
 * @param {string} [characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'] The characters, that will be used for the random string. Defaultvalues: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
 * @return {string} Returns a new and random string with the length of randomStringLength and random characters that is passed in characters parameter
 * @since 1.1.0
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function randomString(randomStringLength, characters) {
    if (randomStringLength === void 0) randomStringLength = 5;
    if (characters === void 0) characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    var charactersLength = characters.length;
    for(var i = 0; i < randomStringLength; i++)result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}
exports.default = randomString;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"4sclK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function replaceNonAlphanumeric(value, replaceValue) {
    if (replaceValue === void 0) replaceValue = "";
    if ((0, _isNullOrEmptyDefault.default)(value)) return value;
    if (typeof value !== "string") return value;
    return value.replace(/[^\w]/gi, replaceValue);
}
exports.default = replaceNonAlphanumeric;

},{"./isNullOrEmpty":"7hDR9","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"kFMRJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNullOrEmpty = require("./isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
function stripHtml(htmlValue) {
    if ((0, _isNullOrEmptyDefault.default)(htmlValue)) return "";
    return new DOMParser().parseFromString(htmlValue, "text/html").body.textContent;
}
exports.default = stripHtml;

},{"./isNullOrEmpty":"7hDR9","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"l30U2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getDeepOrDefault = require("./getDeepOrDefault");
var _getDeepOrDefaultDefault = parcelHelpers.interopDefault(_getDeepOrDefault);
var _isFunction = require("./isFunction");
var _isFunctionDefault = parcelHelpers.interopDefault(_isFunction);
var _isset = require("./isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function replaceTpl(template, placeholderData, replaceMissingPlaceholderWith) {
    var result = template.slice();
    result = result.replace(/\{([\w\.]*)\}/g, function(placeholderMatch, placeholderKey) {
        var placeholderValue = (0, _getDeepOrDefaultDefault.default)(placeholderData, placeholderKey);
        if (!(0, _issetDefault.default)(placeholderValue)) {
            if ((0, _issetDefault.default)(replaceMissingPlaceholderWith)) return replaceMissingPlaceholderWith;
            return placeholderMatch;
        }
        if ((0, _isFunctionDefault.default)(placeholderValue)) return placeholderValue.apply(placeholderData, null);
        return placeholderValue;
    });
    return result;
}
exports.default = replaceTpl;

},{"./getDeepOrDefault":"gxD7p","./isFunction":"jSPQN","./isset":"b1lXD","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"5KUNH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stringExtensions = require("../extensions/StringExtensions");
var _arrayExtensions = require("../extensions/ArrayExtensions");
function removeAllParametersFromUrl(url) {
    if (typeof url !== "string") return "";
    var urlCopy = url.slice();
    if (urlCopy.Contains("#")) {
        var splittedUrl = urlCopy.split("#");
        do {
            var hashValue = splittedUrl.LastOrDefault();
            if (!urlCopy.EndsWith("#" + hashValue) || hashValue.Contains("?")) break;
            splittedUrl.RemoveAt(-1, 1);
            urlCopy = splittedUrl.join("#");
            splittedUrl = urlCopy.split("#");
        }while (splittedUrl.length > 1);
    }
    return urlCopy.split("?")[0].split("&")[0];
}
exports.default = removeAllParametersFromUrl;

},{"../extensions/StringExtensions":"4v7Mt","../extensions/ArrayExtensions":"MGfKI","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"4v7Mt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
String.prototype.StartsWith = function(searchTerm, ignoreCase) {
    if (ignoreCase === void 0) ignoreCase = true;
    var searchIn = this;
    if (ignoreCase) {
        searchTerm = searchTerm.toLocaleLowerCase();
        searchIn = searchIn.toLocaleLowerCase();
    }
    return searchIn.indexOf(searchTerm) === 0;
};
String.prototype.EndsWith = function(searchTerm, ignoreCase) {
    if (ignoreCase === void 0) ignoreCase = true;
    var searchIn = this;
    if (searchTerm.length > searchIn.length) return false;
    if (ignoreCase) {
        searchTerm = searchTerm.toLocaleLowerCase();
        searchIn = searchIn.toLocaleLowerCase();
    }
    var position = searchIn.length - searchTerm.length;
    var lastIndex = searchIn.indexOf(searchTerm, position);
    return lastIndex !== -1 && lastIndex === position;
};
String.prototype.Contains = function(searchTerm, ignoreCase) {
    if (ignoreCase === void 0) ignoreCase = true;
    var searchIn = this;
    if (ignoreCase) {
        searchTerm = searchTerm.toLocaleLowerCase();
        searchIn = searchIn.toLocaleLowerCase();
    }
    return searchIn.indexOf(searchTerm) >= 0;
};
String.prototype.IndexOf = function(searchTerm, ignoreCase) {
    if (ignoreCase === void 0) ignoreCase = true;
    var searchIn = this;
    if (ignoreCase) {
        searchTerm = searchTerm.toLocaleLowerCase();
        searchIn = searchIn.toLocaleLowerCase();
    }
    return searchIn.indexOf(searchTerm);
};
String.prototype.Insert = function(startIndex, valueToInsert) {
    var text = this;
    var first = text.substring(0, startIndex);
    var second = text.substring(startIndex, text.length);
    return first + valueToInsert + second;
};
String.prototype.Equals = function(value, ignoreCase) {
    if (ignoreCase === void 0) ignoreCase = true;
    var s = this.slice(0);
    if (ignoreCase) {
        s = s.toLocaleLowerCase();
        value = value.toLocaleLowerCase();
    }
    return value === s;
};
String.prototype.IsEmpty = function() {
    var s = this;
    return s.length < 1 || s.trim().length < 1;
};
String.prototype.ReplaceAll = function(searchTerm, replaceWith) {
    var s = this.slice();
    if (typeof this.replaceAll == "function") return this.replaceAll(searchTerm, replaceWith);
    return s.replace(new RegExp(searchTerm, "g"), replaceWith);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"MGfKI":[function(require,module,exports) {
var _functions = require("../functions");
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
if (!(0, _functions.isset)(Array.prototype.FirstOrDefault)) Object.defineProperty(Array.prototype, "FirstOrDefault", {
    value: function(predicateFunc, defaultValue) {
        if (defaultValue === void 0) defaultValue = null;
        var arr = this;
        if ((0, _functions.isNullOrEmpty)(arr)) return defaultValue;
        if (typeof predicateFunc !== "function") return arr[0];
        for(var i = 0; i < arr.length; i++){
            var item = arr[i];
            if (predicateFunc(item)) return item;
        }
        return defaultValue;
    }
});
if (!(0, _functions.isset)(Array.prototype.IndexOf)) Object.defineProperty(Array.prototype, "IndexOf", {
    value: function(predicateFunc) {
        var arr = this;
        for(var i = 0; i < arr.length; i++){
            var item = arr[i];
            if (predicateFunc(item)) return i;
        }
        return -1;
    }
});
if (!(0, _functions.isset)(Array.prototype.Where)) Object.defineProperty(Array.prototype, "Where", {
    value: function(predicateFunc) {
        var arr = this;
        var result = [];
        for(var i = 0; i < arr.length; i++){
            var item = arr[i];
            if (predicateFunc(item)) result.push(item);
        }
        return result;
    }
});
if (!(0, _functions.isset)(Array.prototype.OrderBy)) Object.defineProperty(Array.prototype, "OrderBy", {
    value: function(keySelector) {
        var arr = this;
        // const result: T[] = [];
        var compareFunction = function(item1, item2) {
            var keySelectorValue1 = keySelector(item1);
            var keySelectorValue2 = keySelector(item2);
            return keySelectorValue1 > keySelectorValue2 ? 1 : keySelectorValue2 > keySelectorValue1 ? -1 : 0;
        };
        // for (let i: number = 0; i < arr.length; i++) {
        //     return arr.sort(compareFunction);
        // }
        return arr.sort(compareFunction);
    // return result;
    }
});
if (!(0, _functions.isset)(Array.prototype.OrderByDescending)) Object.defineProperty(Array.prototype, "OrderByDescending", {
    value: function(keySelector) {
        var arr = this;
        // const result: T[] = [];
        var compareFunction = function(item1, item2) {
            var keySelectorValue1 = keySelector(item1);
            var keySelectorValue2 = keySelector(item2);
            return keySelectorValue1 > keySelectorValue2 ? -1 : keySelectorValue2 > keySelectorValue1 ? 1 : 0;
        };
        // for (let i: number = 0; i < arr.length; i++) {
        // return arr.sort(compareFunction);
        // }
        return arr.sort(compareFunction);
    // return result;
    }
});
if (!(0, _functions.isset)(Array.prototype.OrderByMultiple)) Object.defineProperty(Array.prototype, "OrderByMultiple", {
    value: function(keySelectors) {
        var arr = __spreadArray([], this, true);
        // const result: T[] = [];
        var compareFunction = function(item1, item2) {
            for(var i = 0; i < keySelectors.length; i++){
                var keySelector = keySelectors[i];
                var keySelectorValue1 = keySelector(item1);
                var keySelectorValue2 = keySelector(item2);
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
if (!(0, _functions.isset)(Array.prototype.OrderByMultipleDescending)) Object.defineProperty(Array.prototype, "OrderByMultipleDescending", {
    value: function(keySelectors) {
        var arr = __spreadArray([], this, true);
        // const result: T[] = [];
        var compareFunction = function(item1, item2) {
            for(var i = 0; i < keySelectors.length; i++){
                var keySelector = keySelectors[i];
                var keySelectorValue1 = keySelector(item1);
                var keySelectorValue2 = keySelector(item2);
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
if (!(0, _functions.isset)(Array.prototype.Contains)) Object.defineProperty(Array.prototype, "Contains", {
    value: function(predicateFunc) {
        var arr = this;
        return (0, _functions.isset)(this.FirstOrDefault(predicateFunc, null));
    }
});
if (!(0, _functions.isset)(Array.prototype.Count)) Object.defineProperty(Array.prototype, "Count", {
    value: function(predicateFunc) {
        var allItems = this.Where(predicateFunc);
        if ((0, _functions.isNullOrEmpty)(allItems)) return 0;
        return allItems.length;
    }
});
if (!(0, _functions.isset)(Array.prototype.LastOrDefault)) Object.defineProperty(Array.prototype, "LastOrDefault", {
    value: function(predicateFunc, defaultValue) {
        if (defaultValue === void 0) defaultValue = null;
        var arr = this;
        if ((0, _functions.isNullOrEmpty)(arr)) return defaultValue;
        if (typeof predicateFunc !== "function") return arr[arr.length - 1];
        for(var i = arr.length - 1; i >= 0; i--){
            var item = arr[i];
            if (predicateFunc(item)) return item;
        }
        return defaultValue;
    }
});
if (!(0, _functions.isset)(Array.prototype.AddAt)) Object.defineProperty(Array.prototype, "AddAt", {
    value: function(index) {
        var itemsToAdd = [];
        for(var _i = 1; _i < arguments.length; _i++)itemsToAdd[_i - 1] = arguments[_i];
        this.splice.apply(this, __spreadArray([
            index,
            0
        ], itemsToAdd, false));
    }
});
if (!(0, _functions.isset)(Array.prototype.RemoveAt)) Object.defineProperty(Array.prototype, "RemoveAt", {
    value: function(index, totalItemsToRemove) {
        if (totalItemsToRemove === void 0) totalItemsToRemove = 1;
        this.splice(index, totalItemsToRemove);
    }
});

},{"../functions":"2Yyvd"}],"4wWSj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "countWorkdays", ()=>(0, _countWorkdaysDefault.default));
parcelHelpers.export(exports, "firstDayOfMonth", ()=>(0, _firstDayOfMonthDefault.default));
parcelHelpers.export(exports, "lastDayOfMonth", ()=>(0, _lastDayOfMonthDefault.default));
parcelHelpers.export(exports, "firstDayOfWeek", ()=>(0, _firstDayOfWeekDefault.default));
parcelHelpers.export(exports, "lastDayOfWeek", ()=>(0, _lastDayOfWeekDefault.default));
parcelHelpers.export(exports, "formatDate", ()=>(0, _formatDateDefault.default));
parcelHelpers.export(exports, "weekNumber", ()=>(0, _weekNumberDefault.default));
parcelHelpers.export(exports, "Weekday", ()=>(0, _weekdayEnum.Weekday));
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

},{"./countWorkdays":"29eNi","./firstDayOfMonth":"8w1Xr","./lastDayOfMonth":"cUfhN","./firstDayOfWeek":"fksX0","./lastDayOfWeek":"hTIAf","./formatDate":"8u53l","./weekNumber":"3Kbbn","./Weekday.enum":"aP3iS","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"29eNi":[function(require,module,exports) {
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
    var defaultValues = {
        startDate: (0, _firstDayOfMonthDefault.default)(),
        endDate: (0, _lastDayOfMonthDefault.default)(startDate),
        fromWeekDay: 1,
        toWeekDay: 5,
        excludedDates: []
    };
    var values = {
        startDate: startDate || defaultValues.startDate,
        endDate: endDate || defaultValues.endDate,
        fromWeekDay: fromWeekDay || defaultValues.fromWeekDay,
        toWeekDay: toWeekDay || defaultValues.toWeekDay,
        excludedDates: excludedDates || defaultValues.excludedDates
    };
    var workday = 0;
    var fromDate = new Date(Date.UTC(values.startDate.getFullYear(), values.startDate.getMonth(), values.startDate.getDate()));
    var toDate = new Date(Date.UTC(values.endDate.getFullYear(), values.endDate.getMonth(), values.endDate.getDate()));
    while(fromDate <= toDate){
        var dayOfWeek = fromDate.getDay();
        if (!(dayOfWeek >= values.fromWeekDay && dayOfWeek <= values.toWeekDay)) {
            fromDate.setDate(fromDate.getDate() + 1);
            continue;
        }
        if (!(0, _isNullOrEmptyDefault.default)(excludedDates) && excludedDates.Contains(function(excludedDate) {
            var h = new Date(Date.UTC(excludedDate.getFullYear(), excludedDate.getMonth(), excludedDate.getDate()));
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

},{"./firstDayOfMonth":"8w1Xr","./lastDayOfMonth":"cUfhN","../../extensions/ArrayExtensions":"MGfKI","../isNullOrEmpty":"7hDR9","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"8w1Xr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function firstDayOfMonth(date) {
    if (!(0, _issetDefault.default)(date)) date = new Date();
    var firstDayOfMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    firstDayOfMonth.setDate(1);
    return firstDayOfMonth;
}
exports.default = firstDayOfMonth;

},{"../isset":"b1lXD","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"cUfhN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function lastDayOfMonth(date) {
    if (!(0, _issetDefault.default)(date)) date = new Date();
    var lastDayOfMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1);
    lastDayOfMonth.setDate(0);
    return lastDayOfMonth;
}
exports.default = lastDayOfMonth;

},{"../isset":"b1lXD","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"fksX0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
var _weekdayEnum = require("./Weekday.enum");
function firstDayOfWeek(date, startDay) {
    if (startDay === void 0) startDay = (0, _weekdayEnum.Weekday).Monday;
    if (!(0, _issetDefault.default)(date)) date = new Date();
    var firstDayOfWeek = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    var day = firstDayOfWeek.getDay();
    if (day == startDay) return firstDayOfWeek;
    var diff = day >= startDay ? day - startDay : 7 - (startDay - day);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - diff);
    return firstDayOfWeek;
}
exports.default = firstDayOfWeek;

},{"../isset":"b1lXD","./Weekday.enum":"aP3iS","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"aP3iS":[function(require,module,exports) {
/**
 * An (helper) enum which can be used for the days of the week
 * @since 1.2.0
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Weekday", ()=>Weekday);
var Weekday;
(function(Weekday) {
    Weekday[Weekday["Sunday"] = 0] = "Sunday";
    Weekday[Weekday["Monday"] = 1] = "Monday";
    Weekday[Weekday["Tuesday"] = 2] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 3] = "Wednesday";
    Weekday[Weekday["Thursday"] = 4] = "Thursday";
    Weekday[Weekday["Friday"] = 5] = "Friday";
    Weekday[Weekday["Saturday"] = 6] = "Saturday";
})(Weekday || (Weekday = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"hTIAf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
var _firstDayOfWeek = require("./firstDayOfWeek");
var _firstDayOfWeekDefault = parcelHelpers.interopDefault(_firstDayOfWeek);
var _weekdayEnum = require("./Weekday.enum");
function lastDayOfWeek(date, startDay) {
    if (startDay === void 0) startDay = (0, _weekdayEnum.Weekday).Monday;
    if (!(0, _issetDefault.default)(date)) date = new Date();
    var lastDayOfWeek = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    var firstDay = (0, _firstDayOfWeekDefault.default)(date, startDay);
    lastDayOfWeek.setDate(firstDay.getDate() + 6);
    return lastDayOfWeek;
}
exports.default = lastDayOfWeek;

},{"../isset":"b1lXD","./firstDayOfWeek":"fksX0","./Weekday.enum":"aP3iS","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"8u53l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
var _isNullOrEmpty = require("../isNullOrEmpty");
var _isNullOrEmptyDefault = parcelHelpers.interopDefault(_isNullOrEmpty);
var _stringExtensions = require("../../extensions/StringExtensions");
function formatDate(format, date) {
    if ((0, _isNullOrEmptyDefault.default)(format)) return "";
    if (!(0, _issetDefault.default)(date)) date = new Date();
    //yy and yyyy
    var yyyy = date.getFullYear();
    var yy = yyyy.toString().substring(2);
    //MM or M
    var M = date.getMonth() + 1;
    var MM = M <= 9 ? "0".concat(M) : M.toString();
    //d or dd
    var d = date.getDate();
    var dd = d <= 9 ? "0".concat(d) : d.toString();
    //H or HH
    var H = date.getHours();
    var HH = H <= 9 ? "0".concat(H) : H.toString();
    //m or mm
    var m = date.getMinutes();
    var mm = m <= 9 ? "0".concat(m) : m.toString();
    //s or ss
    var s = date.getSeconds();
    var ss = s <= 9 ? "0".concat(s) : s.toString();
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

},{"../isset":"b1lXD","../isNullOrEmpty":"7hDR9","../../extensions/StringExtensions":"4v7Mt","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"3Kbbn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isset = require("../isset");
var _issetDefault = parcelHelpers.interopDefault(_isset);
function weekNumber(date) {
    if (!(0, _issetDefault.default)(date)) date = new Date();
    var currentDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // If currentDate is Sunday, then calculate with -7 instead of 0
    currentDate.setDate(currentDate.getDate() + 4 - (currentDate.getDay() || 7));
    var firstJanuary = new Date(Date.UTC(currentDate.getFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(((currentDate.getTime() - firstJanuary.getTime()) / 86400000 + 1) / 7);
    // Return array of year and week number
    return weekNo;
}
exports.default = weekNumber;

},{"../isset":"b1lXD","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"eeRJ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uri = require("./Uri");
parcelHelpers.exportAll(_uri, exports);

},{"./Uri":"1jYxl","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"1jYxl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UrlParameter", ()=>UrlParameter);
parcelHelpers.export(exports, "Uri", ()=>Uri);
var _functions = require("../functions");
var _arrayExtensions = require("../extensions/ArrayExtensions");
var _stringExtensions = require("../extensions/StringExtensions");
var UrlParameter = /** @class */ function() {
    function UrlParameter(query) {
        this.Query = query;
        this.Parameters = this.buildParametersArray();
    }
    UrlParameter.prototype.add = function(name, value, encode) {
        if (encode === void 0) encode = true;
        this.remove(name);
        if (encode) value = encodeURIComponent(value);
        this.Parameters.push({
            Key: name,
            Value: value
        });
        this.buildQuery();
    };
    UrlParameter.prototype.get = function(name, decode) {
        if (decode === void 0) decode = true;
        var value = (0, _functions.getUrlParameter)(name, this.getQuery());
        if (value && decode) return decodeURIComponent(value);
        return value;
    };
    UrlParameter.prototype.getAll = function() {
        return this.Parameters;
    };
    UrlParameter.prototype.remove = function(name) {
        var existingParameterIndex = this.Parameters.IndexOf(function(p) {
            return p.Key.Equals(name, true);
        });
        if (existingParameterIndex < 0) return;
        this.Parameters.splice(existingParameterIndex, 1);
        this.buildQuery();
    };
    UrlParameter.prototype.removeAll = function() {
        this.Parameters = [];
        this.buildQuery();
    };
    UrlParameter.prototype.getQuery = function() {
        this.buildQuery(false);
        return this.Query;
    };
    UrlParameter.prototype.toString = function() {
        return this.getQuery();
    };
    UrlParameter.prototype.buildParametersArray = function() {
        var parameters = [];
        this.Query.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(match, key, value) {
            parameters.push({
                Key: key,
                Value: value
            });
            return value;
        });
        return parameters;
    };
    UrlParameter.prototype.buildQuery = function(fireOnChangeEvent) {
        if (fireOnChangeEvent === void 0) fireOnChangeEvent = true;
        if ((0, _functions.isNullOrEmpty)(this.Parameters)) {
            this.Query = "";
            return;
        }
        var queryArray = [];
        this.Parameters.forEach(function(param) {
            queryArray.push("".concat(param.Key, "=").concat(param.Value));
        });
        var query = queryArray.join("&");
        this.Query = "?" + query;
        if (fireOnChangeEvent && typeof this.onQueryChanged === "function") this.onQueryChanged();
    };
    return UrlParameter;
}();
var Uri = /** @class */ function() {
    function Uri(url) {
        this.OriginalUrl = url;
        this.Hash = this.getHash(url);
        if (!(0, _functions.isNullOrEmpty)(this.hash)) url = url.replace(this.hash, "");
        this.createUrlContext(url);
    }
    Object.defineProperty(Uri.prototype, "hash", {
        get: function() {
            return (0, _functions.isNullOrEmpty)(this.Hash) ? "" : "#".concat(this.Hash);
        },
        enumerable: false,
        configurable: true
    });
    Uri.prototype.toString = function() {
        return this.Url.Contains(this.hash) ? this.Url : this.Url + this.hash;
    };
    Uri.prototype.Combine = function(urlToCombine) {
        var absoluteUrl = this.makeAbsoluteUrl(urlToCombine);
        this.createUrlContext(absoluteUrl);
    };
    Uri.prototype.createUrlContext = function(url) {
        this.Url = url;
        this.Host = this.getHost(url);
        this.WebUrl = this.getWebUrl(url);
        this.Path = this.getPath(url);
        this.Query = this.getQuery(url);
        this.Protocol = this.getProtocol(url);
        this.Parameters = new UrlParameter(this.Query);
        var self = this;
        this.Parameters.onQueryChanged = function() {
            self.onParameterQueryChanged();
        };
    };
    Uri.prototype.onParameterQueryChanged = function() {
        // this.Query = this.Parameters.toString();
        var newUrl = (0, _functions.removeAllParametersFromUrl)(this.Url) + this.Parameters.toString();
        this.createUrlContext(newUrl);
    };
    Uri.prototype.makeAbsoluteUrl = function(urlToCombine) {
        var _this = this;
        if (urlToCombine.StartsWith("http://") || urlToCombine.StartsWith("https://")) return urlToCombine;
        if (urlToCombine.StartsWith("?") || urlToCombine.StartsWith("&")) {
            var params = new UrlParameter(urlToCombine);
            params.getAll().forEach(function(param) {
                _this.Parameters.add(param.Key, param.Value);
            });
            return this.toString();
        }
        var absoluteUrl = this.WebUrl;
        var relativeUrl = this.Path;
        if (absoluteUrl.EndsWith("/")) absoluteUrl = absoluteUrl.substring(0, absoluteUrl.length - 1);
        if (relativeUrl.length > 0 && urlToCombine.StartsWith(relativeUrl)) urlToCombine = urlToCombine.substr(urlToCombine.IndexOf(relativeUrl) + urlToCombine.length);
        if (urlToCombine.StartsWith("/")) urlToCombine = urlToCombine.substr(1);
        var url = absoluteUrl + "/" + urlToCombine + this.Parameters.toString();
        return url;
    };
    Uri.prototype.getSplittedUrl = function(url) {
        if (this.SplittedUrl) return this.SplittedUrl;
        this.SplittedUrl = url.split("/");
        return this.SplittedUrl;
    };
    Uri.prototype.getWebUrl = function(url) {
        url = (0, _functions.removeAllParametersFromUrl)(url);
        return url;
    };
    Uri.prototype.getProtocol = function(url) {
        var pathArray = this.getSplittedUrl(url);
        return pathArray[0];
    };
    Uri.prototype.getHost = function(url) {
        var pathArray = this.getSplittedUrl(url);
        return pathArray[2];
    };
    Uri.prototype.getHostWithProtocol = function(url) {
        var protocol = this.getProtocol(url);
        var host = this.getHost(url);
        return "".concat(protocol, "//").concat(host);
    };
    Uri.prototype.getPath = function(url) {
        var webUrl = this.getWebUrl(url);
        var hostWithProtocol = this.getHostWithProtocol(url);
        return webUrl.replace(hostWithProtocol, "");
    };
    Uri.prototype.getQuery = function(url) {
        var webUrl = this.getWebUrl(url);
        return url.replace(webUrl, "");
    };
    Uri.prototype.getHash = function(url) {
        var urlCopy = url.slice();
        var hashValue = "";
        if (!urlCopy.Contains("#")) return hashValue;
        var splittedUrl = urlCopy.split("#");
        hashValue = splittedUrl.LastOrDefault();
        if (!urlCopy.EndsWith("#" + hashValue) || hashValue.Contains("?")) hashValue = "";
        return hashValue;
    };
    return Uri;
}();

},{"../functions":"2Yyvd","../extensions/ArrayExtensions":"MGfKI","../extensions/StringExtensions":"4v7Mt","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"LgRy5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventHandler", ()=>(0, _eventHandler.EventHandler));
parcelHelpers.export(exports, "EventListenerBase", ()=>(0, _eventListener.EventListenerBase));
var _eventHandler = require("./EventHandler");
var _eventListener = require("./EventListener");

},{"./EventHandler":"l5nMg","./EventListener":"nNMmA","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"l5nMg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventHandler", ()=>EventHandler);
var _functions = require("../functions");
var _arrayExtensions = require("../extensions/ArrayExtensions");
var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var EventHandler = /** @class */ function() {
    function EventHandler() {}
    EventHandler.Listen = function(name, listener, uniqueEventId) {
        if ((0, _functions.isNullOrEmpty)(uniqueEventId)) uniqueEventId = (0, _functions.randomString)(32, "abcdef0123456789");
        if (EventHandler.allUniqueEventIds.IndexOf(function(id) {
            return id.Equals(uniqueEventId, true);
        }) >= 0) return;
        EventHandler.allUniqueEventIds.push(uniqueEventId);
        EventHandler.register(name, listener);
    };
    EventHandler.Fire = function(name) {
        var args = [];
        for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
        var allListener = EventHandler.getListener(name);
        if ((0, _functions.isNullOrEmpty)(allListener)) return "";
        var result = [];
        var lastEventResult = null;
        var sortedListener = allListener.OrderBy(function(listener) {
            return listener.Sequence;
        });
        for(var i = 0; i < sortedListener.length; i++){
            var listener = sortedListener[i];
            lastEventResult = listener.Execute.apply(listener, __spreadArray([
                name,
                lastEventResult
            ], args, false));
            if ((0, _functions.isNullOrEmpty)(lastEventResult) || lastEventResult.ErrorOccurred) continue;
            if (!(0, _functions.isNullOrEmpty)(lastEventResult.Result)) result.push(lastEventResult.Result);
            if (lastEventResult.DisableEventListening) break;
        }
        return result;
    };
    EventHandler.generateWindowListenerObject = function(name) {
        window["SPFxAppDevEventListener"] = window["SPFxAppDevEventListener"] || {};
        window["SPFxAppDevEventListener"][name] = window["SPFxAppDevEventListener"][name] || [];
    };
    EventHandler.register = function(name, listener) {
        EventHandler.generateWindowListenerObject(name);
        window["SPFxAppDevEventListener"][name].push(listener);
    };
    EventHandler.getListener = function(name) {
        EventHandler.generateWindowListenerObject(name);
        var allListener = window["SPFxAppDevEventListener"][name];
        if ((0, _functions.isNullOrEmpty)(allListener)) return null;
        return allListener;
    };
    EventHandler.allUniqueEventIds = [];
    return EventHandler;
}();

},{"../functions":"2Yyvd","../extensions/ArrayExtensions":"MGfKI","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"nNMmA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventListenerBase", ()=>EventListenerBase);
var EventListenerBase = /** @class */ function() {
    function EventListenerBase() {
        this.Sequence = 0;
        this.ErrorOccurred = false;
        this.Error = null;
        this.Result = null;
        this.DisableEventListening = false;
    }
    EventListenerBase.prototype.Execute = function(name, lastEventResult) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
        throw new Error("Method not implemented.");
    };
    return EventListenerBase;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"5Jr1x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClassLoggerBase", ()=>ClassLoggerBase);
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
*/ var ClassLoggerBase = /** @class */ function() {
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
        return "SPFxAppDev Logger BASE";
    };
    ClassLoggerBase.prototype.getLogSettings = function() {
        return __assign({}, (0, _logger.Logger).DefaultSettings);
    };
    ClassLoggerBase.prototype.assignLogger = function() {
        if (!this.logger) {
            var loggingSettings = this.getLogSettings();
            this.logger = new (0, _logger.Logger)(this.getLogCategory(), loggingSettings);
        }
        return this.logger;
    };
    return ClassLoggerBase;
}();

},{"./Logger":"70VkU","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"5ajKU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "log", ()=>log);
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
                if (typeof args[2] === "number" || typeof args[2] === "undefined") return (0, _propertyDecorators.propertyLogger)(options).apply(_this, args);
                return (0, _methodDecorators.methodLogger)(options).apply(_this, args);
            case 2:
                return (0, _propertyDecorators.propertyLogger)(options).apply(_this, args);
            case 1:
                // return classLogger.apply(this, args);
                return (0, _classDecorators.classLogger)(options).apply(_this, args);
            default:
                throw new Error("Not a valid decorator");
        }
    };
    return factoryFunction;
};

},{"./class.decorators":"1gJin","./method.decorators":"lrSd1","./property.decorators":"6867m","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"1gJin":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "classLogger", ()=>classLogger);
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
    options = __assign(__assign({}, defaultOptions), options);
    var classLoggerFunc = function(Base) {
        // save a reference to the original constructor
        var original = Base;
        var fallbackName = original && original.name ? original.name : ""; // deepscan-disable-line INSUFFICIENT_NULL_CHECK
        var enableConsoleLogging = options.logLevel ? options.logLevel : __assign({}, (0, _logger.Logger).DefaultSettings).LogLevel;
        var loggingCategory = (0, _decoratorsUtility.getLogCategoryOrCustom)(original, options.customLogCategory, fallbackName);
        var getLogCategoryFunc = function() {
            return (0, _decoratorsUtility.getLogCategoryOrCustom)(original, options.customLogCategory, fallbackName);
        };
        var logFunc = function(logType) {
            var logData = [];
            for(var _i = 1; _i < arguments.length; _i++)logData[_i - 1] = arguments[_i];
            (0, _decoratorsUtility.logFunc).apply(void 0, __spreadArray([
                original,
                enableConsoleLogging,
                loggingCategory,
                logType
            ], logData));
        };
        var logSettingsFunc = function() {
            return (0, _decoratorsUtility.getLogSettings)();
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
            instanceObj.logger = new (0, _logger.Logger)(instanceObj.getLogCategory(), instanceObj.getLogSettings());
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

},{"../Logger":"70VkU","./decorators.utility":"anuQE","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"anuQE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "logFunc", ()=>logFunc);
parcelHelpers.export(exports, "getLogCategoryOrCustom", ()=>getLogCategoryOrCustom);
parcelHelpers.export(exports, "getLogSettings", ()=>getLogSettings);
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
    var containsLogger = typeof target["logger"] === "object"; // && (target as any).getLogger() instanceof Logger;
    var loggingSettings = containsLogger ? target.logger.getCurrentSettings() : __assign({}, (0, _logger.Logger).DefaultSettings);
    loggingSettings.LogLevel = logLevel;
    var logger = new (0, _logger.Logger)(loggingCategory, loggingSettings);
    logger.logToConsole.apply(logger, __spreadArray([
        logType
    ], logData));
};
var getLogCategoryOrCustom = function(target, customLogCategory, fallbackValue) {
    if (customLogCategory === void 0) customLogCategory = null;
    if (fallbackValue === void 0) fallbackValue = "";
    var loggingCategory = "";
    if (typeof customLogCategory === "string") loggingCategory = customLogCategory;
    else {
        var containsLoggingCategory = typeof target["getLogCategory"] === "function" && typeof target.getLogCategory() === "string";
        // console.log("SSC", typeof target['getLogCategory'], (" loggingCategory: " +loggingCategory.slice(0) ), (" customLogCategory: " + customLogCategory));
        loggingCategory = containsLoggingCategory ? target.getLogCategory() : fallbackValue;
    }
    return loggingCategory;
};
var getLogSettings = function() {
    return (0, _logger.Logger).DefaultSettings;
};

},{"../Logger":"70VkU","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"lrSd1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "methodLogger", ()=>methodLogger);
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
    options = __assign(__assign({}, defaultOptions), options);
    return function(target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function() {
            var logLevel = options.logLevel;
            var loggingCategory = (0, _decoratorsUtility.getLogCategoryOrCustom)(target, options.customLogCategory, propertyKey);
            var containsLogLevel = typeof logLevel !== "undefined" && logLevel !== null;
            var targetContainsGetLogSettings = typeof target["getLogSettings"] == "function";
            if (!containsLogLevel && targetContainsGetLogSettings) {
                var settings = target["getLogSettings"]();
                if (settings && typeof settings["LogLevel"] == "number") {
                    logLevel = settings["LogLevel"];
                    containsLogLevel = true;
                }
            }
            logLevel = containsLogLevel ? logLevel : (0, _logger.Logger).DefaultSettings.LogLevel;
            var logFunc = function(logType) {
                var logData = [];
                for(var _i = 1; _i < arguments.length; _i++)logData[_i - 1] = arguments[_i];
                (0, _decoratorsUtility.logFunc).apply(void 0, __spreadArray([
                    target,
                    logLevel,
                    loggingCategory,
                    logType
                ], logData));
            };
            if (arguments && arguments.length > 0) logFunc((0, _logger.LogType).Log, [
                propertyKey + " START with params",
                arguments
            ]);
            else logFunc((0, _logger.LogType).Log, propertyKey + " START");
            var result = originalMethod.apply(this, arguments);
            if (!(result instanceof Promise)) {
                logFunc((0, _logger.LogType).Log, propertyKey + " END");
                return result;
            }
            return Promise.resolve(result).then(function(value) {
                logFunc((0, _logger.LogType).Log, propertyKey + " END");
                return value;
            }).catch(function(error) {
                logFunc((0, _logger.LogType).Error, "ERROR occurred in " + propertyKey);
                logFunc((0, _logger.LogType).Error, error);
                logFunc((0, _logger.LogType).Log, propertyKey + " END");
                return Promise.reject(error);
            });
        };
    };
};

},{"../Logger":"70VkU","./decorators.utility":"anuQE","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}],"6867m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "propertyLogger", ()=>propertyLogger);
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
    options = __assign(__assign({}, defaultOptions), options);
    return function(target, propertyName) {
        var logLevel = options.logLevel;
        var containsLogLevel = typeof logLevel !== "undefined" && logLevel !== null;
        var logFunc = function(currentInstance, logType) {
            var logData = [];
            for(var _i = 2; _i < arguments.length; _i++)logData[_i - 2] = arguments[_i];
            var loggingCategory = (0, _decoratorsUtility.getLogCategoryOrCustom)(currentInstance, options.customLogCategory, target.constructor["name"] + "." + propertyName);
            var targetContainsGetLogSettings = typeof currentInstance["getLogSettings"] == "function";
            if (!containsLogLevel && targetContainsGetLogSettings) {
                var settings = currentInstance["getLogSettings"]();
                if (settings && typeof settings["LogLevel"] == "number") {
                    logLevel = settings["LogLevel"];
                    containsLogLevel = true;
                }
            }
            (0, _decoratorsUtility.logFunc).apply(void 0, __spreadArray([
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
            logFunc(target, (0, _logger.LogType).Log, "Get: " + propertyName + " => " + _val);
            return _val;
        };
        // property setter method
        var setter = function(newVal) {
            logFunc(target, (0, _logger.LogType).Log, "Set: " + propertyName + " => " + newVal);
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

},{"../Logger":"70VkU","./decorators.utility":"anuQE","@parcel/transformer-js/src/esmodule-helpers.js":"hMyTC"}]},["4litF","lyqAI"], "lyqAI", "parcelRequirebc7a")

//# sourceMappingURL=index.e6f7754f.js.map
