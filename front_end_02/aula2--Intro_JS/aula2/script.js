/* EXIBIÇÃO E CAPTURA DOS DADOS DO USUÁRIO 
- Alert()
- Confirm()
- Prompt()
*/

//Exibe alerta na tela, sem nenhuma mensagem definida previamente
alert();

let nome = "Pablo"
alert("Olá " + nome);

//Solicita em tela, uma confirmação do usuário
let retornoConfirm = confirm("Deseja realemnte sair da aplicação?"); //True ou false
console.log(retornoConfirm);

//Verificando a opção selecionada
if (retornoConfirm) { //Caso true
    alert("Saindo da aplicação...")
} else { //Caso false
    alert("Continua logado")
}

// Utilizando o prompt e querySelector

let seuNome = prompt("Digite o seu nome");

document.querySelector('h1').innerText += ' ' + seuNome;


//Forma de capturar algum "dado/informação" do usuário em tela

//Obs: Qaundo utilizamos o prompt, o valor que ele captura vem como string, mesmo que o valor digitado seja um numérico. 

// Por conta disso usamos algumas funções que converter um dado em outro.


let retornoPrompt = prompt("Informe um número inteiro");
console.log(retornoPrompt);

//Coverte de String/Inteiro
let numeroConvertido = parseInt(retornoPrompt);

//Coverte de String/Float (float = números deciamis)

let numeroConvertid2 = parseFloat(retornoPrompt);

//Outra forma de fazer a conversão
let numeroConvertido3 = Number(retornoPrompt);

//Realizando uma soma com os valores
let numero1 = 10.5;
let resultadoSoma = numero1 + numeroConvertido;
console.log(resultadoSoma);

//Trabalhando com números aleatorios
let numeroAleatorio = Math.random() * 3 + 1; // 3 máximo e 1 minimo

//Capturando apenas o número inteiro (sem as casas decimais)
let numeroInteiro = Math.floor(numeroAleatorio);
console.log(numeroInteiro);

// Ciclos específicos

// For... in 

//O for... in é um loop que percorre um objeto literal.

//Criando o objeto literal carro

let carro = {
    modelo: "fox",
    ano: "2011"
}

// No for eu crio uma variavel e dou o seu nome, após o in coloco o nome do objeto que quero os dados. 

// Se no console.log colocar a propriedade apenas, ele só me traz o nome das categoria que tem no objeto, não traz o conteúdo dentro delas.
//Exemplo:console.log(propriedade);

// Para veririficar o conteúdo, devemos ter dessa forma:

for(let propriedade in carro){
    console.log(carro[propriedade]);
}

// For... of

// O loop for... of percorre objetos iterativos (incluindo Array, Map, Set...)

// No for eu crio uma variavel e dou o seu nome, após o of coloco o nome do objeto que quero os dados. 

// Diferente do for in, se eu colono no console.log o valor direito, ele já me traz o que tem dentro do array.

let series = [
    "The boys",
    "Fleabag ",
    "Mare of easttown"
];

for (let valor of series){
    console.log(valor)
}