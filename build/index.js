"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomCoordinate = generateRandomCoordinate;
exports.generateRandomCoordinates = void 0;
var _coordinates = require("./modules/coordinates");
function generateRandomCoordinate() {
  return {
    latitude: (0, _coordinates.generateRandomLat)(),
    longitude: (0, _coordinates.generateRandomLong)()
  };
}
var generateRandomCoordinates = function generateRandomCoordinates() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var arr = [];
  Array(len).fill(1).forEach(function (item, index) {
    arr.push(generateRandomCoordinate());
  });
  return arr;
};
exports.generateRandomCoordinates = generateRandomCoordinates;