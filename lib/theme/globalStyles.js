"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

require("bootstrap/dist/css/bootstrap.min.css");

var _styledComponents = require("styled-components");

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _default2 = _interopRequireDefault(require("./default"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  @import url('http://fonts.googleapis.com/css?family=Rubik:300,500,700&amp;subset=latin');\n  @import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n\n  html {\n    /*Convert font size to base 10 for easier calculations (1rem = 10px)*/\n    font-size: 62.5%;\n  }\n  body {\n    background-color: ", ";\n    color: ", ";\n    font-weight: 300;\n    font-size: 1.6rem;\n    font-family: ", ";\n\n    a, input, button, textarea {\n      transition: all 0.2s linear;\n    }\n    a {\n      color: ", ";\n      &:hover {\n        color: ", ";\n      }\n    }\n    h1,h2,h3,h4,h5 { \n      color: ", ";\n      font-family: ", ";\n    }\n    h1 { font-size: 3.0rem }  // 30px\n    h2 { font-size: 2.4rem; } // 24px\n    h3 { font-size: 2.0rem; } // 20px\n\n    .container-fluid {\n      padding-left: 25px;\n      padding-right: 25px;\n    }\n    table {\n      background-color: white;\n    }\n    .table-bordered td,\n    .table-bordered th {\n      border-color: ", ";\n    }\n    .form-control {\n      font-size: 1.6rem;\n      margin-bottom: 15px;\n    }\n    .theme-wrapper {\n      border-bottom: 1px solid #dddddd;\n      padding: 5px 0;\n      margin-bottom: 10px;\n      display: flex;\n      .theme {\n        color: #A7AAAC;\n        font-size: 1.4rem;\n        font-style: normal;\n        font-weight: 400;\n        text-transform: uppercase;\n      }\n    }\n\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

_fontawesomeSvgCore.library.add(_freeBrandsSvgIcons.fab, _freeSolidSvgIcons.fas);

var GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject(), _default2["default"].backgroundColor, _default2["default"].textColor, _default2["default"].fontText, _default2["default"].linkColor, _default2["default"].linkHoverColor, _default2["default"].headingColor, _default2["default"].fontText, _default2["default"].borderColor);
var _default = GlobalStyles;
exports["default"] = _default;