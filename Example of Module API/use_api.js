// api is simple api object
const api = require("./simple_api");
const string = require("./string")
const x = require("./function");

console.log(api.language, api.direction, api.encoding);
console.log(string);
console.log(x("2"));