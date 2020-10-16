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

  



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
