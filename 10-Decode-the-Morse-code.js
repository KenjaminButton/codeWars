// Declare the Morse code mapping as an array of key-value pairs
const MORSE_CODE_ARRAY = [
  ['-.-.--', '!'],      ['.-..-.', '"'],   ['...-..-', '$'],
  ['.-...', '&'],       ['.----.', "'"],    ['-.--.', '('],
  ['-.--.-', ')'],      ['.-.-.', '+'],     ['--..--', ','],
  ['-....-', '-'],      ['.-.-.-', '.'],    ['-..-.', '/'],
  ['-----', '0'],       ['.----', '1'],     ['..---', '2'],
  ['...--', '3'],       ['....-', '4'],     ['.....', '5'],
  ['-....', '6'],       ['--...', '7'],     ['---..', '8'],
  ['----.', '9'],       ['---...', ':'],    ['-.-.-.', ';'],
  ['-...-', '='],       ['..--..', '?'],    ['.--.-.', '@'],
  ['.-', 'A'],          ['-...', 'B'],      ['-.-.', 'C'],
  ['-..', 'D'],         ['.', 'E'],         ['..-.', 'F'],
  ['--.', 'G'],         ['....', 'H'],      ['..', 'I'],
  ['.---', 'J'],        ['-.-', 'K'],       ['.-..', 'L'],
  ['--', 'M'],          ['-.', 'N'],        ['---', 'O'],
  ['.--.', 'P'],        ['--.-', 'Q'],      ['.-.', 'R'],
  ['...', 'S'],         ['-', 'T'],         ['..-', 'U'],
  ['...-', 'V'],        ['.--', 'W'],       ['-..-', 'X'],
  ['-.--', 'Y'],        ['--..', 'Z'],      ['..--.-', '_'],
  ['...---...', 'SOS']
];

// Step 2: Convert the array to an object properly
const MORSE_CODE_OBJ = Object.fromEntries(MORSE_CODE_ARRAY);

// Step 3: Define the decode function
const decodeMorse = function(morseCode) {
    // Trim spaces and split the Morse code into words
    const words = morseCode.trim().split('   ');

    // Decode each word
    const decodedWords = words.map(word => {
        // Split the word into Morse characters
        const characters = word.split(' ');
        
        // Decode each character using the MORSE_CODE mapping
        const decodedCharacters = characters.map(character => {
            return MORSE_CODE_OBJ[character] || ''; // Return an empty string for unknown characters
        });

        // Join decoded characters to form the decoded word
        return decodedCharacters.join('');
    });

    // Join decoded words to form the final decoded message
    return decodedWords.join(' ');
}

// Testing the decoder function
console.log(decodeMorse('.... . -.--   .--- ..- -.. .')); // Outputs: HEY JUDE
console.log(decodeMorse('... --- ...')); // Outputs: SOS
console.log(decodeMorse('.... . .-.. .-.. ---   .-- --- .-. .-.. -..')); // Outputs: HELLO WORLD