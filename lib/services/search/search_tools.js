"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchReducer = searchReducer;
exports.fetchSearchData = fetchSearchData;
exports.getLunrSearch = getLunrSearch;
exports.setSelectedFacets = setSelectedFacets;
exports.resetSelectedFacets = resetSelectedFacets;
exports.buildInitialFacets = buildInitialFacets;
exports.setSearchURLParams = setSearchURLParams;
exports.filterFacets = filterFacets;
exports.defaultSearchState = exports.SearchDispatch = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _axios = _interopRequireDefault(require("axios"));

var _queryString = _interopRequireDefault(require("query-string"));

var _search = _interopRequireDefault(require("./search"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SearchDispatch = (0, _react.createContext)(null);
exports.SearchDispatch = SearchDispatch;
var defaultSearchState = {
  facets: [],
  facetsResults: {},
  loading: false,
  page: 1,
  pageSize: 10,
  query: '',
  searchEngine: null,
  selectedFacets: [],
  sort: 'date',
  totalItems: 0
};
exports.defaultSearchState = defaultSearchState;

function searchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return _objectSpread({}, state, {
        loading: true
      });

    case 'GET_SEARCH_ENGINE':
      return _objectSpread({}, state, {
        loading: false,
        searchEngine: action.data.searchEngine,
        searchType: action.data.searchType,
        facets: action.data.facets
      });

    case 'GET_SEARCH_DATA':
      return _objectSpread({}, state, {
        loading: false,
        totalItems: action.data.totalItems,
        items: action.data.items,
        facetsResults: action.data.facetsResults
      });

    case 'SET_SEARCH_PARAMETERS':
      return _objectSpread({}, state, {
        searchURL: action.data.searchURL
      });

    case 'UPDATE_SORT':
      return _objectSpread({}, state, {
        sort: action.data.sort
      });

    case 'UPDATE_QUERY':
      return _objectSpread({}, state, {
        query: action.data.query
      });

    case 'UPDATE_PAGE_SIZE':
      return _objectSpread({}, state, {
        pageSize: action.data.pageSize,
        page: 1
      });

    case 'UPDATE_CURRENT_PAGE':
      return _objectSpread({}, state, {
        page: action.data.page
      });

    case 'UPDATE_FACETS':
      return _objectSpread({}, state, {
        selectedFacets: action.data.selectedFacets,
        page: 1
      });

    case 'RESET_QUERY':
      return _objectSpread({}, state, {
        query: ''
      });

    case 'RESET_FACETS':
      return _objectSpread({}, state, {
        selectedFacets: action.data.selectedFacets,
        page: 1
      });

    case 'RESET_ALL':
      return _objectSpread({}, state, {
        query: '',
        selectedFacets: []
      });

    default:
      return 'Not a valid action type.';
  }
} // Query the search engine for new items.


function fetchSearchData(_x) {
  return _fetchSearchData.apply(this, arguments);
} // Create new Lunr search engine.


function _fetchSearchData() {
  _fetchSearchData = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(searchState) {
    var customNormalize,
        page,
        pageSize,
        query,
        sort,
        selectedFacets,
        searchEngine,
        data,
        items,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            customNormalize = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            page = searchState.page, pageSize = searchState.pageSize, query = searchState.query, sort = searchState.sort, selectedFacets = searchState.selectedFacets, searchEngine = searchState.searchEngine;
            _context.next = 4;
            return searchEngine.query(query, selectedFacets, pageSize, page, sort);

          case 4:
            data = _context.sent;
            items = data.results;

            if (customNormalize) {
              items = customNormalize(items);
            }

            return _context.abrupt("return", {
              type: 'GET_SEARCH_DATA',
              data: {
                totalItems: data.total,
                items: items,
                facetsResults: data.facetsResults
              }
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchSearchData.apply(this, arguments);
}

function getLunrSearch(_x2, _x3) {
  return _getLunrSearch.apply(this, arguments);
} // Add or remove facets from the array of selected facets.
// All facets regardless of type are kept in one array.


function _getLunrSearch() {
  _getLunrSearch = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(searchUrl, defaultFacets) {
    var newSearchEngine, _ref, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // eslint-disable-next-line dot-notation
            newSearchEngine = new _search["default"]['Lunr']();
            _context2.next = 3;
            return _axios["default"].get(searchUrl);

          case 3:
            _ref = _context2.sent;
            data = _ref.data;
            _context2.next = 7;
            return newSearchEngine.init(data, defaultFacets);

          case 7:
            return _context2.abrupt("return", {
              type: 'GET_SEARCH_ENGINE',
              data: {
                searchEngine: newSearchEngine,
                searchType: 'Lunr',
                facets: newSearchEngine.facets
              }
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getLunrSearch.apply(this, arguments);
}

function setSelectedFacets(eventTarget, selectedFacets) {
  var facetType = eventTarget.name;
  var facetValue = eventTarget.value;
  var active = eventTarget.checked;
  var updatedFacets = selectedFacets;
  var newFacetList = [];

  if (active === true) {
    newFacetList = [].concat((0, _toConsumableArray2["default"])(updatedFacets), [[facetType, facetValue]]);
  } else {
    newFacetList = selectedFacets.filter(function (facet) {
      return facet[1] !== facetValue;
    });
  }

  return {
    type: 'UPDATE_FACETS',
    data: {
      selectedFacets: newFacetList
    }
  };
} // Since all facets are kept in one array, this function serves two purposes:
// Without a facetKey it will just return an empty array for all facets.
// With a facetKey it will just return all facets not matching the facetKey.


function resetSelectedFacets(selectedFacets) {
  var facetKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var updatedFacets = [];

  if (selectedFacets !== undefined && selectedFacets.length > 0) {
    updatedFacets = selectedFacets;
  }

  if (facetKey) {
    updatedFacets = updatedFacets.filter(function (facet) {
      if (facet[0].toLowerCase() !== facetKey.toLowerCase()) {
        return facet;
      }

      return false;
    });
  } else {
    updatedFacets = [];
  }

  return {
    type: 'RESET_FACETS',
    data: {
      selectedFacets: updatedFacets
    }
  };
} // Parse intitial facets based on query parameters from a url.
// Requires the facets be in an object of {facetKey: facetValue}.


function buildInitialFacets(queryParams, defaultFacets) {
  var facetKeys = Object.keys(defaultFacets);
  var paramFacetArray = Object.entries(queryParams).filter(function (obj) {
    for (var i = 0; i < facetKeys.length; i += 1) {
      if (facetKeys[i] === obj[0]) {
        var _ret = function () {
          var capitalKey = obj[0].charAt(0).toUpperCase() + obj[0].slice(1);
          var newFacetArray = obj[1].split(',').map(function (param) {
            return [capitalKey, param];
          });
          return {
            v: newFacetArray
          };
        }();

        if ((0, _typeof2["default"])(_ret) === "object") return _ret.v;
      }
    }

    return false;
  });
  return {
    type: 'UPDATE_FACETS',
    data: {
      selectedFacets: paramFacetArray
    }
  };
} // Using the queryString library,
// turn an object of searchEngine query key/values into a url with search parameters.


function setSearchURLParams(rootURL, defaultFacets, searchState) {
  var facetKeys = Object.keys(defaultFacets);
  var params = {
    sort: searchState.sort,
    page: searchState.page,
    pageSize: searchState.pageSize,
    q: searchState.query
  };
  facetKeys.map(function (key) {
    var paramString = '';
    var facetItems = searchState.selectedFacets.filter(function (param) {
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
  return {
    type: 'SET_SEARCH_PARAMETERS',
    data: {
      searchURL: "".concat(rootURL, "?").concat(_queryString["default"].stringify(params))
    }
  };
} // This function will help if facets should be maintained after new search queries.
// Without this function, when searching facets will be removed from the search page if
// no datasets match the search. But if you want to maintain a list of facets that were selected
// even if there are 0 results, this will help but requires a complete list of facets to work. 


function filterFacets(facetKey, selectedFacets, facetsResults, totalFacets) {
  var isStatic = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var filteredFacets;

  if (isStatic) {
    filteredFacets = totalFacets[facetKey].map(function (facet) {
      var hasResults = facetsResults[facetKey].find(function (element) {
        return element[0] === facet[0];
      });

      if (!hasResults) {
        return [facet[0], 0];
      }

      return [facet[0], hasResults[1]];
    });
  } else {
    filteredFacets = totalFacets[facetKey].filter(function (facet) {
      var hasResults = facetsResults[facetKey].find(function (activeFacet) {
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
      var hasResults = facetsResults[facetKey].find(function (activeFacet) {
        return activeFacet[0] === facet[0];
      });

      if (hasResults) {
        return [facet[0], hasResults[1]];
      }

      return [facet[0], 0];
    });
  }

  return filteredFacets;
}