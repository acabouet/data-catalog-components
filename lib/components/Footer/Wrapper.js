"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  color: ", ";\n  padding: 40px 0;\n\n  .page-footer {\n    display: flex;\n    align-items: flex-start;\n    align-content: flex-start;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    padding-left: 30px;\n    padding-right: 30px;\n\n    h2,h3,h4 {\n      color: ", ";\n    }\n    a {\n      color: ", ";\n      text-decoration: none;\n      &:hover,\n      &:focus {\n        color: ", ";\n        text-decoration: underline;\n      }\n    }\n  }\n  ul {\n    list-style-type: none;\n    list-style: none;\n    margin: 20px 40px 0 0;\n    padding: 0;\n    a {\n      display: block;\n      font-weight: 500;\n      padding: 4px;\n      text-decoration: none;\n      &:hover,\n      &:focus {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    .page-footer {\n      flex-wrap: wrap;\n      nav {\n        display: block;\n        width: 100%;\n        ul {\n          margin-right: 0;\n        }\n      }\n    }\n    .copyright {\n      margin-top: 30px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.footerBackgroundColor;
}, function (props) {
  return props.theme.footerText;
}, function (props) {
  return props.theme.footerText;
}, function (props) {
  return props.theme.footerLink;
}, function (props) {
  return props.theme.footerLinkHover;
});

var _default = Wrapper;
exports["default"] = _default;