// Spread Operator

/*
let primeiros = [1, 2, 3];
let numeros = [...primeiros, 4, 5, 6];
console.log(numeros);*/

/*
let pessoa = {
    nome: "Nicolas",
    idade: 19,
    cargo: "RH"
};

let novaPessoa = {
    ...pessoa,
    status: "ATIVO",
    cidade: "Cascavel / CE"
};

console.log(novaPessoa);*/

function novoUsuario(info){
    let data = {
        ...info,
        status: "ATIVO",
        inicio: "20/03/2023",
        codigo: "123123"
    }
    console.log(data);
};

novoUsuario({ nome: "Nicolas", sobrenome: "Ferreira", cargo: "DEV"});