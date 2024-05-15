let nomes = ["Nicolas", "Matheus", "Henrique"];

let {0:primeiraPessoa, 2: terceiraPessoa} = nomes;

console.log(primeiraPessoa);
console.log(terceiraPessoa);

let pessoa = {
    nome: "Matheus",
    sobrenome: "Fraga",
    empresa: "Sujeito Programador",
    cargo: "Programador FullStack"
};

const {nome, cargo} = pessoa;
console.log(nome);
console.log(cargo);