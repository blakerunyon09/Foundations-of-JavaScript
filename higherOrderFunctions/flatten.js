const { assert } = require("../test/assert.js");
const arr2D = [[1,2],[3,4],[5,6]];

const flattenArr = (arrToFlatten) => {
  return arrToFlatten.reduce((final, nestedArr) => {
    return [...final].concat(nestedArr);
  }, []);
};

const flatArr = flattenArr(arr2D);

assert("Flattens an arr", flatArr[0] === 1);
assert("Flattens an arr", flatArr[2] === 3);