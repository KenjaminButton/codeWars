function findOdd(A) {
  // Edge case with one value in the array
  if (A.length === 1) {
    return A[0]
  } 
  // Create the hash
  const hash = {}
  for (let num of A) {
    if (hash[num] === undefined) {
      hash[num] = 1
    } else {
      hash[num] += 1
    }
  }

  // Iterate through the values of the hash
  for (let key in hash) {
    if (hash[key] % 2 === 1) {
      return parseInt(key)
    }
  }

}

console.log(findOdd([7]))
console.log(findOdd([0]))
console.log(findOdd([1,1,2]))
console.log(findOdd([0,1,0,1,0]))
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))

/*
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

