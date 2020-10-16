// Assignment Code
let generateBtn = document.querySelector("#generate");

// Create arrays of all variable types for password generator
let symbols = ["!", "'", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ";", ":", "<", ">", "=", "?", "@", "[", "]", "{", "}", "~", "^"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
let emojis = ["🐷", "🐶", "🐼", "🦊", "🐭","🦁","🐯","🐨","🐻"];


// Write password to the #password input
function writePassword() {
  let passwordText = document.querySelector("#password");

  let newPassword = [];

  let passwordLength = parseInt (prompt ("Please enter a number between 8 and 128"));

  if (passwordLength < 8) {
    alert ("Password length required at least 8 characters")
  };

  if (passwordLength > 128) {
    alert ("Password length required less than or equal to 128 characters")
  };

  if (isNaN(passwordLength)) {
    alert("Password generator must be a number between 8 and 128")
  };

  // Confirm the type of characters user wants to use in password generator
  
  let characterSymbols = confirm ("Do you want to use special characters? (, ; * & %)");
  let characterNumbers = confirm ("Do you want to use numbers?");
  let characterLowerCase = confirm ("Do you want to use lowercase letters?");
  let characterUpperCase = confirm ("Do you want to use uppercase letters?");
  let characterEmojis = confirm ("Do you want to use emojis?");

  // Check if user select at least one type of character

  if (characterSymbols === false && characterNumbers === false && characterLowerCase ===false &&
    characterUpperCase === false && characterEmojis === false ) {
      alert ("Please select at least one type of character")
    };

  // Option character types are selected

  if (characterSymbols === true) {newPassword.push(symbols)};
  if (characterNumbers === true) {newPassword.push(numbers)};
  if (characterLowerCase === true) {newPassword.push(lowerCase)};
  if (characterUpperCase === true) {newPassword.push(upperCase)};
  if (characterEmojis === true) {newPassword.push(emojis)};

  let pwd = "";

  while (pwd.length < length) {
    for (let i = 0; i < newPassword.length; i++) {
      if (pwd.length < length) {
        let randomchars = Math.floor(Math.random() *newPassword[i].length)
        pwd += newPassword[i][randomchars]
      }
    }    
  }

  console.log(pwd, `password length: ${pwd.length}`)

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
