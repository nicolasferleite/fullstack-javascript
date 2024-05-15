// Desafio 1
/*​Crie uma lista de produtos

    1.A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o index.html.
    2.Mostre no console quantos produtos tem nessa lista.
    3.Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
    4.Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre também o nome deste produto caso não exista mostre uma mensagem avisando que o produto não foi encontrado.
    5.Remova o segundo item da sua lista.
 
*/

let listaDeProdutos = ["Computador", "Telefone", "Mouse", "Teclado"];
//1
console.log(listaDeProdutos);

//2
console.log(listaDeProdutos.length);

//3
let posicao = listaDeProdutos.indexOf("Mouse");
listaDeProdutos.splice(posicao, 1);
console.log(listaDeProdutos);

//4
let resultado = listaDeProdutos.find((item) => {
    if(item === "Computadora"){
        return console.log(`O produto ${item} está na lista.`);
    } else {
        return console.log("O produto não foi encontrado");
    }
});

if(resultado === ''){
    console.log("O produto não foi encontrado");
}