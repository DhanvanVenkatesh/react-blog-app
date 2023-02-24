webpackHotUpdate("static\\development\\pages\\write.js",{

/***/ "./pages/write.jsx":
/*!*************************!*\
  !*** ./pages/write.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Write; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropbox_chooser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropbox-chooser */ "./node_modules/react-dropbox-chooser/dist/react-dropbox-chooser.js");
/* harmony import */ var react_dropbox_chooser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropbox_chooser__WEBPACK_IMPORTED_MODULE_3__);




var APP_KEY = "77hro5y7r2kdbdc";
function Write(_ref) {
  var user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      text = _useState6[0],
      setText = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      url = _useState8[0],
      setUrl = _useState8[1];

  function handleSuccess(files) {
    setUrl(files[0].thumbnailLink);
    console.log(url);
  }

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var reqData = {
      title: title,
      description: description,
      text: text.replace(/\n/g, "<br />"),
      user: user
    };
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/create-article", reqData).then(function (res) {
      swal("Article Submitted", "", "success");
      location.href = "/";
    }).catch(function (err) {
      return swal("Sorry", "Article name not unique", "error");
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "title"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "Title")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "browser-default",
    style: {
      height: "100%",
      width: "100%",
      padding: "10px",
      border: "2px #eee solid",
      borderRadius: "8px"
    },
    required: true,
    id: "title",
    type: "text",
    placeholder: "Give a suitable title ...",
    onChange: function onChange(e) {
      return setTitle(e.target.value.trim());
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      marginTop: "1em"
    },
    htmlFor: "description"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "Description")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "browser-default",
    style: {
      height: "100%",
      width: "100%",
      padding: "10px",
      border: "2px #eee solid",
      borderRadius: "8px"
    },
    required: true,
    id: "description",
    type: "text",
    placeholder: "Write a suitable description in one or two sentences ...",
    onChange: function onChange(e) {
      return setDescription(e.target.value.trim());
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      marginTop: "1em"
    },
    htmlFor: "article"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "Article")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    rows: "10",
    className: "browser-default",
    style: {
      height: "100%",
      width: "100%",
      padding: "10px",
      border: "2px #eee solid",
      borderRadius: "8px"
    },
    required: true,
    id: "article",
    placeholder: "Write the Article Body ...",
    onChange: function onChange(e) {
      return setText(e.target.value.trim());
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      textAlign: "center"
    }
  }, "Upload Or Choose Files to DropBox"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "App"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      textAlign: "center"
    }
  }, "Upload Or Choose Files to DropBox"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dropbox_chooser__WEBPACK_IMPORTED_MODULE_3___default.a, {
    appKey: APP_KEY,
    success: handleSuccess,
    cancel: function cancel() {
      return console.log('closed');
    },
    multiselect: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dropbox"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: url,
    width: "200",
    height: "200",
    alt: ""
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    style: {
      marginTop: "1em",
      borderRadius: "8px"
    },
    type: "submit"
  }, "Submit"));
}


/***/ })

})
//# sourceMappingURL=write.js.c03794beac142e241a25.hot-update.js.map