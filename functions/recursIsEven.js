const isEven = (num) => {
  const reduceToBin = (int) => {
    if(int > 1) {
      int = reduceToBin(int - 2)
    }
    if(int < 0){
      int = reduceToBin(int + 2)
    }
    return int
  }
  return reduceToBin(num) == 0
}

console.log(isEven(-5), isEven(4))