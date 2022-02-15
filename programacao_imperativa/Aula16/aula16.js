// Aula 16 - Funções Avançadas

/*let bemVindo = () => 'Olá Mundo';

let dobro = numero => numero *2;

let soma = (a, b) => a + b;

let horaAtual = () =>{
    let data = new Date ();
    return data.getHours () + ':' +
    data.getMinutes();
}

setTimeout() 

function nomeCompleto(nome, sobrenome){
    return nome + " " + sobrenome;
};

function bomDia(nome, sobrenome, callback){
    return
} */


/*Crie uma função acaoCarro(), que receberá uma callback como parâmetro. Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando – e parar() – deve exibir uma mensagem dizendo que o carro parou.

Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.*/

function acaoCarro(callback){
    return callback();
}

function andar( ){
    return("Carro está andando");   
}

function parar( ){
    return("Carro está parado");
}

console.log(acaoCarro(parar))


