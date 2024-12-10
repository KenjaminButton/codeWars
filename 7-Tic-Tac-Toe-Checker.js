function isSolved(board) {
  let line1;
  let line2;
  let line3;

  line1 = board[0]
  line2 = board[1]
  line3 = board[2]

  // Begin Horizontal X winner check
  if (line1[0] === 1 && line1[1] === 1 && line1[2] === 1) return 1 // first row
  if (line2[0] === 1 && line2[1] === 1 && line2[2] === 1) return 1 // second row
  if (line3[0] === 1 && line3[1] === 1 && line3[2] === 1) return 1 // third row
  // End Horizontal X winner check

  // Begin Vertical X winner check
  if (line1[0] === 1 && line2[0] === 1 && line3[0] === 1) return 1 // first column
  if (line1[1] === 1 && line2[1] === 1 && line3[1] === 1) return 1 // second column
  if (line1[2] === 1 && line2[2] === 1 && line3[2] === 1) return 1 // third column
  // End Vertical X winner check
  
  // Begin Horizontal O winner check
  if (line1[0] === 2 && line1[1] === 2 && line1[2] === 2) return 2 // first row
  if (line2[0] === 2 && line2[1] === 2 && line2[2] === 2) return 2 // second row
  if (line3[0] === 2 && line3[1] === 2 && line3[2] === 2) return 2 // third row
  // End Horizontal O winner check

  // Begin Vertical O winner check
  if (line1[0] === 2 && line2[0] === 2 && line3[0] === 2) return 2 // first column
  if (line1[1] === 2 && line2[1] === 2 && line3[1] === 2) return 2 // second column
  if (line1[2] === 2 && line2[2] === 2 && line3[2] === 2) return 2 // third column
  // End Vertical O winner check

  // Begin Diagonal X winner check
  if (line1[0] === 1 && line2[1] === 1 && line3[2] === 1) return 1
  if (line1[2] === 1 && line2[1] === 1 && line3[0] === 1) return 1
  // End Diagonal X winner check
  
  // Begin Diagonal O winner check
  if (line1[0] === 2 && line2[1] === 2 && line3[2] === 2) return 2
  if (line1[2] === 2 && line2[1] === 2 && line3[0] === 2) return 2
  // End Diagonal O winner check

  // Iterate through board and if we find a 0, 
  // there are still moves to be played, else, return -1 for a tie s
  for (let arr of board) {
    for (let subArrItem of arr) {
      if (subArrItem === 0) {
        return -1
      }
    }
  }
  return 0
}

console.log(isSolved(
  [
    [1,2,1],
    [0,1,1],
    [1,2,2]
  ]
))

console.log(isSolved(
  [
    [1,1,2],
    [0,1,1],
    [2,2,1]
  ]
))


// // Begin Horizontal X winner check
// console.log(isSolved(
//   [
//     [1, 1, 1],
//     [0, 2, 2],
//     [0, 0, 0]
//   ]
// ))
// console.log(isSolved(
//   [
//     [0, 2, 2],
//     [1, 1, 1],
//     [0, 0, 0]
//   ]
// ))
// console.log(isSolved(
//   [
//     [0, 2, 2],
//     [0, 0, 0],
//     [1, 1, 1],
//   ]
// ))
// // End Horizontal X winner check

// // Begin Vertical X winner check
// console.log(isSolved(
//   [
//     [1, 2, 2],
//     [1, 2, 2],
//     [1, 0, 0]
//   ]
// ))
// console.log(isSolved(
//   [
//     [0, 1, 2],
//     [1, 1, 2],
//     [0, 1, 0]
//   ]
// ))
// console.log(isSolved(
//   [
//     [0, 2, 1],
//     [0, 0, 1],
//     [1, 2, 1],
//   ]
// ))
// // End Vertical X winner check

// // Begin Horizontal O winner check
// console.log(isSolved(
//   [
//     [2, 2, 2],
//     [0, 1, 1],
//     [1, 0, 0]
//   ]
// ))

// console.log(isSolved(
//   [
//     [0, 2, 2],
//     [2, 2, 2],
//     [0, 0, 0]
//   ]
// ))
// console.log(isSolved(
//   [
//     [0, 2, 2],
//     [0, 0, 0],
//     [2, 2, 2],
//   ]
// ))
// // End Horizontal O winner check

// // Begin Vertical O winner check
// console.log(isSolved(
//   [
//     [2, 1, 2],
//     [2, 1, 2],
//     [2, 0, 0]
//   ]
// ))
// console.log(isSolved(
//   [
//     [0, 2, 1],
//     [1, 2, 2],
//     [0, 2, 0],
//   ]
// ))
// console.log(isSolved(
//   [
//     [0, 2, 2],
//     [0, 1, 2],
//     [2, 1, 2],
//   ]
// ))
// // End Vertical O winner check

// // Check for winner X
// // Check for winner 0
// // if no winner, return -1

// console.log('\n')

// console.log(isSolved(
//   [
//     [2,2,2],
//     [0,1,1],
//     [1,0,0]
//   ]
// ))

// console.log(isSolved(
//   [
//     [2,1,1],
//     [0,1,1],
//     [2,2,2]
//   ]
// ))