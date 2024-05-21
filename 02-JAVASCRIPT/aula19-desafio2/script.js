// DESAFIO

// QUESTÃO 01

/*
    Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, positivo ou igual a zero. A função deve retornar uma string indicando o resultado.
*/

let resultado = (numero) => {
    if(numero > 0){
        console.log("NÚMERO POSITIVO");
    } else if(numero < 0){
        console.log("NÚMERO NEGATIVO");
    } else{
        console.log("NÚMERO IGUAL A ZERO");
    }
};

resultado(1);
resultado(-1);
resultado(0);

console.log("=====================");

// QUESTÃO 02

/*
    Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe dentro do seu array de números. 
*/

let res = (numeros, escolhido) => {
    let verifica = numeros.includes(escolhido);
    console.log(verifica);
};

res([1,2,3], 2);
res([15,21,23], 6);
res([1,2,3,4,5,6], 4);

console.log("======================");

//QUESTÃO 03

/*
    Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 e o resultado deve mostrar apenas o produto que tem o preço igual a R$20:
*/

const products = [
    { name: 'Maça', price: 2.5 },
    { name: 'Coca cola', price: 8 },
    { name: 'Guarana', price: 5 },
    { name: 'Chocolate', price: 20 }
];

let a = products.find((produto) => produto.price === 20);
console.log(a);

console.log("=====================");

// QUESTÃO 04
/*
    Com o mesmo array de produtos acima como você pode Filtrar Produtos com Preço Menor que R$8 ?
*/

let b = products.filter((produto) => produto.price < 8);
console.log(b);