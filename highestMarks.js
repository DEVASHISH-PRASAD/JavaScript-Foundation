/*
4. Highest Marks
A teacher wants to find out the highest marks scored #y a student in a class of five students. The teacher enters
the marks of all five students in an array called "marks". Write a program that iterates through the array and
finds the highest marks scored #y any student in the class. The highest marks must then #e displayed to the
teacher using the console. Make sure you use the ternary operator to find the student with the highest marks
*/
const prompt = require("prompt-sync")();
let a = [];
let highestNumber;
for (i = 0; i < 5; i++) {
  a[i] = prompt("Enter marks::");
}
for (i = 0; i < 4; i++) {
  highestNumber = a[i] > a[i + 1] ? a[i] : a[i + 1];
}
console.log("Highest Marks=", highestNumber);
