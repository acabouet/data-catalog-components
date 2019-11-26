"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withSearch;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _queryString = _interopRequireDefault(require("query-string"));

var _axios = _interopRequireDefault(require("axios"));

var _search = _interopRequireDefault(require("../../services/search"));

/* eslint-disable no-plusplus */

/* eslint react/prop-types: 0 */
function withSearch(OriginalComponent, apiEndPoint) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2["default"])(_class, _React$Component);
      (0, _createClass2["default"])(_class, null, [{
        key: "normalize",

        /**
         * Maps search results to something like a familiar schema.
         */
        value: function () {
          var _normalize = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee(items) {
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", items.map(function (x) {
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
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function normalize(_x) {
            return _normalize.apply(this, arguments);
          }

          return normalize;
        }()
      }]);

      function _class(props) {
        var _this;

        (0, _classCallCheck2["default"])(this, _class);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(_class).call(this, props));
        _this.searchEngineType = props.searchType;
        _this.dynamicURL = apiEndPoint;
        _this.sortOptions = [{
          title: 'Relevance',
          value: 'relevance'
        }, {
          title: 'Date',
          value: 'date'
        }, {
          title: 'Alphabetical',
          value: 'alpha'
        }];
        _this.state = {
          searchEngine: false,
          searchParams: props.defaultParams,
          selectedFacets: props.selectedFacets || [],
          totalFacets: {},
          facetsResults: {},
          searchLink: ''
        };
        _this.handleSortChange = _this.handleSortChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handlePageChange = _this.handlePageChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handlePageSizeChange = _this.handlePageSizeChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleTermChange = _this.handleTermChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFacetChange = _this.handleFacetChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.setUrl = _this.setUrl.bind((0, _assertThisInitialized2["default"])(_this));
        _this.staticFacets = _this.staticFacets.bind((0, _assertThisInitialized2["default"])(_this));
        _this.filteredFacets = _this.filteredFacets.bind((0, _assertThisInitialized2["default"])(_this));
        _this.resetFacets = _this.resetFacets.bind((0, _assertThisInitialized2["default"])(_this));
        _this.paginationResults = _this.paginationResults.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }

      (0, _createClass2["default"])(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var searchEngine = this.state.searchEngine;
          this.resolveParams();

          if (!searchEngine) {
            this.initSearch();
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var location = this.props.location; // Typical usage (don't forget to compare props):

          if (location.search !== undefined && location.search !== prevProps.location.search) {
            this.resolveParams();
            this.fetchData();
          }
        }
        /**
         * Set new URL params after update.
         */

      }, {
        key: "setUrl",
        value: function setUrl() {
          var facets = this.props.facets;
          var searchParams = this.state.searchParams;
          var searchUrl = '/search';
          var newParams = {};
          var facetKeys = Object.keys(facets);
          var facetParams = searchParams.facets;

          if (searchParams.sort) {
            newParams.sort = searchParams.sort;
          }

          if (searchParams.page) {
            newParams.page = searchParams.page;
          }

          if (searchParams.pageSize) {
            newParams.pageSize = searchParams.pageSize;
          }

          if (searchParams.q) {
            newParams.q = searchParams.q;
          }

          var _loop = function _loop(i) {
            var key = facetKeys[i];
            var paramString = '';
            var facetItems = facetParams.filter(function (param) {
              if (param[0] === key) {
                return param[1];
              }

              return false;
            });

            for (var x = 0; x < facetItems.length; x += 1) {
              paramString += "".concat(facetItems[x][1], ",");
            }

            paramString = paramString.slice(0, -1);

            if (paramString) {
              newParams[key.toLowerCase()] = paramString;
            }
          };

          for (var i = 0; i < facetKeys.length; i += 1) {
            _loop(i);
          }

          var searchUrlParams = "".concat(searchUrl, "?").concat(_queryString["default"].stringify(newParams));
          this.setState({
            searchLink: searchUrlParams
          });

          if (window !== undefined) {
            window.history.pushState({}, 'Search', "".concat(searchUrlParams));
          }
        }
        /**
         * Called on page load. Inits search engine and plugs in params to search.
         */

      }, {
        key: "initSearch",
        value: function () {
          var _initSearch = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee2() {
            var facets, searchType, searchEngine, _ref, data;

            return _regenerator["default"].wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    facets = this.props.facets;
                    searchType = this.searchEngineType;
                    searchEngine = new _search["default"][searchType]();

                    if (!(searchType === 'Lunr')) {
                      _context2.next = 10;
                      break;
                    }

                    _context2.next = 6;
                    return _axios["default"].get(apiEndPoint);

                  case 6:
                    _ref = _context2.sent;
                    data = _ref.data;
                    _context2.next = 10;
                    return searchEngine.init(data, facets);

                  case 10:
                    this.setState({
                      searchEngine: searchEngine
                    });
                    _context2.next = 13;
                    return this.fetchData(true);

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function initSearch() {
            return _initSearch.apply(this, arguments);
          }

          return initSearch;
        }()
      }, {
        key: "resolveParams",
        value: function resolveParams() {
          var _this$props = this.props,
              location = _this$props.location,
              facets = _this$props.facets;
          var searchParams = this.state.searchParams;
          var selectedFacets = this.state.selectedFacets;

          var queryParams = _queryString["default"].parse(location.search);

          if (queryParams && queryParams.sort) {
            searchParams.sort = queryParams.sort;
          }

          if (queryParams && queryParams.page) {
            searchParams.page = parseInt(queryParams.page, 10);
          }

          if (queryParams && queryParams.pageSize) {
            searchParams.pageSize = parseInt(queryParams.pageSize, 10);
          }

          if (queryParams && queryParams.q) {
            searchParams.q = queryParams.q;
          }

          var facetKeys = Object.keys(facets);
          var paramFacetArray = Object.entries(queryParams).filter(function (obj) {
            for (var i = 0; i < facetKeys.length; i += 1) {
              if (facetKeys[i].toLowerCase() === obj[0]) {
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
          searchParams.facets = searchParams.facets.concat(paramFacetArray);
          selectedFacets = selectedFacets.concat(paramFacetArray);
          this.setState({
            searchParams: searchParams,
            selectedFacets: selectedFacets
          });
        }
        /**
         * Fetches data based on state.
         */

      }, {
        key: "fetchData",
        value: function () {
          var _fetchData = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee3() {
            var isInit,
                _this$state,
                searchParams,
                selectedFacets,
                searchEngine,
                _r,
                r,
                items,
                facetsResults,
                total,
                _args3 = arguments;

            return _regenerator["default"].wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    isInit = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : false;
                    _this$state = this.state, searchParams = _this$state.searchParams, selectedFacets = _this$state.selectedFacets, searchEngine = _this$state.searchEngine;

                    if (!isInit) {
                      _context3.next = 8;
                      break;
                    }

                    _context3.next = 5;
                    return searchEngine.query('', [], searchParams.pageSize, searchParams.page, searchParams.sort);

                  case 5:
                    _r = _context3.sent;
                    _context3.next = 8;
                    return this.setState({
                      totalFacets: _r.facetsResults
                    });

                  case 8:
                    _context3.next = 10;
                    return searchEngine.query(searchParams.q, selectedFacets, searchParams.pageSize, searchParams.page, searchParams.sort);

                  case 10:
                    r = _context3.sent;
                    _context3.next = 13;
                    return this.constructor.normalize(r.results);

                  case 13:
                    items = _context3.sent;
                    facetsResults = r.facetsResults, total = r.total;
                    _context3.next = 17;
                    return this.setState({
                      items: items,
                      total: total,
                      facetsResults: facetsResults,
                      show: false
                    });

                  case 17:
                    if (isInit) {
                      _context3.next = 20;
                      break;
                    }

                    _context3.next = 20;
                    return this.setUrl();

                  case 20:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function fetchData() {
            return _fetchData.apply(this, arguments);
          }

          return fetchData;
        }()
        /**
         * Sort Results.
         */

      }, {
        key: "handleSortChange",
        value: function () {
          var _handleSortChange = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee4(event) {
            var searchParams, sort;
            return _regenerator["default"].wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    searchParams = this.state.searchParams;
                    sort = event.target.value;
                    searchParams.sort = sort;
                    this.setState({
                      searchParams: searchParams
                    });
                    _context4.next = 6;
                    return this.fetchData();

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          function handleSortChange(_x2) {
            return _handleSortChange.apply(this, arguments);
          }

          return handleSortChange;
        }()
        /**
         * Pagination.
         */

      }, {
        key: "handlePageChange",
        value: function () {
          var _handlePageChange = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee5(page) {
            var searchParams;
            return _regenerator["default"].wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    searchParams = this.state.searchParams;
                    searchParams.page = parseInt(page, 10);
                    this.setState({
                      searchParams: searchParams
                    });
                    _context5.next = 5;
                    return this.fetchData();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          function handlePageChange(_x3) {
            return _handlePageChange.apply(this, arguments);
          }

          return handlePageChange;
        }()
        /**
         * Change Page Size.
         */

      }, {
        key: "handlePageSizeChange",
        value: function () {
          var _handlePageSizeChange = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee6(event) {
            var searchParams, pageSize;
            return _regenerator["default"].wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    searchParams = this.state.searchParams;
                    pageSize = parseInt(event.target.value, 10);
                    searchParams.page = 1;
                    searchParams.pageSize = parseInt(pageSize, 10);
                    _context6.next = 6;
                    return this.fetchData();

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          function handlePageSizeChange(_x4) {
            return _handlePageSizeChange.apply(this, arguments);
          }

          return handlePageSizeChange;
        }()
        /**
         * Search Term update.
         */

      }, {
        key: "handleTermChange",
        value: function () {
          var _handleTermChange = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee7(event, reset) {
            var searchParams, term;
            return _regenerator["default"].wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    searchParams = this.state.searchParams;

                    if (reset) {
                      term = '';
                    } else {
                      term = event.target.value;
                    }

                    searchParams.q = term;
                    this.setState({
                      searchParams: searchParams
                    });
                    _context7.next = 6;
                    return this.fetchData();

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));

          function handleTermChange(_x5, _x6) {
            return _handleTermChange.apply(this, arguments);
          }

          return handleTermChange;
        }()
        /**
         * Facet updates.
         */

      }, {
        key: "handleFacetChange",
        value: function () {
          var _handleFacetChange = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee8(e) {
            var _this$state2, selectedFacets, searchParams, facetType, facetValue, active, updatedFacets;

            return _regenerator["default"].wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _this$state2 = this.state, selectedFacets = _this$state2.selectedFacets, searchParams = _this$state2.searchParams;
                    facetType = e.target.name;
                    facetValue = e.target.value;
                    active = e.target.checked;

                    if (selectedFacets !== undefined || selectedFacets.length < 0) {
                      updatedFacets = selectedFacets;
                    }

                    if (active === true) {
                      updatedFacets.push([facetType, facetValue]);
                    } else {
                      updatedFacets = selectedFacets.filter(function (facet) {
                        return facet[1] !== facetValue;
                      });
                    }

                    searchParams.page = 1;
                    searchParams.facets = updatedFacets;
                    _context8.next = 10;
                    return this.setState({
                      searchParams: searchParams,
                      selectedFacets: updatedFacets
                    });

                  case 10:
                    _context8.next = 12;
                    return this.fetchData();

                  case 12:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));

          function handleFacetChange(_x7) {
            return _handleFacetChange.apply(this, arguments);
          }

          return handleFacetChange;
        }()
      }, {
        key: "staticFacets",
        value: function staticFacets(facetKey) {
          var _this$state3 = this.state,
              totalFacets = _this$state3.totalFacets,
              facetsResults = _this$state3.facetsResults;
          var returnedFacets = totalFacets[facetKey].map(function (facet) {
            var hasResults = facetsResults[facetKey].find(function (element) {
              return element[0] === facet[0];
            });

            if (!hasResults) {
              return [facet[0], 0];
            }

            return [facet[0], hasResults[1]];
          });
          return returnedFacets;
        }
      }, {
        key: "filteredFacets",
        value: function filteredFacets(facetKey) {
          var _this$state4 = this.state,
              totalFacets = _this$state4.totalFacets,
              selectedFacets = _this$state4.selectedFacets,
              facetsResults = _this$state4.facetsResults;
          var returnedFacets = totalFacets[facetKey].filter(function (facet) {
            var hasResults = facetsResults[facetKey].find(function (activeFacet) {
              return activeFacet[0] === facet[0];
            });
            var selected = selectedFacets.find(function (selectedFacet) {
              return selectedFacet[1].toLowerCase() === facet[0].toLowerCase() && selectedFacet[0].toLowerCase() === facetKey.toLowerCase();
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
          return returnedFacets;
        }
      }, {
        key: "resetFacets",
        value: function () {
          var _resetFacets = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee9() {
            var facetKey,
                _this$state5,
                selectedFacets,
                searchParams,
                updatedFacets,
                _args9 = arguments;

            return _regenerator["default"].wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    facetKey = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : null;
                    _this$state5 = this.state, selectedFacets = _this$state5.selectedFacets, searchParams = _this$state5.searchParams;

                    if (selectedFacets !== undefined || selectedFacets.length < 0) {
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

                    searchParams.facets = updatedFacets;
                    _context9.next = 7;
                    return this.setState({
                      searchParams: searchParams,
                      selectedFacets: updatedFacets
                    });

                  case 7:
                    _context9.next = 9;
                    return this.fetchData();

                  case 9:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));

          function resetFacets() {
            return _resetFacets.apply(this, arguments);
          }

          return resetFacets;
        }()
      }, {
        key: "paginationResults",
        value: function () {
          var _paginationResults = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee10() {
            var _this$state6, total, searchParams, startingNumber, currentLowestResult, currentHighestResult;

            return _regenerator["default"].wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _this$state6 = this.state, total = _this$state6.total, searchParams = _this$state6.searchParams;
                    startingNumber = total > 0 ? 1 : 0;
                    currentLowestResult = startingNumber + (searchParams.pageSize * searchParams.page - searchParams.pageSize);
                    currentHighestResult = searchParams.pageSize * searchParams.page;

                    if (currentHighestResult > total) {
                      currentHighestResult = total;
                    }

                    return _context10.abrupt("return", {
                      currentHighestResult: currentHighestResult,
                      currentLowestResult: currentLowestResult
                    });

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));

          function paginationResults() {
            return _paginationResults.apply(this, arguments);
          }

          return paginationResults;
        }()
      }, {
        key: "render",
        value: function render() {
          var _this$state7 = this.state,
              items = _this$state7.items,
              facetsResults = _this$state7.facetsResults,
              totalFacets = _this$state7.totalFacets,
              total = _this$state7.total,
              searchParams = _this$state7.searchParams,
              selectedFacets = _this$state7.selectedFacets,
              searchLink = _this$state7.searchLink;
          return _react["default"].createElement(OriginalComponent // eslint-disable-next-line react/jsx-props-no-spreading
          , (0, _extends2["default"])({}, this.props, {
            items: items,
            facetsResults: facetsResults,
            totalFacets: totalFacets,
            total: total,
            searchParams: searchParams,
            selectedFacets: selectedFacets,
            searchLink: searchLink,
            options: {
              sort: this.sortOptions
            },
            searchFunctions: {
              sort: this.handleSortChange,
              pageChange: this.handlePageChange,
              pageSizeChange: this.handlePageSizeChange,
              termChange: this.handleTermChange,
              facetChange: this.handleFacetChange,
              filteredFacets: this.filteredFacets,
              staticFacets: this.staticFacets,
              resetFacets: this.resetFacets,
              paginationResults: this.paginationResults
            }
          }));
        }
      }]);
      return _class;
    }(_react["default"].Component)
  );
}