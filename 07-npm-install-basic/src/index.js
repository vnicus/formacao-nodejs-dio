import chalk from 'chalk';

//rode o comando 'npm i' e depois o comando 'node src/index.js'
console.log(chalk.black.bgGreen('INSTALANDO UMA DEPENDENCIA'));
console.log(chalk.green('npm install <dependencie> ou npm i <dependencie> \n'))

console.log(chalk.black.bgYellow('INSTALANDO UMA DEV DEPENDENCIA'));
console.log(chalk.yellow('npm install <dependencie> -D ou npm i <dependencie> -D'));
console.log(chalk.yellowBright.italic('é necessario colocar o sufixo "-D" ao final do comando\n'));


console.log(chalk.black.bgRed('DESINSTALANDO UMA DEPENDENCIA'));
console.log(chalk.red('npm Uninstall <dependencie> \n'))

console.log(chalk.black.bgBlue('VERIFICAR DEPENDENCIAS INSTALADAS'));
console.log(chalk.blue('npm fund \n'))

console.log(chalk.black.bgCyan('ATUALIZANDO DEPENDENCIAS'));
console.log(chalk.cyan('npm update <dependencie>'))
console.log(chalk.cyanBright.italic('o npm irá verificar no banco de dados, se a versão da dependecia é inferior com a atual instalada, se sim ele realiza a atualização \n'));