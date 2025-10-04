"use strict";
exports.id = 1882;
exports.ids = [1882];
exports.modules = {

/***/ 1882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: ./src/common/customFunctions.js
var customFunctions = __webpack_require__(1901);
;// CONCATENATED MODULE: ./src/common/navbar.js

const handleDropdown = e => {
  const target = e.target;
  const parent = target.parentElement;

  if (parent.classList.contains("dropdown-submenu")) {
    e.stopPropagation();
    parent.classList.toggle("show");
    parent.querySelector(".dropdown-menu").classList.toggle("show");
  } else {
    (0,customFunctions/* getSiblings */.m7)(parent).filter(item => item.classList.contains("show")).map(item => {
      item.classList.remove("show");

      if (item.childNodes[0]) {
        item.childNodes[0].setAttribute("aria-expanded", false);
      }

      if (item.childNodes[1]) {
        item.childNodes[1].classList.remove("show");
      }
    });
    parent.classList.toggle("show");
    target.setAttribute("aria-expanded", true);
    parent.childNodes[1].classList.toggle("show");
  }
};
const handleMobileDropdown = e => {
  document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
};
const handleSearch = () => {
  let searchForm = document.querySelector(".navbar .search .search-form");
  document.querySelector(".navbar .search .icon").addEventListener("click", function () {
    searchForm.style.display = "block";
    (0,customFunctions/* fadeIn */.Ji)(searchForm, 200);
  });
  document.querySelector(".navbar .search .search-form .close").addEventListener("click", function () {
    searchForm.style.display = "none";
    (0,customFunctions/* fadeOut */.U6)(searchForm, 200);
  });
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Navbar/index.jsx
/* eslint-disable @next/next/no-img-element */








const Navbar = ({
  lr,
  nr,
  theme
}) => {
  external_react_default().useEffect(() => {
    handleSearch();
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    ref: nr,
    className: `navbar navbar-expand-lg change ${theme === "themeL" ? "light" : ""}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "logo",
          children: theme ? theme === "themeL" ? /*#__PURE__*/jsx_runtime_.jsx("img", {
            ref: lr,
            src: `${app/* darkLogo */.Q1}`,
            alt: "logo"
          }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
            ref: lr,
            src: `${app/* lightLogo */.E8}`,
            alt: "logo"
          }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
            ref: lr,
            src: `${app/* lightLogo */.E8}`,
            alt: "logo"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "navbar-toggler",
        type: "button",
        onClick: handleMobileDropdown,
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "icon-bar",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "fas fa-bars"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "navbar-nav ml-auto",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "nav-link",
                children: "Home"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "/about/about-dark",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "nav-link",
                children: "About"
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "nav-item dropdown",
            onClick: handleDropdown,
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "nav-link dropdown-toggle",
              "data-toggle": "dropdown",
              role: "button",
              "aria-haspopup": "true",
              "aria-expanded": "false",
              children: "Services"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "dropdown-menu",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: "/service-details/ai-agents",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "dropdown-item",
                  children: ["AI Agents ", /*#__PURE__*/jsx_runtime_.jsx("sup", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "hot badge badge-danger",
                      children: "NEW"
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: "/service-details/app-development",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "dropdown-item",
                  children: "App Development"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: "/service-details/business-softwares",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "dropdown-item",
                  children: "Business Softwares"
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "dropdown-submenu",
                onClick: handleDropdown,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "dropdown-item dropdown-toggle",
                  "data-toggle": "dropdown",
                  role: "button",
                  "aria-haspopup": "true",
                  "aria-expanded": "false",
                  children: "Cloud & Services"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "dropdown-menu",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/service-details/user-based-tally-on-cloud-dark",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "dropdown-item",
                      children: "User Based Tally On Cloud"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/service-details/tally-on-dedicated-cloud-server",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "dropdown-item",
                      children: "Tally on Dedicated Cloud Server"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/service-details/tally-on-cloud-with-admin-panel",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "dropdown-item",
                      children: "Tally on Cloud with Admin Panel"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/service-details/tally-implementation",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "dropdown-item",
                      children: "Tally Implementation"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/service-details/tally-support-amc",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "dropdown-item",
                      children: "Tally Support (AMC)"
                    })
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: "/service-details/digital-marketing",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "dropdown-item",
                  children: "Digital Marketing"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: "/service-details/dsc-and-legal-services",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "dropdown-item",
                  children: "DSC & Legal Services"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: "/service-details/web-application",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "dropdown-item",
                  children: "Web Application"
                })
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "/portfolio/portfolio-dark",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "nav-link",
                children: "Portfolio"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "/blogs/blogs-dark",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "nav-link",
                children: "Blogs"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "/contact/contact-dark",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "nav-link",
                children: "Contact"
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "search",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "icon pe-7s-search cursor-pointer"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "search-form text-center custom-font",
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
              initialValues: {
                search: ""
              },
              onSubmit: async values => {
                alert(JSON.stringify(values, null, 2));
                values.search = "";
              },
              children: ({
                errors,
                touched
              }) => /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Form, {
                children: /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Field, {
                  type: "text",
                  name: "search",
                  placeholder: "Search"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "close pe-7s-close cursor-pointer"
            })]
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const components_Navbar = (Navbar);

/***/ })

};
;