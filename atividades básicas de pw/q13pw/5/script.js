var alunos = [
    {nome: 'João', idade: 18, skill: ['React', 'Javascript']},
    {nome: 'Maria', idade: 17, skill: ['React']},
    {nome: 'Pedro', idade: 15, skill: ['React', 'Javascript', 'Python']},
    {nome: 'Ana', idade: 20, skill: ['React', ]},
    {nome: 'Lucas', idade: 10, skill: ['React', 'Javascript']}
];

function alunosskill(alunos, skill){

    var alunosskill = alunos.filter(function(aluno){
        console.log(aluno.skill.includes(skill));
        return aluno.skill.includes(skill);
    });

    console.log(alunosskill);
    return alunosskill;

}

alunosskill(alunos, 'Javascript');

