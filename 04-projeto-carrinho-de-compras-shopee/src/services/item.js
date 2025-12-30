//criar item com função de subtotal embutido
async function createItem(name, price, quantity) {

    return {
        name,
        price,
        quantity,
        //função que calcula subtotal
        subtotal: () => price * quantity,
    };

}

export default createItem;