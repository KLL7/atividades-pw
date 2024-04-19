document.querySelector('button').addEventListener('click', function(){
    var peso = document.querySelector('#peso').value;
    var altura = document.querySelector('#altura').value;
    var painel = document.querySelector('#result')

    painel.innerHTML = "";
    // toFixed para falar a quantidade de números decimais que vai ser exibido
    var imc = (peso / (altura * altura)).toFixed(1); 

    if (imc < 18.5){
        painel.insertAdjacentHTML('beforeend', "Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9){
        painel.insertAdjacentHTML('beforeend', "Peso normal");
    } else if (imc >= 24.9 && imc < 29.9){
        painel.insertAdjacentHTML('beforeend', "Sobrepeso");
    } else if (imc >= 29.9 && imc < 34.9){
        painel.insertAdjacentHTML('beforeend', "Obesidade grau 1");
    } else if (imc >= 34.9 && imc < 39.9){
        painel.insertAdjacentHTML('beforeend', "Obesidade grau 2");
    } else if (imc >= 40){
        painel.insertAdjacentHTML('beforeend', "Obesidade grau 3");
    }

})