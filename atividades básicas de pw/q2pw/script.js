document.querySelector('button').addEventListener('click', function(){
    var escolaValue = document.querySelector('#escola').value;
    var turmaValue = document.querySelector('#turma').value;
    var serieValue = document.querySelector('#serie').value;
    var nomeValue = document.querySelector('#nome').value;
    var idadeValue = document.querySelector('#idade').value;
    
    console.log("Olá "+nomeValue+"! Sua escola é "+escolaValue+", sua turma é "+turmaValue+", sua serie é "+serieValue+", sua idade é "+idadeValue+".");
})