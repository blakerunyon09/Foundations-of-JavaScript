const { assert } = require("../test/assert.js");

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(rhs) {
    return new Vector((this.x + rhs.x), (this.y + rhs.y));
  }

  minus(rhs) {
    return new Vector((this.x - rhs.x), (this.y - rhs.y));
  }
}

const vec1 = new Vector(3, 4);
const vec2 = new Vector(1, 1);
let vec3, vec4;

assert("Creates a vector, x", vec1.x).toBe(3);
assert("Creates a vector, y", vec1.y).toBe(4);

vec3 = vec1.plus(vec2);

assert("It will add two vectors, x", vec3.x).toBe(4);
assert("It will add two vectors, y", vec3.y).toBe(5);

vec4 = vec1.minus(vec2);

assert("It will subtract two vectors, x", vec4.x).toBe(2);
assert("It will subtract two vectors, y", vec4.y).toBe(3);
