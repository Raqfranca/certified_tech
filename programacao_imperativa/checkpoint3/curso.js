/*
3º
Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma  de estudantes lista(um array composto pelos alunos criados no passo 1).
*/


let curso = function(nome, notaAprovacao, faltasMaximas, alunos)
{

    this.nome =  nome;
    this.notaAprovacao = notaAprovacao;
    this.faltasMaximas = faltasMaximas;
    this.alunos = alunos;
    
    this.adicionarAluno = function(aluno)
    {
        this.alunos.push(aluno)
    }

    this.validaAprovacao = function(aluno)
    {
        if(aluno.calcularMedia() >= this.notaAprovacao && aluno.nFaltas < this.faltasMaximas) return true;
        if(aluno.nFaltas == this.faltasMaximas && (aluno.calcularMedia() * 1.1) > this.notaAprovacao) return true;
        return false;
    }

    this.retornarAlunosAprovados = function()
    {
        return this.alunos.filter((aluno) => this.validaAprovacao(aluno));
    }

}


module.exports = curso;