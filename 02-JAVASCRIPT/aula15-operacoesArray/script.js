// MAP = PERCORRER TODO UM ARRAY

/*
let lista = ["MATHEUS", "JOSE", "MARIA"];

lista.map((item, index) => {
    console.log(`PASSANDO: ${item} - está na posição ${index}`);
})
*/

//REDUCE = BUSCA REDUZIR UM ARRAY

/*
let numeros = [5, 3, 2];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - valor atual`);
    //console.log(`${indice} - índice atual`);
    //console.log(`${original} - array original`);
    console.log("====================");

    return acumulador += numero;
});

console.log(total);
*/

//FIND = PARA FAZER UMA BUSCA, PRO PRIMEIRO ITEM Q ENCONTRAR

/*
let listagem = [5, 3, "Jose", 2, "Matheus"];
let busca = listagem.find((item) => {
    if(item === "Jose"){
        return console.log("ITEM ENCONTRADO COM SUCESSO");
    }
});
console.log(busca);
*/

// FILTER = DIFERENTE DO FIND Q RETORNA SÓ O PRIMEIRO Q ENCONTRAR, O FILTER RETORNA TODOS Q ENCONTRAR

let palavras = ["Matheus", "Ana", "Jose", "Ricardo Silva", "Sujeito Programador"];

let resultado = palavras.filter((item) => {
    return item.length <= 4;
});

console.log(resultado);