// Aula 11 - Estruturas de repetição 

// Ciclos for 

for(let i =1; i <= 2; i++){
    console.log("Posição " + i);
}

/*Micro desafios

Repetir como um papagaio

1.Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.*/

for(let i =1; i <= 5; i++){
    console.log(i + " Olá mundo");
}

/* Contando números ímpares

2. Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console. */

for(let i =1; i <= 10; i++){
    if (i % 2 == 1){
        console.log(i);
    }
}

/*Criando a tabuada

3. Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for) */

let produto = 9;

for(let i =1; i <= 10; i++){
    console.log(produto * i);
}

