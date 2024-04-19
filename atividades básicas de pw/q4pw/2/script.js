document.querySelector('button').addEventListener('click', function(){
    var pontos = document.querySelector('#pontos').value;

    if (pontos >= 1000){
        document.querySelector('body').insertAdjacentHTML('beforeend', "<p>Usuário VIP!</p>");
    } else {
        document.querySelector('body').insertAdjacentHTML('beforeend', "<p>Usuário comum.</p>");
    }
})

