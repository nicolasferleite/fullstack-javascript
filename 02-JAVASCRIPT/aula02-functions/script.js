var area = document.getElementById('area');
var acessar = document.getElementById('acessar');

function entrar(){
    var nome = prompt("Qual o seu nome?");

    if(nome === '' || nome === null){
        alert("Ops algo deu errado");
        area.innerHTML = "Clique no botão para acessar...";
    }
    else{
        area.innerHTML = "Bem-vindo " + nome + "! ";

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da Conta";
        botaoSair.onclick = sair;


        area.appendChild(botaoSair); // colocando mais um elemento no h2
    }
}

function sair(){
    alert("Até mais!");
    area.innerHTML = "Você saiu";
    acessar.innerText = "Acessar novamente";
}


function mediaAluno(nota1, nota2){
    var media = (nota1 + nota2) / 2;

    if(media >= 7){
        console.log("Aluno aprovado com a média: " + media);
    } else{
        console.log("Aluno reprovado com a média: " + media);
    }
}

function aluno(nome, curso){
    var mensagem = "Seja bem-vindo " + nome + " ao curso de " + curso;
    console.log(mensagem);
}