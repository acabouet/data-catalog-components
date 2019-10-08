"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 1em;\n  position: relative;\n  text-align: center;\n  border: 1px solid ", ";\n  margin-bottom: 32px;\n  background: #fff;\n  img {\n    max-width: 120px;\n  }\n  h3.org-name {\n    margin: 15px 0;\n  }\n  a {\n    text-decoration: none;\n    color: ", ";\n    &:hover {\n      color: ", ";\n    }\n  }\n  img {\n    max-width: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.borderColor;
}, function (props) {
  return props.theme.linkColor;
}, function (props) {
  return props.theme.linkHoverColor;
});

function Organization(props) {
  var name = props.name,
      description = props.description,
      identifier = props.identifier,
      imageUrl = props.imageUrl;

  var image = _react["default"].createElement("img", {
    alt: name || "Organization Image",
    src: imageUrl
  });

  var link = "/organization/".concat(identifier);
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement("div", {
    className: "org-image",
    alt: "Organization Logo"
  }, image), _react["default"].createElement("h3", {
    className: "org-name"
  }, _react["default"].createElement("a", {
    href: link
  }, name)), description);
}

Organization.defaultProps = {
  name: "",
  description: "",
  identifier: "",
  imageUrl: "https://s3.amazonaws.com/dkan-default-content-files/files/group.png"
};
Organization.propTypes = {
  name: _propTypes["default"].string,
  description: _propTypes["default"].string,
  identifier: _propTypes["default"].string,
  imageUrl: _propTypes["default"].string
};
var _default = Organization;
exports["default"] = _default;