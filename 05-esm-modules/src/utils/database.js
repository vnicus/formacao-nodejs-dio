async function connectToDatabase(dataName) {

    //logica
    console.log("Conectado ao banco", dataName);

}

async function disconnectDatabase() {
    console.log("desconectando do banco de dados")
}

//exportando varias funções 
export { connectToDatabase, disconnectDatabase };

//export default - exportando um funçao/var de forma padrão
export default connectToDatabase;