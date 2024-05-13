var valor1;
var valor2;
var valor3;
var resultado;
var media;

function calcular(event){
    event.preventDefault();

    valor1 = parseFloat(document.getElementById('valor1').value);
    valor2 = parseFloat(document.getElementById('valor2').value);
    valor3 = parseFloat(document.getElementById('valor3').value);
    resultado = document.getElementById('resultado');
    media = (valor1 + valor2 + valor3) / 3;

    resultado.innerHTML = '<br> Sua média é: ' + media.toFixed(2);

    //limpando os inputs
    document.getElementById('valor1').value ='';
    document.getElementById('valor2').value ='';
    document.getElementById('valor3').value ='';
}