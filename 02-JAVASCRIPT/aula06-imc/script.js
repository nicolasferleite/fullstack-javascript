
/*
Abaixo de 17	Muito abaixo do peso
Entre 17 e 18,49	Abaixo do peso
Entre 18,5 e 24,99	Peso normal
Entre 25 e 29,99	Acima do peso
*/

//  peso / (altura*altura);

var peso;
var altura;
var imc;
var resultado;

function calcular(event){ //event da um refresh na pagina
    event.preventDefault(); // faz com q n der o refresh

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    resultado = document.getElementById('resultado');

    imc = peso / (altura * altura);
    resultado.innerHTML = '<br> Seu imc é: ' + imc.toFixed(2);

    if(imc < 17){
      resultado.innerHTML += '<br> Você está muito abaixo do peso';
    } else if(imc >= 17 && imc < 18.5){
      resultado.innerHTML += '<br> Você está abaixo do peso';
    } else if(imc >= 18.5 && imc < 25){
      resultado.innerHTML += '<br> Você está com o peso normal';
    } else if(imc >= 25 && imc < 30){
      resultado.innerHTML += '<br> Você está acima do peso';
    } else{
      resultado.innerHTML += '<br> Cuidado, obesidade!';
    }

    //limpando os inputs
    document.getElementById('peso').value ='';
    document.getElementById('altura').value ='';

}