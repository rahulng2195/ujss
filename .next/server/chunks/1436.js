"use strict";
exports.id = 1436;
exports.ids = [1436];
exports.modules = {

/***/ 7775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addParlx = () => {
  window.addEventListener("scroll", () => {
    var scrolled = window.pageYOffset;

    if (document.querySelector(".fixed-slider .capt .parlx")) {
      document.querySelector(".fixed-slider .capt .parlx").style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
      document.querySelector(".fixed-slider .capt .parlx").style.opacity = 1 - scrolled / 600;
    }

    if (document.querySelector(".fixed-slider .caption")) {
      document.querySelector(".fixed-slider .caption").style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
      document.querySelector(".fixed-slider .caption").style.opacity = 1 - scrolled / 600;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addParlx);

/***/ }),

/***/ 9516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-css-tags */






const DarkTheme = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        rel: "stylesheet",
        href: "/css/dark.css"
      })
    }), children]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkTheme);

/***/ }),

/***/ 1436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _components_Split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1514);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9516);
/* harmony import */ var _common_addParlx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7775);
/* harmony import */ var _common_initIsotope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5032);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


/* eslint-disable @next/next/no-img-element */









const Demos = () => {
  const fixedHeader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
  const MainContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
  const [pageLoaded, setPageLoaded] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    setPageLoaded(true);

    if (pageLoaded) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          (0,_common_initIsotope__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
        }, 1000);
      });
      setTimeout(() => {
        (0,_common_initIsotope__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
      }, 1000);
    }
  }, [pageLoaded]);
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }

      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
  }, [fixedHeader, MainContent]);
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    (0,_common_addParlx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    document.querySelector("body").style.backgroundColor = "#181b21";
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "810933637",
      children: [".masonery.jsx-810933637 .item-img.jsx-810933637{position:relative;overflow:hidden;}", ".masonery.jsx-810933637 .gallery.jsx-810933637 .items.jsx-810933637{padding:0 40px;margin-top:80px;text-align:center;}", ".masonery.jsx-810933637 .gallery.jsx-810933637 .items.jsx-810933637 h6.jsx-810933637{margin-top:25px;font-size:17px;font-weight:400;font-family:\"Barlow Condensed\",sans-serif;text-align:center;text-transform:uppercase;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;}", ".masonery.jsx-810933637 .item-img.jsx-810933637:hover .tlinks.jsx-810933637{opacity:1;}", ".masonery.jsx-810933637 .item-img.jsx-810933637 .tlinks.jsx-810933637{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transition:all 0.4s;transition:all 0.4s;background:rgba(0,0,0,0.5);opacity:0;padding:0 40px;}", ".masonery.jsx-810933637 .item-img.jsx-810933637 .tag.jsx-810933637{position:absolute;top:15px;right:15px;padding:8px 20px;border-radius:5px;background:#ff0036;color:#fff;font-size:13px;}", ".masonery.jsx-810933637 .item-img.jsx-810933637 .tlinks.jsx-810933637 a.jsx-810933637{padding:14px 20px;border-radius:5px;background:#32363e;color:#fff;font-size:14px;font-weight:500;margin:5px 0;}", ".masonery.jsx-810933637 .item-img.jsx-810933637 .tlinks.jsx-810933637 a.jsx-810933637:last-of-type{background:#75dab4;color:#181b21;margin-left:5px;}", ".masonery.jsx-810933637 .item-img.jsx-810933637 .new.jsx-810933637{padding:10px 30px;background:#75dab4;position:absolute;top:0;left:-60px;width:200px;-webkit-transform:rotate(-30deg);-ms-transform:rotate(-30deg);transform:rotate(-30deg);font-size:13px;}"]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("header", {
      ref: fixedHeader,
      style: {
        backgroundImage: "url(/img/demos/bg.png)"
      },
      "data-overlay-dark": "4",
      className: "jsx-810933637" + " " + "works-header fixed-slider hfixd valign bg-img",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "jsx-810933637" + " " + "container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "jsx-810933637" + " " + "row justify-content-center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "jsx-810933637" + " " + "col-lg-9 col-md-11 static",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "jsx-810933637" + " " + "capt mt-50",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "parlx",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h2", {
                  className: "jsx-810933637" + " " + "custom-font",
                  children: "Creative Showcase Portfolio"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                  className: "jsx-810933637",
                  children: "Creative way to showcase your works at their absolute best."
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: "jsx-810933637" + " " + "bactxt custom-font valign",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                  style: {
                    color: "transparent"
                  },
                  className: "jsx-810933637" + " " + "full-width",
                  children: "avo"
                })
              })]
            })
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ref: MainContent,
      className: "jsx-810933637" + " " + "main-content",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("section", {
        className: "jsx-810933637" + " " + "masonery section-padding sub-bg",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "jsx-810933637" + " " + "container-fluid",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "jsx-810933637" + " " + "sec-head custom-font text-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_Split__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h3", {
                "data-splitting": true,
                className: "jsx-810933637" + " " + "wow words chars splitting",
                children: "Home Pages."
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
              className: "jsx-810933637" + " " + "tbg",
              children: "Home Pages"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "jsx-810933637" + " " + "row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "jsx-810933637" + " " + "gallery full-width",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items graphic",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/home/home1-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/home/home1-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/1.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Main Demo"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items graphic",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/home/home6-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/home/home6-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/n1.png",
                    alt: "image",
                    className: "jsx-810933637"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                    className: "jsx-810933637" + " " + "tag",
                    children: "New"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Creative Agency"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items web",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/home/home2-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/home/home2-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/2.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Creative Studio"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/home/home3-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/home/home3-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/3.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Business Startup"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/home/home4-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/home/home4-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/4.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "One Page Demo"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/home/home5-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/home/home5-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/5.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Freelancer"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/about/about-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/about/about-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/6.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "About Us"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/contact/contact-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/contact/contact-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/7.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Contact Us"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/blog/blog-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/blog/blog-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/18.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Blogs"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/blog-details/blog-details-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/blog-details/blog-details-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/19.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Post Details"
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/more.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })
                })
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("section", {
        style: {
          background: "#181b21"
        },
        className: "jsx-810933637" + " " + "masonery section-padding pb-70",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "jsx-810933637" + " " + "container-fluid",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "jsx-810933637" + " " + "sec-head custom-font text-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_Split__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h3", {
                "data-splitting": true,
                className: "jsx-810933637" + " " + "wow words chars splitting",
                children: "Portfolio."
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
              className: "jsx-810933637" + " " + "tbg",
              children: "Portfolio Showcase"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "jsx-810933637" + " " + "row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "jsx-810933637" + " " + "gallery full-width",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/showcase/showcase-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/showcase/showcase-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/12.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Full Screen"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/showcase2/showcase2-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/showcase2/showcase2-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/13.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Creative Carousel"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/showcase5/showcase5-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/showcase5/showcase5-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/17.png",
                    alt: "image",
                    className: "jsx-810933637"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "new",
                    children: "New"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Creative Carousel 2"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/showcase4/showcase4-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/showcase4/showcase4-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/15.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Columns Slider"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/showcase3/showcase3-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/showcase3/showcase3-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/14.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Radius Carousel"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/works/works-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/works/works-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/8.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Portfolio"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/works2/works2-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/works2/works2-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/9.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Masonry 3 Columns"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/works3/works3-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/works3/works3-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/10.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Masonry 2 Columns"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/works4/works4-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/works4/works4-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/11.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Pinterest List"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "jsx-810933637" + " " + "col-lg-4 col-md-6 items brand",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  "data-wow-delay": ".4s",
                  className: "jsx-810933637" + " " + "item-img wow fadeInUp",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                    className: "jsx-810933637" + " " + "tlinks valign",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "jsx-810933637" + " " + "full-width",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/project-details2/project-details2-dark",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Dark Version"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: "/project-details2/project-details2-light",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                          target: "_blank",
                          className: "jsx-810933637",
                          children: "Light Version"
                        })
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
                    src: "/img/demos/16.png",
                    alt: "image",
                    className: "jsx-810933637"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: "jsx-810933637" + " " + "cont",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h6", {
                    className: "jsx-810933637",
                    children: "Project Details"
                  })
                })]
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("footer", {
        className: "jsx-810933637" + " " + "footer-half sub-bg",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "jsx-810933637" + " " + "container",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "jsx-810933637" + " " + "copyrights text-center mt-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
              className: "jsx-810933637",
              children: ["\xA9 2022, Avo Template. Made with passion by", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                href: "#0",
                className: "jsx-810933637",
                children: "ThemesCamp"
              }), "."]
            })
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Demos);

/***/ })

};
;