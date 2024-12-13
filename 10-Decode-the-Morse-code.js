// 10-Decode-the-Morse-code.js


decodeMorse = function (morseCode) {
  const MORSE_CODE = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--', 
    'N': '-.', 
    'O': '---', 
    'P': '.--.', 
    'Q': '--.-', 
    'R': '.-.',
    'S': '...', 
    'T': '-', 
    'U': '..-', 
    'V': '...-', 
    'W': '.--', 
    'X': '-..-',
    'Y': '-.--', 
    'Z': '--..',
    '0': '-----', 
    '1': '.----', 
    '2': '..---', 
    '3': '...--', 
    '4': '....-', 
    '5': '.....',
    '6': '-....', 
    '7': '--...', 
    '8': '---..', 
    '9': '----.',
    ' ': ' ' // Word separation
  };

  console.log('hi')
}

console.log(decodeMorse())

/*
describe("Sample tests", function () {

  it("Example from description", () => {
    assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
  });

  it("Leading and trailing spaces", () => {
    assert.strictEqual(decodeMorse('   .... . -.--   '), 'HEY');
  });

});

*/