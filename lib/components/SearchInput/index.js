"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactstrap = require("reactstrap");

var SearchInput = function SearchInput(_ref) {
  var className = _ref.className,
      labelContent = _ref.labelContent,
      onChangeFunction = _ref.onChangeFunction,
      onResetFunction = _ref.onResetFunction,
      placeholder = _ref.placeholder,
      value = _ref.value,
      bsSize = _ref.bsSize,
      labelClassName = _ref.labelClassName,
      srOnly = _ref.srOnly,
      resetContent = _ref.resetContent,
      submitContent = _ref.submitContent,
      showSubmit = _ref.showSubmit;

  var reset = _react["default"].createElement(_reactstrap.Button, {
    type: "reset",
    id: "inputReset",
    onClick: onResetFunction
  }, "Reset");

  if (resetContent) {
    reset = _react["default"].createElement(_reactstrap.Button, {
      type: "reset",
      id: "inputReset",
      onClick: onResetFunction
    }, resetContent);
  }

  var labelClass = srOnly ? 'sr-only' : '';
  return _react["default"].createElement(_reactstrap.FormGroup, {
    className: className
  }, _react["default"].createElement(_reactstrap.Label, {
    "for": "inputSearch",
    className: "".concat(labelClass, " ").concat(labelClassName)
  }, labelContent), _react["default"].createElement(_reactstrap.Input, {
    type: "text",
    name: "inputSearch",
    id: "inputSearch",
    placeholder: placeholder,
    value: value,
    onChange: onChangeFunction,
    bsSize: bsSize
  }), value.length ? reset : null, showSubmit && _react["default"].createElement(_reactstrap.Button, {
    type: "submit",
    id: "inputSubmit"
  }, submitContent));
};

SearchInput.defaultProps = {
  placeholder: 'Search the Data',
  labelContent: 'Search',
  value: '',
  bsSize: 'lg',
  labelClassName: '',
  srOnly: true,
  className: '',
  resetContent: null,
  onResetFunction: null,
  submitContent: 'Submit',
  showSubmit: true
};
SearchInput.propTypes = {
  placeholder: _propTypes["default"].string,
  value: _propTypes["default"].string,
  bsSize: _propTypes["default"].string,
  labelClassName: _propTypes["default"].string,
  srOnly: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  resetContent: _propTypes["default"].node,
  submitContent: _propTypes["default"].node,
  onResetFunction: _propTypes["default"].func,
  onChangeFunction: _propTypes["default"].func.isRequired,
  showSubmit: _propTypes["default"].bool,
  labelContent: _propTypes["default"].string
};
var _default = SearchInput;
exports["default"] = _default;