// Assignment Code
const generateBtn = document.querySelector("#generate");
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
  } else return length;
};
// get password criteria function
const getPasswordCriteria = () => {
  //variable to store boolean for inclusion of lowercase character
  const lowercase = confirm("do you want lowercase in your password?");
  //variable to store boolean for inclusion of uppercase character
  const uppercase = confirm("do you want uppercase in your password?");
  //variable to store boolean for inclusion of numeric character
  const numeric = confirm("do you want numeric in your password?");
  //variable to store boolean for inclusion of special character
  const specialCharacter = confirm(
    "do you want special character in your password?"
  );

  //variable to store conditions of the password in array
  const passwordCondition = [];
  //conditional statement for lowercase
  if (lowercase) {
    passwordCondition.push("abcdefghijklmnopqrstuvwxyz");
  }
  //conditional statement for uppercase
  if (uppercase) {
    passwordCondition.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  //conditional statement for numeric
  if (numeric) {
    passwordCondition.push("0123456789");
  }
  //conditional statement for special character
  if (specialCharacter) {
    passwordCondition.push("!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~");
  }
  return passwordCondition;
};

const createRandomPassword = (passwordCriteria, passwordLength) => {
  const passwordArray = [];
  for (let i = 0; i < passwordLength; i += 1) {
    //select random categories from the array
    const randCategoriesIndex = Math.floor(
      Math.random() * passwordCriteria.length
    );
    //get random categories
    const randCategories = passwordCriteria[randCategoriesIndex];
    // get random index
    const randIndex = Math.floor(Math.random() * passwordCriteria.length);
    // get random character
    const randCharacter = randCategories.charAt(randIndex);
    passwordArray.push(randCharacter);
  }
  return passwordArray.join("");
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
