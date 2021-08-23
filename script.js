// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var passwordText = [];

    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var symbol = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "[", "]", "{", "}", "-", "=", "_", "+"];

    var characters = [];

    var confirmLowerCase = confirm("Would you like to include lowercase characters?");
    if (confirmLowerCase) {
        characters = characters.concat(lowerCase);
    }


    var confirmUpperCase = confirm("Would you like to include uppercase characters?");
    if (confirmUpperCase) {
        characters = characters.concat(upperCase);
    }


    var confirmNumber = confirm("Would you like to add numbers?");
    if (confirmNumber) {
        characters = characters.concat(number);
    }


    var confirmSymbol = confirm("Would you like to add symbols?");
    if (confirmSymbol) {
        characters = characters.concat(symbol);
    }


    var passwordLength = prompt("How many characters would you like your password to be? (8-128 chracters)");

    if (passwordLength < 8 || passwordLength > 128) {
        alert("You must choose between 8-128 characters.");
        return;
    }

    else if (isNaN(passwordLength)) {
        alert("Please enter numbers only.");
    }
// for loops create passwords on selection criteria
    for (var i = 0; i < passwordLength; i++) {
        console.log(i);
        passwordText += characters[Math.floor(Math.random() * characters.length)]
    }

    return passwordText;
}


// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

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
