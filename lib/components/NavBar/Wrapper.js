"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.base-styles {\n    background-color: ", ";\n    background-image: ", ";\n    position: relative;\n    display: block;\n    clear: both;\n    z-index: 1;\n    &:after {\n      content: \"\";\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      position: absolute;\n      z-index: -1;\n      background: rgba(0, 0, 0, 0.2);\n    }\n  \n  .navbar-expand-md {\n    padding: 0;\n  }\n  .navbar-toggler {\n    margin: 0.5rem 1rem;\n  }\n  .nav-item a {\n    display: inline-flex;\n    padding: 0.9em 1.2em;\n    text-decoration: none;\n    -webkit-font-smoothing: antialiased;\n    -webkit-touch-callout: none;\n    user-select: none;\n    cursor: pointer;\n    font-weight: 500;\n    color: ", ";\n    transition: all 0.2s linear;\n\n    &:hover {\n      color: ", ";\n      text-decoration: none;\n      background-color: ", ";\n    }\n    &.active {\n      background-color: none;\n      box-shadow: inset 0 -4px 0 ", ";\n      text-decoration: none;\n      color: ", ";\n    }\n    &:hover.active {\n      background-color: none;\n      box-shadow: inset 0 -4px 0 ", ";\n      color: ", ";\n    }\n  }\n\n  @media screen and (max-width: 767px) {\n    .nav-item {\n      display: block;\n      width: 100%;\n      a {\n        display: block;\n      }\n    }\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.navBarBackgroundColor;
}, function (props) {
  return props.theme.navBarBackgroundImage;
}, function (props) {
  return props.theme.navBarLink;
}, function (props) {
  return props.theme.navBarLink;
}, function (props) {
  return props.theme.navBarLinkHoverBack;
}, function (props) {
  return props.theme.navBarLinkActiveHoverBack;
}, function (props) {
  return props.theme.navBarLink;
}, function (props) {
  return props.theme.navBarLinkActiveHoverBack;
}, function (props) {
  return props.theme.navBarLink;
});

exports["default"] = _default;