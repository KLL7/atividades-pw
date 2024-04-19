var button = document.querySelector('button');
var result = document.querySelector('#result');

button.addEventListener('click', function(){
    var idadeano = document.querySelector('#Ano').value;
    var idademes = document.querySelector('#Mes').value;

    idadeano = parseInt(idadeano);
    idademes = parseInt(idademes);


    if (idademes > 4){
        idade = (2024 - idadeano) - 1
        if (idade < 16){
            result.innerHTML = "Voce tem "+idade+" anos, não pode votar"	
        }
        else{
            result.innerHTML = "Voce tem "+idade+" anos, pode votar"
        }
    }
    else{
        idade = (2024 - idadeano)
        if (idade < 16){
            result.innerHTML = "Voce tem "+idade+" anos, não pode votar"	
        }
        else{
            result.innerHTML = "Voce tem "+idade+" anos, pode votar"
        }
    }
})