let listElement = document.querySelector("#app");
let posts = [];

function nutriApp(){ // .then é se der certo, no caso de sucesso
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts") //puxo a API
    .then((response) => response.json()) // se a api rodar
    .then((json) => {  // se der certo o .json
        posts = json;

        posts.map((item) => {
            let liElement = document.createElement("li");
            let titleElement = document.createElement("strong");
            let imgElement = document.createElement("img");
            let descripitionElement = document.createElement("a");

            let titleText = document.createTextNode(item.titulo);
            titleElement.appendChild(titleText);
            liElement.appendChild(titleElement);

            imgElement.src = item.capa;
            liElement.appendChild(imgElement);

            let descripitionText = document.createTextNode(item.subtitulo);
            descripitionElement.appendChild(descripitionText);
            liElement.appendChild(descripitionElement);

            listElement.appendChild(liElement);
        })
    })
    .catch(() => {
        console.log("DEU ALGUM ERRO");
    })
}

nutriApp();