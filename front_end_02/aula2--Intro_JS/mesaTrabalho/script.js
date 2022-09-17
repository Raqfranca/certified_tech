/*Sugestão de como implementar a atividade prática da aula
1 - Capturar a escolha de vocês (1, 2 ou 3)
    - Converter pra inteiro, guardar em uma variável
2 - Capturar a escolha da "máquina".
    - Fazer isso, usando o Math.Random() com intervalo;
3 - Testar (Switch e IF) quem foi o ganhador da rodada, ou se empatou
4 - Guardar em variáveis separadas, quem ganhou cada rodada
5 - Ao final, verificar e declarar um campeão (melhor de 2 rodadas)
*/

/*
let escolhaJogador = parseInt(prompt('Escolha um número: 1- pedra, 2- papel, 3 - tesoura: '));


 if( isNaN(escolhaJogador)){ 
    alert("Digite um número válido"); 
        }else if (escolhaJogador>3 | escolhaJogador<1){
            alert("Escolha um número entre 1 e 3");
        }else if (escolhaJogador==1){
                alert("Você escolheu pedra");
        }else if (escolhaJogador==2){
            alert("Você escolheu papel");
        }else if (escolhaJogador==3){
            alert("Você escolheu tesoura");
    }
        
*/


    
/*
function escolhaComputador(numeroAleatorio) {
    let resultado = Math.random() * 3 + 1 ;
    return resultado
}

*/

var min;
var max;

function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(2);
    return Math.floor(Math.random() * (3 - 1)) + 1;
  }

/*
function escolhaComputador(opçao) {
    const result = opcao[Math.floor(Math.random() * opçao.length)];
    return result
}

console.log(result)

*/




/*
function getRandomOption(options) {
    const result = options[Math.floor(Math.random() * options.length)];
    return result
}

function compara(opcaoJogador, opcaoComputador){
    if(opcaoJogador == opcaoComputador){
        console.log('empate')
    } else if (opcaoJogador ==  1){
        if(opcaoComputador == 3){
            console.log('Você ganhou a rodada.')
            pontoJogador =+ 1
        } else {
            console.log('O computador ganhou a rodada.')
            pontoComputador =+ 1
        }
    } else if(opcaoJogador == 2){
        if(opcaoComputador == 3){
            console.log('O computador ganhou a rodada.')
            pontoComputador =+ 1
        } else {
            console.log('Você ganhou a rodada.')
            pontoJogador =+ 1
        }
    } else {
        if(opcaoComputador == 1){
            console.log('O computador ganhou a rodada.')
            pontoComputador =+ 1
        } else{
            console.log('Você ganhou a rodada.')
            pontoJogador =+ 1
        }
    }
}

function verificaGanhador(pontoComputador, pontoJogador){
    if (pontoComputador > 1){
        console.log('VOCE GANHOU O ')
    }
}

*/




/// cemitério 

/*
function getPlayerChoice(){
    if(escolhaJogador == 'pedra'){
        return 1
    } else if (escolhaJogador == 'papel'){
        return 2
    } else {
        return 3
    }
}
*/