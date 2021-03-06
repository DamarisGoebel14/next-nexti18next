module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next_package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-i18next/package.json */ "./node_modules/next-i18next/package.json");
var next_i18next_package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! next-i18next/package.json */ "./node_modules/next-i18next/package.json", 1);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Footer = ({
  t
}) => __jsx("footer", null, __jsx("p", null, t('description')), __jsx("p", null, "next-i18next v", next_i18next_package_json__WEBPACK_IMPORTED_MODULE_2__["version"]));

Footer.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])('footer')(Footer));

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header = ({
  title
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "next-i18next"), __jsx("link", {
  href: "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",
  rel: "stylesheet"
}), __jsx("link", {
  href: "/static/app.css",
  rel: "stylesheet"
}), __jsx("link", {
  href: "https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css",
  rel: "stylesheet"
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:600",
  rel: "stylesheet"
}), __jsx("link", {
  "data-react-helmet": "true",
  rel: "icon",
  href: "https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media"
})), __jsx("h2", null, "next-i18next", __jsx("hr", null)), __jsx("h1", null, title), __jsx("a", {
  className: "github",
  href: "//github.com/isaachinman/next-i18next"
}, __jsx("i", {
  className: "typcn typcn-social-github-circular"
})));

Header.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
  Do not copy/paste this file. It is used internally
  to manage end-to-end test suites.
*/
const NextI18Next = __webpack_require__(/*! next-i18next */ "next-i18next").default;

const {
  localeSubpaths
} = __webpack_require__(/*! next/config */ "next/config").default().publicRuntimeConfig;

const options = {
  localeSubpaths: true
};
const localeSubpathVariations = {
  none: {},
  foreign: {
    de: 'de'
  },
  all: {
    en: 'en',
    de: 'de'
  }
};
module.exports = new NextI18Next({
  otherLanguages: ['de'],
  localeSubpaths: {
    de: 'de',
    en: 'en'
  }
}); // import NextI18Next from 'next-i18next'
// const options = new NextI18Next({ localeSubpaths: true })
// export default new NextI18Next(options)

/***/ }),

/***/ "./node_modules/next-i18next/package.json":
/*!************************************************!*\
  !*** ./node_modules/next-i18next/package.json ***!
  \************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, bundlesize, dependencies, deprecated, description, devDependencies, engines, funding, homepage, husky, keywords, license, main, name, peerDependencies, repository, scripts, types, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"next-i18next\",\"_id\":\"next-i18next@4.2.0\",\"_inBundle\":false,\"_integrity\":\"sha512-AkDHe7OWa2PcaG3i5zW718AARynyKJQuCW4kzMBvdKcD5WYiVT+KhXdD1qDesIMDZ/zX3D3VH0i4G0GRAlPj8w==\",\"_location\":\"/next-i18next\",\"_phantomChildren\":{\"@babel/runtime\":\"7.8.4\"},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"next-i18next\",\"name\":\"next-i18next\",\"escapedName\":\"next-i18next\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/next-i18next/-/next-i18next-4.2.0.tgz\",\"_shasum\":\"d8205bcfc527d0b877acbc36d484adee487147e3\",\"_spec\":\"next-i18next\",\"_where\":\"D:\\\\React learning\\\\next-i18next\\\\examples\\\\simple\",\"author\":{\"name\":\"Isaac Hinman\",\"email\":\"isaac@isaachinman.com\"},\"bugs\":{\"url\":\"https://github.com/isaachinman/next-i18next/issues\"},\"bundleDependencies\":false,\"bundlesize\":[{\"path\":\"./examples/simple/.next/static/chunks/commons*.js\",\"maxSize\":\"106 kB\"},{\"path\":\"./examples/simple/.next/static/runtime/main*.js\",\"maxSize\":\"8 kB\"},{\"path\":\"./examples/simple/.next/static/runtime/webpack*.js\",\"maxSize\":\"750 B\"}],\"dependencies\":{\"core-js\":\"^2\",\"detect-node\":\"^2.0.4\",\"hoist-non-react-statics\":\"^3.2.0\",\"i18next\":\"^19.0.3\",\"i18next-browser-languagedetector\":\"^4.0.0\",\"i18next-express-middleware\":\"^1.5.0\",\"i18next-node-fs-backend\":\"^2.1.0\",\"i18next-xhr-backend\":\"^3.0.0\",\"path-match\":\"^1.2.4\",\"prop-types\":\"^15.6.2\",\"react-i18next\":\"^11.0.0\",\"url\":\"^0.11.0\"},\"deprecated\":false,\"description\":\"The easiest way to translate your NextJs apps.\",\"devDependencies\":{\"@babel/cli\":\"^7.5.5\",\"@babel/core\":\"^7.5.5\",\"@babel/plugin-proposal-class-properties\":\"^7.5.5\",\"@babel/plugin-transform-runtime\":\"^7.5.5\",\"@babel/preset-env\":\"^7.5.5\",\"@babel/preset-react\":\"^7.0.0\",\"@babel/preset-typescript\":\"^7.3.3\",\"@types/express\":\"^4.16.1\",\"@types/jest\":\"^24.0.16\",\"@types/jest-environment-puppeteer\":\"^4.0.0\",\"@types/react\":\"^16.8.4\",\"@types/react-dom\":\"^16.8.2\",\"@typescript-eslint/eslint-plugin\":\"^1.13.0\",\"@typescript-eslint/parser\":\"^1.13.0\",\"all-contributors-cli\":\"^6.0.0\",\"babel-core\":\"^7.0.0-bridge.0\",\"babel-jest\":\"^24.1.0\",\"babel-plugin-add-module-exports\":\"^1.0.0\",\"babel-plugin-transform-async-to-generator\":\"^6.24.1\",\"bundlesize\":\"^0.18.0\",\"enzyme\":\"^3.8.0\",\"enzyme-adapter-react-16\":\"^1.7.1\",\"eslint\":\"^6.1.0\",\"eslint-plugin-import\":\"^2.17.1\",\"eslint-plugin-jsx-a11y\":\"^6.1.2\",\"eslint-plugin-react\":\"^7.14.3\",\"husky\":\"^3.0.0\",\"jest\":\"^24.1.0\",\"jest-puppeteer\":\"^4.0.0\",\"jsdom\":\"^15.0.0\",\"jsdom-global\":\"^3.0.2\",\"next\":\"^9.0.1\",\"puppeteer\":\"^1.11.0\",\"react\":\"^16.12.0\",\"react-dom\":\"^16.12.0\",\"typescript\":\"^3.5.3\"},\"engines\":{\"node\":\">=8\"},\"funding\":{\"type\":\"github\",\"url\":\"https://github.com/sponsors/isaachinman\"},\"homepage\":\"https://github.com/isaachinman/next-i18next#readme\",\"husky\":{\"hooks\":{\"pre-commit\":\"yarn lint && yarn test\"}},\"keywords\":[\"react\",\"i18next\",\"nextjs\",\"next\",\"translation\",\"localisation\",\"localization\",\"locale\"],\"license\":\"MIT\",\"main\":\"dist/commonjs/index.js\",\"name\":\"next-i18next\",\"peerDependencies\":{\"next\":\">= 7.0.0\",\"react\":\">= 16.8.0\"},\"repository\":{\"type\":\"git\",\"url\":\"git+ssh://git@github.com/isaachinman/next-i18next.git\"},\"scripts\":{\"build\":\"yarn clean && yarn build:cjs && yarn build:es\",\"build:cjs\":\"BABEL_ENV=cjs babel src --extensions '.ts,.tsx' --out-dir dist/commonjs\",\"build:es\":\"BABEL_ENV=es babel src --extensions '.ts,.tsx' --out-dir dist/es\",\"build:examples/simple\":\"yarn --cwd examples/simple && yarn --cwd examples/simple build\",\"check-types\":\"tsc\",\"clean\":\"rm -rf examples/simple/.next && rm -rf dist && mkdir dist\",\"contributors:add\":\"all-contributors add\",\"contributors:check\":\"all-contributors check\",\"contributors:generate\":\"all-contributors generate\",\"heroku-postbuild\":\"yarn build && yarn build:examples/simple\",\"lint\":\"eslint types.d.ts src/**/* examples __tests__/**/*\",\"lint:fix\":\"eslint types.d.ts src/**/* examples __tests__/**/* --fix\",\"prepublishOnly\":\"yarn build\",\"run-example\":\"yarn build && cd examples/simple && yarn && yarn dev\",\"run-example:prod\":\"yarn --cwd examples/simple start\",\"test\":\"yarn check-types && yarn build && yarn build:examples/simple && bundlesize && NODE_ENV=test jest --maxWorkers=1 --silent\"},\"types\":\"./types.d.ts\",\"version\":\"4.2.0\"}");

/***/ }),

/***/ "./pages/salary.js":
/*!*************************!*\
  !*** ./pages/salary.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Salary = ({
  t
}) => __jsx("div", null, __jsx("main", null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: t('h1')
}), __jsx(_i18n__WEBPACK_IMPORTED_MODULE_3__["Link"], {
  href: "/"
}, __jsx("button", {
  type: "button"
}, t('back-to-home'))), __jsx("hr", null), __jsx("button", {
  onClick: () => _i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].changeLanguage(_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].language === 'en' ? 'de' : 'en')
}, " Change language")), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));

Salary.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer']
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])('common')(Salary));

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/salary.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\React learning\next-i18next\examples\simple\pages\salary.js */"./pages/salary.js");


/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=salary.js.map