function findOutlier(integers){
  const hash = {
    odd: [],
    even: []
  }

  for (let num of integers) {
    if (num % 2 === 0) {
      hash.even.push(num)
    } else {
      hash.odd.push(num)
    }
  }
  // return hash
  if (hash.odd.length === 1) {
    return hash.odd[0]
  }
  if (hash.even.length === 1) {
    return hash.even[0]
  }


}

/*
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
*/

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])) // 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])) // 160