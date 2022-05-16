 //Objetivo

/* Desenvolver um script que permita somar um array de números consecutivos, de forma que se some o primeiro número com o segundo e o imprima através do console. 

Depois, temos que pegar este resultado e somar o terceiro número, e assim por diante, até termos terminado de percorrer todo o array. */

 
 var array = [1, 2, 3, 4, 5];

function sum(array) {
  var total = 0;

  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
console.log(sum(array));

var array = [1, 2, 3, 4, 5];
var result = 0;
for (i = 0; i < array.length; i++) {
  result += array[i];
}
console.log(result);

// 