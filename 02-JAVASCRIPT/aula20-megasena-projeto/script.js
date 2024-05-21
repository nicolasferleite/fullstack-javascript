function megasena(number){
    let sorteados = [];
    if(number > 9 || number < 6){
        console.log("Escolha um número entre 6 e 9.");
        return sorteados;
    } else{
        for(let i = 0; i < number; i++){
            let escolhido = Math.floor(Math.random() * 60) + 1;
            if(!(sorteados.includes(escolhido))){
                sorteados.push(escolhido);
            }
        }
        sorteados.sort((a, b) => a - b);
        return sorteados;
    }
};

let resposta = megasena(6);
console.log(resposta);