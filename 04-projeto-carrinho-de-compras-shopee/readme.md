# Projeto: Carrinho de Compras (Shopee) - Terminal

Este projeto é um exemplo simples de um carrinho de compras inspirado na Shopee, implementado em Node.js e executado no terminal. O objetivo é demonstrar operações básicas de um carrinho: criação de itens, adição, remoção, listagem e cálculo do total — tudo via chamadas em código (sem interface gráfica).

## Principais características

- Criar itens com preço, quantidade e cálculo de subtotal
- Adicionar itens ao carrinho
- Remover um item (reduz quantidade ou remove do array)
- Deletar um item por nome
- Calcular e exibir o total do carrinho
- Exibir o conteúdo do carrinho no terminal

## Pré-requisitos

- Node.js (recomendo Node 16 ou superior)
- Git (opcional, para clonar o repositório)

## Instalação

1. Clone o repositório (ou baixe/extraia o zip):

```powershell
git clone <URL-do-repositório>
cd 04-projeto-carrinho-de-compras-shopee
```

2. Instale dependências (não há dependências externas no momento, mas é uma boa prática):

```powershell
npm install
```

## Executando o projeto

Você pode executar o exemplo principal diretamente com o Node:

```powershell
node src/index.js
```

Ou, se preferir, use o script npm adicionado:

```powershell
npm start
```

O arquivo `src/index.js` já contém um exemplo de uso do serviço de carrinho que:

- Cria dois itens (Hotwheels ferrari e Hotwheels lambo)
- Adiciona ao carrinho
- Exibe o carrinho
- Remove itens
- Calcula o total

## Exemplo de saída (aproximado)

Ao rodar `node src/index.js` você verá mensagens semelhantes a:

```
Welcome to the your Shopee Cart! 🛒

📝 Shopee Cart List
1# Hotwheels ferrari - R$20.99 | 2x  Subtotal: 41.98
2# Hotwheels lambo - R$25 - R$25 | 2x  Subtotal: 50

🧾 Shopee cart TOTAL IS:
Total: 91.98
```

Observação: a saída exata depende do comportamento atual das funções no diretório `src/services`. Este README mostra um exemplo baseado no fluxo de `src/index.js`.

## Observações e melhorias sugeridas

- O projeto está intencionalmente simples e sem persistência (dados em memória).
- Sugestões de melhorias:
	- Corrigir/ajustar a lógica de remoção quando a quantidade chega a zero.
	- Adicionar testes unitários (ex.: Jest).
	- Criar uma CLI interativa para manipular o carrinho em tempo real (ex.: using Inquirer).
	- Persistir dados em arquivo JSON ou pequeno banco embutido.

## Como contribuir

1. Abra uma issue descrevendo a sugestão ou bug.
2. Crie uma branch com sua feature/fix.
3. Abra um Pull Request com descrição do que foi alterado.

## Licença

Projeto com propósito educacional — sinta-se à vontade para usar e adaptar.
