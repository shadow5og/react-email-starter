"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "emails_stripe-welcome_tsx";
exports.ids = ["emails_stripe-welcome_tsx"];
exports.modules = {

/***/ "./emails/stripe-welcome.tsx":
/*!***********************************!*\
  !*** ./emails/stripe-welcome.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emails_stripe_welcome_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../emails/stripe-welcome.tsx */ \"../emails/stripe-welcome.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_emails_stripe_welcome_tsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lbWFpbHMvc3RyaXBlLXdlbGNvbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1EO0FBQ25ELGlFQUFlQSxrRUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWVtYWlsLWNsaWVudC8uL2VtYWlscy9zdHJpcGUtd2VsY29tZS50c3g/MDc4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbCBmcm9tICcuLi8uLi9lbWFpbHMvc3RyaXBlLXdlbGNvbWUudHN4JztcbmV4cG9ydCBkZWZhdWx0IE1haWw7Il0sIm5hbWVzIjpbIk1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./emails/stripe-welcome.tsx\n");

/***/ }),

/***/ "../emails/stripe-welcome.tsx":
/*!************************************!*\
  !*** ../emails/stripe-welcome.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StripeWelcomeEmail\": () => (/* binding */ StripeWelcomeEmail),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-email/components */ \"@react-email/components\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_email_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : \"\";\nconst StripeWelcomeEmail = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Preview, {\n                children: \"You're now ready to make live transactions with Stripe!\"\n            }, void 0, false, {\n                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Body, {\n                style: main,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                    style: container,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Section, {\n                        style: box,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                                src: `${baseUrl}/static/stripe-logo.png`,\n                                width: \"49\",\n                                height: \"21\",\n                                alt: \"Stripe\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Hr, {\n                                style: hr\n                            }, void 0, false, {\n                                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: \"Thanks for submitting your account information. You're now ready to make live transactions with Stripe!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: \"You can view your payments and a variety of other information about your account right from your dashboard.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                pX: 10,\n                                pY: 10,\n                                style: button,\n                                href: \"https://dashboard.stripe.com/login\",\n                                children: \"View your Stripe Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Hr, {\n                                style: hr\n                            }, void 0, false, {\n                                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: [\n                                    \"If you haven't finished your integration, you might find our\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        style: anchor,\n                                        href: \"https://stripe.com/docs\",\n                                        children: \"docs\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \",\n                                    \"handy.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: [\n                                    \"Once you're ready to start accepting payments, you'll just need to use your live\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        style: anchor,\n                                        href: \"https://dashboard.stripe.com/login?redirect=%2Fapikeys\",\n                                        children: \"API keys\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \",\n                                    \"instead of your test API keys. Your account can simultaneously be used for both test and live requests, so you can continue testing while accepting live payments. Check out our\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        style: anchor,\n                                        href: \"https://stripe.com/docs/dashboard\",\n                                        children: \"tutorial about account basics\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \".\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: [\n                                    \"Finally, we've put together a\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        style: anchor,\n                                        href: \"https://stripe.com/docs/checklist/website\",\n                                        children: \"quick checklist\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \",\n                                    \"to ensure your website conforms to card network standards.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: [\n                                    \"We'll be here to help you with any step along the way. You can find answers to most questions and get in touch with us on our\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        style: anchor,\n                                        href: \"https://support.stripe.com/\",\n                                        children: \"support site\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \".\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: \"— The Stripe team\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Hr, {\n                                style: hr\n                            }, void 0, false, {\n                                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: footer,\n                                children: \"Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bhunganemthimkulu/Documents/Code/Other Repos/My repos/react-email-starter/emails/stripe-welcome.tsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StripeWelcomeEmail);\nconst main = {\n    backgroundColor: \"#f6f9fc\",\n    fontFamily: '-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Ubuntu,sans-serif'\n};\nconst container = {\n    backgroundColor: \"#ffffff\",\n    margin: \"0 auto\",\n    padding: \"20px 0 48px\",\n    marginBottom: \"64px\"\n};\nconst box = {\n    padding: \"0 48px\"\n};\nconst hr = {\n    borderColor: \"#e6ebf1\",\n    margin: \"20px 0\"\n};\nconst paragraph = {\n    color: \"#525f7f\",\n    fontSize: \"16px\",\n    lineHeight: \"24px\",\n    textAlign: \"left\"\n};\nconst anchor = {\n    color: \"#556cd6\"\n};\nconst button = {\n    backgroundColor: \"#656ee8\",\n    borderRadius: \"5px\",\n    color: \"#fff\",\n    fontSize: \"16px\",\n    fontWeight: \"bold\",\n    textDecoration: \"none\",\n    textAlign: \"center\",\n    display: \"block\",\n    width: \"100%\"\n};\nconst footer = {\n    color: \"#8898aa\",\n    fontSize: \"12px\",\n    lineHeight: \"16px\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNiSSxpQkFBaUI7SUFDakJVLGNBQWM7SUFDZEosT0FBTztJQUNQQyxVQUFVO0lBQ1ZJLFlBQVk7SUFDWkMsZ0JBQWdCO0lBQ2hCSCxXQUFXO0lBQ1hJLFNBQVM7SUFDVHhCLE9BQU87QUFDVDtBQUVBLE1BQU1VLFNBQVM7SUFDYk8sT0FBTztJQUNQQyxVQUFVO0lBQ1ZDLFlBQVk7QUFDZCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWVtYWlsLWNsaWVudC8uLi9lbWFpbHMvc3RyaXBlLXdlbGNvbWUudHN4P2NjMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm9keSxcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIEhlYWQsXG4gIEhyLFxuICBIdG1sLFxuICBJbWcsXG4gIExpbmssXG4gIFByZXZpZXcsXG4gIFNlY3Rpb24sXG4gIFRleHQsXG59IGZyb20gJ0ByZWFjdC1lbWFpbC9jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LlZFUkNFTF9VUkxcbiAgPyBgaHR0cHM6Ly8ke3Byb2Nlc3MuZW52LlZFUkNFTF9VUkx9YFxuICA6ICcnO1xuXG5leHBvcnQgY29uc3QgU3RyaXBlV2VsY29tZUVtYWlsID0gKCkgPT4gKFxuICA8SHRtbD5cbiAgICA8SGVhZCAvPlxuICAgIDxQcmV2aWV3PllvdSdyZSBub3cgcmVhZHkgdG8gbWFrZSBsaXZlIHRyYW5zYWN0aW9ucyB3aXRoIFN0cmlwZSE8L1ByZXZpZXc+XG4gICAgPEJvZHkgc3R5bGU9e21haW59PlxuICAgICAgPENvbnRhaW5lciBzdHlsZT17Y29udGFpbmVyfT5cbiAgICAgICAgPFNlY3Rpb24gc3R5bGU9e2JveH0+XG4gICAgICAgICAgPEltZ1xuICAgICAgICAgICAgc3JjPXtgJHtiYXNlVXJsfS9zdGF0aWMvc3RyaXBlLWxvZ28ucG5nYH1cbiAgICAgICAgICAgIHdpZHRoPVwiNDlcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMjFcIlxuICAgICAgICAgICAgYWx0PVwiU3RyaXBlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxIciBzdHlsZT17aHJ9IC8+XG4gICAgICAgICAgPFRleHQgc3R5bGU9e3BhcmFncmFwaH0+XG4gICAgICAgICAgICBUaGFua3MgZm9yIHN1Ym1pdHRpbmcgeW91ciBhY2NvdW50IGluZm9ybWF0aW9uLiBZb3UncmUgbm93IHJlYWR5IHRvXG4gICAgICAgICAgICBtYWtlIGxpdmUgdHJhbnNhY3Rpb25zIHdpdGggU3RyaXBlIVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBzdHlsZT17cGFyYWdyYXBofT5cbiAgICAgICAgICAgIFlvdSBjYW4gdmlldyB5b3VyIHBheW1lbnRzIGFuZCBhIHZhcmlldHkgb2Ygb3RoZXIgaW5mb3JtYXRpb24gYWJvdXRcbiAgICAgICAgICAgIHlvdXIgYWNjb3VudCByaWdodCBmcm9tIHlvdXIgZGFzaGJvYXJkLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBwWD17MTB9XG4gICAgICAgICAgICBwWT17MTB9XG4gICAgICAgICAgICBzdHlsZT17YnV0dG9ufVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZGFzaGJvYXJkLnN0cmlwZS5jb20vbG9naW5cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpZXcgeW91ciBTdHJpcGUgRGFzaGJvYXJkXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEhyIHN0eWxlPXtocn0gLz5cbiAgICAgICAgICA8VGV4dCBzdHlsZT17cGFyYWdyYXBofT5cbiAgICAgICAgICAgIElmIHlvdSBoYXZlbid0IGZpbmlzaGVkIHlvdXIgaW50ZWdyYXRpb24sIHlvdSBtaWdodCBmaW5kIG91cnsnICd9XG4gICAgICAgICAgICA8TGluayBzdHlsZT17YW5jaG9yfSBocmVmPVwiaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3NcIj5cbiAgICAgICAgICAgICAgZG9jc1xuICAgICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgICBoYW5keS5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgc3R5bGU9e3BhcmFncmFwaH0+XG4gICAgICAgICAgICBPbmNlIHlvdSdyZSByZWFkeSB0byBzdGFydCBhY2NlcHRpbmcgcGF5bWVudHMsIHlvdSdsbCBqdXN0IG5lZWQgdG9cbiAgICAgICAgICAgIHVzZSB5b3VyIGxpdmV7JyAnfVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgc3R5bGU9e2FuY2hvcn1cbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZGFzaGJvYXJkLnN0cmlwZS5jb20vbG9naW4/cmVkaXJlY3Q9JTJGYXBpa2V5c1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFQSSBrZXlzXG4gICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgIGluc3RlYWQgb2YgeW91ciB0ZXN0IEFQSSBrZXlzLiBZb3VyIGFjY291bnQgY2FuIHNpbXVsdGFuZW91c2x5IGJlXG4gICAgICAgICAgICB1c2VkIGZvciBib3RoIHRlc3QgYW5kIGxpdmUgcmVxdWVzdHMsIHNvIHlvdSBjYW4gY29udGludWUgdGVzdGluZ1xuICAgICAgICAgICAgd2hpbGUgYWNjZXB0aW5nIGxpdmUgcGF5bWVudHMuIENoZWNrIG91dCBvdXJ7JyAnfVxuICAgICAgICAgICAgPExpbmsgc3R5bGU9e2FuY2hvcn0gaHJlZj1cImh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL2Rhc2hib2FyZFwiPlxuICAgICAgICAgICAgICB0dXRvcmlhbCBhYm91dCBhY2NvdW50IGJhc2ljc1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBzdHlsZT17cGFyYWdyYXBofT5cbiAgICAgICAgICAgIEZpbmFsbHksIHdlJ3ZlIHB1dCB0b2dldGhlciBheycgJ31cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHN0eWxlPXthbmNob3J9XG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0cmlwZS5jb20vZG9jcy9jaGVja2xpc3Qvd2Vic2l0ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHF1aWNrIGNoZWNrbGlzdFxuICAgICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgICB0byBlbnN1cmUgeW91ciB3ZWJzaXRlIGNvbmZvcm1zIHRvIGNhcmQgbmV0d29yayBzdGFuZGFyZHMuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtwYXJhZ3JhcGh9PlxuICAgICAgICAgICAgV2UnbGwgYmUgaGVyZSB0byBoZWxwIHlvdSB3aXRoIGFueSBzdGVwIGFsb25nIHRoZSB3YXkuIFlvdSBjYW4gZmluZFxuICAgICAgICAgICAgYW5zd2VycyB0byBtb3N0IHF1ZXN0aW9ucyBhbmQgZ2V0IGluIHRvdWNoIHdpdGggdXMgb24gb3VyeycgJ31cbiAgICAgICAgICAgIDxMaW5rIHN0eWxlPXthbmNob3J9IGhyZWY9XCJodHRwczovL3N1cHBvcnQuc3RyaXBlLmNvbS9cIj5cbiAgICAgICAgICAgICAgc3VwcG9ydCBzaXRlXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtwYXJhZ3JhcGh9PuKAlCBUaGUgU3RyaXBlIHRlYW08L1RleHQ+XG4gICAgICAgICAgPEhyIHN0eWxlPXtocn0gLz5cbiAgICAgICAgICA8VGV4dCBzdHlsZT17Zm9vdGVyfT5cbiAgICAgICAgICAgIFN0cmlwZSwgMzU0IE95c3RlciBQb2ludCBCbHZkLCBTb3V0aCBTYW4gRnJhbmNpc2NvLCBDQSA5NDA4MFxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb2R5PlxuICA8L0h0bWw+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdHJpcGVXZWxjb21lRW1haWw7XG5cbmNvbnN0IG1haW4gPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmNmY5ZmMnLFxuICBmb250RmFtaWx5OlxuICAgICctYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixVYnVudHUsc2Fucy1zZXJpZicsXG59O1xuXG5jb25zdCBjb250YWluZXIgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICBwYWRkaW5nOiAnMjBweCAwIDQ4cHgnLFxuICBtYXJnaW5Cb3R0b206ICc2NHB4Jyxcbn07XG5cbmNvbnN0IGJveCA9IHtcbiAgcGFkZGluZzogJzAgNDhweCcsXG59O1xuXG5jb25zdCBociA9IHtcbiAgYm9yZGVyQ29sb3I6ICcjZTZlYmYxJyxcbiAgbWFyZ2luOiAnMjBweCAwJyxcbn07XG5cbmNvbnN0IHBhcmFncmFwaCA9IHtcbiAgY29sb3I6ICcjNTI1ZjdmJyxcblxuICBmb250U2l6ZTogJzE2cHgnLFxuICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gIHRleHRBbGlnbjogJ2xlZnQnIGFzIGNvbnN0LFxufTtcblxuY29uc3QgYW5jaG9yID0ge1xuICBjb2xvcjogJyM1NTZjZDYnLFxufTtcblxuY29uc3QgYnV0dG9uID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjNjU2ZWU4JyxcbiAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgY29sb3I6ICcjZmZmJyxcbiAgZm9udFNpemU6ICcxNnB4JyxcbiAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInIGFzIGNvbnN0LFxuICBkaXNwbGF5OiAnYmxvY2snLFxuICB3aWR0aDogJzEwMCUnLFxufTtcblxuY29uc3QgZm9vdGVyID0ge1xuICBjb2xvcjogJyM4ODk4YWEnLFxuICBmb250U2l6ZTogJzEycHgnLFxuICBsaW5lSGVpZ2h0OiAnMTZweCcsXG59O1xuIl0sIm5hbWVzIjpbIkJvZHkiLCJCdXR0b24iLCJDb250YWluZXIiLCJIZWFkIiwiSHIiLCJIdG1sIiwiSW1nIiwiTGluayIsIlByZXZpZXciLCJTZWN0aW9uIiwiVGV4dCIsIlJlYWN0IiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJWRVJDRUxfVVJMIiwiU3RyaXBlV2VsY29tZUVtYWlsIiwic3R5bGUiLCJtYWluIiwiY29udGFpbmVyIiwiYm94Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJociIsInBhcmFncmFwaCIsInBYIiwicFkiLCJidXR0b24iLCJocmVmIiwiYW5jaG9yIiwiZm9vdGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udEZhbWlseSIsIm1hcmdpbiIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJDb2xvciIsImNvbG9yIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwiYm9yZGVyUmFkaXVzIiwiZm9udFdlaWdodCIsInRleHREZWNvcmF0aW9uIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../emails/stripe-welcome.tsx\n");

/***/ })

};
;