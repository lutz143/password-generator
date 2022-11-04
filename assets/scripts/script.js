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

iteratorFun(passwordCharacters)
iteratorFun(passwordNumbers)
iteratorFun(passwordLowerCase)
iteratorFun(passwordUpperCase)

const passwordMinLength = 8
const passwordMaxLength = 128





function passwordOptionInput(){
  let passwordLength = parseInt(
    prompt('Please Input the Number of Characters to Generate:'),10);

  return passwordOptionInput;
}

function createPassword(){
  let options = passwordOptionInput();
  let result = [];
}



// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Create a function that iterates and console logs a parameter
function iteratorFun(x){
  for(var i=0; i < x.length; i++) {
    // This statement will run each time the loop is executed
    console.log(x[i]);
  }  
  console.log(splitLog);
}