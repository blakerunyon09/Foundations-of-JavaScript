// Create range array, by optional steps
const range = (start, stop, step=1) => {
  const arr = []

  for(let i = start; i <= stop; i += step){
    arr.push(i)
  }

  return arr
}

// Sum an array
const sum = (...range) => {
  int = 0;
  for(let i = 0; i < range.length; i++){
    int += range[i];
  }
  return int;
}

console.log(
  sum(...range(3, 10, 3)),
  sum(...range(3, 10))
  )
