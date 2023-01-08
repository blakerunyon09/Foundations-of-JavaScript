// Return a list object, from an array
const arrayToList = (arr) => {
  let list = null;
// WORK BACKWARDS
  for(let i = arr.length - 1; i >= 0; i-- ){
    item = {
      value: arr[i],
      rest: list
    }

    list = item;
  }

  return list;
}

console.log(
  arrayToList([1, 3, 4])
)

// Return an array, from a list object
const listToArray = (list) => {
  let arr = [];

  const listStep = (listChunk) => {
    arr.push( listChunk.value)
    if(listChunk.rest == null){
      return
    }
    listStep(listChunk.rest)
  }

  listStep(list)

  return arr;
}

console.log(
  listToArray(arrayToList([1, 3, 4]))
  )

// Prepend an item to a list
const prepend = (item, list) => {
  return {
    value: item,
    rest: {
      ...list
    }
  }
}

console.log(
  prepend(0, arrayToList([1, 3, 4]))
)

// Return nth item in list
const nth = (list, index) => {
  if(index == 0) return list.value
  else return nth(list.rest, index -1)
}

console.log(
  nth(arrayToList([1, 3, 4]), 2)
)