document.querySelector('button').addEventListener('click', function(){
    var nume = document.querySelector('#num').value;
    num = parseInt(nume);
    var fahreint = ((num * 9) / 5) + 32;
    alert(num + '°C em °F = ' + fahreint + '°F');
})