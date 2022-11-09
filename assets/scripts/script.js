const splitLog = '==========================='

// Create and array of all the password characters we can use
const passwordCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',
  ':',',',')','(','}','{',']','[','~','-','_','.',];

// Create an array of numbers as a string for selection
const passwordNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Create an array of lower case letters for selection
const passwordLowerCase = [
'a','b','c','d','e','f','g','h','i','j','k','l','m',
'n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Create and array of upper case letters for selection
const passwordUpperCase = [
'A','B','C','D','E','F','G','H','I','J','K','L','M',
'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const passwordMinLength = 8;
const passwordMaxLength = 128;

function passwordOptionInput(){
  var passwordLength = parseInt(prompt('Please Input the Number of Characters to Generate:'),10);

  // check if the user input characters that were not a number for password length
  if (Number.isNaN(passwordLength)){
    alert('Must provide answer in number format!');
    return null;
  }

  // check if the user input too little or too many characters for password lenght
  if (passwordLength < passwordMinLength || passwordLength > passwordMaxLength){
    alert('Password length is below or above the ' + passwordMinLength + '/' + passwordMaxLength + ' character limits!');
    return null
  }
  
  // ask user if they would like to include lowercase letters
  if (confirm('Would you like to include lowercase letters?')){
    var lowerCaseConfirm = 1;
  }  else lowerCaseConfirm = 0;

  // ask user if they would like to include uppercase letters
  if (confirm('Would you like to include uppercase letters?')){
    var upperCaseConfirm = 1;
  } else var upperCaseConfirm = 0;

  // ask user if they would like to include numeric characters
  if (confirm('Would you like to include numeric characters?')){
    var numericConfirm = 1;
  } else numericConfirm = 0;

  // ask user if they would like to include special characters
  if (confirm('Would you like to include special characters?')){
    var specialCharConfirm = 1;
  } else specialCharConfirm = 0;

  // if user does not select at least one character type, ask them to try again
  if (
    lowerCaseConfirm !== 1 && 
    upperCaseConfirm !== 1 &&
    numericConfirm !== 1 && 
    specialCharConfirm !== 1
  ){
    alert('Must have at least one character type selected, try again');
    return null;
  }
  // create dictionary of user selections in binary (1,0) for evaluation later
  var passwordDict = {
    passwordLength: passwordLength,
    lowerCaseConfirm: lowerCaseConfirm,
    upperCaseConfirm: upperCaseConfirm,
    numericConfirm: numericConfirm,
    specialCharConfirm: specialCharConfirm,
  }

  return passwordDict;
}

function randomCharSelector(x){
  var randomIndex = Math.floor(Math.random() * x.passwordLength);
  var randomSelection = x[randomIndex];
}

function createPassword(){
  // declare variables to pull from password option selectors, establish password array for later push, 
  // and establish running total to match password lenght determined by user
  var selectors = passwordOptionInput();
  var passArray = [];
  var running_total = [];
  
  // create loop to randomly select based on password character type and match password lenght input by user
  for(var i=0; i < selectors.passwordLength; i++) {
    if (running_total.length > selectors.passwordLength)  {
      break;
    } else {
      // randomly select from each character type's array (if user selected) and push to the passArray variable
      if (selectors.lowerCaseConfirm == 1) {
        var lowerRand = Math.floor(Math.random() * passwordLowerCase.length);
  
        var lowerRandChar = passwordLowerCase[lowerRand];
        passArray.push(lowerRandChar);
      } else var lowerRandChar = 0;
  
      if (selectors.upperCaseConfirm == 1) {
        var upperRand = Math.floor(Math.random() * passwordUpperCase.length);
  
        var upperRandChar = passwordUpperCase[upperRand];
        passArray.push(upperRandChar);
      } else var upperRandChar = 0;
  
      if (selectors.numericConfirm == 1) {
        var numericRand = Math.floor(Math.random() * passwordNumbers.length);
  
        var numberRandChar = passwordNumbers[numericRand].toString();
        passArray.push(numberRandChar);
      } else var numberRandChar = 0;
  
      if (selectors.specialCharConfirm == 1) {
        var specialRand = Math.floor(Math.random() * passwordCharacters.length);
  
        var specialRandChar = passwordCharacters[specialRand];
        passArray.push(specialRandChar);
      } else var specialRandChar = 0;

      // append passArray into running_total until character selection/length is met
      running_total += passArray[i];
    }  
  }
  return running_total;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create a function that iterates and console logs a parameter
function iteratorFun(x) {
  for(var i=0; i < x.length; i++) {
    // This statement will run each time the loop is executed
    console.log(x[i]);
  }  
  console.log(splitLog);
}