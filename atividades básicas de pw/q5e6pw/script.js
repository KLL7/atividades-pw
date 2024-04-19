let button = document.querySelector('button');

button.addEventListener('click', function(){
    let nome = document.querySelector('#nome').value
    let idade = document.querySelector('#idade').value
    let habilitado = document.querySelector('#habilitado').checked
    let painel = document.querySelector('#result')

    painel.innerHTML = "";
    
    if (idade >= 18 && habilitado == true){
        painel.insertAdjacentHTML('beforeend', "O motorista "+nome+" tem "+idade+" anos, portanto ele tem direito a habilitação e pode dirigir");
    } else {
        painel.insertAdjacentHTML('beforeend', "O motorista "+nome+" tem "+idade+" anos, portanto ele não tem direito a habilitação e não pode dirigir");
    }
})