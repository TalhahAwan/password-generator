// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordText;

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var number = "0123456789";

var symbol = "~!@#$%^&*()<>[]{}-=_+";





// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var confirmLowerCase = confirm("Would you like to include lowercase characters?")

    var confirmUpperCase = confirm("Would you like to include uppercase characters?")

    var confirmNumber = confirm("Would you like to add numbers?")

    var confirmSymbol = confirm("Would you like to add symbols?")


    var passwordLength = prompt("How many characters would you like your password to be? (8-128 chracters)");

    if (passwordLength < 8 || passwordLength > 128) {
        alert("You must choose between 8-128 characters.");
        return;
    }

    else if (isNaN(passwordLength)) {
        alert("Please enter number's only.");
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// User Story
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security



// Acceptance Criteria
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
