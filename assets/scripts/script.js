const splitLog = '==========================='

// Create and array of all the password characters we can use
const passwordCharacters = [
    '@','%','+','\\','/',"'",'!','#','$','^','?',
    ':',',',')','(','}','{',']','[','~','-','_','.',
    'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M',
    'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

iteratorFun(passwordCharacters)




function iteratorFun(x){
  for(var i=0; i < x.length; i++) {
    // This statement will run each time the loop is executed
    console.log(x[i]);
  }  
  console.log(splitLog);
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
