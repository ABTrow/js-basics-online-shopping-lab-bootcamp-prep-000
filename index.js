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
  } else {
    let keys = Object.keys(cart);
    console.log(keys);
    console.log("whyyyy");
    if (keys.length === 1) {
      return `In your cart, you have ${keys[0]} at \$${cart[keys[0]]}.`;
    }
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
