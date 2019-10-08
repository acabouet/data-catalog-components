"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .logo {\n    display: inline-block;\n    vertical-align: bottom;\n  }\n  .site-name {\n    display: inline-block;\n    vertical-align: bottom;\n    line-height: 1em;\n    margin-bottom: 10px;\n    a {\n      color: ", ";\n      font-size: 1.8rem;\n    }\n  }\n  .slogan {\n    margin-top: 10px;\n  }\n\n  @media screen and (max-width: 768px) {\n    flex-wrap: wrap;\n    .logo,\n    .site-name {\n      display: block;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.headingColor;
});

var _default = Wrapper;
exports["default"] = _default;