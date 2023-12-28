/*
15. Calculate the percentage of the discount
A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
show customers how much they can save. Given the original price and the discounted price of a product,
implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
This function could be useful for the store's marketing team to create promotions and offers that attract
customers.
*/
const prompt = require("prompt-sync")();
// Define the arrow function to calculate the discount percentage
let discountPercent = (originalPrice, discountedPrice) => {
  return (discountedPrice * 100) / originalPrice;
};

// Prompt the user to enter the original and discounted prices
let originalPrice = parseFloat(prompt("Enter Original Price: "));
let discountedPrice = parseFloat(prompt("Enter Discounted Price:"));

// Call the discountPercent function with user-provided values
let discountPercentage = discountPercent(originalPrice, discountedPrice);

// Display the calculated discount percentage rounded to two decimal places
console.log("Discount Percent = ", discountPercentage.toFixed(2));
