const array = []

document.querySelector('button').addEventListener('click', function(){
    var nume = document.querySelector('#num').value;
    num = parseInt(nume);
    for (var i in array){
        if (array[i] == num){
            alert('numero repetido');
            return
        }
    }
    array.push(num);

    console.log(array);

    if(array.length == 3) {
        const max = Math.max(...array);
        const min = Math.min(...array);

        console.log('Maior:', max, 'Menor:', min);
        
        var soma = 0;
        for(i=0;i<array.length;i++){
            soma += array[i];
        }
        var mult = 1;
        for(i=0;i<array.length;i++){
            mult *= array[i];
        }
        var media = soma / array.length;
        console.log('Media:', media);
        console.log('Soma:', soma);
        console.log('Multiplicação:', mult);
        for(i=0;i<array.length;i++){
            console.log(array[i]);
        }

        array = [];

    }
})