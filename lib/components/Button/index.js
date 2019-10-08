"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ButtonStyles = _interopRequireDefault(require("./ButtonStyles"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledButton = _styledComponents["default"].button(_templateObject(), _ButtonStyles["default"]);

var _default = StyledButton;
exports["default"] = _default;