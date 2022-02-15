// Aula 16 - Funções Avançadas

/*Neste exercício, você terá que criar uma função &quot;FizzBuzz&quot; que recebe dois
parâmetros numéricos.

A função deve atender aos seguintes requisitos:
● Você deve imprimir os números de 1 a 100;
● Se o número a ser impresso for um múltiplo de seu PRIMEIRO
parâmetro, você deve imprimir a palavra “Fizz” em vez do número
correspondente;

● Se o número a ser impresso for um múltiplo do seu SEGUNDO parâmetro,
você deve imprimir a palavra &quot;Buzz&quot; em vez do número correspondente;
● Se o número for um múltiplo de AMBOS os parâmetros, você deve imprimir
a palavra “FizzBuzz”.*/

function fizzBuzz(x,y){

    for(i=1;i<101;i++){
        console.log(i);{

            if(i%x == 0){
                console.log('Fizz');
                
            }if else (i%y == 0){
                console.log('Fizz');
            }
        }    
    }
}

console.log(fizzBuzz())