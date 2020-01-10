"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 24px 0;\n  h2 {\n    display: block;\n    text-align: center;\n    margin: 2rem 15px;\n  }\n  ul {\n    list-style: none;\n    display: flex;\n    align-items: stretch;\n    align-content: flex-start;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: center;\n    padding: 0;\n  }\n  li {\n    text-align: center;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    li {\n      max-width: 25%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents["default"].div(_templateObject());

var _default = Wrapper;
exports["default"] = _default;