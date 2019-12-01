"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .data-table-header {\n    display: flex;\n    direction: row;\n    justify-content: space-between;\n    position: relative;\n    align-items: center;\n    align-content: stretch;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    margin-bottom: 16px;\n    font-size: 1.4rem;\n    .data-table-results {\n      flex-grow: 2;\n      p {\n        margin-bottom: 0;\n      }\n    }\n    .page-size-options {\n      padding: 0 8px;\n      label.ds-c-label {\n        display: inline-block;\n        margin: 0 5px 0 0;\n        font-size: 1.4rem;\n      }\n      select.ds-c-field {\n        display: inline-block;\n        width: 150px;\n      }\n    }\n    select.page-size-select {\n      border: 1px solid ", ";\n      height: 3.4rem;\n      background-color: #ffffff;\n    }\n    .adv_options__modal  {\n      z-index: 5000 !important;\n    }\n    .column-labels {\n      background: #eeeeee;\n      font-weight: 700;\n      padding: 16px 24px;\n    }\n    .data-table-density {\n      padding: 0 8px;\n      display: flex;\n      align-items: center;\n      button {\n        padding: 6px;\n        border: 1px solid ", ";\n        background: white;\n        &:first-of-type {\n          margin-left: 8px;\n        }\n      }\n    }\n    .density-buttons {\n      button:first-of-type {\n        border-radius: 6px 0 0 6px;\n      }\n      button:last-of-type {\n        border-radius: 0 6px 6px 0;\n      }\n    }\n    .data-table-adv-options {\n      button {\n        position: relative;\n        background: #ffffff;\n        border-radius: 6px;\n        border: 1px solid ", ";\n        padding: 8px 16px;\n        display: inline-block;\n      }\n    }\n    .data-table-fullscreen {\n      padding: 0 8px;\n      button {\n        border: none;\n        background: none;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.grayLight;
}, function (props) {
  return props.theme.grayLight;
}, function (props) {
  return props.theme.grayLight;
});

var _default = Wrapper;
exports["default"] = _default;