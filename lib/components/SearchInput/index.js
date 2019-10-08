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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactstrap = require("reactstrap");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _Form = _interopRequireDefault(require("./Form"));

var SearchInput =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(SearchInput, _React$Component);

  function SearchInput(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, SearchInput);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SearchInput).call(this, props, context));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleString = _this.handleString.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleReset = _this.handleReset.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      navigate: false,
      query: null,
      textEntered: false,
      value: ''
    };
    return _this;
  }

  (0, _createClass2["default"])(SearchInput, [{
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault();
      this.setState({
        navigate: true
      });
    }
  }, {
    key: "handleString",
    value: function handleString(e) {
      e.preventDefault();
      this.setState({
        textEntered: e.target.value ? true : false,
        value: e.target.value,
        query: e.target.value
      });
    }
  }, {
    key: "handleReset",
    value: function handleReset(e) {
      e.preventDefault();
      this.setState({
        query: null,
        textEntered: false,
        value: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var query = this.state.query;
      var placeholder = this.props.placeholder ? this.props.placeholder : "Search the Data";
      var className = this.props.className ? this.props.className : "";
      var search = this.props.component ? this.props.component : null;
      var reset = this.state.textEntered ? _react["default"].createElement(_reactstrap.Button, {
        type: "reset",
        id: "reset",
        onClick: this.handleReset
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "times",
        color: "#666666",
        size: "2x"
      })) : false;

      if (this.state.navigate === true) {
        return _react["default"].createElement(_reactRouterDom.Redirect, {
          to: "/search?q=".concat(query),
          component: search
        });
      }

      return _react["default"].createElement(_Form["default"], {
        className: className,
        onSubmit: this.handleClick
      }, _react["default"].createElement(_reactstrap.FormGroup, null, _react["default"].createElement(_reactstrap.Label, {
        "for": "search",
        className: "sr-only"
      }, "Search"), _react["default"].createElement(_reactstrap.Input, {
        type: "text",
        name: "search",
        id: "search",
        placeholder: placeholder,
        value: this.state.value,
        onChange: this.handleString,
        bsSize: "lg"
      }), reset, _react["default"].createElement(_reactstrap.Button, {
        type: "submit",
        id: "submit"
      }, "GO")));
    }
  }]);
  return SearchInput;
}(_react["default"].Component);

var _default = SearchInput;
exports["default"] = _default;