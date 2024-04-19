document.querySelector('button').addEventListener('click', function(){
    var peso = document.querySelector('#peso').value;
    var altura = document.querySelector('#altura').value;

    // toFixed para falar a quantidade de números decimais que vai ser exibido
    var imc = (peso / (altura * altura)).toFixed(2); 
    console.log(imc);
})