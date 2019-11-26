"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLunrSearch = useLunrSearch;
exports.useSearchData = useSearchData;
exports.useFacetTypes = useFacetTypes;
exports.useUrlParams = useUrlParams;
exports.useFilteredFacets = useFilteredFacets;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _queryString = _interopRequireDefault(require("query-string"));

var _search = _interopRequireDefault(require("../search"));

function useLunrSearch(url, defaultFacets) {
  var _React$useState = _react["default"].useState(),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      searchEngine = _React$useState2[0],
      setSearchEngine = _React$useState2[1];

  _react["default"].useEffect(function () {
    // eslint-disable-next-line dot-notation
    var newSearchEngine = new _search["default"]['Lunr']();

    function fetchSearchIndex() {
      return _fetchSearchIndex.apply(this, arguments);
    }

    function _fetchSearchIndex() {
      _fetchSearchIndex = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios["default"].get(url);

              case 2:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchSearchIndex.apply(this, arguments);
    }

    function initSearchEngine() {
      return _initSearchEngine.apply(this, arguments);
    }

    function _initSearchEngine() {
      _initSearchEngine = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var _ref, data;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetchSearchIndex();

              case 2:
                _ref = _context2.sent;
                data = _ref.data;
                _context2.next = 6;
                return newSearchEngine.init(data, defaultFacets);

              case 6:
                _context2.next = 8;
                return setSearchEngine(newSearchEngine);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _initSearchEngine.apply(this, arguments);
    }

    initSearchEngine();
  }, [url, defaultFacets]);

  return searchEngine;
}

function useSearchData(searchEngine, searchPage, searchQuery, searchSort, searchPageSize, selectedFacets) {
  var _React$useState3 = _react["default"].useState(true),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      loading = _React$useState4[0],
      setLoading = _React$useState4[1];

  var _React$useState5 = _react["default"].useState(0),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
      totalResults = _React$useState6[0],
      setTotalResults = _React$useState6[1];

  var _React$useState7 = _react["default"].useState({}),
      _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
      facetResults = _React$useState8[0],
      setFacetResults = _React$useState8[1];

  var _React$useState9 = _react["default"].useState([]),
      _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
      items = _React$useState10[0],
      setItems = _React$useState10[1];

  _react["default"].useEffect(function () {
    function normalizeItems(resultItems) {
      return resultItems.map(function (x) {
        var item = {};
        item = {
          identifier: x.identifier,
          modified: x.modified,
          description: x.description,
          theme: x.theme,
          format: x.distribution,
          title: x.title,
          ref: "/dataset/".concat(x.identifier)
        };

        if (Object.prototype.hasOwnProperty.call(x, 'publisher') && Object.prototype.hasOwnProperty.call(x, 'name')) {
          item.publisher = x.publisher.name;
        } else {
          item.publisher = '';
        }

        return item;
      });
    }

    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        var results;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(searchEngine !== null)) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 3;
                return searchEngine.query(searchQuery, selectedFacets, searchPageSize, searchPage, searchSort);

              case 3:
                results = _context3.sent;
                setFacetResults(results.facetsResults);
                setItems(normalizeItems(results.results));
                setTotalResults(results.total);
                setLoading(false);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      return _fetchData.apply(this, arguments);
    }

    if (searchEngine !== undefined) {
      fetchData();
    }
  }, [searchEngine, searchPage, searchQuery, searchSort, searchPageSize, selectedFacets]);

  return [loading, items, facetResults, totalResults];
}

function useFacetTypes(facets) {
  var facetTypes = Object.keys(facets);
  return facetTypes;
}

function useUrlParams(searchUrl, defaultFacets, searchPage, searchQuery, searchSort, searchPageSize, selectedFacets) {
  var _React$useState11 = _react["default"].useState({}),
      _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
      newParams = _React$useState12[0],
      setNewParams = _React$useState12[1];

  var facetKeys = Object.keys(defaultFacets);

  _react["default"].useEffect(function () {
    var params = {};
    params.sort = searchSort;
    params.page = searchPage;
    params.pageSize = searchPageSize;
    params.q = searchQuery;
    facetKeys.map(function (key) {
      var paramString = '';
      var facetItems = selectedFacets.filter(function (param) {
        if (param[0] === key) {
          return param[1];
        }

        return false;
      });
      facetItems.map(function (item) {
        paramString += "".concat(item[1], ",");
        return paramString;
      });
      paramString = paramString.slice(0, -1);

      if (paramString) {
        params[key] = paramString;
      }

      return paramString;
    });
    setNewParams(params);
  }, [searchSort, searchPage, searchPageSize, searchQuery, selectedFacets]);

  return "".concat(searchUrl, "?").concat(_queryString["default"].stringify(newParams));
}

function useFilteredFacets(facetKey, selectedFacets, facetResults) {
  var _React$useState13 = _react["default"].useState([]),
      _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
      returnedFacets = _React$useState14[0],
      setReturnedFacets = _React$useState14[1];

  _react["default"].useEffect(function () {
    var filteredFacets = facetResults[facetKey].filter(function (facet) {
      var hasResults = facetResults[facetKey].find(function (activeFacet) {
        return activeFacet[0] === facet[0];
      });
      var selected = selectedFacets.find(function (selFacet) {
        return selFacet[1].toLowerCase() === facet[0].toLowerCase() && selFacet[0].toLowerCase() === facetKey.toLowerCase();
      });

      if (selected || hasResults) {
        return facet;
      }

      return false;
    }).map(function (facet) {
      var hasResults = facetResults[facetKey].find(function (activeFacet) {
        return activeFacet[0] === facet[0];
      });

      if (hasResults) {
        return [facet[0], hasResults[1]];
      }

      return [facet[0], 0];
    });
    setReturnedFacets(filteredFacets);
  }, [facetKey, selectedFacets, facetResults]);

  return returnedFacets;
}