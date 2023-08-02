// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
    const inputLowerCase = input.toLowerCase();
    let result = '';
    for (let i = 0; i < inputLowerCase.length; i++){
      let index = alphabet.findIndex((letter) => letter === inputLowerCase[i])
      if (index === -1) {
        result += inputLowerCase[i];
        continue;
      }
      let shiftedIndex = index;
      if (encode) {
        shiftedIndex += shift;
      } else {
        shiftedIndex -= shift;
      }
      if (shiftedIndex < 0) {
          shiftedIndex = alphabet.length + shiftedIndex;
        }else if (shiftedIndex >= alphabet.length) {
          shiftedIndex = shiftedIndex - alphabet.length;
        }
      result += alphabet[shiftedIndex];
    }
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

