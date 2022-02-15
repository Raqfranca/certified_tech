 // Aula 10 - Strings e arrays: Trabalhando com coleções
 
 let palavras =['Favorito', "Sonho", "Amor", "Sorry"];

console.log(palavras[0]);

console.log(palavras.length);

// push - Adiciona um elemento ou mais elementos no final do array, mas o retorno e o valor do comprimento da array

palavras.push("Azul", "Agua", "Suco", 25, 58);

console.log(palavras); 

// pop - Elimina o último elemento de um array 

let cores = ["Azul", "Verde", "Amarelo"];

let ultimaCor = cores.pop();

console.log(cores);

console.log(ultimaCor); 

// Shift - Elimina o primeiro elemento.

let comidas = ["Arroz", "Feijão", "Arroz","Batata", "Arroz"];

let primeraComida = comidas.shift();

console.log(comidas);

console.log(primeraComida); 

// Unshift - Adiciona uma ou mais elementos ao início de um array.

comidas.unshift("Bife", 'Salada');

console.log(comidas);

// Join - Juntas os elementos de uma array usando um separador que especificamos.

let comidasComTraco = comidas.join("-");

console.log(comidasComTraco);

// LastIndexOf() - Procura pelo elemento no final de array.

console.log(comidas.lastIndexOf("Arroz"));

// includes() - Recebe um item para pesquisar no array, retorna verdadeiro se encontra e falso se não

console.log(comidas.includes("Feijao"));

console.log(comidas.includes("Feijão"));


