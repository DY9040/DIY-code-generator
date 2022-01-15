// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function validateLength(passwordlength) {
  passwordlength = number(passwordlength);
  return !(
    Number.isNaN(passwordlength) ||
    paswordlength < 8 ||
    passwordlength > 128
  );
}

function generatePassword() {
  var promptUpperCase = window.confirm("Would you like upper case letters?");
  var promptLowerCase = window.confirm("Would you like lower case letters?");
  var promptSpecialChar = window.confirm("Would you like special characters?");
  var promptNumChar = window.confirm("Would you like numbers?");
  var passwordlength = window.confirm("How many character do you want?");
  
  }
  var promptLowerCase = window.prompt("would you like lower case letters?")

//1. prompt the user for the password criteria
// 1a password length between 8 and 128 characters
// 1b uppercase, lowercase, special characters
// 2 validate the input 
// 3 generate password with criteria
// 4 display password on the page.





return "Your password";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
