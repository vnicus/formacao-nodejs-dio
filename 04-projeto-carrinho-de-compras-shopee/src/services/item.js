//mapendo casos de uso dositens

//criar item com subtotal certo
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