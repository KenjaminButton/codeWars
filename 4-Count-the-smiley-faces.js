// 4-Count-the-smiley-faces.js

//return the total number of smiling faces in the array
function countSmileys(arr) {
  // Edge case empty array
  if (arr.length === 0) {
    return 0
  }

  let smileCount = 0

  for (let item of arr) {
    // console.log(item)
    if (item === ':)' || item === ';)' || item === ':-D' || item === ';D' || item === ':-)' || item === ';~)' || item === ':D' || item === ':~)' || item === ';~D' || item === ';-)' || item === ';-D' || item === ':~D') {
      smileCount += 1
    }
  }
  return smileCount
}


// Incorrect answer for arr=[";]" , ":[" , ";*" , ":$" , ";-D"]: expected 2 to equal 1
// Completed in 2ms
// Should work for random tests
// Incorrect answer for arr=[":~D" , ";(" , ";~)" , ";~>" , ";>" , ":o(" , ":~("]: expected 1 to equal 2

/*
Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]


assert.strictEqual(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
*/

/*
// console.log(countSmileys([])) // should return 0
// console.log(countSmileys([':)', ';(', ';}', ':-D'])) // should return 2;
// console.log(countSmileys([';D', ':-(', ':-)', ';~)'])) // should return 3;
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) // should return 1;
// console.log(countSmileys([':D',':~)',';~D',':)'])) // should return 4
// console.log(countSmileys([':)',':(',':D',':O',':;'] )) // 2
*/

// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) // 1

// Incorrect answer for arr=[":->" , ":-(" , ":)" , ";)" , ";(" , ";~(" , ":>"]: expected 1 to equal 2

// console.log(countSmileys([":->" , ":-(" , ":)" , ";)" , ";(" , ";~(" , ":>"]))
// console.log(countSmileys([";~>" , ";o)" , ";~>" , ";-)" , ";o)" , ":>" , ";D"]))

console.log(countSmileys([";-D" , ";-(" , ";-D" , ":>" , ";->" , ":>" , ":oD"])) // 2