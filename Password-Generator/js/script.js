// Assignment code here
var lowerCaseArr = [
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
var upperCaseArr = ["A",
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
  "Z",];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Add event listener to generate button
function generatePassword() {
  var password = "";
  var passwordLength = 0;
  var possChar = []

  //ask password length can not be shorter than 8 nor longer than 128
  passwordLength = window.prompt("How long do you want your password?");
   //ask lowercase
  var includeLowerCase = window.confirm("Do you want lower case?");
  var includeUpperCase = window.confirm("Do you want upper case?");
  var includeSpecialCharecters = window.confirm("Do you want any special charecters?");
  var includeNumbers = window.confirm("Do you want numbers?");

  if (includeLowerCase == true) {
    for (let i = 0; i < lowerCaseArr.length; i++) {
      possChar.push(lowerCaseArr[i])
    }
  }
  if (includeUpperCase == true) {
    for (let i = 0; i < upperCaseArr.length; i++) {
      possChar.push(upperCaseArr[i])
  }
  if (includeSpecialCharecters) {
    for (let i = 0; i <specialCharectersArr.length; i++) {
      possChar.push(specialCharectersArr[i])
  }
  if (includeNumbers) {
    for (let i = 0; i < numberArr.length; i++) {
      possChar.push(numberArrr[i])
  }
  console.log(possChar)
  //create password for the user
  //generate randomlowercasletter
  var randomPossChar = function () {

    return lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)];
  };

  //function to generate randomuppercase
  var randomUpperCase = function () {

    return upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)];
  };


  //function to generate randomspecialcharecter
  var randomSpecialCharecter = function () {
    var specialCharecterArr = ["@", "%", "+", "!", "#", "$", "^", "?", ":", ",", "(", ")", "/", "{", "}", "[", "]", "~"];
    return specialCharecterArr[Math.floor(Math.random() * specialCharecterArr.length)];
  };

  //function to generate randomnumber
  var randomNumber = function () {
    var numberArr = [1,2,3,4,5,6,7,8,9,0];
    return numberArr[Math.floor(Math.random() * numberArr.length)];
  };

  //loop to concatenate random charecters to password variable
  for (i = 0; i < passwordLength; i++) {
    password = password + randomLowerCase();
  }

  //display password on page
  console.log(password);
};

//event listener for password button clicks
generateBtn.addEventListener("click", generatePassword);