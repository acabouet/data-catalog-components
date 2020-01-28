"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  clear: both;\n  margin: 15px 0;\n  .resource {\n    position: relative;\n  }\n  a {\n    line-height: 50px;\n    padding-left: 5px;\n  }\n  .format-label {\n    color: transparent;\n    font-weight: normal;\n    height: 50px;\n    left: 0;\n    position: absolute;\n    text-decoration: none;\n    top: 0;\n    width: 35px;\n    z-index: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents["default"].div(_templateObject());

var _default = Wrapper;
exports["default"] = _default;