"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetSelectedFacets = resetSelectedFacets;
exports.buildInitialFacets = buildInitialFacets;
exports.setSelectedFacets = setSelectedFacets;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

// Since all facets are kept in one array, this function serves two purposes:
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
}

function setSelectedFacets(eventTarget, selectedFacets, singular) {
  var facetType = eventTarget.name;
  var facetValue = eventTarget.value;
  var active = eventTarget.checked;
  var updatedFacets = selectedFacets;
  var newFacetList = [];

  if (singular) {
    updatedFacets = selectedFacets.filter(function (facet) {
      return facet[0] !== facetType;
    });
  }

  if (active === true) {
    newFacetList = [].concat((0, _toConsumableArray2["default"])(updatedFacets), [[facetType, facetValue]]);
  } else {
    newFacetList = updatedFacets.filter(function (facet) {
      return facet[1] !== facetValue;
    });
  }

  return {
    type: 'UPDATE_FACETS',
    data: {
      selectedFacets: newFacetList
    }
  };
}