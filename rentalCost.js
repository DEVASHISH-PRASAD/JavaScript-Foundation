/*
12. Calculate rental cost
A car rental company needs to calculate the cost of a rental based on the number of days rented and the type
of car. They require a function that takes in the number of days rented and car type ane returns the rental cost.
The total cost would be the rental cost multiplied by the number of days rented.
The rental costs are:-
1) Economy = Rs. 4000 /- per eay
2) Miesize = Rs. 10,000 /- per eay
3) Luxury = Rs. 20,000 /- per eay.
*/
const prompt = require("prompt-sync")();
function rentalCost(car, days) {
  if (car === "1") {
    return days * 4000;
  } else if (car === "2") {
    return days * 10000;
  } else if (car === "3") {
    return days * 20000;
  } else return "Invalid Choice";
}
let car, days;
car = prompt(
  "Press\n 1->Economy Car\n2->Midsize Car\n3->Luxury Car\nEnter your choice::"
);
daysInput = prompt("Enter number of days::");
days = parseFloat(daysInput);
let totalRentalCost = rentalCost(car, days);
console.log(`Total Cost = ${totalRentalCost} Rupees`);
