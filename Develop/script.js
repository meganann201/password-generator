var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

  
  
function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like your password to contain? Please choose a length between 8 - 128.");
  // Loop if answer is outside the parameters 
  while (passwordLength <= 7 || passwordLength >= 128) {
    alert("Password length must be between 8-128 characters. Try again!");
    var passwordLength = window.prompt("How many characters would you like your password to contain? Please choose a length between 8 - 128.");
  }
  // alert how many characters password will have
  alert("Your password will have " + passwordLength + " characters");
}