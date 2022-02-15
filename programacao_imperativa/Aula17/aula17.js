// Aula 17 - Arrays Avançados 

// o que o map faz?? não entendi 


let numeros = [1,5,9,3,5,7];

let dobro = numeros.map(function(item){
    return item * 2;
});

console.log(dobro);

// filter() - filtra o elemento com um parâmetro

let idade = [21, 18, 14, 7, 56, 78]

let maiores = idade.filter(function(item){
    console.log(item);
    return item >= 18;
});

console.log(maiores);

// reduce - reduz uma array e um numero - no meu exomplo ele soma todos todos as idades

let total = idade.reduce(function(acumulador, item){
    return acumulador+item;
});

console.log(total);

// for eatch -

let paises = ['Brasil', 'Cuba', 'Peru', 'India'];

paises.forEach(function(item) {
    console.log("<li>"+item+"</li>");
});

// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

let numeros = [1,5,9,3,5,7];

let dobro = numeros.map(function(item){
    return item * 2;
});









