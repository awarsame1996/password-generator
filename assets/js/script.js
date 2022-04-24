// Assignment Code
const generateBtn = document.querySelector("#generate");

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

const getPasswordLength = () => {
  return 10;
};

const getPasswordCriteria = () => {
  return [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  ];
};

const createRandomPassword = () => {
  // prompt user for length

  //
  return "kdUE28(@d0";
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
