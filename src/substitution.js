// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26) {
      return false;
    }
    for (let i = 0; i < alphabet.length; i++){
      if(alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i])){
        return false;
      }
    }
    result = [];
    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz ';
    alphabet += " ";
    if (encode){
      for (let i = 0; i < input.length; i++) {
        result.push(alphabet[standardAlphabet.indexOf(input[i])]);
      }
    }
    else {
     for (let i = 0; i < input.length; i++) {
      result.push(standardAlphabet[alphabet.indexOf(input[i])]);
      }
    }
    return result.join("");
  } 
  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };
