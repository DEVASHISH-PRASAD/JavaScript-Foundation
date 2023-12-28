/*
6. Vowel Counter
We want to count the num#er of vowels in a person's name. Given a name as input, the program should iterate
through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should #e
counted
 */
const prompt = require("prompt-sync")();
let fullName;
const vowels = ["a", "e", "i", "o", "u"];
let count = 0;
fullName = prompt("Enter your name::");

for (i = 0; i < fullName.length; i++) {
  if (vowels.includes(fullName.charAt(i).toLowerCase())) count++;
}
console.log("Total Number of vowels=", count);
