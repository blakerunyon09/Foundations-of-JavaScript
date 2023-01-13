const { assert } = require("../test/assert.js");
class Group {
  constructor() {
    this.list = [];
  }

  static from(fromList) {
    const newGroup = new Group();
    for(const item of fromList) {
      newGroup.add(item);
    }
    return newGroup;
  }

  has(key) {
    for(const item of this.list) {
      if(item === key) return true;
    }
    return false;
  }

  add(newItem) {
    if(!this.has(newItem)){ 
      this.list = [...this.list, newItem];
      return true;
    } else {
      return false;
    }
  }

  delete(key) {
    for(let i = 0; i < this.list.length; i++) {
      if(this.list[i] === key){
        this.list = [...this.list.filter(item => item !== key)];
        return true;
      }
    }
    return false;
  }
}

const group1 = new Group();
assert("It creates an empty group", group1.list.length).toBe(0);

const group2 = Group.from([2, 3, 4]);
assert("It creates a group from an array", group2.list[0]).toBe(2);

const group3 = Group.from([2, 3, 4, 4, 2, 5]);
assert("It creates a unique group from an array", group3.list.length).toBe(4);

const group4 = Group.from([1, 2, 3]);
assert("It checks if list has item", group4.has(2)).toBeTruthy();
assert("It checks if list doesn't have an item", group4.has(-1)).toBeFalsy();

const group5 = Group.from([6, 7, 8]);
group5.add(9);
group5.add(6);
assert("It will add a unique item", group5.has(9)).toBeTruthy();
assert("It will not add a duplicate item", group5.list.length).toBe(4);

const group6 = Group.from([3, 4, 5]);
group6.delete(4);
assert("It will delete a known value", group6.has(4)).toBeFalsy();
assert("It will not delete an unkown value", group6.delete(-1)).toBeFalsy();
