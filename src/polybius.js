// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i/j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    //create the Polybius Square
    const polybiusSquareFunction = () => {
      let result = []
      for (let i = 0; i < 5; i++){
        let row = []
        for (let j = 0; j <5; j++){
          row.push(alphabet[j + i*5])
        }
        result.push(row)
      }
      return result
    }
    const polybiusSquare = polybiusSquareFunction()
    // encoding the given message
    let result = ""
    if (encode) {
    //creating a helper function to translate letters into pairs of numbers
      const letterEnconding = (polybiusSquare,letter) => {
        for (let row = 0; row<5; row++){
          const lettersInRow = polybiusSquare[row]
          for (let column = 0; column<5; column++){
            const letterInColumn = lettersInRow[column] 
            if (letterInColumn === letter) return `${column+1}${row+1}`
          }
        }
      }
      for (let i = 0; i<input.length; i++) {
        const letter = input[i].toLowerCase()
        // leave space as is
        if (letter === " ") result += " "
        // add 42 if leter is either i or j
        else if ((letter === "i") || (letter === "j")) result += "42"
        // calling the helper function and passing letter into it
        else{
          const letterPtsn = letterEnconding(polybiusSquare,letter)
          result += letterPtsn}
      }
      return result
      }
    // decoding the given numbers into the message
    else {
      // spliting the given number with the pattern of a space  
      const inputArr = input.split(" ")
      // return false if the length of each item in inputArr is odd
      for (let i = 0; i< inputArr.length; i++) {
        const numbersLen = inputArr[i].length
        if (numbersLen%2 != 0) return false 
      }
      //start decoding 
      return inputArr.reduce((acc,numbers, index) => 
      {
        for (let i = 0; i<numbers.length; i += 2) {
         const column = numbers[i] - 1
         const row = numbers[i+1] - 1 
         for (let j = 0; j<polybiusSquare.length; j++){
        //finding the row in the polybiusSquare table matching the given row
           if (row === j) {
              const lettersInRow = polybiusSquare[j]
              for (let k = 0; k<lettersInRow.length; k++){
                //finding the column in the polybiusSquare table matching the given column, then adding the letter up to the "acc" variable
                if (column === k){
                  const letterInColumn = lettersInRow[k]
                  acc += `${letterInColumn}`
                }
              }
            }
          }
        }
      //returning the acc variable, if it is the last item then no need for a space 
      if (index === (inputArr.length - 1)) return `${acc}`
      else return `${acc} `
      },"")
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
