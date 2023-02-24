webpackHotUpdate("static\\development\\pages\\write.js",{

/***/ "./node_modules/load-script/index.js":
/*!*******************************************!*\
  !*** ./node_modules/load-script/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}


/***/ }),

/***/ "./node_modules/react-dropbox-chooser/dist/react-dropbox-chooser.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-dropbox-chooser/dist/react-dropbox-chooser.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _loadScript = __webpack_require__(/*! load-script */ "./node_modules/load-script/index.js");

var _loadScript2 = _interopRequireDefault(_loadScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DROPBOX_SDK_URL = 'https://www.dropbox.com/static/api/2/dropins.js';
var SCRIPT_ID = 'dropboxjs';

var scriptLoadingStarted = false;

// read more
// https://www.dropbox.com/developers/chooser

var DropboxChooser = function (_Component) {
  _inherits(DropboxChooser, _Component);

  function DropboxChooser(props) {
    _classCallCheck(this, DropboxChooser);

    var _this = _possibleConstructorReturn(this, (DropboxChooser.__proto__ || Object.getPrototypeOf(DropboxChooser)).call(this, props));

    _this.onChoose = _this.onChoose.bind(_this);
    return _this;
  }

  _createClass(DropboxChooser, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.isDropboxReady() && !scriptLoadingStarted) {
        scriptLoadingStarted = true;
        (0, _loadScript2.default)(DROPBOX_SDK_URL, {
          attrs: {
            id: SCRIPT_ID,
            'data-app-key': this.props.appKey
          }
        });
      }
    }
  }, {
    key: 'isDropboxReady',
    value: function isDropboxReady() {
      return !!window.Dropbox;
    }
  }, {
    key: 'onChoose',
    value: function onChoose() {
      if (!this.isDropboxReady() || this.props.disabled) {
        return null;
      }

      var _props = this.props,
          success = _props.success,
          cancel = _props.cancel,
          linkType = _props.linkType,
          multiselect = _props.multiselect,
          extensions = _props.extensions;


      window.Dropbox.choose({
        success: success,
        cancel: cancel,
        linkType: linkType,
        multiselect: multiselect,
        extensions: extensions
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { onClick: this.onChoose },
        this.props.children ? this.props.children : _react2.default.createElement(
          'button',
          null,
          'Open dropbox chooser'
        )
      );
    }
  }]);

  return DropboxChooser;
}(_react.Component);

DropboxChooser.propTypes = {
  children: _propTypes2.default.node,
  appKey: _propTypes2.default.string.isRequired,
  success: _propTypes2.default.func.isRequired,
  cancel: _propTypes2.default.func,
  linkType: _propTypes2.default.oneOf(['preview', 'direct']),
  multiselect: _propTypes2.default.bool,
  extensions: _propTypes2.default.arrayOf(_propTypes2.default.string),
  disabled: _propTypes2.default.bool
};
DropboxChooser.defaultProps = {
  cancel: function cancel() {},
  linkType: 'preview',
  multiselect: false,
  disabled: false
};
exports.default = DropboxChooser;

/***/ }),

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
/* harmony import */ var react_dropbox_chooser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropbox-chooser */ "./node_modules/react-dropbox-chooser/dist/react-dropbox-chooser.js");
/* harmony import */ var react_dropbox_chooser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dropbox_chooser__WEBPACK_IMPORTED_MODULE_4__);




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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dropbox_chooser__WEBPACK_IMPORTED_MODULE_4___default.a, {
    appKey: APP_KEY,
    success: handleSuccess,
    cancel: function cancel() {
      return console.log('closed');
    },
    multiselect: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", null, "Upload or Choose Files"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
//# sourceMappingURL=write.js.69eec127be4b75c8619e.hot-update.js.map