const { assert } = require("../test/assert.js");

let map = {one: true, two: true, hasOwnProperty: true};

assert("It writes over a known method", Object.prototype.hasOwnProperty.call(map, "one"))
  .toBeTruthy();
