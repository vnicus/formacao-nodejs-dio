import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

//inicialização de um novo carrinho vazio
const cart = [];

//função para verificar se um carrinho foi inicializado 
cartService.cartIsinitinal(cart);

//instanciando itens, com campos: nome, valor e quantidade que será add no carrinho
const item1 = await createItem("Hotwheels ferrari", 20.99, 2);
const item2 = await createItem("Hotwheels lambo", 25.00, 2);

//adicionando os itens no carrinho
await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

//exbição geral do carrinho
cartService.displayCart(cart);

//remoção do item, na função de remoção é retirada 1 da quantidade do item
cartService.removeItem(cart, item1);
cartService.removeItem(cart, item1); //apos excutar esta linha a funação irá deletar o item do carrinho, pois haverá quantidade igual a 0

//exbição geral do carrinho
cartService.displayCart(cart)

//calculo do total do carrinho
cartService.calculateTotal(cart);