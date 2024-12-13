// 8-Sum-Strings-as-Numbers.js

function sumStrings(a, b) {
  let total = BigInt(0)

  if (a === '') {
    let numOfB = BigInt(b)
    total += numOfB
    return String(total)
  } else if (b === '') {
    let numOfA = BigInt(a)
    total += numOfA
    return String(total)
  } else {
    let numOfA = BigInt(a)
    let numOfB = BigInt(b)

    total += numOfA
    total += numOfB

    return String(total)
  }

}

console.log(sumStrings('1', '2')) // => '3') 

console.log(sumStrings('123', '456')) // 579

console.log(sumStrings('', '5'))