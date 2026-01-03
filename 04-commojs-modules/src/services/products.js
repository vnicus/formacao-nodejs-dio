// Todas as funções que lidam com produto
async function getFullName(codeId, productName) {

    console.log("\n");
    console.log("product", codeId, "--", productName);
    await doBreakLine();

}

async function getProductLabel(productName) {

    console.log("Product:", productName);
    await doBreakLine();

}

// hidden member
// hidden function - uma função escondida que faz sentido na logica desse arquivo, não preciso exporta-la
async function doBreakLine() {

    console.log("\n");

}

// pode ser feita a exportação de função e variaveis de forma misturada, não precisa ser em arquivos separados
const productType = {
    version: "digital",
    tex: "x1",
};


// exporte tudo que estiver dentro da chaves
module.exports = {

    getFullName,
    getProductLabel,
    productType,
};