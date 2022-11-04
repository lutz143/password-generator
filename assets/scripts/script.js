const splitLog = '==========================='

// Create and array of all the password characters we can use
const passwordCharacters = [
    '@','%','+','\\','/',"'",'!','#','$','^','?',
    ':',',',')','(','}','{',']','[','~','-','_','.',];

for(var i=0; i < passwordCharacters.length; i++) {
  // This statement will run each time the loop is executed
  console.log(passwordCharacters[i]);
}
console.log(splitLog);

// Create an array of numbers as a string for selection
const passwordNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

for(var i=0; i < passwordNumbers.length; i++) {
  // This statement will run each time the loop is executed
  console.log(passwordNumbers[i]);
}
console.log(splitLog);

// Create an array of lower case letters for selection
const passwordLowerCase = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z',];

for(var i=0; i < passwordLowerCase.length; i++) {
  // This statement will run each time the loop is executed
  console.log(passwordLowerCase[i]);
}  
console.log(splitLog);

// Create and array of upper case letters for selection
const passwordUpperCase = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

for(var i=0; i < passwordUpperCase.length; i++) {
  // This statement will run each time the loop is executed
  console.log(passwordUpperCase[i]);
}  
console.log(splitLog);











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
