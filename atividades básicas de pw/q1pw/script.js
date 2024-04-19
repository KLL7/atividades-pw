var escola = document.querySelector('#escola');
var turma = document.querySelector('#turma');
var serie = document.querySelector('#serie');
var nome = document.querySelector('#nome');
var idade = document.querySelector('#idade');

var button = document.querySelector('button');

button.addEventListener('click', function(){
    var escolaValue = escola.value;
    var turmaValue = turma.value;
    var serieValue = serie.value;
    var nomeValue = nome.value;
    var idadeValue = idade.value;
    console.log(escolaValue, turmaValue, serieValue, nomeValue, idadeValue);
});
