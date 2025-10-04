"use strict";
exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 717:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_About_us1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8046);
/* harmony import */ var _components_Blogs_two_column_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8625);
/* harmony import */ var _components_Call_to_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6997);
/* harmony import */ var _components_Clients1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4141);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6308);
/* harmony import */ var _components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9241);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1882);
/* harmony import */ var _components_Numbers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6175);
/* harmony import */ var _components_Services1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3295);
/* harmony import */ var _components_Skills_circle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8972);
/* harmony import */ var _components_Video_with_testimonials__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(611);
/* harmony import */ var _components_Works1_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4289);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9516);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Works1_slider__WEBPACK_IMPORTED_MODULE_12__, _components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_6__]);
([_components_Works1_slider__WEBPACK_IMPORTED_MODULE_12__, _components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

















const Homepage1 = () => {
  const fixedSlider = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const MainContent = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const navbarRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const logoRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }

      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      nr: navbarRef,
      lr: logoRef
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Intro_with_slider1__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      sliderRef: fixedSlider
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      ref: MainContent,
      className: "main-content",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_About_us1__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Services1__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Numbers__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Works1_slider__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Video_with_testimonials__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Skills_circle__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        theme: "dark",
        subBG: true
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Clients1__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        theme: "dark"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Call_to_action__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        subBG: true
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage1);
});

/***/ })

};
;