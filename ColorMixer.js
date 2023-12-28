/*
3. Color Mixer
Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
determine the resulting color when the two colors are mixed. The program should print the resulting color
#ased on the following criteria"
L If color1 is "red" and color2 is "#lue" or vice versa, print "purple"P
L If color1 is "red" and color2 is "yellow" or vice versa, print "orange"P
L If color1 is "#lue" and `color2" is "yellow" or vice versa, print "green"P
L If any other com#ination of colors is input, the program should print "Invalid color com#ination"Q
*/

const prompt = require("prompt-sync")();
let color1, color2;
color1 = prompt("Enter First Color::");
color2 = prompt("Enter Second Color::");
let finalColor = color1 + color2;

if (finalColor == "redblue" || finalColor == "bluered") {
  console.log("After mixing color is PURPLE");
} else if (finalColor == "redyellow" || finalColor == "yellowred") {
  console.log("After mixing color is ORANGE");
} else if (finalColor == "blueyellow" || finalColor == "yellowblue") {
  console.log("After mixing color is GREEN");
} else {
  console.log("Invalid Color Combination");
}
