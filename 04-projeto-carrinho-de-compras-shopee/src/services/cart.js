//mapeando o que o carrinho pode fazer, os casos de uso da entidade 

//quais acoes meu carrinho pode fazer?

//add item
async function addItem(userCart, item) {

    //adiciona item ao carrinho
    userCart.push(item);

}

//deletar todos de um item especifico
async function deleteItem(userCart, nameItem) {
    const index = userCart.findIndex((item) => item.name === nameItem);

    if (index !== -1)
        userCart.splice(index, 1); //deletando item no vetor
}

//remover item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if (indexFound === -1)
        return console.log('Item não encontrato');

    if (userCart[indexFound].quantity == 1)
        return userCart.splice(item, 1);

    if (userCart[indexFound].quantity > 1)
        return userCart[indexFound].quantity -= 1
}

//calcular total
async function calculateTotal(userCart) {

    // o reduce é paracido um foreach, ele precisa de tres parametros, sendo o primeiro param sendo para salvar o valor, o segundo sendo o param q fica observado o valor de cada casa e o ultimo define o valor inicial

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

    console.log('\n💰 Shopee cart TOTAL IS:')
    console.log(`Total: ${result}`);

}

async function displayCart(userCart) {
    console.log('\n📋 Shopee Cart List');
    userCart.forEach((item, index) => {
        console.log(`${index + 1}# ${item.name} - R$${item.price} | ${item.quantity}x  Subtotal: ${item.subtotal()}`)
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
};