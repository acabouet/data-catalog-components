"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

var _default2 = _interopRequireDefault(require("../../theme/default"));

var _SearchInput = _interopRequireDefault(require("../SearchInput"));

/* eslint-disable */
var Hero =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Hero, _React$Component);

  function Hero() {
    (0, _classCallCheck2["default"])(this, Hero);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Hero).apply(this, arguments));
  }

  (0, _createClass2["default"])(Hero, [{
    key: "render",
    value: function render() {
      var Background = this.props.image ? "url(".concat(this.props.image, ")") : "linear-gradient(".concat(_default2["default"].primaryDark, ", ").concat(_default2["default"].primary, ")");
      var Align = this.props.alignment;
      return _react["default"].createElement(_Wrapper["default"], {
        className: "hero",
        style: {
          backgroundImage: Background
        }
      }, _react["default"].createElement("div", {
        className: 'block ' + Align
      }, _react["default"].createElement("h1", {
        className: "hero-title"
      }, this.props.title, this.props.title2), _react["default"].createElement("p", null, this.props.intro), _react["default"].createElement(_SearchInput["default"], null)));
    }
  }]);
  return Hero;
}(_react["default"].Component);

Hero.defaultProps = {
  state: "loading",
  title: "Welcome to DKAN",
  intro: "DKAN is an open-source data management platform. It treats data as content so that you can easily publish, manage, and maintain your open data no matter the size of your team or the level of technical expertise.",
  alignment: "center"
};
Hero.propTypes = {
  state: _propTypes["default"].string,
  item: _propTypes["default"].any
};
var _default = Hero;
exports["default"] = _default;