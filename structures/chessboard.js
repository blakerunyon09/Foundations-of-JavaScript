// Return checkerboard off size
const size = 10;
let board = "";

for(i = 0; i < size; i++) {
  let swap = i % 2 == 0;
  for(j = 0; j < size; j++){
     if(swap) board += ' '
     else board += '#'
     swap = !swap
  }
  board += '\n'
}

console.log(
  board
  )

// PROVIDED SOLUTION
// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }