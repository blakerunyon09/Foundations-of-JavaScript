// Write a function that counts the frequency of a key in a string.
const beanCount = (string, key) => {
  count = 0;
  for(i = 0; i < string.length; i++){
    if(key === string[i]) count++
  }
  return count
}

console.log(
  beanCount("cocoa", 'c'), 
  beanCount("mississipi", 'i')
  )