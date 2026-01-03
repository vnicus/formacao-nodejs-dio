// export default
// difine que por padrão essas funçoes sao exportaveis

exports.connectToDatabase = (dateName) => {

    console.log("se conectando ao banco :", dateName);

}

// Async em export default, vai dps do =
exports.disconnectDatabase = async () => {

    //logica
    console.log("desconectando")

}