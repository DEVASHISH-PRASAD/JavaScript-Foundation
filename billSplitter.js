/*
13. Bill splitter
A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
it and returns an object that contains the total bill and the bill to be paid by each person in the group.
*/

const prompt = require("prompt-sync")();

function totalBillCalculator(costOfDish, numberOfPeople) {
  const totalBill = costOfDish * numberOfPeople;
  const billPerPerson = totalBill / numberOfPeople;
  // Returning an object
  return {
    totalBill: totalBill,
    billPerPerson: billPerPerson,
  };
}

let costOfDish = 0;
let y = "1"; // Initialize y as a string to match the condition in the while loop

while (y === "1") {
  const costPerDish = parseFloat(prompt("Enter Cost of Dish: "));
  costOfDish += costPerDish;
  y = prompt("Press 1 to add more dish: ");
}

const numberOfPeople = parseInt(prompt("Enter number of people: "), 10);
const totalBill = totalBillCalculator(costOfDish, numberOfPeople);

console.log(
  `Total Bill = ${totalBill.totalBill.toFixed(
    2
  )}\nBill Per Person = ${totalBill.billPerPerson.toFixed(2)}`
);
