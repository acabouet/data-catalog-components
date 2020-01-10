"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormatIcon = _interopRequireDefault(require("../FormatIcon"));

var FileDownload = function FileDownload(_ref) {
  var className = _ref.className,
      label = _ref.label,
      format = _ref.format,
      downloadURL = _ref.downloadURL,
      title = _ref.title;
  return _react["default"].createElement("div", {
    className: className || 'dcc-file-download'
  }, label, _react["default"].createElement("div", {
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
  }, format), title)));
};

FileDownload.defaultProps = {
  className: null,
  label: null,
  title: null
};
FileDownload.propTypes = {
  className: _propTypes["default"].string,
  label: _propTypes["default"].string,
  title: _propTypes["default"].string,
  format: _propTypes["default"].string.isRequired,
  downloadURL: _propTypes["default"].string.isRequired
};
var _default = FileDownload;
exports["default"] = _default;