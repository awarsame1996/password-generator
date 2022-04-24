// Assignment Code
const generateBtn = document.querySelector("#generate");

//main function to generate random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();
  if (passwordLength) {
    // calling password critera function
    const passwordCriteria = getPasswordCriteria();
    if (passwordCriteria.length === 0) {
      alert("please at least choose an option");
    } else {
      // create random password
      const randomPassword = createRandomPassword(
        passwordLength,
        passwordCriteria
      );
      return randomPassword;
    }
  }
};
// array of lowercase characters for the password
const lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// array of uppercase characters for the password
const upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// array of numerical characters for the password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// array of special characters for the password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// function for getting the password length from user
const getPasswordLength = () => {
  //function for generating a password length from user
  const passwordLength = parseInt(
    prompt("how many characters would you like your password to be?")
  );
  console.log(passwordLength);
  //conditional statement to check if password length is a number, and has the correct length of min 8 characters and max 128 characters
  if (Number.isNaN(passwordLength)) {
    alert("password length must be entered as a number");
    return null;
  }

  if (passwordLength < 8) {
    alert("password length must be more than 8 characters");
    return null;
  }
  if (passwordLength > 128) {
    alert("password length must be less than 128 characters");
    return null;
  }
};
// function for getting the password criteria from user
const getPasswordCriteria = () => {
  const hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters"
  );

  //const to store a boolean if a numerical character is included or not
  const hasNumericalCharacters = confirm(
    "Click OK to confirm including numerical characters"
  );

  // const to store a boolean if a lowercase character is included or not
  const hasLowerCaseCharacters = confirm(
    "Click OK to confirm including lowercase characters"
  );

  // const to store a boolean if a uppercase character is included or not
  const hasUpperCaseCharacters = confirm(
    "Click OK to confirm including uppercase characters"
  );

  //conditional statement to check if user does not include any types of characters
  if (
    !hasLowerCaseCharacters &&
    !hasNumericalCharacters &&
    !hasSpecialCharacters &&
    !hasUpperCaseCharacters
  ) {
    alert("must select at least one character type");
    return null;
  }

  //object to store user input

  const passwordCriteria = {
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
    hasNumericalCharacters: hasNumericalCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
  };
  console.log(passwordCriteria);
  return passwordCriteria;
};

//function for getting a random element from an array
const getRandom = (_passwordCriteria, passwordLength) => {
  var randIndex = Math.floor(Math.random() * passwordLength.length);
  var randElement = passwordLength[randIndex];
  console.log(randElement);
  return randElement;
};

// main function to generate the random password
const createRandomPassword = (passwordLength, passwordCriteria) => {
  var options = getPasswordCriteria();
  getPasswordLength();

  //variable to store password as it's being concatenated*****
  var results = [];

  //array to store types of characters to include in password*****
  var potentialCharacters = [];

  //array that contains one of each type of chosen characters to ensure each will be used
  var guaranteedCharacters = [];

  //check if an options objects exists, if not exit the function
  if (!options) return null;

  //Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    potentialCharacters = potentialCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  //Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lowercase character to guaranteedCharacters
  if (options.hasLowerCaseCharacters) {
    potentialCharacters = potentialCharacters.concat(lowerCaseCharacters);
    guaranteedCharacters.push(getRandom(lowerCaseCharacters));
  }

  //Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random uppercase character to guaranteedCharacters
  if (options.hasUpperCaseCharacters) {
    potentialCharacters = potentialCharacters.concat(upperCaseCharacters);
    guaranteedCharacters.push(getRandom(upperCaseCharacters));
  }

  //Conditional statement that adds array of numerical characters into array of possible characters based on user input
  // Push new random numerical character to guaranteedCharacters
  if (options.hasNumericalCharacters) {
    potentialCharacters = potentialCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));

    //for loop to iterate over the password length, selecting random indices from the array of potential characters
    for (let i = 0; i < options.length; i++) {
      const potentialCharacters = getRandom(potentialCharacters);
      results.push(potentialCharacters);
    }

    //min in at least one of each guaranteed character in the results
    for (let i = 0; i < guaranteedCharacters.length; i++) {
      results[i] = guaranteedCharacters[i];
    }
    //change the results into a string and pass into write
    return results.join("");
  }
};

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
