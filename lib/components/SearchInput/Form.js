"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .form-group {\n    padding-right: 125px;\n    position: relative;\n  }\n  input[type=\"text\"] {\n    padding: 1rem 1.5rem;\n    font-size: 1.8rem;\n    height: auto;\n    width: 100%;\n  }\n  button {\n    position: absolute;\n  }\n  button[type=\"reset\"] {\n    color: #333333;\n    top: 10px;\n    right: 140px;\n    background: transparent;\n    border: none;\n    &:active,\n    &:focus {\n      background: transparent;\n      border: none;\n      box-shadow: none;\n    }\n  }\n  button[type=\"submit\"] {\n    top: 0;\n    right: 0;\n    background-color: ", ";;\n    border-radius: 24px;\n    border-style: none;\n    font-size: 2.1rem;\n    font-weight: bold;\n    display: inline-block;\n    height: 48px;\n    margin: 0;\n    padding: 10px 0;\n    color: ", ";\n    width: 100px;\n    svg {\n      padding-top: 3px;\n      vertical-align: top;\n      path {\n        fill: ", ";\n      }\n    }\n    &:hover {\n      background-color: ", ";\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    position: relative;\n    top: auto;\n    right: auto;\n    width: 100%;\n    border-left: none;\n    padding-left: 0;\n    input.form-control {\n      width: 100%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = _styledComponents["default"].form(_templateObject(), function (props) {
  return props.theme.secondary;
}, function (props) {
  return props.theme.primaryDark;
}, function (props) {
  return props.theme.primaryDark;
}, function (props) {
  return props.theme.secondaryDark;
});

exports["default"] = _default;