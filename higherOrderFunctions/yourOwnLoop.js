const { assert } = require("../test/assert.js");

const loop = (start, until, updated, process) => {
  for(let i = start; until(i); i = updated(i)){
    process(i);
  }
}

let num = 5
loop(num, n => n < 10, n => n + 1, () => num++);
assert("Handles a for loop", num == 10).toBeTruthy();
