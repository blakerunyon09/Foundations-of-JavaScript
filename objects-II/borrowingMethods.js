const { assert } = require("../test/assert.js");

let map = {one: true, two: true, hasOwnProperty: true};

// I don't 100% follow this solution. Used the book.
assert("It writes over a known method", Object.prototype.hasOwnProperty.call(map, "one"))
  .toBeTruthy();
