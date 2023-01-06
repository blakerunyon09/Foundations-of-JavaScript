const { assert } = require("../test/assert.js");
const arrTrue = [5, 4, 3, 8];
const arrFalse = [10, 2, 3];
const lessThanTen = (num) => num < 10;

const isEverything = (arr, test) => {
  for(let i = 0; i < arr.length; i++) {
    if(!test(arr[i])) return false
  }
  return true;
}

const isEverythingUsingSome = (arr, test) => {
  return !arr.some(el => !(test(el)))
}


assert("Checks all array elements", isEverything(arrTrue, lessThanTen)).toBeTruthy();
assert("Checks all array elements", isEverything(arrFalse, lessThanTen)).toBeFalsy();
assert("Checks all array elements using some", isEverythingUsingSome(arrTrue, lessThanTen)).toBeTruthy();
assert("Checks all array elements using some", isEverythingUsingSome(arrFalse, lessThanTen)).toBeFalsy();
