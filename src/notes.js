// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
    // you can add any code you want within this function scope
  
    function caesar(input, shift, encode = true) {
      // your solution code here
  // creating an alphabet for encoding
      let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
          alphabet = alphabet.concat(alphabet)
  // return false if shift = 0 or out of the range (-25, 25)
      if ((shift === 0) || (shift <-25) || (shift > 25)) return false
      let result = ""
//     if (encode === true) {
//     for (let i = 0; i<input.length; i++){
//       let inputChar = input[i]
// // return input if there are space or upperCase letters
//       inputChar = inputChar.toLowerCase()
//       if ((inputChar === " ") || (!alphabet.includes(inputChar))) result += inputChar
// // if there are no space or upperCase, start shifting
//       else 
//       {
//         const idxOfInputChar = alphabet.indexOf(inputChar)
// // if shift > 0, start encoding from the index of the input in the first alphabet
//         if (shift > 0) {
//         const newPstn = idxOfInputChar + shift
//         const newChar = alphabet[newPstn]
//         result += newChar}
// // if shift < 0, start enconding from the index of the input in the second alphabet
//         else {
//         const negIdxOfInputChar = alphabet.indexOf(inputChar, idxOfInputChar + 1)
//         const newPstn = negIdxOfInputChar + shift
//         const newChar = alphabet[newPstn]
//         result += newChar
//         }
//       }      
//     }
//   }

//   if (encode === false) {
//     for (let i = 0; i<input.length; i++){
//       let inputChar = input[i]
// // return input if there are space or upperCase letters
//       inputChar = inputChar.toLowerCase()
//       if ((inputChar === " ") || (!alphabet.includes(inputChar))) result += inputChar
// // if there are no space or upperCase, start shifting
//       else 
//       {
//         const idxOfInputChar = alphabet.indexOf(inputChar)
// // if shift > 0, start encoding from the index of the input in the first alphabet
//         if (shift < 0) {
//         const newPstn = idxOfInputChar - shift
//         const newChar = alphabet[newPstn]
//         result += newChar}
// // if shift < 0, start enconding from the index of the input in the second alphabet
//         else {
//         const negIdxOfInputChar = alphabet.indexOf(inputChar, idxOfInputChar + 1)
//         const newPstn = negIdxOfInputChar - shift
//         const newChar = alphabet[newPstn]
//         result += newChar
//         }
//       }      
//     }
//   }
  
  // encode the given message 
  if (encode) {
    for (let i = 0; i<input.length; i++){
      let inputChar = input[i]
  // return input if there are space or upperCase letters
      inputChar = inputChar.toLowerCase()
      if ((inputChar === " ") || (!alphabet.includes(inputChar))) result += inputChar
  // if there are no space or upperCase, start shifting
      else 
      {
        const idxOfInputChar = alphabet.indexOf(inputChar)
  // if shift > 0, start encoding from the index of the input in the first alphabet
        if (shift > 0) {
        const newPstn = idxOfInputChar + shift
        const newChar = alphabet[newPstn]
        result += newChar}
  // if shift < 0, start enconding from the index of the input in the second alphabet
        else {
        const negIdxOfInputChar = alphabet.indexOf(inputChar, idxOfInputChar + 1)
        const newPstn = negIdxOfInputChar + shift
        const newChar = alphabet[newPstn]
        result += newChar
        }
      }      
    }
  }
  
  //decode the given message
  else {
    for (let i = 0; i<input.length; i++){
      let inputChar = input[i]
  // return input if there are space or upperCase letters
      inputChar = inputChar.toLowerCase()
      if ((inputChar === " ") || (!alphabet.includes(inputChar))) result += inputChar
  // if there are no space or upperCase, start shifting
      else 
      {
        const idxOfInputChar = alphabet.indexOf(inputChar)
  // if shift > 0, start encoding from the index of the input in the first alphabet
        if (shift < 0) {
        const newPstn = idxOfInputChar - shift
        const newChar = alphabet[newPstn]
        result += newChar}
  // if shift < 0, start enconding from the index of the input in the second alphabet
        else {
        const negIdxOfInputChar = alphabet.indexOf(inputChar, idxOfInputChar + 1)
        const newPstn = negIdxOfInputChar - shift
        const newChar = alphabet[newPstn]
        result += newChar
        }
      }      
    }
  }
      return result
    }
    // else {}
    
    return {
      caesar,
    };
  })();
  
  module.exports = { caesar: caesarModule.caesar };
  