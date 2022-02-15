// Aula 11 - Estruturas de repetição 

// while estrutura 

let volta = 1

while (volta <=5){
    console.log('Volta número '+ volta)
    volta++
};

// do while estrutura - vai repetir pelo menos uma vez pq a condição é apenas no final

let volt = 1

do{
    console.log('Volta n°' + volta);
    volt++
} while(volt <= 5);


/* Micro desafios


1. Programa em Javascript que mostra os números ímpares
Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100. */

for(let i =1; i <= 100; i++){
    if (i % 2 == 1){
        console.log('Apenas n° impar ' +i);
    }
}

/*
2. Programa em Javascript que mostra os números pares
Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100
*/

for(let i =1; i <= 100; i++){
    if (i % 2 == 0){
        console.log('Apenas n° par ' +i);
    }
}

/* 
3. Programa em Javascript que mostra os números pares e ímpares 
Escreva um aplicativo em Javascript que recebe um número inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.
*/ 








/*
4. Programa em Javascript que calcula a média das notas de uma turma
Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele.
Em seguida, através de um laço while, pede ao usuário para que entre com as notas de todos os alunos da sala, um por vez.

Por fim, o programa mostra a média aritmética da turma.

*/