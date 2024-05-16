// Desafio 1
/*​Crie uma lista de produtos

    1.A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.
    2.Mostre no console quantos produtos tem nessa lista.
    3.Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
    4.Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre também o nome deste produto caso não exista mostre uma mensagem avisando que o produto não foi encontrado.
    5.Remova o segundo item da sua lista.
 
*/

let listaDeProdutos = ["Computador", "Telefone", "Mouse", "Teclado"];

/*1*/
console.log("A lista possui os seguintes produtos: " + listaDeProdutos);

/*2*/
console.log("O tamanho da lista é: " + listaDeProdutos.length);

/*3*/
const removeMouse = listaDeProdutos.filter(p => p !== "Mouse");
console.log("A lista após remove o Mouse: " + removeMouse);

/*4*/
const buscaFind = listaDeProdutos.find(p => p === "Computador");
if(buscaFind){
    console.log(`O produto ${buscaFind} está na lista`);
} else{
    console.log(`Não existe este produto na lista`);
}

/*5*/
console.log(`O item removido foi ${listaDeProdutos.splice(1,1)}`);




console.log("==========================");




// Desafio 2
/*
    Crie uma lista de apenas números 1,3,5,7,0,9​

    1.Ordene essa lista do menor para o maior.
    2.Retire o primeiro numero desta lista.
    3.Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]
*/

let numeros = [1, 3, 5, 7, 0, 9];

/*1*/
console.log(`Lista ordenada: ${numeros.sort()}`);

/*2*/
console.log(`O primeiro item da lista, que foi o removido foi: ${numeros.shift()}`);

/*3*/
console.log(`A lista invertida: ${numeros.reverse()}`);





console.log("==========================");




// Desafio 3
/*
    Crie uma string que contenha o dia de hoje, exemplo:
    let hoje = '20/07/2019';

    Separe essa data em variáveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.
*/

const data = new Date();
const dia = data.getDate();
const mes = data.getMonth() + 1;
const ano = data.getFullYear();
console.log(`${dia}/${mes}/${ano}`);