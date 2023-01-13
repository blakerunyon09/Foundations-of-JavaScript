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

  [Symbol.iterator] = function() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group
    this.position = 0;
  }

  next() {
    if(this.position >= this.group.list.length) return { done: true };
    return { value: this.group.list[this.position++], done: false };;
  }
}


const group1 = Group.from([1, 2, 3]);
let i = 0;
for(let item of group1) {
  assert("It iterates on a class", item).toBe(++i)
};
