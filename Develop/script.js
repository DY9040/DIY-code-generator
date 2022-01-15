// Assignment code here
const upperCaseStrings = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseStrings = "abcdefghijklmnopqrst";
const specialCharStrings = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const numCharStrings = "0123456789";

function getRandomInt(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function validateLength(passwordLength) {
  passwordLength = Number(passwordLength);
  return !(
    Number.isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128
  );
}
function includesSome(password, possibleChars) {
  return password.split("").some(function (char) {
    return possibleChars.includes(char);
  });
}
var validatePassword = (
  password,
  promptUpperCase,
  promptLowerCase,
  promptSpecialChar,
  promptNumChar,
  passwordLength
) => {
  if (promptUpperCase && !includesSome(password, upperCaseStrings)){
    return false;
  }
  if (promptLowerCase && !includesSome(password, lowerCaseStrings)){
    return false;
  }
  if (promptSpecialChar && !includesSome(password, specialCharStrings)){
    return false;
  }
  if (promptNumChar && !includesSome(password, numCharStrings)){
    return false;
  }
  return password.length === Number(passwordLength);
};

var chooseChars = (charSet, length) => {
  var password = "";
  for (var i = 0; i <length; i++){
    var char = charSet[getRandomInt(0, charSet.length)];
    password += char;
  }
  return password;
};
function generatePassword() {
  var promptUpperCase = window.confirm("Would you like upper case letters?");
  var promptLowerCase = window.confirm("Would you like lower case letters?");
  var promptSpecialChar = window.confirm("Would you like special characters?");
  var promptNumChar = window.confirm("Would you like numbers?");
  var passwordLength = window.prompt("How many character do you want?");
  while (!validateLength(passwordLength)) {
    passwordLength = window.prompt("Sorry, must be between 8 and 128 characters. \n How many do you want?");
  }
  var validChars = "";
  promptUpperCase && (validChars += upperCaseStrings);
  promptLowerCase && (validChars += lowerCaseStrings);
  promptSpecialChar && (validChars+= specialCharStrings);
  promptNumChar && (validChars += numCharStrings);

  var password = "";
  while ( 
    !validatePassword(
      password,
      promptUpperCase,
      promptLowerCase,
      promptSpecialChar,
      promptNumChar,
      passwordLength
      )
  ){
    password = chooseChars(validChars, passwordLength);
  }



//1. prompt the user for the password criteria
// 1a password length between 8 and 128 characters
// 1b uppercase, lowercase, special characters
// 2 validate the input 
// 3 generate password with criteria
// 4 display password on the page.





return password;
}
// Write password to the #password input
function writePassword(event) {
  event.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
