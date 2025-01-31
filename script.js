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

  // parameters of password

  var confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumericCharacter = window.confirm("Click OK to confirm if you would like to include numeric characters"); 
  var confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters");

  // validate at least one parameter is selected
  while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
} 

  var passwordCharacters = []
        
  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialCharacter)
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number)
  }
    
  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowercase)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(uppercase)
  }

  // empty string to be filled randomly from for loop
  var randomPassword = ""
      
  for (var i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

// writes password to text area with id of password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
document.querySelector("#generate").addEventListener("click", writePassword);

  





