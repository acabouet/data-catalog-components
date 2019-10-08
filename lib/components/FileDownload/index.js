"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

var _FormatIcon = _interopRequireDefault(require("../FormatIcon"));

function FileDownload(props) {
  var label = props.label,
      format = props.format,
      downloadURL = props.downloadURL,
      title = props.title;

  var item = _react["default"].createElement("div", {
    className: "resource"
  }, _react["default"].createElement(_FormatIcon["default"], {
    format: format
  }), _react["default"].createElement("a", {
    href: downloadURL,
    title: format
  }, _react["default"].createElement("span", {
    "data-toggle": "tooltip",
    "data-placement": "top",
    "data-original-title": format,
    "data-format": format,
    className: "format-label"
  }, format), title));

  return _react["default"].createElement(_Wrapper["default"], {
    className: "file-download"
  }, label, " ", item);
}

FileDownload.propTypes = {
  title: _propTypes["default"].string,
  format: _propTypes["default"].string,
  downloadURL: _propTypes["default"].string
};
var _default = FileDownload;
exports["default"] = _default;