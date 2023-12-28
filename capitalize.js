/*
5. Capitalize
You are building a form where users can enter their names. You want to make sure that the first letter of the
name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
returns the modified string. Otherwise, it returns the original string without any changes.
*/
const prompt = require("prompt-sync")();
let userFirstName, userSecondName, modifiedFirstName, modifiedSecondName;
userFirstName = prompt("Enter your first name::");
userSecondName = prompt("Enter your last name::");
modifiedFirstName =
  userFirstName.charAt(0).toLowerCase() === userFirstName.charAt(0)
    ? userFirstName.charAt(0).toUpperCase() + userFirstName.slice(1)
    : userFirstName;
modifiedSecondName =
  userSecondName.charAt(0).toLowerCase() === userSecondName.charAt(0)
    ? userSecondName.charAt(0).toUpperCase() + userSecondName.slice(1)
    : userSecondName;

console.log("NAME=", modifiedFirstName + " " + modifiedSecondName);
