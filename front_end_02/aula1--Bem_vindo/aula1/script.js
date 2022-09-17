//Defindo nova variável e atribuindo uma "string/text" para ela

let nome = "Raquel França";

var idade = 24;

console.log("Oi, eu sou a " + nome + " minha idade é de " + idade + " anos");


// Alert  - Abre uma caixa de comunicação com um usuário com uma mensagens de alerta.

alert("Aceita os cookies do site?")


//Criando um array com informações de diversos tipos (Strings, numericos e booleanos)
let arrayNome = ["Mateus", "Raquel", "Felipe", 8, true];

//Apresenta todo o conteúdo do array
console.log(arrayNome);

//Apresenta o tamanho total do array
console.log(arrayNome.length);

//Apresenta um elementos específico presente no array
console.log(arrayNome[1]);

//Percorrendo as informações do array
for (var i = 0; i < arrayNome.length; i++) {
    let dado = arrayNome[i];
    console.log(dado);
    //console.log(arrayNome[i]); Forma simplificada de fazer
}

// Outros tipos de console 

// Criando um objeto 

let meuObjeto= { 
    mensagem: "Mensagem de texto", 
    utilidade: "Prova de JS" 
}; 

// .table( ) → Escreve uma tabela no console. 

console.table(meuObjeto);

// .error( ) → Escreve um erro no console.

console.error(meuObjeto);

// .warn( ) → Escreve uma advertência no console.

console.warn(meuObjeto);
 








