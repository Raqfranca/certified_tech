// Aula 10 - Strings e arrays: Trabalhando com coleções

// Aula de Strings e Arrays: Trabalhando com coleções 

// Lenght - Soma todos os caracteres incluindo os espaços  

console.log("Oi eu sou a Raquel".length);

// tbm posso colocar o valor em uma variável que ele me traz o valor

let texto = "  Oi eu sou a Juliana Lima   "

console.log(texto . length)

// indexOf - Procura uma palavra ou caractere na frase e me informa a sua posição

console.log(texto . indexOf("s"));

console.log(texto . indexOf("Lima"));

console.log(texto . indexOf("lima"));

//slice - ele pega a informação dentro da string, mas preciso passar a posição dentro da string, inicio e final (opcional))

console.log(texto . slice(6,9));

console.log(texto . slice(6));

// eu posso armazenar a consulta em uma variavel e isso não altera a variavel "mãe"

let palavra = texto.slice(6,9);

console.log(palavra);

console.log(texto);

// trim - retira o espaço do começo da string e no final, os espaço do meio ele não consegue tirar

 console.log(texto.trim());

 // split - transforma o string em arrays, se eu coloco um parametro, ele começa a separar o array por aquele caractere.

 console.log(texto.split());

 console.log(texto.split("u"));

 // replace -  ele troca o valor no código, o primeiro indicador é o valor que eu quero trocar na string e depois o valor que eu vou colocar.
 
 console.log(texto.replace("Juliana", "Mariana"));

 // posso amarzenar com a let 

 let nomeNovo = texto.replace("Juliana", "Pedro");

console.log(nomeNovo);



