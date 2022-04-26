// Assignment Code
const generateBtn = document.querySelector("#generate");

// get password length function
const getPasswordLength = () => {
  // variable to store length of password
  const length = parseInt(prompt("what is you desired length of password?"));

  //conditional statement to check if the password is a number.

  if (Number.isNaN(length)) {
    alert("please enter a number");
    return null;
  }
  //conditional statement to check if password has more than 8 characters
  else if (length < 8) {
    alert("password length must be more than 8 characters");
    return null;
  }
  //conditional statement to check if password has less than 128 characters
  else if (length > 128) {
    alert("password length must be less than 128 characters");
    return null;
  } else console.log(length);
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
