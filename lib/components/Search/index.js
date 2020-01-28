"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

var _queryString = _interopRequireDefault(require("query-string"));

var _reactLoaderAdvanced = _interopRequireDefault(require("react-loader-advanced"));

var _reactLoadingSpin = _interopRequireDefault(require("react-loading-spin"));

var _search_reducer = _interopRequireDefault(require("../../services/search/search_reducer"));

var _search_defaults = require("../../services/search/search_defaults");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Search = function Search(_ref) {
  var searchEndpoint = _ref.searchEndpoint,
      children = _ref.children,
      defaultFacets = _ref.defaultFacets,
      sortOptions = _ref.sortOptions,
      updateSearchUrl = _ref.updateSearchUrl,
      path = _ref.path,
      location = _ref.location,
      normalize = _ref.normalize;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      hasWindow = _useState2[0],
      setHasWindow = _useState2[1];

  var _useReducer = (0, _react.useReducer)(_search_reducer["default"], _objectSpread({}, _search_defaults.defaultSearchState, {}, _queryString["default"].parse(location.search))),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      searchState = _useReducer2[0],
      dispatch = _useReducer2[1];

  var loading = searchState.loading;
  (0, _react.useEffect)(function () {
    if (window !== undefined) {
      setHasWindow(true);
    }
  }, []);

  function findSortParams() {
    var returnedSort = sortOptions.filter(function (option) {
      return option.field === searchState.sort;
    });

    if (!returnedSort.length) {
      returnedSort.push(sortOptions[0]);
    }

    return returnedSort;
  }

  (0, _react.useEffect)(function () {
    function getSearchData() {
      return _getSearchData.apply(this, arguments);
    }

    function _getSearchData() {
      _getSearchData = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var currentSort, searchParams, facetKeys, searchUrl, results;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currentSort = findSortParams();
                searchParams = {
                  sort: currentSort[0].field,
                  sort_order: currentSort[0].order,
                  fulltext: searchState.fulltext,
                  pageSize: searchState.pageSize,
                  page: searchState.page
                };

                if (searchState.selectedFacets.length) {
                  facetKeys = Object.keys(defaultFacets);
                  facetKeys.map(function (key) {
                    var searchFacets = searchState.selectedFacets.filter(function (facet) {
                      return facet[0].toLowerCase() === key.toLowerCase();
                    });
                    var facetText = searchFacets.map(function (facet) {
                      return facet[1];
                    });

                    if (facetText.length) {
                      searchParams[key.toLowerCase()] = facetText;
                    }

                    return false;
                  });
                }

                if (updateSearchUrl) {
                  searchUrl = "".concat(path, "?").concat(_queryString["default"].stringify(searchParams, {
                    arrayFormat: 'comma'
                  }));

                  if (window !== undefined && searchUrl !== undefined) {
                    window.history.pushState({}, 'Search', "".concat(searchUrl));
                  }
                }

                _context.next = 6;
                return _axios["default"].get("".concat(searchEndpoint, "?").concat(_queryString["default"].stringify(searchParams, {
                  arrayFormat: 'comma'
                })));

              case 6:
                results = _context.sent;
                dispatch({
                  type: 'GET_SEARCH_DATA',
                  data: {
                    totalItems: results.data.total,
                    items: normalize ? normalize(results.data.results) : results.data.results,
                    facetsResults: results.data.facets
                  }
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getSearchData.apply(this, arguments);
    }

    getSearchData();
  }, [searchEndpoint, searchState.sort, searchState.fulltext, searchState.pageSize, searchState.page, searchState.selectedFacets]);
  return _react["default"].createElement(_search_defaults.SearchDispatch.Provider, {
    value: {
      searchState: searchState,
      dispatch: dispatch,
      defaultFacets: defaultFacets
    }
  }, hasWindow && _react["default"].createElement(_reactLoaderAdvanced["default"], {
    hideContentOnLoad: true,
    backgroundStyle: {
      backgroundColor: '#f9fafb'
    },
    foregroundStyle: {
      backgroundColor: '#f9fafb'
    },
    show: loading,
    message: _react["default"].createElement(_reactLoadingSpin["default"], {
      width: "3px",
      primaryColor: "#007BBC"
    })
  }, children));
};

Search.defaultProps = {
  updateSearchUrl: true,
  normalize: null
};
Search.propTypes = {
  searchEndpoint: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node.isRequired,
  defaultFacets: _propTypes["default"].objectOf(_propTypes["default"].object).isRequired,
  sortOptions: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  updateSearchUrl: _propTypes["default"].bool,
  path: _propTypes["default"].string.isRequired,
  location: _propTypes["default"].string.isRequired,
  normalize: _propTypes["default"].func
};
var _default = Search;
exports["default"] = _default;