const { assert } = require("../test/assert.js");

// Deep compares two objects
const deepComp = (obj1, obj2) => {
  let isEqual = true;
  if(obj1 === null || obj2 === null) isEqual = false;
  else if(typeof obj1 !== "object" || typeof obj2 !== "object") isEqual = false;
  else if(obj1 === obj2) isEqual = true;
  else {
    for(let key in obj1){
      if(obj1[key] === obj2[key]) continue
      else if(typeof obj1[key] === "object") {
        isEqual = deepComp(obj1[key], obj2[key])
        if(isEqual == false) break;
      }
      else {
        isEqual = false
        break
      }
    }
  }
  return isEqual;
}

const objNull = null;
const string = "Cha";
const obj1 = { cha: "Bra" }
const obj2 = { cha: "Bra" }
const obj3 = { bra: "Cha" }
const obj4 = { cha: { cha: "Bra" } }
const obj5 = { cha: { cha: "Bra" } }
const obj6 = { cha: { bra: "Cha" } }

assert("Same Object: ", deepComp(obj1, obj1)).toBeTruthy();
assert("Null Object: ", deepComp(objNull, objNull)).toBeFalsy();
assert("Not An Object: ", deepComp(string, obj1)).toBeFalsy();
assert("Not Equal L1 Objects: ", deepComp(obj3, obj2)).toBeFalsy();
assert("Equal L1 Objects: ", deepComp(obj2, obj1)).toBeTruthy();
assert("Strict Equal L1 Objects: ", deepComp(obj1, obj1)).toBeTruthy();
assert("Not Equal L2 Objects: ", deepComp(obj4, obj6)).toBeFalsy();
assert("Equal L2 Objects: ", deepComp(obj4, obj5)).toBeTruthy();
assert("Strict Equal L2 Objects: ", deepComp(obj4, obj4)).toBeTruthy();