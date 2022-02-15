/*
1º Passo

Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

Resposta no arquivo aluno
*/

/*
2º

Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
*/
let aluno = function (nome, nFaltas, notas) 
{
    this.nome  = nome;
    this.nFaltas = nFaltas,
    this.notas = notas
    this.calcularMedia =  function ()
    {
        var media = this.notas.reduce((total, valor) => total + valor) / this.notas.length;
        return media
    }
    this.faltas =  function ()
    {
        this.nFaltas++;
    }
}

module.exports = aluno;
/*
3º
Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma  de estudantes lista(um array composto pelos alunos criados no passo 1).

Resposta no arquivo curso 

*/


/*
4°Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
*/

const Aluno = require("./aluno");
const Curso = require("./curso") 
const Estudantes =  require("./aluno");


var pedro = new Aluno("Pedro", 1, [1,2]); // Reprovar
var fernando = new Aluno("Fernando", 0, [10,10]); // Aprovado
var daniel =  new Aluno("Daniel",0,[5,5]) // Aprovado
var jeff =  new Aluno("Jeff", 3, [6,6]) // Aprovado com ressalvas
var pedor =  new Aluno("Pedor", 10, [1,1]) // Reprovar


var curso = new Curso("Informatica1", 5, 3, [])
curso.adicionarAluno(pedro)
curso.adicionarAluno(fernando)
curso.adicionarAluno(daniel)
curso.adicionarAluno(jeff)
curso.adicionarAluno(pedor)

console.log(curso.retornarAlunosAprovados());


var listaAlunos = [];
for (let index = 0; index < Estudantes.length; index++) {
    listaAlunos.push(new Aluno(Estudantes[index]["nome"], Estudantes[index]["qtdFaltas"], Estudantes[index]["notas"])) ; 
}

var curso = new Curso("Informatica2", 5, 3, listaAlunos)
console.log(curso.retornarAlunosAprovados());


