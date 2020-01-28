"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystemCore = require("@cmsgov/design-system-core");

var _ToggleBlock = _interopRequireDefault(require("../ToggleBlock"));

var _ShowMoreContainer = _interopRequireDefault(require("../ShowMoreContainer"));

var _search_functions = require("../../services/search/search_functions");

var SearchFacets = function SearchFacets(_ref) {
  var defaultFacets = _ref.defaultFacets,
      dispatch = _ref.dispatch,
      selectedFacets = _ref.selectedFacets,
      facetsResults = _ref.facetsResults,
      className = _ref.className,
      toggleClasses = _ref.toggleClasses;
  var facetList = Object.entries(defaultFacets);

  function buildSearchFacet(facet) {
    var facetKey = facet[0];
    var _facet$ = facet[1],
        title = _facet$.title,
        showAll = _facet$.showAll;
    var results = [];

    if (facetsResults && facetsResults.length) {
      results = facetsResults.filter(function (result) {
        return result.type.toLowerCase() === facetKey.toLowerCase();
      });
    }

    if (!showAll) {
      results = results.filter(function (result) {
        return parseInt(result.total, 10) > 0;
      });
    }

    var choices = results.map(function (item) {
      var type = facet[1].facetType ? facet[1].facetType : 'checkbox';
      var key = "".concat(facetKey.toLowerCase(), "-").concat(item.name.replace(/\s/g, ''), "-").concat(Math.random() * 100);
      var selected = selectedFacets.filter(function (selectedFacet) {
        return selectedFacet[1] === item.name;
      }).length > 0 || false;

      var onChangeFunction = function onChangeFunction(e) {
        dispatch((0, _search_functions.setSelectedFacets)(e.target, selectedFacets));
      };

      return _react["default"].createElement(_designSystemCore.Choice, {
        key: key,
        checked: selected,
        name: facetKey.toLowerCase(),
        type: type,
        value: item.name,
        onChange: onChangeFunction
      }, "".concat(item.name, " (").concat(item.total, ")"));
    });
    return _react["default"].createElement(_ToggleBlock["default"], {
      key: facetKey // TODO: Fix this so it's adjustable
      ,
      title: _react["default"].createElement("span", null, _react["default"].createElement("i", {
        className: "fa fa-chevron-down"
      }), title),
      headingClasses: "facet-block-".concat(title.toLowerCase(), "-inner ").concat(toggleClasses),
      innerClasses: "inner-".concat(title.toLowerCase(), "-facets")
    }, _react["default"].createElement(_ShowMoreContainer["default"], {
      container: "div",
      items: choices,
      limit: 10
    }));
  }

  return _react["default"].createElement("div", {
    className: className
  }, facetList.map(function (facet) {
    return buildSearchFacet(facet);
  }));
};

SearchFacets.defaultProps = {
  className: '',
  toggleClasses: ''
};
SearchFacets.propTypes = {
  defaultFacets: _propTypes["default"].objectOf(_propTypes["default"].object).isRequired,
  dispatch: _propTypes["default"].func.isRequired,
  selectedFacets: _propTypes["default"].arrayOf(_propTypes["default"].array).isRequired,
  facetsResults: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  className: _propTypes["default"].string,
  toggleClasses: _propTypes["default"].string
};
var _default = SearchFacets;
exports["default"] = _default;