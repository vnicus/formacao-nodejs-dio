//instanciando objs personsangens
const player1 = {
    Nome: "Mario",
    Velocidade: 4,
    Manobrabilidade: 3,
    Poder: 3,
    Pontos: 5,
};

const player2 = {
    Nome: "Bowser",
    Velocidade: 5,
    Manobrabilidade: 2,
    Poder: 5,
    Pontos: 5,
};

// Rola dado
async function rollDice() {

    return Math.floor(Math.random() * 1) + 1;

} //end rollDice

//sortear bloco de pista
async function getRandomBlock() {

    let random = Math.random();

    let result;

    switch (true) {

        case random < 0.33:

            result = "RETA";

            break;

        case random < 0.66:

            result = "CURVA";

            break;

        default:

            result = "CONFRONTO"

            break;
    }

    return result
}

//Log resultado do dado
async function logRollResult(characterName, block, diceResult, attribute, item, turbo) {

    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
    if (item != null)
        console.log(`- Item recebido ${item}`);
    if (turbo != 0 && turbo != null)
        console.log(`- Pegou turbo, +1 ponto`);
    console.log();
}

//sorte item ao fazer o confronto
async function giveItem() {

    let random = Math.random();

    let result;

    switch (true) {
        case random < 0.55:

            result = "CASCO";

            break;

        case random > 0.55:

            result = "BOMBA";

            break;
    }

    return result;

}

//sorte se irá pegar turbo
async function getTrbo() {

    let random = Math.random();

    let result;

    switch (true) {
        case random < 0.55:

            result = 0;

            break;

        case random > 0.55:

            result = 1;

            break;
    }

    return result;

}


//moto da corrida
async function playRaceEngine(character1, character2) {

    for (let round = 1; round < 6; round++) {

        console.log(`🏁 Rodada - ${round}`);

        // sortear bloco
        let block = await getRandomBlock();
        console.log(`🚥 Bloco: ${block} \n`)


        // rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        //pistas
        if (block === "RETA") {

            let turboPlayer1 = await getTrbo();
            let turboPlayer2 = await getTrbo();

            totalTestSkill1 = diceResult1 + character1.Velocidade;
            totalTestSkill2 = diceResult2 + character2.Velocidade;

            await logRollResult(
                character1.Nome,
                "velocidade",
                diceResult1,
                character1.Velocidade,
                null,
                turboPlayer1
            );

            await logRollResult(
                character2.Nome,
                "velocidade",
                diceResult2,
                character2.Velocidade,
                null,
                turboPlayer2
            );
            if (turboPlayer1 != 0 && turboPlayer1 != null)
                character1.Pontos++
            if (turboPlayer2 != 0 && turboPlayer2 != null)
                character2.Pontos++;

        }

        if (block === "CURVA") {

            totalTestSkill1 = diceResult1 + character1.Manobrabilidade;
            totalTestSkill2 = diceResult2 + character2.Manobrabilidade;

            await logRollResult(
                character1.Nome,
                "manobrabilidade",
                diceResult1,
                character1.Manobrabilidade
            );

            await logRollResult(
                character2.Nome,
                "manobrabilidade",
                diceResult2,
                character2.Manobrabilidade
            );

        }

        if (block === "CONFRONTO") {

            //soma o resultado do dado com o atributo
            let powerResult1 = diceResult1 + character1.Poder;
            let powerResult2 = diceResult2 + character2.Poder;

            let itemPlayer1 = await giveItem();
            let itemPlayer2 = await giveItem();

            //msg de confronto
            console.log(`${character1.Nome} confrontou com ${character2.Nome}!! 🥊`);


            //exibir msg no console de forma pretty✨
            await logRollResult(
                character1.Nome,
                "poder",
                diceResult1,
                character1.Poder,
                itemPlayer1
            );

            await logRollResult(
                character2.Nome,
                "poder",
                diceResult2,
                character2.Poder,
                itemPlayer2
            );

            //verificação de quem ganho o combate
            if (powerResult1 > powerResult2 && character2.Pontos > 0) {
                console.log(`${character1.Nome} atingiu ${character2.Nome} com ${itemPlayer1} e perdeu ${itemPlayer1 === "CASCO" ? "1 ponto 🐢" : "2 pontos 💣"}`);

                if (itemPlayer1 === "CASCO")
                    character2.Pontos--;
                else if (itemPlayer1 === "BOMBA")
                    character2.Pontos -= 2;

            }

            if (powerResult2 > powerResult1 && character1.Pontos > 0) {
                console.log(`${character2.Nome} atigiu ${character1.Nome} com ${itemPlayer2} e perdeu ${itemPlayer2 === "CASCO" ? "1 ponto 🐢" : "2 pontos 💣"}`);

                if (itemPlayer2 === "CASCO")
                    character1.Pontos--;
                else if (itemPlayer2 === "BOMBA")
                    character1.Pontos -= 2;

            }

            console.log(powerResult2 === powerResult1 ? "Confronto Empatado! Nenhum ponto perdido" : "");

        }

        if (totalTestSkill1 > totalTestSkill2) {

            console.log(`${character1.Nome} marcou 1 ponto! \n`);
            character1.Pontos++;

        } else if (totalTestSkill2 > totalTestSkill1) {

            console.log(`${character2.Nome} marcou 1 ponto! \n`);
            character2.Pontos++;

        }

        console.log(character1.Nome, "pontos :", character1.Pontos, "|", character2.Nome, "pontos :", character2.Pontos)

        console.log("----------------------------------");

    }// fim for

} //fim playEngine

async function declareWinner(character1, character2) {
    console.log("Resultado final:");
    console.log(`${character1.Nome}: ${character1.Pontos} pontos(s)`);
    console.log(`${character2.Nome}: ${character2.Pontos} pontos(s)`);

    //clean ifs
    if (character1.Pontos > character2.Pontos)
        console.log(`${character1.Nome} venceu a corrida!🏆`);
    else if (character2.Pontos > character1.Pontos)
        console.log(`${character2.Nome} venceu a corrida!🏆`);
    else console.log("A corrida terminou em empate");
}

//função principal, uma função auto invocavel 
// declaração de  Auto Invoke (function nomefuncao(){})()
(async function main() {

    console.log(`🏁🚨 Corrida entre ${player1.Nome} e ${player2.Nome} començando... \n`);

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2)

})();
