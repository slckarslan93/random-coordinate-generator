const coordinates = require("./build/index");
const { generateRandomCoordinates, generateRandomCoordinate } = coordinates;
console.log(generateRandomCoordinate());
console.log(generateRandomCoordinates(10));
