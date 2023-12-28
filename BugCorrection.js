/*
10. Correct a bug
You are working on an e-commerce website where customers can aee items to their cart. The cart stores the
quantity of each item that the customer wants to purchase in an array of numbers. However, the website is
currently experiencing a bug where the quantity of each item is being recoreee incorrectly by reducing it to
half. As a result, you need to write a JavaScript function that can double the quantity of each item in the cart
array to correct the bug.
*/

function doubleItem(cart) {
  if (!Array.isArray(cart)) {
    console.error("Invalid Cart.");
  } else {
    for (i = 0; i < cart.length; i++) {
      if (cart[i] && typeof cart[i] === "number") {
        cart[i] *= 2;
      } else {
        console.error("Array given is not a quantity array");
      }
    }
  }
  return cart;
}
let cartQuantity = [4, 2, 6, 7];
console.log(cartQuantity);
finalQty = doubleItem(cartQuantity);
console.log(finalQty);
