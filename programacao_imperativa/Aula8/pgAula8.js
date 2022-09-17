// Aula 8 - Controlando o fluxo da aplicação 

let dia = "domingo"

if(dia == "domingo"){
    console.log (" Fim de semana");
}else if (dia == "sabado"){
    console.log("Não tenhoa aula");
}else if ( dia == "segunda"){
    console.log("Tenho dentista");
}

else{
    console.log("Trabaho :(");
}



let idade = 19;
let acesso = ' ';

if (idade < 16) {
    acesso = 'Acesso proibido';
} else if (idade >= 16 && idade <=18){
    acesso = 'Acesso liberado somente com acompanhamento de um maior de idade';
} else{
    acesso = 'Acesso liberado';
}

// if ternário 

// variavel = condição ? expressão para true: declaração para false;


let valor = false;

let resultado = valor == true ? "O valor é true - verdadeiro" : "O valor é false - falso"; 

console.log(resultado); 

//Switch

/*
switch(valor){
    case "valorA":
        - código a ser executado se valorA for verdadeiro.
        break;
    default:
        - código a ser executado se nenhum dos casos for verdadeiro.          
}
*/


let diaSemana = "quarta"

switch(diaSemana){
    case "segunda":
        console.log("Ir na academia");
        break;

    case "terça":
        console.log("Ir no mercado");
        break;   

    default:
        console.log("Sem compromisso");         
}

