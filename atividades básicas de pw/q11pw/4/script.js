document.querySelector('button').addEventListener('click', function(){
    var produto = document.querySelector('#num').value;
    var pagamento = document.querySelector('#metodo').value;

    var produto = parseInt(produto);
    var pagamento = parseInt(pagamento);

    if(pagamento == 1){
        alert('Preço final do produto à vista recebe desconto. Preço igual a: '+ produto*(97.5 / 100));
    }

    if(pagamento >= 2 && pagamento <= 5){
        alert('Preço final do produto não recebe desconto ou acrescimo. Preço igual a: '+ produto);
        var parcelas = produto/pagamento;
        alert('Total de '+pagamento+ ' parcelas: '+ parcelas);
    }

    if(pagamento >= 6 && pagamento <= 10){
        var produtof = produto * (106/100)
        alert('Preço final do produto recebe acrescimo. Preço igual a: '+ produtof);
        var parcelas = produtof/pagamento;
        alert('Total de '+pagamento+ ' parcelas: '+ parcelas);
    }

    if(pagamento > 10){
        var produtof = produto * (113/100)
        alert('Preço final do produto recebe acrescimo. Preço igual a: '+ produtof);
        var parcelas = produtof/pagamento;
        alert('Total de '+pagamento+ ' parcelas: '+ parcelas);
    }
})