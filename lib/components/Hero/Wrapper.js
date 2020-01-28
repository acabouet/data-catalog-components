"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  background-size: cover;\n  background-position: 50% 50%;\n  padding: 40px 0;\n  display: flex;\n  align-items: flex-start;\n  align-content: stretch;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-evenly;\n\n  .hero-title {\n    color: white;\n  }\n  .block {\n    position: relative;\n    margin: auto;\n    color: white;\n    padding: 20px;\n    min-width: 30%;\n    max-width: 50%;\n    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);\n    letter-spacing: 0.5px;\n    &.center {\n      text-align: center;\n    }\n  }\n  h1,\n  h2 {\n    margin-top: 0;\n  }\n  .btn-hero a {\n    color: ", ";\n    &:hover,\n    &:focus {\n      color: ", ";\n      text-decoration: none;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    flex-wrap: wrap;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.primaryDark;
}, function (props) {
  return props.theme.primaryDark;
});

var _default = Wrapper;
exports["default"] = _default;