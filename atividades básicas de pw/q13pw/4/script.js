window.onload = function calcularMedia(nota1, nota2, nota3, nome){
    var nome = prompt("Coloque seu nome: ");
    var nota1 = prompt("Coloque sua primeira nota: ");
    var nota2 = prompt("Coloque sua segunda nota: ");
    var nota3 = prompt("Coloque sua terceira nota: ");
    console.log(nome,nota1,nota2,nota3)
    var media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
    console.log(nota1,nota2,nota3,media);
    alert('Olá: '+ nome+ ', sua média é: '+ media);
}
