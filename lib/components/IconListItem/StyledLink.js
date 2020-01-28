"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gatsby = require("gatsby");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border: 1px solid ", ";\n  border-radius: 8px;\n  margin-bottom: 20px;\n  box-shadow: 0 0 4px 2px #f3f3f3;\n  background-color: white;\n  position: relative;\n  display: block;\n  color: ", ";\n  font-size: 1.15em;\n  padding: 1em 2em;\n  min-width: 260px;\n  text-decoration: none;\n  text-align: center;\n  svg path {\n    fill: ", ";\n  }\n  &.active,\n  &:hover {\n    background-color: ", ";\n    text-decoration: none;\n    color: ", "\n    svg path {\n      fill: ", "\n    }\n  }\n  img {\n    max-width: 150px;\n    max-height: 100px;\n    margin-bottom: 10px;\n  }\n  svg {\n    margin: 10px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLink = (0, _styledComponents["default"])(_gatsby.Link)(_templateObject(), function (props) {
  return props.theme.borderColor;
}, function (props) {
  return props.theme.linkColor;
}, function (props) {
  return props.theme.linkColor;
}, function (props) {
  return props.theme.secondaryLight;
}, function (props) {
  return props.theme.primaryDark;
}, function (props) {
  return props.theme.primaryDark;
});
var _default = StyledLink;
exports["default"] = _default;