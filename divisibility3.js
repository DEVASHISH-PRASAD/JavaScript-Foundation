/*
9. Check for divisibility.
Writd a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2.
Use a for loop and continue statement.
*/
let num = [
  100, 22, 35, 54, 34, 21, 67, 78, 356, 3534, 23446, 7474, 345, 234, 6546,
];

for (i = 0; i < num.length; i++) {
  if (num[i] % 3 === 0) {
    if (num[i] % 2 === 0) {
      continue;
    } else {
      console.log(num[i]);
    }
  }
}
