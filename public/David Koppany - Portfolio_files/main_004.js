(this["webpackJsonpportfiolio-react"] = this["webpackJsonpportfiolio-react"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  font-family: 'Roboto Mono', monospace;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml, body{\n  scroll-behavior: smooth;\n  scrollbar-color: #01bf71 grey;\n  scrollbar-width: thin;\n  background-color: rgb(8, 12, 31);\n  overflow-x: hidden;\n}", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAEA;EACE,qCAAqC;EACrC,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,uBAAuB;EACvB,6BAA6B;EAC7B,qBAAqB;EACrB,gCAAgC;EAChC,kBAAkB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');\n\n* {\n  font-family: 'Roboto Mono', monospace;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml, body{\n  scroll-behavior: smooth;\n  scrollbar-color: #01bf71 grey;\n  scrollbar-width: thin;\n  background-color: rgb(8, 12, 31);\n  overflow-x: hidden;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/navbar/Navbar.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/navbar/Navbar.css ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "header{\r\n    position: fixed;\r\n    top:0;\r\n    left:0;\r\n    width: 100%;\r\n}\r\n\r\n.navbar{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-right: 0px;\r\n    min-height: 10vh;\r\n    background-color: rgb(8, 12, 31);\r\n    justify-content: flex-end;\r\n    padding: 0.5rem calc((100vw - 1000px)/2);\r\n    z-index: 10;\r\n}\r\n\r\n.navLink{\r\n    color: #fff;\r\n    display: flex;\r\n    align-items: center;\r\n    text-decoration: none;\r\n    padding: 0 1rem;\r\n    height: 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.navLink:active{\r\n    color: #15cdfc;\r\n}\r\n\r\n.navLink:hover{\r\n    color: #01bf71;\r\n    transition: 0.2s ease-in-out;\r\n}\r\n\r\n.favicon-header{\r\n    width: 50px;\r\n    height: auto;\r\n    left: -45vw;\r\n    position: relative;\r\n}\r\n\r\n.links{\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.hamburger{\r\n    position: relative;\r\n    left: 15vw;\r\n\r\n    @media screen and (max-width: 768px) {\r\n        display: block;\r\n        position: absolute;\r\n        right: -100vw;\r\n        top: -4.2vh;\r\n        transform: translate(-100%, 75%);\r\n        font-size: 1.8rem;\r\n        cursor: pointer;\r\n    }\r\n\r\n    @media only screen and (max-width: 470px) {\r\n        display: block;\r\n        position: absolute;\r\n        right: -100vw;\r\n        top: -4.2vh;\r\n        transform: translate(-100%, 75%);\r\n        font-size: 1.8rem;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.hamburger-react{\r\n    left: 75vw;\r\n    z-index: 10000;\r\n}\r\n\r\n.sticky{\r\n    position: fixed;\r\n    width: 100vw;\r\n}\r\n\r\n.logo{\r\n    color: white;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    padding-left: 20px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.logo:hover{\r\n    color: #01bf71;\r\n    transition: 0.2s ease-in-out;\r\n}\r\n\r\n.bars{\r\n\r\n    display: none;\r\n    color: #fff;\r\n\r\n    @media screen and (max-width: 768px) {\r\n        display: block;\r\n        position: absolute;\r\n        right: -100vw;\r\n        top: -4.2vh;\r\n        transform: translate(-100%, 75%);\r\n        font-size: 1.8rem;\r\n        cursor: pointer;\r\n    }\r\n\r\n    @media only screen and (max-width: 470px) {\r\n        display: block;\r\n        position: absolute;\r\n        right: -100vw;\r\n        top: -4.2vh;\r\n        transform: translate(-100%, 75%);\r\n        font-size: 1.8rem;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 470px) {\r\n    .logo{\r\n        display: none;\r\n    }\r\n    \r\n    .navbar{\r\n        justify-content: normal;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .navLink{\r\n        display: none;\r\n    }\r\n\r\n    .navbar{\r\n        justify-content: normal;\r\n    }\r\n   \r\n}", "",{"version":3,"sources":["webpack://src/components/navbar/Navbar.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,KAAK;IACL,MAAM;IACN,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,gCAAgC;IAChC,yBAAyB;IACzB,wCAAwC;IACxC,WAAW;AACf;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,UAAU;;IAEV;QACI,cAAc;QACd,kBAAkB;QAClB,aAAa;QACb,WAAW;QACX,gCAAgC;QAChC,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,cAAc;QACd,kBAAkB;QAClB,aAAa;QACb,WAAW;QACX,gCAAgC;QAChC,iBAAiB;QACjB,eAAe;IACnB;AACJ;;AAEA;IACI,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,eAAe;IACf,qBAAqB;IACrB,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,4BAA4B;AAChC;;AAEA;;IAEI,aAAa;IACb,WAAW;;IAEX;QACI,cAAc;QACd,kBAAkB;QAClB,aAAa;QACb,WAAW;QACX,gCAAgC;QAChC,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,cAAc;QACd,kBAAkB;QAClB,aAAa;QACb,WAAW;QACX,gCAAgC;QAChC,iBAAiB;QACjB,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;;IAEA;QACI,uBAAuB;IAC3B;;AAEJ;;AAEA;IACI;QACI,aAAa;IACjB;;IAEA;QACI,uBAAuB;IAC3B;;AAEJ","sourcesContent":["header{\r\n    position: fixed;\r\n    top:0;\r\n    left:0;\r\n    width: 100%;\r\n}\r\n\r\n.navbar{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-right: 0px;\r\n    min-height: 10vh;\r\n    background-color: rgb(8, 12, 31);\r\n    justify-content: flex-end;\r\n    padding: 0.5rem calc((100vw - 1000px)/2);\r\n    z-index: 10;\r\n}\r\n\r\n.navLink{\r\n    color: #fff;\r\n    display: flex;\r\n    align-items: center;\r\n    text-decoration: none;\r\n    padding: 0 1rem;\r\n    height: 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.navLink:active{\r\n    color: #15cdfc;\r\n}\r\n\r\n.navLink:hover{\r\n    color: #01bf71;\r\n    transition: 0.2s ease-in-out;\r\n}\r\n\r\n.favicon-header{\r\n    width: 50px;\r\n    height: auto;\r\n    left: -45vw;\r\n    position: relative;\r\n}\r\n\r\n.links{\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.hamburger{\r\n    position: relative;\r\n    left: 15vw;\r\n\r\n    @media screen and (max-width: 768px) {\r\n        display: block;\r\n        position: absolute;\r\n        right: -100vw;\r\n        top: -4.2vh;\r\n        transform: translate(-100%, 75%);\r\n        font-size: 1.8rem;\r\n        cursor: pointer;\r\n    }\r\n\r\n    @media only screen and (max-width: 470px) {\r\n        display: block;\r\n        position: absolute;\r\n        right: -100vw;\r\n        top: -4.2vh;\r\n        transform: translate(-100%, 75%);\r\n        font-size: 1.8rem;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n.hamburger-react{\r\n    left: 75vw;\r\n    z-index: 10000;\r\n}\r\n\r\n.sticky{\r\n    position: fixed;\r\n    width: 100vw;\r\n}\r\n\r\n.logo{\r\n    color: white;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    padding-left: 20px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.logo:hover{\r\n    color: #01bf71;\r\n    transition: 0.2s ease-in-out;\r\n}\r\n\r\n.bars{\r\n\r\n    display: none;\r\n    color: #fff;\r\n\r\n    @media screen and (max-width: 768px) {\r\n        display: block;\r\n        position: absolute;\r\n        right: -100vw;\r\n        top: -4.2vh;\r\n        transform: translate(-100%, 75%);\r\n        font-size: 1.8rem;\r\n        cursor: pointer;\r\n    }\r\n\r\n    @media only screen and (max-width: 470px) {\r\n        display: block;\r\n        position: absolute;\r\n        right: -100vw;\r\n        top: -4.2vh;\r\n        transform: translate(-100%, 75%);\r\n        font-size: 1.8rem;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 470px) {\r\n    .logo{\r\n        display: none;\r\n    }\r\n    \r\n    .navbar{\r\n        justify-content: normal;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .navLink{\r\n        display: none;\r\n    }\r\n\r\n    .navbar{\r\n        justify-content: normal;\r\n    }\r\n   \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/style.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/style.css ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=VT323&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a:hover{\r\n    color: white;\r\n}\r\n\r\n.container{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90vh;\r\n    background-color: rgb(8, 12, 31);\r\n    color: white;\r\n}\r\n\r\n.container.home{\r\n    position: relative;\r\n    top: 15vh;\r\n}\r\n\r\n.container.education, .container.projects, .container.about{\r\n    background-color: rgb(8, 12, 31);\r\n    color: white;\r\n}\r\n\r\n.projects{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    position: relative;\r\n    top: 15vh;\r\n    height: 140vh;\r\n    color: white;\r\n}\r\n\r\n.buttons{\r\n    position: relative;\r\n    left: 50vw;\r\n    width: 25%;\r\n    display: grid;\r\n    grid-gap: 10px;\r\n    opacity: 1;\r\n    transition: opacity 1.5s ease-in-out .8s;\r\n}\r\n\r\n.education-container{\r\n    height: 90vh !important;\r\n    margin-top: 25vh;\r\n}\r\n\r\n.about-container{\r\n    height: 90vh !important;\r\n}\r\n\r\n.education-li{\r\n    padding-top: 10vh;\r\n    display: block;\r\n    text-align: center !important;\r\n    font-size: 2rem;\r\n}\r\n\r\n.spaceholder{\r\n    display: inline-block;\r\n    width: 30px;\r\n}\r\n\r\n.wave{\r\n    position: absolute;\r\n    top: 1.2vh;\r\n    animation: wave_animation 2s ease-in-out infinite;\r\n}\r\n\r\n@keyframes wave_animation {\r\n    0%,100% {\r\n        transform: rotate(15deg);\r\n    }\r\n\r\n    50% {\r\n        transform: rotate(-10deg);\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 1400px) {\r\n    .content{\r\n        width: 80vw;\r\n    }\r\n}\r\n\r\n.content{\r\n    position: absolute;\r\n    height: 70vh;\r\n    width: 100vw;\r\n    background-color: transparent;\r\n    padding: 15px 15px 15px 15px;\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n    padding-bottom: 25px;\r\n}\r\n\r\np{\r\n    text-align: center;\r\n    font-size: 20px;\r\n    margin: 0 10px 10px 10px;\r\n}\r\n\r\nbody{\r\n    overflow-x: hidden;\r\n}\r\n\r\n.top-page-content{\r\n    margin-left: 15vw;\r\n    margin-right: 15vw;\r\n    cursor:default;\r\n    display: flex;\r\n}\r\n\r\n.robo{\r\n    color: #01bf71;\r\n    font-family: 'VT323', monospace;\r\n    font-size: 1.5rem;\r\n    text-align: left;\r\n    padding-bottom: 2.5rem;\r\n}\r\n\r\n.title{\r\n    text-align: left;\r\n    padding-bottom: 2rem;\r\n    text-transform: uppercase;\r\n    padding-left: .5rem;\r\n    font-size: 5rem;\r\n}\r\n\r\n.text{\r\n    text-align: left;\r\n}\r\n\r\n.rainbow_text_animated, .rainbow_text_animated:hover {\r\n    background: linear-gradient(45deg, #6666ff, #0099ff , #00e1ff, #ff3399, #6666ff);\r\n    -webkit-background-clip: text;\r\n    background-clip: text;\r\n    color: transparent;\r\n    animation: rainbow_animation 6s ease-in-out infinite;\r\n    background-size: 400% 100%;\r\n    cursor: default;\r\n}\r\n\r\n.submit-button:hover{\r\n    cursor: pointer;\r\n    background: linear-gradient(45deg, white, white , #00e1ff, #ff3399, #6666ff);\r\n    animation: rainbow_animation 6s ease-in-out infinite;\r\n    background-size: 400% 100%\r\n}\r\n\r\n.top-page-image-div{\r\n    /*background: linear-gradient(45deg, #6666ff, #0099ff , #00e1ff, #ff3399, #6666ff);*/\r\n    position: relative;\r\n    left: 15vw;\r\n}\r\n\r\n.top-page-image{\r\n    position: relative;\r\n    height: auto;\r\n    width: 80%;\r\n    left: 10%;\r\n    border-radius: 0;\r\n}\r\n\r\n.background-outline{\r\n    width: 268px;\r\n    height: 254px;\r\n    background: linear-gradient(-45deg, #6666ff, #0099ff , #00e1ff, #ff3399, #6666ff);\r\n    background-size: 400% 400%;\r\n    color: transparent;\r\n    animation: outline_animation 6s ease-in-out infinite;\r\n    left: 15rem;\r\n}\r\n\r\n@keyframes rainbow_animation {\r\n    0%,100% {\r\n        background-position: 0 0;\r\n    }\r\n\r\n    50% {\r\n        background-position: 100% 0;\r\n    }\r\n}\r\n\r\n@keyframes outline_animation{\r\n\t0% {\r\n\t\tbackground-position: 0% 50%;\r\n\t}\r\n\t50% {\r\n\t\tbackground-position: 100% 50%;\r\n\t}\r\n\t100% {\r\n\t\tbackground-position: 0% 50%;\r\n\t}\r\n}\r\n\r\n.technology-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-top: 15vh;\r\n    cursor: default;\r\n    justify-content: center;\r\n}\r\n\r\n.technology-card{\r\n    width: 15vw;\r\n    height: min(15vh, 15vw);\r\n    background-color: #04060F;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    margin-right: 17px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.technology-image{\r\n    width: 100px;\r\n    height: auto;\r\n}\r\n\r\n.precentage-circle{\r\n    margin-right: 15px;\r\n}\r\n\r\n.progress-precentage{\r\n    position: relative;\r\n    left: -50%;\r\n    top: -15px;\r\n}\r\n\r\n\r\nul{\r\n    list-style-type: none;\r\n    padding-left:   5vw;\r\n    padding-right: 5vw;\r\n    padding-top: 5rem;\r\n}\r\n\r\nli{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\nh1, ul, li{\r\n    position: relative;\r\n}\r\n\r\nli > h2, li > p{\r\n    text-align: left;\r\n}\r\n\r\n.education-list{\r\n    width: 60vw;\r\n}\r\n\r\n.education-filler-img{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.graduation-hat{\r\n    position: relative;\r\n    font-size: 15rem;\r\n    left: 5vw;\r\n    top: 10vh;\r\n}\r\n\r\n.sidebar-ul{\r\n    position: relative;\r\n    top: 15vh;\r\n    left: 35vw;\r\n}\r\n\r\n#contact{\r\n    overflow: hidden;\r\n}\r\n\r\n#contact-form{\r\n    position: relative;\r\n    left: 16.5vw;\r\n}\r\n\r\n#contact-form label{\r\n    padding: 0 15px 0 15px;\r\n}\r\n\r\n#contact-form input, textarea{\r\n    width: 65vw;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#contact-form textarea{\r\n    resize: none;\r\n    height: 20vh;\r\n}\r\n\r\n.error-message{\r\n    color: #d00;\r\n    width: 65vw;\r\n    text-align: center;\r\n}\r\n\r\n.success-message{\r\n    display: none;\r\n    color: rgb(0, 221, 111);\r\n    width: 65vw;\r\n    text-align: center;\r\n}\r\n\r\n.prevent-scroll{\r\n    overflow: hidden;\r\n}\r\n\r\n.card-container{\r\n    position: relative;\r\n    width:80vw;\r\n    left: 9.5vw;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    margin: 15rem 0;\r\n    grid-row-gap: 25px;\r\n    row-gap: 25px;\r\n    align-content: flex-end;\r\n    justify-content: center;\r\n    padding: 0 25vw 0 25vw;\r\n}\r\n\r\n.card-container li{\r\n    left: -25vw;\r\n    top: -20vh;\r\n    padding: 0 15px;\r\n    display: grid;\r\n}\r\n\r\n.project-card{\r\n    width: 75vw;\r\n    height: min(50vw, 300px);\r\n    margin: 0 0 0 0;\r\n    padding: 20px 20px 20px 20px;\r\n    border-radius: 15px;\r\n    background-color: #050511;\r\n    color:black;\r\n    cursor: pointer;\r\n    position: relative;\r\n    top: -2vh;\r\n    left: -1.5vw;\r\n}\r\n\r\n.project-card-no-hover{\r\n    width: 75vw;\r\n    height: min(50vw, 300px);\r\n    margin: 0 0 0 0;\r\n    padding: 20px 20px 20px 20px;\r\n    border-radius: 15px;\r\n    background-color: #050511;\r\n    color:black;\r\n    cursor: pointer;\r\n    transition: height 1.5s ease-in-out;\r\n}\r\n\r\n/*.project-card-no-hover:hover{\r\n    height: min(100vw, 600px);\r\n    transition: 1.5s ease-in-out;\r\n}*/\r\n\r\n.card-link{\r\n    position: absolute;\r\n    width: 70vw;\r\n    left: 1vw;\r\n    top: 0vh;\r\n    display: block;\r\n    color:white;\r\n    text-decoration: none;\r\n    padding: 40px 40px 40px 40px;\r\n    transition: width 1.5s ease-in-out;\r\n}\r\n\r\n.card-title{\r\n    font-size: 1.5rem;\r\n    padding-left: 1rem;\r\n}\r\n\r\n.card-desc{\r\n    font-size: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n.card-techstack{\r\n    font-weight: 800;\r\n    font-style: italic;\r\n    text-align: right;\r\n}\r\n\r\n.card-date{\r\n    position: absolute;\r\n    left: 65vw;\r\n    top: 2vh;\r\n    font-size: .8rem;\r\n}\r\n\r\n.card-progress{\r\n    position: relative;\r\n    top: 17vh;\r\n    font-size: .8rem;\r\n    width: 50%;\r\n    left: 2.5vw;\r\n}\r\n\r\n.notation {\r\n    position: relative;\r\n    left: 2.5vw;\r\n    width: 25%;\r\n    top: 18vh;\r\n    display: flex;\r\n}\r\n\r\n.notation p{\r\n    color: white;\r\n    font-size: 1rem;\r\n    display: inherit;\r\n    text-shadow: 3px black;\r\n}\r\n\r\n.notation p span{\r\n    position: relative;\r\n    top: 5px;\r\n    left: -5px;\r\n    display: block;\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.loader{\r\n    position: relative;\r\n    width: 15vw;\r\n    top: -5vh;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.project-card-hover{\r\n    display: none;\r\n    position: relative;\r\n    width: 40vw;\r\n    height: auto;\r\n    top: 20vh;\r\n    left: 15vw;\r\n    color: white;\r\n    transition: top 1.5s ease-in-out .8s;\r\n}\r\n\r\n/*.project-card-no-hover:hover .project-card-hover{\r\n    display: block;\r\n    transition: 2s ease-in-out;\r\n}*/\r\n.empty{\r\n    position: relative;\r\n    top: 20vh;\r\n    color: white;\r\n    width: 25vw;\r\n    left: 0;\r\n}\r\n\r\n.card-image{\r\n    position: relative;\r\n    width: 85%;\r\n    height: auto;\r\n    top: 0;\r\n    transform: translateY(-500deg);\r\n    transition: transfrom 1.5s ease-in-out;\r\n}\r\n\r\n.project-card-no-hover:hover .card-image{\r\n    transform: translateY(0deg);\r\n    transition: 1.5s ease-in-out;\r\n}\r\n\r\n.footer{\r\n    top: 30vh;\r\n    position: relative;\r\n    width: 100vw;\r\n    height: 20vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-left: 10%;\r\n}\r\n\r\n.link-footer{\r\n    font-size: 1rem;\r\n    text-align: left;\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.link-footer:focus{\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.link-footer:visited{\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.copyright-footer{\r\n    font-size: 1rem;\r\n    text-align: left;\r\n    margin-left: 5%;\r\n}\r\n\r\n.link-footer{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-content: center;\r\n}\r\n\r\n.linkedin-icon{\r\n    display: absolute;\r\n}\r\n\r\n.socials{\r\n    display: flex;\r\n    width: 75%;\r\n    justify-content: space-around;\r\n    text-align: right;\r\n}\r\n\r\n.sidebar-div{\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 10vh;\r\n    left: -100px;\r\n    background-color: rgb(4, 6, 15);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    z-index: 0;\r\n}\r\n\r\n.sidebar-div .top-links{\r\n    font-size: 1rem;\r\n    padding-right: 5vw;\r\n}\r\n\r\n.progressMainWrapper{\r\n    background-color: #0f0f20;\r\n    height: 15px;\r\n    position: relative;\r\n    bottom: 0;\r\n    left: -97vw;\r\n    z-index: 1;\r\n    width:100vw;\r\n}\r\n\r\n.progressMainStyle{\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n@media only screen and (max-width: 1470px) {\r\n    .top-page-image-div{\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1300px) {\r\n    .progress-precentage{\r\n        display: none;\r\n    }\r\n    \r\n    .precentage-circle{\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1064px) {\r\n    .graduation-hat{\r\n        font-size: 15rem;\r\n        top: 15vh;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 960px){\r\n\r\n    #contact{\r\n        margin-top: 60vh;\r\n    }\r\n\r\n    .buttons{\r\n        display: flex;\r\n        left: 45vw;\r\n    }\r\n\r\n    .empty{\r\n        font-size: .8rem;\r\n    }\r\n\r\n    .notation p {\r\n        font-size: .8rem;\r\n    }\r\n\r\n    .contact-title{\r\n        left: 4vw;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 800px){\r\n    .technology-image{\r\n        width: 75%;\r\n        height: auto;\r\n    }\r\n\r\n    .project-card-no-hover{\r\n        width: 95vw;\r\n        height: 40vh !important;\r\n    }\r\n\r\n    .card-link{\r\n        width: 95vw;\r\n    }\r\n\r\n    .card-container li{\r\n        left: -36.5vw;\r\n    }\r\n\r\n    .card-container{\r\n        grid-template-columns: 1fr;\r\n        overflow: visible;\r\n        margin: 2rem 0;\r\n    }\r\n\r\n    .project-card-no-hover{\r\n        height: 35vh;\r\n    }\r\n\r\n    .notation {\r\n        flex-direction: column;\r\n        width:45%;\r\n        top: 15vh;\r\n    }\r\n\r\n    .buttons{\r\n        width: 100%;\r\n    }\r\n\r\n    .card-progress {\r\n        display: none;\r\n    }\r\n\r\n    .card-container li{\r\n        padding-bottom: 0;\r\n    }\r\n\r\n    .project-card{\r\n        width: 75vw;\r\n        height: -moz-fit-content;\r\n        height: fit-content;\r\n        border-radius: 15px;\r\n        transition: 1s ease-in-out;\r\n    }\r\n\r\n    .top-page-content{\r\n        margin-left: 0;\r\n        transition: 1s ease-in-out;\r\n    }\r\n\r\n    ul{\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n        transition: 1s ease-in-out;\r\n    }\r\n\r\n    .graduation-hat{\r\n        font-size: 10rem;\r\n        top: 20vh;\r\n    }\r\n\r\n    .card-desc{\r\n        position: relative;\r\n        top: -2vh;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 765px) {\r\n    .favicon-header{\r\n        left: 5vw !important;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 625px){\r\n    .buttons a {\r\n        font-size: .8rem;\r\n    }\r\n\r\n    .notation{\r\n        display: none;\r\n    }\r\n\r\n    .empty{\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 600px){\r\n    .buttons{\r\n        left: -1vw;\r\n        top: 3vh;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (max-width: 500px){\r\n    .card-container{\r\n        left: 7vw;\r\n    }\r\n    \r\n    .socials{\r\n        display: grid;\r\n        grid-gap: 1rem;\r\n    }\r\n\r\n    .graduation-hat{\r\n        display: none;\r\n    }\r\n\r\n    .card-link{\r\n        left: -5vw;\r\n    }\r\n\r\n    .education-list{\r\n        width: 100vw;\r\n        left: 0;\r\n    }\r\n\r\n    .education-li{\r\n        display: flex;\r\n        flex-direction: column;\r\n        text-align: center;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://src/components/style.css"],"names":[],"mappings":"AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,aAAa;IACb,cAAc;IACd,UAAU;IACV,wCAAwC;AAC5C;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,iDAAiD;AACrD;;AAEA;IACI;QACI,wBAAwB;IAC5B;;IAEA;QACI,yBAAyB;IAC7B;AACJ;;;AAGA;IACI;QACI,WAAW;IACf;AACJ;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,6BAA6B;IAC7B,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,+BAA+B;IAC/B,iBAAiB;IACjB,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gFAAgF;IAChF,6BAA6B;IAC7B,qBAAqB;IACrB,kBAAkB;IAClB,oDAAoD;IACpD,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,4EAA4E;IAC5E,oDAAoD;IACpD;AACJ;;AAEA;IACI,oFAAoF;IACpF,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,iFAAiF;IACjF,0BAA0B;IAC1B,kBAAkB;IAClB,oDAAoD;IACpD,WAAW;AACf;;AAEA;IACI;QACI,wBAAwB;IAC5B;;IAEA;QACI,2BAA2B;IAC/B;AACJ;;AAEA;CACC;EACC,2BAA2B;CAC5B;CACA;EACC,6BAA6B;CAC9B;CACA;EACC,2BAA2B;CAC5B;AACD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,yBAAyB;IACzB,oBAAoB;IACpB,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,UAAU;AACd;;;AAGA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,SAAS;IACT,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,qBAAqB;IACrB,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,eAAe;IACf,kBAAa;IAAb,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,UAAU;IACV,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,wBAAwB;IACxB,eAAe;IACf,4BAA4B;IAC5B,mBAAmB;IACnB,yBAAyB;IACzB,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,wBAAwB;IACxB,eAAe;IACf,4BAA4B;IAC5B,mBAAmB;IACnB,yBAAyB;IACzB,WAAW;IACX,eAAe;IACf,mCAAmC;AACvC;;AAEA;;;EAGE;;AAEF;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,QAAQ;IACR,cAAc;IACd,WAAW;IACX,qBAAqB;IACrB,4BAA4B;IAC5B,kCAAkC;AACtC;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,gBAAgB;IAChB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,cAAc;IACd,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,UAAU;IACV,YAAY;IACZ,oCAAoC;AACxC;;AAEA;;;EAGE;AACF;IACI,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,WAAW;IACX,OAAO;AACX;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,MAAM;IACN,8BAA8B;IAC9B,sCAAsC;AAC1C;;AAEA;IACI,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,6BAA6B;IAC7B,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,+BAA+B;IAC/B,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,UAAU;IACV,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;AACX;;AAEA;IACI;QACI,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,gBAAgB;QAChB,SAAS;IACb;AACJ;;AAEA;;IAEI;QACI,gBAAgB;IACpB;;IAEA;QACI,aAAa;QACb,UAAU;IACd;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,SAAS;IACb;AACJ;;AAEA;IACI;QACI,UAAU;QACV,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,uBAAuB;IAC3B;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,0BAA0B;QAC1B,iBAAiB;QACjB,cAAc;IAClB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,sBAAsB;QACtB,SAAS;QACT,SAAS;IACb;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,WAAW;QACX,wBAAmB;QAAnB,mBAAmB;QACnB,mBAAmB;QACnB,0BAA0B;IAC9B;;IAEA;QACI,cAAc;QACd,0BAA0B;IAC9B;;IAEA;QACI,eAAe;QACf,gBAAgB;QAChB,0BAA0B;IAC9B;;IAEA;QACI,gBAAgB;QAChB,SAAS;IACb;;IAEA;QACI,kBAAkB;QAClB,SAAS;IACb;AACJ;;AAEA;IACI;QACI,oBAAoB;IACxB;AACJ;;AAEA;IACI;QACI,gBAAgB;IACpB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,UAAU;QACV,QAAQ;IACZ;;AAEJ;;AAEA;IACI;QACI,SAAS;IACb;;IAEA;QACI,aAAa;QACb,cAAc;IAClB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,YAAY;QACZ,OAAO;IACX;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,kBAAkB;IACtB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');\r\n\r\na:hover{\r\n    color: white;\r\n}\r\n\r\n.container{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90vh;\r\n    background-color: rgb(8, 12, 31);\r\n    color: white;\r\n}\r\n\r\n.container.home{\r\n    position: relative;\r\n    top: 15vh;\r\n}\r\n\r\n.container.education, .container.projects, .container.about{\r\n    background-color: rgb(8, 12, 31);\r\n    color: white;\r\n}\r\n\r\n.projects{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    position: relative;\r\n    top: 15vh;\r\n    height: 140vh;\r\n    color: white;\r\n}\r\n\r\n.buttons{\r\n    position: relative;\r\n    left: 50vw;\r\n    width: 25%;\r\n    display: grid;\r\n    grid-gap: 10px;\r\n    opacity: 1;\r\n    transition: opacity 1.5s ease-in-out .8s;\r\n}\r\n\r\n.education-container{\r\n    height: 90vh !important;\r\n    margin-top: 25vh;\r\n}\r\n\r\n.about-container{\r\n    height: 90vh !important;\r\n}\r\n\r\n.education-li{\r\n    padding-top: 10vh;\r\n    display: block;\r\n    text-align: center !important;\r\n    font-size: 2rem;\r\n}\r\n\r\n.spaceholder{\r\n    display: inline-block;\r\n    width: 30px;\r\n}\r\n\r\n.wave{\r\n    position: absolute;\r\n    top: 1.2vh;\r\n    animation: wave_animation 2s ease-in-out infinite;\r\n}\r\n\r\n@keyframes wave_animation {\r\n    0%,100% {\r\n        transform: rotate(15deg);\r\n    }\r\n\r\n    50% {\r\n        transform: rotate(-10deg);\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 1400px) {\r\n    .content{\r\n        width: 80vw;\r\n    }\r\n}\r\n\r\n.content{\r\n    position: absolute;\r\n    height: 70vh;\r\n    width: 100vw;\r\n    background-color: transparent;\r\n    padding: 15px 15px 15px 15px;\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n    padding-bottom: 25px;\r\n}\r\n\r\np{\r\n    text-align: center;\r\n    font-size: 20px;\r\n    margin: 0 10px 10px 10px;\r\n}\r\n\r\nbody{\r\n    overflow-x: hidden;\r\n}\r\n\r\n.top-page-content{\r\n    margin-left: 15vw;\r\n    margin-right: 15vw;\r\n    cursor:default;\r\n    display: flex;\r\n}\r\n\r\n.robo{\r\n    color: #01bf71;\r\n    font-family: 'VT323', monospace;\r\n    font-size: 1.5rem;\r\n    text-align: left;\r\n    padding-bottom: 2.5rem;\r\n}\r\n\r\n.title{\r\n    text-align: left;\r\n    padding-bottom: 2rem;\r\n    text-transform: uppercase;\r\n    padding-left: .5rem;\r\n    font-size: 5rem;\r\n}\r\n\r\n.text{\r\n    text-align: left;\r\n}\r\n\r\n.rainbow_text_animated, .rainbow_text_animated:hover {\r\n    background: linear-gradient(45deg, #6666ff, #0099ff , #00e1ff, #ff3399, #6666ff);\r\n    -webkit-background-clip: text;\r\n    background-clip: text;\r\n    color: transparent;\r\n    animation: rainbow_animation 6s ease-in-out infinite;\r\n    background-size: 400% 100%;\r\n    cursor: default;\r\n}\r\n\r\n.submit-button:hover{\r\n    cursor: pointer;\r\n    background: linear-gradient(45deg, white, white , #00e1ff, #ff3399, #6666ff);\r\n    animation: rainbow_animation 6s ease-in-out infinite;\r\n    background-size: 400% 100%\r\n}\r\n\r\n.top-page-image-div{\r\n    /*background: linear-gradient(45deg, #6666ff, #0099ff , #00e1ff, #ff3399, #6666ff);*/\r\n    position: relative;\r\n    left: 15vw;\r\n}\r\n\r\n.top-page-image{\r\n    position: relative;\r\n    height: auto;\r\n    width: 80%;\r\n    left: 10%;\r\n    border-radius: 0;\r\n}\r\n\r\n.background-outline{\r\n    width: 268px;\r\n    height: 254px;\r\n    background: linear-gradient(-45deg, #6666ff, #0099ff , #00e1ff, #ff3399, #6666ff);\r\n    background-size: 400% 400%;\r\n    color: transparent;\r\n    animation: outline_animation 6s ease-in-out infinite;\r\n    left: 15rem;\r\n}\r\n\r\n@keyframes rainbow_animation {\r\n    0%,100% {\r\n        background-position: 0 0;\r\n    }\r\n\r\n    50% {\r\n        background-position: 100% 0;\r\n    }\r\n}\r\n\r\n@keyframes outline_animation{\r\n\t0% {\r\n\t\tbackground-position: 0% 50%;\r\n\t}\r\n\t50% {\r\n\t\tbackground-position: 100% 50%;\r\n\t}\r\n\t100% {\r\n\t\tbackground-position: 0% 50%;\r\n\t}\r\n}\r\n\r\n.technology-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-top: 15vh;\r\n    cursor: default;\r\n    justify-content: center;\r\n}\r\n\r\n.technology-card{\r\n    width: 15vw;\r\n    height: min(15vh, 15vw);\r\n    background-color: #04060F;\r\n    display: inline-flex;\r\n    justify-content: center;\r\n    margin-right: 17px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.technology-image{\r\n    width: 100px;\r\n    height: auto;\r\n}\r\n\r\n.precentage-circle{\r\n    margin-right: 15px;\r\n}\r\n\r\n.progress-precentage{\r\n    position: relative;\r\n    left: -50%;\r\n    top: -15px;\r\n}\r\n\r\n\r\nul{\r\n    list-style-type: none;\r\n    padding-left:   5vw;\r\n    padding-right: 5vw;\r\n    padding-top: 5rem;\r\n}\r\n\r\nli{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\nh1, ul, li{\r\n    position: relative;\r\n}\r\n\r\nli > h2, li > p{\r\n    text-align: left;\r\n}\r\n\r\n.education-list{\r\n    width: 60vw;\r\n}\r\n\r\n.education-filler-img{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.graduation-hat{\r\n    position: relative;\r\n    font-size: 15rem;\r\n    left: 5vw;\r\n    top: 10vh;\r\n}\r\n\r\n.sidebar-ul{\r\n    position: relative;\r\n    top: 15vh;\r\n    left: 35vw;\r\n}\r\n\r\n#contact{\r\n    overflow: hidden;\r\n}\r\n\r\n#contact-form{\r\n    position: relative;\r\n    left: 16.5vw;\r\n}\r\n\r\n#contact-form label{\r\n    padding: 0 15px 0 15px;\r\n}\r\n\r\n#contact-form input, textarea{\r\n    width: 65vw;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#contact-form textarea{\r\n    resize: none;\r\n    height: 20vh;\r\n}\r\n\r\n.error-message{\r\n    color: #d00;\r\n    width: 65vw;\r\n    text-align: center;\r\n}\r\n\r\n.success-message{\r\n    display: none;\r\n    color: rgb(0, 221, 111);\r\n    width: 65vw;\r\n    text-align: center;\r\n}\r\n\r\n.prevent-scroll{\r\n    overflow: hidden;\r\n}\r\n\r\n.card-container{\r\n    position: relative;\r\n    width:80vw;\r\n    left: 9.5vw;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    margin: 15rem 0;\r\n    row-gap: 25px;\r\n    align-content: flex-end;\r\n    justify-content: center;\r\n    padding: 0 25vw 0 25vw;\r\n}\r\n\r\n.card-container li{\r\n    left: -25vw;\r\n    top: -20vh;\r\n    padding: 0 15px;\r\n    display: grid;\r\n}\r\n\r\n.project-card{\r\n    width: 75vw;\r\n    height: min(50vw, 300px);\r\n    margin: 0 0 0 0;\r\n    padding: 20px 20px 20px 20px;\r\n    border-radius: 15px;\r\n    background-color: #050511;\r\n    color:black;\r\n    cursor: pointer;\r\n    position: relative;\r\n    top: -2vh;\r\n    left: -1.5vw;\r\n}\r\n\r\n.project-card-no-hover{\r\n    width: 75vw;\r\n    height: min(50vw, 300px);\r\n    margin: 0 0 0 0;\r\n    padding: 20px 20px 20px 20px;\r\n    border-radius: 15px;\r\n    background-color: #050511;\r\n    color:black;\r\n    cursor: pointer;\r\n    transition: height 1.5s ease-in-out;\r\n}\r\n\r\n/*.project-card-no-hover:hover{\r\n    height: min(100vw, 600px);\r\n    transition: 1.5s ease-in-out;\r\n}*/\r\n\r\n.card-link{\r\n    position: absolute;\r\n    width: 70vw;\r\n    left: 1vw;\r\n    top: 0vh;\r\n    display: block;\r\n    color:white;\r\n    text-decoration: none;\r\n    padding: 40px 40px 40px 40px;\r\n    transition: width 1.5s ease-in-out;\r\n}\r\n\r\n.card-title{\r\n    font-size: 1.5rem;\r\n    padding-left: 1rem;\r\n}\r\n\r\n.card-desc{\r\n    font-size: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n.card-techstack{\r\n    font-weight: 800;\r\n    font-style: italic;\r\n    text-align: right;\r\n}\r\n\r\n.card-date{\r\n    position: absolute;\r\n    left: 65vw;\r\n    top: 2vh;\r\n    font-size: .8rem;\r\n}\r\n\r\n.card-progress{\r\n    position: relative;\r\n    top: 17vh;\r\n    font-size: .8rem;\r\n    width: 50%;\r\n    left: 2.5vw;\r\n}\r\n\r\n.notation {\r\n    position: relative;\r\n    left: 2.5vw;\r\n    width: 25%;\r\n    top: 18vh;\r\n    display: flex;\r\n}\r\n\r\n.notation p{\r\n    color: white;\r\n    font-size: 1rem;\r\n    display: inherit;\r\n    text-shadow: 3px black;\r\n}\r\n\r\n.notation p span{\r\n    position: relative;\r\n    top: 5px;\r\n    left: -5px;\r\n    display: block;\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.loader{\r\n    position: relative;\r\n    width: 15vw;\r\n    top: -5vh;\r\n    background-color: transparent !important;\r\n}\r\n\r\n.project-card-hover{\r\n    display: none;\r\n    position: relative;\r\n    width: 40vw;\r\n    height: auto;\r\n    top: 20vh;\r\n    left: 15vw;\r\n    color: white;\r\n    transition: top 1.5s ease-in-out .8s;\r\n}\r\n\r\n/*.project-card-no-hover:hover .project-card-hover{\r\n    display: block;\r\n    transition: 2s ease-in-out;\r\n}*/\r\n.empty{\r\n    position: relative;\r\n    top: 20vh;\r\n    color: white;\r\n    width: 25vw;\r\n    left: 0;\r\n}\r\n\r\n.card-image{\r\n    position: relative;\r\n    width: 85%;\r\n    height: auto;\r\n    top: 0;\r\n    transform: translateY(-500deg);\r\n    transition: transfrom 1.5s ease-in-out;\r\n}\r\n\r\n.project-card-no-hover:hover .card-image{\r\n    transform: translateY(0deg);\r\n    transition: 1.5s ease-in-out;\r\n}\r\n\r\n.footer{\r\n    top: 30vh;\r\n    position: relative;\r\n    width: 100vw;\r\n    height: 20vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-left: 10%;\r\n}\r\n\r\n.link-footer{\r\n    font-size: 1rem;\r\n    text-align: left;\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.link-footer:focus{\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.link-footer:visited{\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.copyright-footer{\r\n    font-size: 1rem;\r\n    text-align: left;\r\n    margin-left: 5%;\r\n}\r\n\r\n.link-footer{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-content: center;\r\n}\r\n\r\n.linkedin-icon{\r\n    display: absolute;\r\n}\r\n\r\n.socials{\r\n    display: flex;\r\n    width: 75%;\r\n    justify-content: space-around;\r\n    text-align: right;\r\n}\r\n\r\n.sidebar-div{\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 10vh;\r\n    left: -100px;\r\n    background-color: rgb(4, 6, 15);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    z-index: 0;\r\n}\r\n\r\n.sidebar-div .top-links{\r\n    font-size: 1rem;\r\n    padding-right: 5vw;\r\n}\r\n\r\n.progressMainWrapper{\r\n    background-color: #0f0f20;\r\n    height: 15px;\r\n    position: relative;\r\n    bottom: 0;\r\n    left: -97vw;\r\n    z-index: 1;\r\n    width:100vw;\r\n}\r\n\r\n.progressMainStyle{\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n@media only screen and (max-width: 1470px) {\r\n    .top-page-image-div{\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1300px) {\r\n    .progress-precentage{\r\n        display: none;\r\n    }\r\n    \r\n    .precentage-circle{\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1064px) {\r\n    .graduation-hat{\r\n        font-size: 15rem;\r\n        top: 15vh;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 960px){\r\n\r\n    #contact{\r\n        margin-top: 60vh;\r\n    }\r\n\r\n    .buttons{\r\n        display: flex;\r\n        left: 45vw;\r\n    }\r\n\r\n    .empty{\r\n        font-size: .8rem;\r\n    }\r\n\r\n    .notation p {\r\n        font-size: .8rem;\r\n    }\r\n\r\n    .contact-title{\r\n        left: 4vw;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 800px){\r\n    .technology-image{\r\n        width: 75%;\r\n        height: auto;\r\n    }\r\n\r\n    .project-card-no-hover{\r\n        width: 95vw;\r\n        height: 40vh !important;\r\n    }\r\n\r\n    .card-link{\r\n        width: 95vw;\r\n    }\r\n\r\n    .card-container li{\r\n        left: -36.5vw;\r\n    }\r\n\r\n    .card-container{\r\n        grid-template-columns: 1fr;\r\n        overflow: visible;\r\n        margin: 2rem 0;\r\n    }\r\n\r\n    .project-card-no-hover{\r\n        height: 35vh;\r\n    }\r\n\r\n    .notation {\r\n        flex-direction: column;\r\n        width:45%;\r\n        top: 15vh;\r\n    }\r\n\r\n    .buttons{\r\n        width: 100%;\r\n    }\r\n\r\n    .card-progress {\r\n        display: none;\r\n    }\r\n\r\n    .card-container li{\r\n        padding-bottom: 0;\r\n    }\r\n\r\n    .project-card{\r\n        width: 75vw;\r\n        height: fit-content;\r\n        border-radius: 15px;\r\n        transition: 1s ease-in-out;\r\n    }\r\n\r\n    .top-page-content{\r\n        margin-left: 0;\r\n        transition: 1s ease-in-out;\r\n    }\r\n\r\n    ul{\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n        transition: 1s ease-in-out;\r\n    }\r\n\r\n    .graduation-hat{\r\n        font-size: 10rem;\r\n        top: 20vh;\r\n    }\r\n\r\n    .card-desc{\r\n        position: relative;\r\n        top: -2vh;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 765px) {\r\n    .favicon-header{\r\n        left: 5vw !important;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 625px){\r\n    .buttons a {\r\n        font-size: .8rem;\r\n    }\r\n\r\n    .notation{\r\n        display: none;\r\n    }\r\n\r\n    .empty{\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 600px){\r\n    .buttons{\r\n        left: -1vw;\r\n        top: 3vh;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (max-width: 500px){\r\n    .card-container{\r\n        left: 7vw;\r\n    }\r\n    \r\n    .socials{\r\n        display: grid;\r\n        grid-gap: 1rem;\r\n    }\r\n\r\n    .graduation-hat{\r\n        display: none;\r\n    }\r\n\r\n    .card-link{\r\n        left: -5vw;\r\n    }\r\n\r\n    .education-list{\r\n        width: 100vw;\r\n        left: 0;\r\n    }\r\n\r\n    .education-li{\r\n        display: flex;\r\n        flex-direction: column;\r\n        text-align: center;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_about_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about */ "./src/components/about/about.js");
/* harmony import */ var _components_contact_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact */ "./src/components/contact/contact.js");
/* harmony import */ var _components_education_education__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/education/education */ "./src/components/education/education.js");
/* harmony import */ var _components_home_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home */ "./src/components/home/home.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar */ "./src/components/navbar/index.js");
/* harmony import */ var _components_projects_projects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/projects/projects */ "./src/components/projects/projects.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "D:\\Projects\\portfolio-react\\src\\App.js",
    _s = __webpack_require__.$Refresh$.signature();













function App() {
  _s();

  const [isOpen, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("main", {
    id: "home",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
      isOpen: isOpen,
      setOpen: setOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_home_home__WEBPACK_IMPORTED_MODULE_7__["Home"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_projects_projects__WEBPACK_IMPORTED_MODULE_9__["Projects"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_education_education__WEBPACK_IMPORTED_MODULE_6__["Education"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_contact_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }, this);
}

_s(App, "WPi2qa4HrijmrT7XyqmH7MkbZuo=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Data.js":
/*!*********************!*\
  !*** ./src/Data.js ***!
  \*********************/
/*! exports provided: links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "links", function() { return links; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const links = [
/*{
    id:1,
    text:'about',
    url:'#about'
},*/
{
  id: 1,
  text: 'projects',
  url: '#projects'
}, {
  id: 2,
  text: 'education',
  url: '#education'
}, {
  id: 3,
  text: 'contact',
  url: '#contact'
}];

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/about/about.js":
/*!***************************************!*\
  !*** ./src/components/about/about.js ***!
  \***************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ "./src/components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "D:\\Projects\\portfolio-react\\src\\components\\about\\about.js",
    _s = __webpack_require__.$Refresh$.signature();





const About = () => {
  _s();

  const [scrollPosition, setScrollPosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  var isActive = false;

  if (scrollPosition >= 860 && scrollPosition < 1720) {
    isActive = true;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: `container about about-container ${isActive ? "container-focus" : ""}`,
    id: "about",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
      bottom: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
          children: "This is the about section, that has to be filled up with some interesting text and maybe some fascinating data."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, undefined);
};

_s(About, "Q2iK3kJoTBUHGJF6VgTmVb/ctE4=");

_c = About;

var _c;

__webpack_require__.$Refresh$.register(_c, "About");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/contact/contact.js":
/*!*******************************************!*\
  !*** ./src/components/contact/contact.js ***!
  \*******************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/es/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.css */ "./src/components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons */ "./node_modules/react-icons/lib/esm/index.js");
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/gr */ "./node_modules/react-icons/gr/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "D:\\Projects\\portfolio-react\\src\\components\\contact\\contact.js",
    _s = __webpack_require__.$Refresh$.signature();










const Contact = () => {
  _s();

  const [scrollPosition, setScrollPosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const form = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])();

  const sendEmail = e => {
    emailjs_com__WEBPACK_IMPORTED_MODULE_2__["default"].sendForm('service_k6vwh6a', 'template_er8c0rg', form.current, 'user_UnRZIZUNeWGnLe12QfBTC').then(result => {
      console.log(result.text);
      form.current.reset();
      document.getElementById('success-message').style.display = "block";
    }, error => {
      console.log(error.text);
    });
  };

  var isActive = false;

  if (scrollPosition >= 3430) {
    isActive = true;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: `container contact ${isActive ? "container-focus prevent-scroll" : ""}`,
    id: "contact",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
      bottom: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "contact-box content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
          className: "contact-title",
          children: "Contact Me \u2709\uFE0F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
          id: "contact-form",
          ref: form,
          onSubmit: handleSubmit(sendEmail),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
            type: "text",
            name: "user_name",
            placeholder: "Name",
            ...register("user_name", {
              required: true
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, undefined), errors.user_name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: "error-message",
            children: "Please type in your name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 46
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
            type: "email",
            name: "user_email",
            placeholder: "Email",
            ...register("user_email", {
              required: true
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, undefined), errors.user_email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: "error-message",
            children: "Please type in your email address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 47
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("textarea", {
            name: "message",
            placeholder: "Message",
            ...register("message", {
              required: true
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, undefined), errors.message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: "error-message",
            children: "Please type in your message"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 44
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
            type: "submit",
            value: "Send",
            className: "submit-button"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            id: "success-message",
            className: "success-message",
            children: "Your message has been sent! I'll get back to you as soon as possible."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 26
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
      bottom: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "footer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: "copyright-footer",
          children: [" \xA92021", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 64
          }, undefined), "David Koppany"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "socials",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_icons__WEBPACK_IMPORTED_MODULE_5__["IconContext"].Provider, {
            value: {
              size: '1.2em',
              className: "github-icon"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
              href: "https://www.github.com/kdavid96",
              target: "_blank",
              className: "link-footer",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_icons_gr__WEBPACK_IMPORTED_MODULE_6__["GrGithub"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 111
              }, undefined), " GitHub"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_icons__WEBPACK_IMPORTED_MODULE_5__["IconContext"].Provider, {
            value: {
              size: '1.2em',
              className: "linkedin-icon"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
              href: "https://www.linkedin.com/in/d%C3%A1vid-kopp%C3%A1ny-580449205/",
              target: "_blank",
              className: "link-footer",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_icons_gr__WEBPACK_IMPORTED_MODULE_6__["GrLinkedin"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 142
              }, undefined), "LinkedIn"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, undefined);
};

_s(Contact, "kaGJZqFNYou4cLqZveOrZV0gltk=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"]];
});

_c = Contact;

var _c;

__webpack_require__.$Refresh$.register(_c, "Contact");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/education/education.js":
/*!***********************************************!*\
  !*** ./src/components/education/education.js ***!
  \***********************************************/
/*! exports provided: Education */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Education", function() { return Education; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "D:\\Projects\\portfolio-react\\src\\components\\education\\education.js",
    _s = __webpack_require__.$Refresh$.signature();





const Education = () => {
  _s();

  const [scrollPosition, setScrollPosition] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  var isActive = false;

  if (scrollPosition >= 1720 && scrollPosition < 3333) {
    isActive = true;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: `container education education-container ${isActive ? "container-focus" : ""}`,
    id: "education",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
      bottom: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
          children: "Education"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "education-filler-img",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("ul", {
            className: "education-list",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
              className: "education-li",
              children: "University of Szeged"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
              className: "education-li",
              children: "Istvan Szechenyi High School"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

_s(Education, "Q2iK3kJoTBUHGJF6VgTmVb/ctE4=");

_c = Education;

var _c;

__webpack_require__.$Refresh$.register(_c, "Education");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/home/Technologylist.js":
/*!***********************************************!*\
  !*** ./src/components/home/Technologylist.js ***!
  \***********************************************/
/*! exports provided: TechnologyList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyList", function() { return TechnologyList; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const TechnologyList = [{
  id: 1,
  name: 'HTML',
  img: './img/html.webp'
}, {
  id: 2,
  name: 'CSS',
  img: './img/css.webp'
}, {
  id: 3,
  name: 'JavaScript',
  img: './img/js.png'
}, {
  id: 4,
  name: 'React',
  img: './img/react.png'
}];

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/home/home.js":
/*!*************************************!*\
  !*** ./src/components/home/home.js ***!
  \*************************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/CircularProgress */ "./node_modules/@mui/material/CircularProgress/index.js");
/* harmony import */ var _home_Technologylist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/Technologylist */ "./src/components/home/Technologylist.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.css */ "./src/components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "D:\\Projects\\portfolio-react\\src\\components\\home\\home.js",
    _s = __webpack_require__.$Refresh$.signature();







const Home = () => {
  _s();

  const [scrollPosition, setScrollPosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  var isActive = false;

  if (scrollPosition < 860) {
    isActive = true;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: `container home ${isActive ? "container-focus" : ""}`,
    id: "home",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
      bottom: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "top-page-content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "top-page-text",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              className: "robo",
              children: ["Hi ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
                className: "wave",
                children: "\uD83D\uDC4B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 52
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
                className: "spaceholder"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 84
              }, undefined), ", my name is"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
              className: "title",
              children: ["David ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                className: "rainbow_text_animated",
                href: "/",
                children: "Koppany"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 61
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              className: "text",
              children: "I'm a junior front-end developer based in Budapest, Hungary"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "top-page-image-div",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "background-outline",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                alt: "cv_image",
                className: "top-page-image",
                src: "./cv_image_big.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "technology-container",
          children: _home_Technologylist__WEBPACK_IMPORTED_MODULE_3__["TechnologyList"].map(data => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            className: "technology-card",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
              className: "technology-image",
              alt: data.name,
              src: data.img
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 105
            }, undefined)
          }, data.id, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 59
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, undefined);
};

_s(Home, "Q2iK3kJoTBUHGJF6VgTmVb/ctE4=");

_c = Home;

var _c;

__webpack_require__.$Refresh$.register(_c, "Home");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/navbar/Navbar.css":
/*!******************************************!*\
  !*** ./src/components/navbar/Navbar.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/navbar/Navbar.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/navbar/Navbar.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/navbar/Navbar.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/navbar/index.js ***!
  \****************************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Data */ "./src/Data.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar */ "./src/components/sidebar/index.js");
/* harmony import */ var _scroll_progress_ScrollProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scroll-progress/ScrollProgress */ "./src/components/scroll-progress/ScrollProgress.js");
/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hamburger-react */ "./node_modules/hamburger-react/dist-esm/index.js");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navbar.css */ "./src/components/navbar/Navbar.css");
/* harmony import */ var _Navbar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Navbar_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "D:\\Projects\\portfolio-react\\src\\components\\navbar\\index.js",
    _s = __webpack_require__.$Refresh$.signature();









const Navbar = ({
  isOpen,
  setOpen
}) => {
  _s();

  const [scrollPosition, setScrollPosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  var isActive = false;

  if (scrollPosition >= 60) {
    isActive = true;
  }

  const handleClick = e => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target) ? document.querySelector(target).offsetTop : 0;

    if (location == null) {
      window.scrollTo({
        left: 0,
        top: 0
      });
    } else {
      window.scrollTo({
        left: 0,
        top: location - 64
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("nav", {
    className: "navbar sticky",
    style: {
      backgroundColor: isActive ? 'rgba(4, 6, 15, 1)' : 'rgba(4, 6, 15, 1)'
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
      top: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
        href: "navLink",
        onClick: handleClick,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
          className: "favicon-header",
          src: "./favicon.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 53
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(hamburger_react__WEBPACK_IMPORTED_MODULE_5__["Sling"], {
        toggled: isOpen,
        onToggle: toggled => {
          setOpen(!isOpen);
        },
        rounded: true,
        color: "#fff",
        className: "hamburger"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "links",
        children: [_Data__WEBPACK_IMPORTED_MODULE_2__["links"].map(link => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            className: "navLink",
            href: link.url,
            onClick: handleClick,
            ref: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(),
            children: link.text
          }, link.id, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 24
          }, undefined);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_sidebar__WEBPACK_IMPORTED_MODULE_3__["Sidebar"], {
            isOpen: isOpen,
            setOpen: setOpen
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 20
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_scroll_progress_ScrollProgress__WEBPACK_IMPORTED_MODULE_4__["ScrollProgress"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }, undefined);
};

_s(Navbar, "Q2iK3kJoTBUHGJF6VgTmVb/ctE4=");

_c = Navbar;

var _c;

__webpack_require__.$Refresh$.register(_c, "Navbar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/project-card/ProjectCard.js":
/*!****************************************************!*\
  !*** ./src/components/project-card/ProjectCard.js ***!
  \****************************************************/
/*! exports provided: ProjectCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCard", function() { return ProjectCard; });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ "./node_modules/react-bootstrap/esm/ProgressBar.js");
/* harmony import */ var react_loadingg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loadingg */ "./node_modules/react-loadingg/lib/index.js");
/* harmony import */ var react_loadingg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loadingg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "D:\\Projects\\portfolio-react\\src\\components\\project-card\\ProjectCard.js",
    _s = __webpack_require__.$Refresh$.signature();









const ProjectCard = props => {
  _s();

  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [link, setLink] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('#404');
  const [languages, setLanguages] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [sum, setSum] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const url = 'https://api.github.com/repos/kdavid96/';
  const my_token = "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";
  var obj = [];
  var finalObj = [];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url + props.repo_name + '/languages', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${my_token}`
      }
    }).then(data => {
      var langSum = 0;
      obj = Object.entries(data.data);
      obj.forEach(([_, value]) => langSum += value);
      obj.forEach(([key, value]) => finalObj.push(key) && finalObj.push(value));
      setLanguages(finalObj);
      setSum(langSum);
    }).catch(error => console.error(error));
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url + props.repo_name, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${my_token}`
      }
    }).then(data => setLink(data.data.html_url)).catch(error => console.error(error));
    setLoading(false);
  }, []);

  const renderSwitch = (language, precentage, sum) => {
    switch (language) {
      case 'JavaScript':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            height: "400%"
          },
          min: 0,
          max: 100,
          variant: "danger",
          now: (precentage / sum * 100).toFixed(1)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 24
        }, undefined);

      case 'TypeScript':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            height: "400%"
          },
          min: 0,
          max: 100,
          variant: "success",
          now: (precentage / sum * 100).toFixed(1)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 24
        }, undefined);

      case 'HTML':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            height: "400%"
          },
          min: 0,
          max: 100,
          variant: "info",
          now: (precentage / sum * 100).toFixed(1)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 24
        }, undefined);

      case 'SCSS':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            height: "400%"
          },
          min: 0,
          max: 100,
          variant: "warning",
          now: (precentage / sum * 100).toFixed(1)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 24
        }, undefined);

      case 'CSS':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            height: "400%",
            backgroundColor: '#0E55FF !important'
          },
          min: 0,
          max: 100,
          now: (precentage / sum * 100).toFixed(1)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 24
        }, undefined);

      default:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            height: "400%"
          },
          min: 0,
          max: 100,
          variant: "info",
          now: 0
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 24
        }, undefined);
    }
  };

  const notationSwitch = (language, precentage, sum) => {
    switch (language) {
      case 'JavaScript':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
            style: {
              backgroundColor: '#DC3545'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 27
          }, undefined), "JavaScript ", (precentage / sum * 100).toFixed(2), "%"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 24
        }, undefined);

      case 'TypeScript':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
            style: {
              backgroundColor: '#198754'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 27
          }, undefined), "TypeScript ", (precentage / sum * 100).toFixed(2), "%"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 24
        }, undefined);

      case 'HTML':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
            style: {
              backgroundColor: '#0DCAF0'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 27
          }, undefined), "HTML ", (precentage / sum * 100).toFixed(2), "%"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 24
        }, undefined);

      case 'SCSS':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
            style: {
              backgroundColor: '#FFC107'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 27
          }, undefined), "SCSS ", (precentage / sum * 100).toFixed(2), "%"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 24
        }, undefined);

      case 'CSS':
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
            style: {
              backgroundColor: '#0E55FF'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 27
          }, undefined), "CSS ", (precentage / sum * 100).toFixed(2), "%"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 24
        }, undefined);

      default:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
            style: {
              backgroundColor: 'transparent'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 27
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 24
        }, undefined);
    }
  };

  const renderProgressBar = () => {
    let bar = [];

    for (let i = 0; i < languages.length; i += 2) {
      bar.push(renderSwitch(languages[i], languages[i + 1], sum));
    }

    return bar;
  };

  const renderNotations = () => {
    let bar = [];

    for (let i = 0; i < languages.length; i += 2) {
      bar.push(notationSwitch(languages[i], languages[i + 1], sum));
    }

    return bar;
  };

  if (isLoading || languages[1] == 'Infinity') {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "project-card-no-hover",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "project-card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
          className: "card-link",
          target: "_blank",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
            className: "card-title",
            children: props.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            className: "card-desc",
            children: props.desc
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            className: "card-techstack",
            children: props.techstack
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            className: "card-date",
            children: props.date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "buttons",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
              href: "liveversion",
              target: "_blank",
              children: "Live Version"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
              href: link,
              target: "_blank",
              children: "See Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "loader",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_loadingg__WEBPACK_IMPORTED_MODULE_4__["ThreeHorseLoading"], {
              size: 'large',
              style: {
                position: 'relative',
                left: '50%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 21
          }, undefined)]
        }, props.id, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "project-card-hover",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            children: "HOVER"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }, undefined);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "project-card-no-hover",
      style: {
        backgroundColor: '#04060f'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "project-card",
        style: {
          backgroundColor: 'transparent'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
          href: link,
          target: "_blank",
          className: "card-link",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
            className: "card-title",
            children: props.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            className: "card-desc",
            children: props.desc
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            className: "card-techstack",
            children: props.techstack
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            className: "card-date",
            children: props.date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "buttons",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
              href: "liveversion",
              target: "_blank",
              children: "Live Version"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
              href: link,
              target: "_blank",
              children: "See Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, undefined), languages.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
            min: 0,
            max: 100,
            className: "card-progress",
            children: renderProgressBar()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "notation",
            children: renderNotations()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 25
          }, undefined)]
        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "card-progress",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
              style: {
                height: "400%"
              },
              min: 0,
              max: 100,
              variant: "info",
              now: 0,
              label: `${sum}%`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
            className: "empty",
            children: "My GitHub repo is empty \u274C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 29
          }, undefined)]
        }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "project-card-hover",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
            className: "card-image",
            alt: "img",
            src: "./img/portfolio.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, undefined)]
      }, props.id, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, undefined)
    }, props.id, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, undefined);
  }
};

_s(ProjectCard, "ebugciEDh5W+gKiGSoRN24Pt2OE=");

_c = ProjectCard;

var _c;

__webpack_require__.$Refresh$.register(_c, "ProjectCard");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/projects/Projectlist.js":
/*!************************************************!*\
  !*** ./src/components/projects/Projectlist.js ***!
  \************************************************/
/*! exports provided: ProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectList", function() { return ProjectList; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const ProjectList = [{
  id: 1,
  name: 'Portfolio',
  desc: 'Portfolio website made with React to showcase my projects and skills.',
  techstack: 'React',
  date: '2021',
  img: './img/appointments.webp',
  repo_name: 'portfolio'
}, {
  id: 2,
  name: 'Communication',
  desc: 'Application for communication between doctors and clients.',
  techstack: 'Angular/Firebase',
  date: '2021',
  img: './img/appointments.webp',
  repo_name: 'webkert-communication'
}, {
  id: 3,
  name: 'Bookstore',
  desc: 'Library application for keeping an organized list of your books in one place.',
  techstack: 'React/Firebase',
  date: '2021',
  img: './img/bookstore.jpg',
  repo_name: 'bookstore'
}];

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/projects/projects.js":
/*!*********************************************!*\
  !*** ./src/components/projects/projects.js ***!
  \*********************************************/
/*! exports provided: Projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _project_card_ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-card/ProjectCard */ "./src/components/project-card/ProjectCard.js");
/* harmony import */ var _Projectlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projectlist */ "./src/components/projects/Projectlist.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.css */ "./src/components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "D:\\Projects\\portfolio-react\\src\\components\\projects\\projects.js",
    _s = __webpack_require__.$Refresh$.signature();







const Projects = () => {
  _s();

  const [scrollPosition, setScrollPosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  var isActive = false;

  if (scrollPosition >= 2575 && scrollPosition < 3350) {
    isActive = true;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: `projects ${isActive ? "container-focus" : ""}`,
    id: "projects",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
      bottom: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
          style: {
            marginTop: 100 + 'px'
          },
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
          className: "card-container",
          children: _Projectlist__WEBPACK_IMPORTED_MODULE_3__["ProjectList"].map(data => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_project_card_ProjectCard__WEBPACK_IMPORTED_MODULE_2__["ProjectCard"], {
              name: data.name,
              desc: data.desc,
              techstack: data.techstack,
              date: data.date,
              img: data.img,
              repo_name: data.repo_name,
              id: data.id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 70
            }, undefined)
          }, data.id, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 52
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

_s(Projects, "Q2iK3kJoTBUHGJF6VgTmVb/ctE4=");

_c = Projects;

var _c;

__webpack_require__.$Refresh$.register(_c, "Projects");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/scroll-progress/ScrollProgress.js":
/*!**********************************************************!*\
  !*** ./src/components/scroll-progress/ScrollProgress.js ***!
  \**********************************************************/
/*! exports provided: ScrollProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollProgress", function() { return ScrollProgress; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ "./src/components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "D:\\Projects\\portfolio-react\\src\\components\\scroll-progress\\ScrollProgress.js";



function ScrollProgress() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "progressMainWrapper",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "progressMainStyle"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
_c = ScrollProgress;

var _c;

__webpack_require__.$Refresh$.register(_c, "ScrollProgress");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/sidebar/Sidebar.js":
/*!*******************************************!*\
  !*** ./src/components/sidebar/Sidebar.js ***!
  \*******************************************/
/*! exports provided: SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContainer", function() { return SidebarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarWrapper", function() { return SidebarWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLink", function() { return SidebarLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBtnWrap", function() { return SideBtnWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarRoute", function() { return SidebarRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMenu", function() { return SidebarMenu; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





const SidebarContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].aside`
    position: absolute;
    left: -22rem;
    top: -5vh;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    transition: 0.3s ease-in-out;
    opacity: ${({
  isOpen
}) => isOpen ? '100%' : '0'};
    top: ${({
  isOpen
}) => isOpen ? '0' : '-100%'};
`;
const CloseIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTimes"])`
    color: #fff;
`;
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    position: absolute;
    top: -1.4rem;
    right: -19.9rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
const SidebarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    color: #fff;
    position: relative;
    width: 30%;
    height: 100%;
    top: -5vh;
    left: 86vw;
`;
const SidebarLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"])`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;
const SideBtnWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    display: flex;
    justify-content: center;
`;
const SidebarRoute = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
    border-radius: 50px;
    background: #01bf71;
    white-space: no-wrap;
    padding: 16px 64px;
    color: #0100606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;
    }
`;
const SidebarMenu = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul`
    position: absolute;
    width: 100vw;
    height: 100vw;
    left: 0vw !important;
    top: 5vh;
    background-color: rgb(8, 12, 31, 0.96);
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    left: 6.5rem;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`;

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/sidebar/index.js":
/*!*****************************************!*\
  !*** ./src/components/sidebar/index.js ***!
  \*****************************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar */ "./src/components/sidebar/Sidebar.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "D:\\Projects\\portfolio-react\\src\\components\\sidebar\\index.js";



const Sidebar = ({
  isOpen,
  setOpen
}) => {
  const openLink = () => {
    document.getElementById('sidebar').style.transform = 'translateY(-140%)';
    setOpen(!isOpen);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    id: "sidebar",
    className: "sidebar-div",
    style: {
      transform: isOpen ? 'translateY(30%)' : 'translateY(-140%)',
      transition: '.5s ease-in-out'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Sidebar__WEBPACK_IMPORTED_MODULE_1__["SidebarLink"], {
      className: "top-links",
      to: "about",
      onClick: openLink,
      children: "About"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Sidebar__WEBPACK_IMPORTED_MODULE_1__["SidebarLink"], {
      className: "top-links",
      to: "education",
      onClick: openLink,
      children: "Education"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Sidebar__WEBPACK_IMPORTED_MODULE_1__["SidebarLink"], {
      className: "top-links",
      to: "projects",
      onClick: openLink,
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Sidebar__WEBPACK_IMPORTED_MODULE_1__["SidebarLink"], {
      className: "top-links",
      to: "contact",
      onClick: openLink,
      children: "Contact"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};
_c = Sidebar;

var _c;

__webpack_require__.$Refresh$.register(_c, "Sidebar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/style.css":
/*!**********************************!*\
  !*** ./src/components/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/style.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/style.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "D:\\Projects\\portfolio-react\\src\\index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_3__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Projects\portfolio-react\node_modules\webpack\hot\dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! D:\Projects\portfolio-react\node_modules\@pmmmwh\react-refresh-webpack-plugin\client\ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! D:\Projects\portfolio-react\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! D:\Projects\portfolio-react\src\index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map