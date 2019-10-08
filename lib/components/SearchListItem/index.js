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

var _ListItem = _interopRequireDefault(require("../ListItem"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

var _excerpts = _interopRequireDefault(require("excerpts"));

var _TopicImage = _interopRequireDefault(require("../IconListItem/TopicImage"));

var _DataIcon = _interopRequireDefault(require("../DataIcon"));

var _Text = _interopRequireDefault(require("../Text"));

var _gatsby = require("gatsby");

/* eslint-disable */
var SearchListItem =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(SearchListItem, _React$PureComponent);

  function SearchListItem() {
    (0, _classCallCheck2["default"])(this, SearchListItem);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SearchListItem).apply(this, arguments));
  }

  (0, _createClass2["default"])(SearchListItem, [{
    key: "formats",
    // eslint-disable-line react/prefer-stateless-function
    value: function formats(distribution) {
      if (!distribution) {
        return null;
      } else {
        var i = 0;
        return distribution.map(function (dist) {
          i++;
          var format = dist.format === undefined ? '' : dist.format.toLowerCase();
          return _react["default"].createElement("div", {
            title: "format: ".concat(dist.format),
            key: "dist-id-".concat(dist.identifier, "-").concat(i),
            className: "label",
            "data-format": format
          }, format);
        });
      }
    }
  }, {
    key: "themes",
    value: function themes(theme) {
      if (!theme) {
        return null;
      } else {
        var i = 0;
        return theme.map(function (topic) {
          i++; // if (topic.icon) {
          //   return <div key={`dist-${topic.identifier}-${i}`}>
          //     <img src={topic.icon} height="16px" width="16px" alt={topic.alt} /> 
          //     {topic.title}
          //   </div>
          // }
          // else {

          return _react["default"].createElement(_gatsby.Link, {
            key: "dist-".concat(topic.identifier, "-").concat(i),
            to: "search?theme=".concat(topic.title)
          }, _react["default"].createElement(_TopicImage["default"], {
            title: topic.title,
            height: "16",
            width: "16"
          }), topic.title); //}
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var item = this.props.item;
      var description = item.description ? _react["default"].createElement(_Text["default"], {
        className: "item-description"
      }, (0, _excerpts["default"])(item.description, {
        words: 35
      })) : '';
      var publisher = item.publisher ? _react["default"].createElement("div", {
        className: "item-publisher"
      }, _react["default"].createElement(_DataIcon["default"], {
        icon: "group",
        height: "20",
        width: "20",
        color: "#A7AAAC"
      }), _react["default"].createElement(_Text["default"], {
        tag: "i",
        value: item.publisher.name
      })) : '';
      var formats = item.format ? _react["default"].createElement("div", {
        className: "format-types"
      }, this.formats(item.format)) : '';
      var themes = item.theme ? _react["default"].createElement("div", {
        className: "item-theme"
      }, this.themes(item.theme)) : ''; // Put together the content of the repository

      var content = _react["default"].createElement(_Wrapper["default"], {
        key: "wrapper-".concat(item.identifier),
        className: "search-list-item"
      }, _react["default"].createElement("a", {
        href: item.ref
      }, _react["default"].createElement("h2", null, item.title)), publisher, themes, description, formats);

      return _react["default"].createElement(_ListItem["default"], {
        key: "repo-list-item-".concat(item.identifier),
        item: content
      });
    }
  }]);
  return SearchListItem;
}(_react["default"].PureComponent);

SearchListItem.defaultProps = {
  item: {
    "identifier": 1234,
    "title": "This is a title",
    "description": "I am an item",
    "modified": "1/12/2018",
    "publisher": "Publish Inc."
  }
};
SearchListItem.propTypes = {
  item: _propTypes["default"].object
};
var _default = SearchListItem;
exports["default"] = _default;