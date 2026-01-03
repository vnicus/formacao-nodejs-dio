const product = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

//importar apenas algumas funções especificas
const { getProductLabel, getFullName } = require("./services/products");


(async function main() {
    
    console.log("Olá, meu nome é system");

    //chama funçao exportada no arquivo ./services/products.js
    product.getFullName("408", "MousePad")
    product.getProductLabel("Mousepad")

    console.log(config.devArea.production);

    
})();