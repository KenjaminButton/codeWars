function pigIt(str){
  const results = []
  const sentenceSplit = str.split(' ')
  for (let word of sentenceSplit) {
    if (word === '!' || word === '?') {
      results.push(word)
      return results.join(' ')
    }
    let newWord = ''
    const firstPart = word.slice(0,1)
    const secondPart = word.slice(1)
    // console.log(firstPart)
    // console.log(secondPart)
    newWord += secondPart
    newWord += firstPart
    newWord += 'ay'
    results.push(newWord)
  }
  return results.join(' ')
}

console.log(pigIt('Pig latin is cool')) // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')) // 'hisTay siay ymay tringsay'

