"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.simpleSearch = exports.Lunr = void 0;

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _lunr = _interopRequireDefault(require("lunr"));

/* eslint-disable max-classes-per-file */
var Search =
/*#__PURE__*/
function () {
  function Search() {
    (0, _classCallCheck2["default"])(this, Search);
  }

  (0, _createClass2["default"])(Search, [{
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {});

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
    /**
     * Queries the records.
     *
     * @param {string} term - Query string to search with.
     * @param {array | string} fields - Array of arrays, [field, value] to
     * search through or a single string.
     * facets.
     * @param {number} pageSize - Number of results to return.
     * @param {number} page - The offset of results to return.
     * @param {array} sort - An array of sorts [field, sortType].
     *
     * @return {object}
     *  Object with {
     *    time: query time (number)
     *    total: total number of results (number)
     *    error: errors (boolean)
     *    errorMessage: error message (string)
     *    results: array of results (array)
     *  Array of object results.
     */

  }, {
    key: "query",
    value: function () {
      var _query = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var term,
            fields,
            pageSize,
            page,
            sort,
            _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                term = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
                fields = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
                pageSize = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : null;
                page = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : null;
                sort = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : null;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function query() {
        return _query.apply(this, arguments);
      }

      return query;
    }()
    /**
     * Validates methods for funcitons.
     */

  }, {
    key: "loadFacets",
    value: function () {
      var _loadFacets = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(items, facets) {
        var that, pageSizeFacets, facetsTotal, facetsResults, facet, facetsSorted, fact, facetsPaged, fac;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = this;
                pageSizeFacets = 1000;
                facetsTotal = that.getFacetInitialTotal(facets, items);
                facetsResults = {};

                for (facet in this.facets) {
                  facetsResults[facet] = {};

                  if (facetsTotal[facet]) {
                    facetsTotal[facet].forEach(function (i) {
                      // eslint-disable-line no-loop-func
                      facetsResults[facet][i] = (facetsResults[facet][i] || 0) + 1;
                    });
                  }
                }

                ; // TODO: separate into func.

                facetsSorted = {};

                for (fact in this.facets) {
                  facetsSorted[fact] = [];
                  facetsSorted[fact] = Object.entries(facetsResults[fact]).sort(function (a, b) {
                    return a[1] > b[1] ? -1 : b[1] > a[1] ? 1 : 0;
                  });
                }

                ; // TODO:

                facetsPaged = {};

                for (fac in facets) {
                  facetsPaged[fac] = facetsSorted[fac].slice(0, pageSizeFacets);
                }

                ;
                return _context3.abrupt("return", facetsPaged);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadFacets(_x, _x2) {
        return _loadFacets.apply(this, arguments);
      }

      return loadFacets;
    }()
  }, {
    key: "getFacetValueHelper",
    value: function getFacetValueHelper(doc, field) {
      if (doc == null) {
        return [];
      }

      if ((0, _typeof2["default"])(doc) == 'object') {
        var pieces = field.split('.');
        var current = pieces.shift();

        if (current === '*') {
          if (Array.isArray(doc)) {
            var values = [];
            var i;
            var join = pieces.join('.');

            for (i = 0; i < doc.length; i += 1) {
              values = values.concat(this.getFacetValueHelper(doc, i + "." + join));
            }

            return values;
          } else {
            return [];
          }
        }

        if (doc[current] !== undefined) {
          // This is the property no need to recurse further.
          if (pieces.length === 0) {
            if (doc == null) {}

            var value = doc[current];
            return [value];
          } else {
            return [].concat(this.getFacetValueHelper(doc[current], pieces.join('.')));
          }
        } else {
          return [];
        }
      } else {
        return [];
      }
    }
  }, {
    key: "getFacetValue",
    value: function getFacetValue(doc, facet, facets) {
      var value = this.getFacetValueHelper(doc, facets[facet].field);
      return value;
    }
  }, {
    key: "getFacetInitialTotal",
    value: function getFacetInitialTotal(facets, results) {
      var that = this;
      var facetsTotal = [];
      results.forEach(function (result) {
        for (var facet in facets) {
          var doc = that.getFacetValue(result, facet, facets);
          facetsTotal[facet] = !facetsTotal[facet] ? [] : facetsTotal[facet]; // We want to flatten the results so there is one big array instead of a
          // combo of array results.

          if (Array.isArray(doc)) {
            doc.forEach(function (item, x) {
              // eslint-disable-line no-loop-func
              facetsTotal[facet].push(item);
            });
          } else {
            if (doc && Object.keys(doc).length !== 0) {
              facetsTotal[facet].push(doc);
            }
          }
        }
      });
      return facetsTotal;
    }
  }, {
    key: "sort",
    value: function sort(_sort, items) {
      var that = this;

      if (_sort === 'date') {
        return items.sort(that.dateCompare);
      } else if (_sort === 'alpha') {
        return items.sort(that.alphaCompare);
      } else if (_sort === 'relevance') {
        return items;
      }

      return items;
    }
  }, {
    key: "dateCompare",
    value: function dateCompare(a, b) {
      if (a.modified > b.modified) return -1;
      if (a.modified < b.modified) return 1;
      return 0;
    }
  }, {
    key: "alphaCompare",
    value: function alphaCompare(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }
  }], [{
    key: "validate",
    value: function validate(items, types) {}
  }, {
    key: "querObjDefaults",
    value: function querObjDefaults() {
      return {
        time: null,
        total: null,
        error: false,
        errorMessage: '',
        results: []
      };
    }
  }, {
    key: "error",
    value: function error(message) {
      return {
        errorMessage: "Error ".concat(message),
        error: true
      };
    }
  }]);
  return Search;
}();

var Lunr =
/*#__PURE__*/
function (_Search) {
  (0, _inherits2["default"])(Lunr, _Search);

  function Lunr() {
    (0, _classCallCheck2["default"])(this, Lunr);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Lunr).apply(this, arguments));
  }

  (0, _createClass2["default"])(Lunr, [{
    key: "init",
    value: function () {
      var _init2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(data) {
        var facets,
            _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                facets = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : null;
                this.facets = facets;
                this.index = _lunr["default"].Index.load(data.index);
                this.docs = data.docs;

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function init(_x3) {
        return _init2.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "query",
    value: function () {
      var _query2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5() {
        var term,
            fields,
            pageSize,
            page,
            sort,
            start,
            searchQuery,
            where,
            paged,
            sorted,
            keyword,
            theme,
            searchString,
            themeString,
            keywordString,
            searchResults,
            items,
            offset,
            facetsResults,
            total,
            results,
            end,
            time,
            error,
            _args5 = arguments;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                term = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : null;
                fields = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : null;
                pageSize = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : null;
                page = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : null;
                sort = _args5.length > 4 && _args5[4] !== undefined ? _args5[4] : null;
                start = performance.now();
                searchQuery = '';
                where = [];
                paged = [];
                sorted = [];
                keyword = [];
                theme = [];
                fields.forEach(function (field) {
                  var key = field[0].toLowerCase();
                  var value = field[1]; // These are common words/characters not in search index.

                  var replaceWords = ['-', '&', 'and', ' to'];
                  replaceWords.map(function (word) {
                    var re = new RegExp(word, 'g');
                    value = value.replace(re, '');
                    return value;
                  });

                  if (key === 'tags') {
                    keyword = keyword.concat(value.split(' '));
                  }

                  if (key === 'topics') {
                    theme = theme.concat(value.toLowerCase().split(' '));
                  }
                }); // Add + to title and description to make sure it is required in the results
                // const searchString = term ? `title:${term}^10 description:${term}^10` : ``;

                searchString = term ? "+*".concat(term, "* ") : '';
                themeString = theme.length ? "+theme:".concat(theme.join('* +theme:*'), "* ") : '';
                keywordString = keyword.length ? "+keyword:".concat(keyword.join('* +keyword:*'), "* ") : '';

                if (themeString) {
                  theme.find(function (term) {
                    // If 'hospitals' only, add a -longterm to remove those from the results.
                    if (term === 'hospitals' && theme.length === 1) {
                      searchQuery += '+theme:hospitals* -theme:longterm ';
                      return searchQuery;
                    }

                    searchQuery += themeString;
                    return searchQuery;
                  });
                }

                if (keywordString) {
                  searchQuery += keywordString;
                }

                if (searchString) {
                  searchQuery += "".concat(searchString);
                }

                searchResults = this.index.search(searchQuery);
                _context5.next = 22;
                return this.mapResults(searchResults);

              case 22:
                items = _context5.sent;
                where = items;
                sorted = this.sort(sort, where);
                offset = (page - 1) * pageSize;
                paged = paged && pageSize ? sorted.slice(offset, offset + pageSize) : sorted;

                if (!this.facets) {
                  _context5.next = 33;
                  break;
                }

                _context5.next = 30;
                return this.loadFacets(items, this.facets);

              case 30:
                _context5.t0 = _context5.sent;
                _context5.next = 34;
                break;

              case 33:
                _context5.t0 = [];

              case 34:
                facetsResults = _context5.t0;
                total = where.length;
                results = paged;
                end = performance.now();
                time = end - start;
                error = {};
                return _context5.abrupt("return", {
                  time: time,
                  facetsResults: facetsResults,
                  total: total,
                  error: error,
                  // TODO: Only return selected fields.
                  fields: [],
                  results: results
                });

              case 41:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function query() {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "mapResults",
    value: function () {
      var _mapResults = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(items) {
        var _this = this;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", items.map(function (item) {
                  var result = _this.docs.find(function (doc) {
                    return item.ref === doc.ref;
                  });

                  var doc = Object.assign(result.doc, item);
                  return doc;
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function mapResults(_x4) {
        return _mapResults.apply(this, arguments);
      }

      return mapResults;
    }()
  }, {
    key: "resultCount",
    value: function () {
      var _resultCount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(results) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", results.length);

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function resultCount(_x5) {
        return _resultCount.apply(this, arguments);
      }

      return resultCount;
    }()
  }]);
  return Lunr;
}(Search);

exports.Lunr = Lunr;

var simpleSearch =
/*#__PURE__*/
function (_Search2) {
  (0, _inherits2["default"])(simpleSearch, _Search2);

  function simpleSearch() {
    (0, _classCallCheck2["default"])(this, simpleSearch);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(simpleSearch).apply(this, arguments));
  }

  (0, _createClass2["default"])(simpleSearch, [{
    key: "query",
    value: function () {
      var _query3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8() {
        var _this2 = this;

        var term,
            fields,
            pageSize,
            page,
            sort,
            start,
            fieldsToReturn,
            where,
            queried,
            paged,
            sorted,
            total,
            facetsResults,
            offset,
            results,
            end,
            time,
            error,
            _args8 = arguments;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                term = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : null;
                fields = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : null;
                pageSize = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : null;
                page = _args8.length > 3 && _args8[3] !== undefined ? _args8[3] : null;
                sort = _args8.length > 4 && _args8[4] !== undefined ? _args8[4] : null;
                start = performance.now();
                fieldsToReturn = null;
                where = [];
                queried = [];
                paged = [];
                sorted = [];

                if (fields) {
                  fieldsToReturn = Object.keys(fields).map(function (key) {
                    return fields[key];
                  });
                }

                if (fields && fields.length > 0) {
                  fields.forEach(function (field) {
                    var key = field[0];
                    var value = field[1];
                    where = _this2.index.filter(function (item) {
                      var facetValue = _this2.getFacetValue(item, key, _this2.facets);

                      if (facetValue === value) {
                        return true;
                      } else if (Array.isArray(facetValue) && facetValue.indexOf(value) > -1) {
                        return true;
                      }

                      if (key in item) {
                        if (item[key] === value) {
                          return true;
                        } else if (Array.isArray(item[key])) {
                          if (item[key].indexOf(value) > -1) {
                            return true;
                          }
                        }
                      }

                      return false;
                    });
                  });
                } else {
                  where = this.index;
                }

                if (term) {
                  queried = where.reduce(function (acc, doc) {
                    var haystack = JSON.stringify(doc);
                    var needleRegExp = new RegExp(term.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'i');
                    var result = needleRegExp.test(haystack);

                    if (result) {
                      acc.push(doc);
                    }

                    return acc;
                  }, []);
                } else {
                  queried = where;
                }

                total = queried.length;

                if (!this.facets) {
                  _context8.next = 21;
                  break;
                }

                _context8.next = 18;
                return this.loadFacets(queried, this.facets);

              case 18:
                _context8.t0 = _context8.sent;
                _context8.next = 22;
                break;

              case 21:
                _context8.t0 = [];

              case 22:
                facetsResults = _context8.t0;
                sorted = this.sort(sort, queried);
                offset = (page - 1) * pageSize;
                paged = paged && pageSize ? sorted.slice(offset, offset + pageSize) : sorted;
                results = paged;
                end = performance.now();
                time = end - start;
                error = false;
                return _context8.abrupt("return", {
                  time: time,
                  facetsResults: facetsResults,
                  total: total,
                  error: error,
                  // TODO: Only return selected fields.
                  fields: fieldsToReturn,
                  results: results
                });

              case 31:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function query() {
        return _query3.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "init",
    value: function () {
      var _init3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(data) {
        var facets,
            _args9 = arguments;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                facets = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : null;
                this.facets = facets;
                this.index = data.docs.map(function (item) {
                  return item.doc;
                });

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function init(_x6) {
        return _init3.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10(index) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", index);

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function getAll(_x7) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "resultCount",
    value: function () {
      var _resultCount2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee11(results) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", results.length);

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function resultCount(_x8) {
        return _resultCount2.apply(this, arguments);
      }

      return resultCount;
    }()
  }]);
  return simpleSearch;
}(Search);

exports.simpleSearch = simpleSearch;
var search = {
  simpleSearch: simpleSearch,
  Lunr: Lunr
};
var _default = search;
exports["default"] = _default;