/*
14. Calculate the final order price
A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
the unit price and quantity of each item.
*/
const calculateTotalCost = (cart) => {
  // Ensure cart is not empty
  if (!cart || cart.length === 0) {
    return 0;
  }
  const totalCost = cart.reduce((acc, item) => {
    if (
      item &&
      typeof item.unitPrice === "number" &&
      typeof item.itemQuantity === "number"
    )
      return acc + item.unitPrice * item.itemQuantity;
    else {
      console.warn("Invalid card item", cart);
      return acc;
    }
  }, 0);
  return totalCost;
};

const cart = [
  { unitPrice: 25, itemQuantity: 4 },
  { unitPrice: 28, itemQuantity: 7 },
];
const totalCost = calculateTotalCost(cart);
console.log("Total Cost:", totalCost);
