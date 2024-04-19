let button = document.querySelector('button');

button.addEventListener('click', function(){
    let nome = document.querySelector('#nome').value
    let idade = document.querySelector('#idade').value
    
    if (idade >= 18){
        console.log("O motorista "+nome+" tem "+idade+" anos, portanto ele tem direito a habilitação");
    } else {
        console.log("O motorista "+nome+" tem "+idade+" anos, portanto ele não tem direito a habilitação");
    }
})