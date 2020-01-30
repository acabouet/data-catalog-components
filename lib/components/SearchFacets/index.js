"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactstrap = require("reactstrap");

var _ToggleBlock = _interopRequireDefault(require("../ToggleBlock"));

var _ShowMoreContainer = _interopRequireDefault(require("../ShowMoreContainer"));

var _search_functions = require("../../services/search/search_functions");

var SearchFacets = function SearchFacets(_ref) {
  var defaultFacets = _ref.defaultFacets,
      dispatch = _ref.dispatch,
      selectedFacets = _ref.selectedFacets,
      facetsResults = _ref.facetsResults,
      className = _ref.className,
      toggleClasses = _ref.toggleClasses,
      InputComponent = _ref.InputComponent,
      totalItems = _ref.totalItems,
      fulltext = _ref.fulltext,
      toggleIcon = _ref.toggleIcon;
  var facetList = Object.entries(defaultFacets);

  function buildSearchFacet(facet) {
    var facetKey = facet[0];
    var _facet$ = facet[1],
        label = _facet$.label,
        showAll = _facet$.showAll;
    var hasSelection = selectedFacets.filter(function (selectedFacet) {
      return selectedFacet[0].toLowerCase() === facetKey.toLowerCase();
    }) || [];
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

    if (facet[1].facetType === 'radio' && results[0] !== ("All ".concat(facet[1].label.toLowerCase()) || "All matched ".concat(facet[1].label.toLowerCase()))) {
      var newName = fulltext.length || selectedFacets.length ? "All matched ".concat(facet[1].label.toLowerCase()) : "All ".concat(facet[1].label.toLowerCase());
      results.unshift({
        type: facetKey.toLowerCase(),
        name: newName,
        total: totalItems
      });
    }

    var choices = results.map(function (item, index) {
      var type = facet[1].facetType ? facet[1].facetType : 'checkbox';
      var key = "".concat(facetKey.toLowerCase(), "-").concat(item.name.replace(/\s/g, ''), "-").concat(Math.random() * 100);
      var selected = selectedFacets.filter(function (selectedFacet) {
        return selectedFacet[1] === item.name;
      }).length > 0 || false;

      var onChangeFunction = function onChangeFunction(e) {
        dispatch((0, _search_functions.setSelectedFacets)(e.target, selectedFacets));
      };

      if (index === 0 && type === 'radio') {
        onChangeFunction = function onChangeFunction() {
          dispatch((0, _search_functions.resetSelectedFacets)(selectedFacets, facetKey));
        };

        selected = hasSelection.length === 0;
      }

      if (InputComponent) {
        return _react["default"].createElement(InputComponent, {
          key: key,
          checked: selected,
          name: facetKey.toLowerCase(),
          type: type,
          value: item.name,
          onChange: onChangeFunction
        }, "".concat(item.name, " (").concat(item.total, ")"));
      }

      return _react["default"].createElement(_reactstrap.Label, null, _react["default"].createElement(_reactstrap.Input, {
        key: key,
        checked: selected,
        name: facetKey.toLowerCase(),
        type: type,
        value: item.name,
        onChange: onChangeFunction
      }), "".concat(item.name, " (").concat(item.total, ")"));
    });
    return _react["default"].createElement(_ToggleBlock["default"], {
      key: facetKey,
      title: _react["default"].createElement("span", null, toggleIcon.before ? _react["default"].createElement(_react["default"].Fragment, null, toggleIcon, label) : _react["default"].createElement(_react["default"].Fragment, null, label, toggleIcon)),
      headingClasses: "facet-block-".concat(label.toLowerCase(), "-inner ").concat(toggleClasses),
      innerClasses: "inner-".concat(label.toLowerCase(), "-facets")
    }, facet[1].reset.active && hasSelection.length ? _react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return dispatch((0, _search_functions.resetSelectedFacets)(selectedFacets, facetKey));
      },
      className: "facet-reset-button"
    }, facet[1].reset.icon && _react["default"].createElement("span", {
      className: "undo-icon"
    }, facet[1].reset.icon), "Reset") : null, _react["default"].createElement(_ShowMoreContainer["default"], {
      container: "div",
      items: choices,
      limit: facet[1].limit
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
  toggleClasses: '',
  InputComponent: null,
  fulltext: '',
  toggleIcon: {
    icon: null,
    before: true
  }
};
SearchFacets.propTypes = {
  defaultFacets: _propTypes["default"].objectOf(_propTypes["default"].object).isRequired,
  dispatch: _propTypes["default"].func.isRequired,
  selectedFacets: _propTypes["default"].arrayOf(_propTypes["default"].array).isRequired,
  facetsResults: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  className: _propTypes["default"].string,
  toggleClasses: _propTypes["default"].string,
  InputComponent: _propTypes["default"].func,
  fulltext: _propTypes["default"].string,
  totalItems: _propTypes["default"].string.isRequired,
  toggleIcon: _propTypes["default"].shape({
    icon: _propTypes["default"].node,
    before: _propTypes["default"].bool
  })
};
var _default = SearchFacets;
exports["default"] = _default;