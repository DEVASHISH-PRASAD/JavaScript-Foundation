/*
11. Unit converter
A local weather station needs to convert temperature data collected in Celsius to Fahrenheit before displaying
it on its website. They want a function that can convert Celsius to Fahrenheit accurately ane efficiently. The
function shoule take input in Celsius ane return output in Fahrenheit. This function will help the weather station
to provide temperature readings that are easily understandable to a wider audience.
*/
const prompt = require("prompt-sync")();
let celsiusInput = prompt("Enter temperature in degree Celsius::");
let celsius = parseFloat(celsiusInput);
function celsiusToFahrenheit(cels) {
  return cels * 1.8 + 32;
}
if (isNaN(celsius)) {
  console.error("Invalid input. Please enter a valid number for temperature.");
} else {
  let fahrenheit = celsiusToFahrenheit(celsius);

  console.log(`Temperature:${fahrenheit}F`);
}
