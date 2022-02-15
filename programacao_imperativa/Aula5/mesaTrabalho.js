// Aula 5 - Trabalhando com funções

// Micro Desafio 1

function teste1 (x, y){
    return y - x
}

console.log (teste1 (10,40) );

// Micro Desafio 2

function teste2 (x, y){
    return x * 2
    console.log (x)
    return x / 2
}

console.log (teste2 (10,40) );

// 1. Crie uma função que converta polegadas em centímetros. 
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function converter (x){

    console.log (x * 2.54);
}

converter (5);

// 2. Crie uma função que receba uma string e a converta em um URL.
//ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function converterURL (x){

    console.log ("http://www."+x+".com.br");

}

converterURL ("google");

// 3. Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function colocarExclamação (x){

    console.log (x+"!");

}

colocarExclamação("Eu te amo");

// 4. Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function idadeCachorro (x){

    console.log (x * 7);

}

idadeCachorro (4);

// 5. Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.

function valorHoradeTrabalho (salarioMes, horaMes){

    console.log (salarioMes/horaMes);
}

valorHoradeTrabalho (1500, 160);

// 6. Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 

function IMC (peso, altura){

    console.log (peso/(altura*altura));
}

IMC (78, 160);

// 7. Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
// Investigue o que o método de .toUpperCase() faz.

function converterMaiuscula(nome){
    return nome.toUpperCase();
}

console.log (converterMaiuscula('maria'));



//Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
//Dica: Isso te ajudará a entender o que o operador typeof faz.

function tipoDado(x){

    return x.typeof;
}

console.log (tipoDado(28));

//Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
//Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

function raio(circulo){
    return 2 * Math.PI * circulo;
}

console.log(raio(15));