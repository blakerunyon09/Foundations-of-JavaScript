exports.assert = (describe, assertion) => {
  console.log('\x1b[37m', describe)
  return {
    toBe(expected) {
      if(assertion === expected) {
        console.log('\x1b[32m', `Passed`, '\n')
      } else {
        console.log('\x1b[31m', `Failed - Expected ${assertion}, to be ${expected}`, '\n')
      }
    },
    toBeTruthy() {
      if(assertion) {
        console.log('\x1b[32m', `Passed`, '\n')
      } else {
        console.log('\x1b[31m', `Failed - Expected truthy but got ${assertion}`, '\n')
      }
    },
    toBeFalsy() {
      if(!assertion) {
        console.log('\x1b[32m', `Passed`, '\n')
      } else {
        console.log('\x1b[31m', `Failed - Expected falsy but got ${assertion}`, '\n')
      }
    }
  }
}
