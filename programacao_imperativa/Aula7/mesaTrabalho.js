// Aula 7 - Operando Logicamente 


//É chegado o momento de colocar em prática todas essas informações sobre os operadores e como podemos utilizá-los para criar sequências lógicas e de comparação. Para isso, vamos realizar uma série de exercícios que nos ajudarão a fixar os conceitos aprendidos até aqui.

//Ex1. O que cada expressão retorna?
// Dê uma olhada nestes     exemplos e pense sobre o que cada um retorna:

// 1. !true - Resposta: false (O ponto de explamação no inicio vai negar o valor informado)

//Confirmação:

console.log(!true);

// 2. !false - Resposta: true 

//Confirmação:
console.log(!false);


// 3. !!false true: Resposta: false  true (Não existe comando com dois pontos de explamação.) 

//Confirmação:
console.log(!!false,true);


// 4. !!true: Resposta: false  true (Não existe comando com dois pontos de explamação.)

//Confirmação:
console.log(!!true);

// 5. !1: Resposta: false 

//Confirmação:
console.log(!1);

// 6. !!1: Resposta: true

//Confirmação:
console.log(!!1);

// 7. !0: Resposta: true

//Confirmação:
console.log(!0);

// 8. !!0: Resposta: false

//Confirmação:
console.log(!!0);


// 9. !!"": Resposta: false

// 10. let x = 5 ;
//     let y = 9;

//     x < 10 && x!==5 Resposta: false
//     x>9 || x===5 Resposta: true
//      !(x===y) Resposta: true

// Ex2. O que cada expressão retorna? 

// Sem testar no console, o que você acha que cada uma destas expressões irá retornar? Elas são true ou false?

// 1. let x=10
//    let y ="a"
//    y==="b" || x >= 10

// Resposta: true

// 2. let x=3
//    let y=8
//    !(x == "3" || x === y) && !(y !== 8 && x <= y)
 
// Resposta: true e falso,  resultado com a negação falso e true, resultado final false. 

//Confirmação:
console.log (!(3 == "3" || 3 === 8) && !(8 !== 8 && 3 <= 8));

// 3. let str = ""
//    let msg = "haha!"
//    let eBonito = "false"
//    !((str || msg) && eBonito)

// Resposta: true - !((haha!) && eBonito) = false mas como é negado a comparação fica true

//Confirmação:

let str = ""
let msg = "haha!"
let eBonito = "false"

console.log(!((str || msg) && eBonito));

