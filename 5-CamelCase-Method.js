// 5-CamelCase-Method.js


String.prototype.camelCase=function(){
  const param = this.valueOf()
  const arrayOfParams = param.split(' ')

  const newArr = []
  for (let word of arrayOfParams) {
    const firstPart = word.slice(0, 1).toUpperCase()
    const secondPart = word.slice(1)
    newArr.push(firstPart + secondPart)
  }
  
  return newArr.join('')
}

console.log('hello case'.camelCase())
console.log('camel case word'.camelCase())

/*
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
*/

// [String: 'hello case']
// undefined
// [String: 'camel case word']
// undefined

const str = "hello";
const firstPart = str.slice(0, 1); // Get the first character
const secondPart = str.slice(1); 