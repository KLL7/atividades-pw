document.querySelector('button').addEventListener('click', function(){
    var peso = document.querySelector('#peso').value;
    var altura = document.querySelector('#altura').value;
    var painel = document.querySelector('#result')

    // toFixed para falar a quantidade de números decimais que vai ser exibido
    var imc = (peso / (altura * altura)).toFixed(1);

    switch(true){
        case imc < 18.5:
            painel.innerHTML = "Abaixo do peso";
            break;
        case imc >= 18.5 && imc < 24.9:
            painel.innerHTML = "Peso normal";
            break;
        case imc >= 24.9 && imc < 29.9:
            painel.innerHTML = "Sobrepeso";
            break;
        case imc >= 29.9 && imc < 34.9:
            painel.innerHTML = "Obesidade grau 1";
            break;
        case imc >= 34.9 && imc < 39.9:
            painel.innerHTML = "Obesidade grau 2";
            break;
        case imc >= 40:
            painel.innerHTML = "Obesidade grau 3";
            break;
        default:
            painel.innerHTML = "Valores inválidos";
    }
})

