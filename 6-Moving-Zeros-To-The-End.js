// 6-Moving-Zeros-To-The-End.js

function moveZeros(arr) {
  const newArr = []

  let zeroCount = 0
  for (let item of arr) {
    if (item !== 0) {
      newArr.push(item)
    } 
    if (item === 0) {
      zeroCount += 1
    }
  }
  for (let i=0; i<zeroCount; i++) {
    newArr.push(0)
  }
  return newArr
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]
