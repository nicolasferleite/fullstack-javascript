function pedir(){
    var valor = prompt("Digite um valor de 1 a 4");
  
    switch(Number(valor)){
      case 1: 
        alert("Você escolheu 1 = Suco");
        break;
      case 2:
        alert("Você escolheu 2 = Agua gelada")
        break;
      case 3:
        alert("Você escolheu 3 = Sorvete")
        break;
      case 4:
        alert("Você chamou o garçom!");
        break;
      default:
        alert("Escolha uma opção entre 1 a 4");
        break;
    }
}


// operador ternário
var numero;
numero === 10 ? console.log("O valor do número é 10") : console.log("O valor do número é diferente de 10");