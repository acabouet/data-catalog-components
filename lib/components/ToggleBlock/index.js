"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ToggleBlock;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ToggleBlock(_ref) {
  var className = _ref.className,
      title = _ref.title,
      children = _ref.children,
      headingClasses = _ref.headingClasses,
      innerClasses = _ref.innerClasses,
      allowToggle = _ref.allowToggle;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      showFacets = _useState2[0],
      toggleShowFacets = _useState2[1];

  var facetBlockHeading = _react["default"].createElement("h2", {
    className: headingClasses
  }, title);

  if (allowToggle) {
    facetBlockHeading = _react["default"].createElement("h2", {
      className: headingClasses
    }, _react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return toggleShowFacets(!showFacets);
      }
    }, title));
  }

  return _react["default"].createElement("div", {
    className: className
  }, facetBlockHeading, showFacets && _react["default"].createElement("div", {
    className: innerClasses
  }, children));
}

ToggleBlock.defaultProps = {
  allowToggle: true,
  headingClasses: 'facet-block-title',
  innerClasses: 'facet-block-inner',
  className: ''
};
ToggleBlock.propTypes = {
  title: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node.isRequired,
  headingClasses: _propTypes["default"].string,
  innerClasses: _propTypes["default"].string,
  allowToggle: _propTypes["default"].bool,
  className: _propTypes["default"].string
};