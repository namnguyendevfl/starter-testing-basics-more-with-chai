// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //creating the standard Alphabet
    const standardAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    // return false if the alphabet is invalid or the length is not equal 26
    if ((!alphabet) ||(alphabet.length !=26)) return false
    // check if there is any repeated character and return false
    alphabet = alphabet.split("")
    let found = null
    alphabet = alphabet.reduce((acc,letter) => { 
      if (acc.includes(letter)) found = 1
      acc.push(letter)
      return acc
    },[])
    if (found) return false 
    // enconding the given input
    if (encode){
      input = input.split("")
      return inputEncoded = input.reduce((acc,letter)=> {
        if (letter === " ") acc += " " // preserve space
        else {
          const idxInStanAlphbet = standardAlphabet.indexOf(letter)
          const encodedLetter = alphabet[idxInStanAlphbet]
          acc += `${encodedLetter}`
        }
        return acc
      },"") 
    }
    //decoding the given input 
    else {
      input = input.split("")
      return inputDecoded = input.reduce((acc,letter)=> {
        if (letter === " ") acc += " " // preserve space
        else {
          const idxInGivnAlphabet = alphabet.indexOf(letter)
          const decodedLetter = standardAlphabet[idxInGivnAlphabet ]
          acc += `${decodedLetter}`
        }
        return acc
      },"") 
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
