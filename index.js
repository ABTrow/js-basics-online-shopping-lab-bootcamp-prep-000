var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  let newItem = {itemName: item, itemPrice: Math.floor(Math.random() * 100) };
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}.`;
  } else {
    let str = "In your cart, you have "
    for (let i = 0; i < cart.length; i++) {
      if (i !== cart.length - 1) {
        str += `${itemName} at \$${itemPrice}, `;
      } else {
        str += `and ${itemName} at \$${itemPrice}.`;
      }
    }
    return str;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
