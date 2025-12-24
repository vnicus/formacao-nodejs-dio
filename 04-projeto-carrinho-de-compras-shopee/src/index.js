import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

//inicia o carrinho vazio
const cart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart! 🛒");


const item1 = await createItem("Hotwheels ferrari", 20.99, 2);
const item2 = await createItem("Hotwheels lambo", 25.00, 2);


await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

cartService.displayCart(cart);
cartService.removeItem(cart, item1);
cartService.removeItem(cart, item1);

cartService.displayCart(cart)

cartService.calculateTotal(cart);