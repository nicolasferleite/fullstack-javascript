let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

function renderTarefas(){
    listElement.innerHTML = "";
    
    tarefas.map((todo) => { // percorro todo o array
        let liElement = document.createElement("li"); //crio os itens da lista
        let tarefaText = document.createTextNode(todo); // crio o texto para cada item da lista

        liElement.appendChild(tarefaText); // mando o texto pro item da lista
        listElement.appendChild(liElement); // manda o item da lista pra lista
    });
}

function adicionarTarefas(){
    if(inputElement.value === ''){ // se ele n digitou nada 
        alert("Digite alguma tarefa!");
        return false;
    }else{
        let novaTarefa = inputElement.value; // criei uma variável pra pegar oq o usuário digitou
        tarefas.push(novaTarefa); //puxo o input pra lista
        inputElement.value = ''; // limpo o input
        renderTarefas();
    }
}

buttonElement.onclick = adicionarTarefas;