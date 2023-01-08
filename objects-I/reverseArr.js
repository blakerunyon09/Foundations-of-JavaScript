// Return new reversed array.
const revArr = (arr) => {
  newArr = [];

  for(let i = 0; i < arr.length / 2; i++){ 
    newArr[i] = arr[arr.length - i - 1];
    newArr[arr.length - i - 1] = arr[i];
  }

  return newArr;
}

// Reverse and mutate array in place
const revArrInPlace = (arr) => {
  let temp;
  for(let i = 0; i < arr.length / 2; i++){ 
    temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }

  return arr
}

const arr1 = [1, 2, 3, 4, 5];
revArrInPlace(arr1);

console.log(
  revArr([1, 2, 3, 4, 5]),
  arr1
  )
