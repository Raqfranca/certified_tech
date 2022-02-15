// Aula 14 - Módulos 

/*
SEGUINDO A MESA DE TRABALHO DA AULA 13. DESENVOLVA ESSE ALGORITMO 
1 - CRIE UMA FUNÇÃO CONSTRUTORA PARA O OBJETO CONTA BANCARIA COM AS SEGUINTES PROPRIEDADES:

● Número da conta (somente números)
● Tipo de conta (conta corrente ou poupança em $)
● Saldo em $ (valor apenas)
● Titular da conta (nome completo)
*/

function Usuario(nConta, tipoConta, saldo, titularConta){
    this.nConta = nConta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
    this.titularConta = titularConta
}


/* 2 - MOLDE AS INFORMAÇÕES DO ARQUIVO https://drive.google.com/file/d/16L2NejZU49mCLbo6RTmSKtuElOTOYUXv/view
PARA O FORMATO JSON, E EXPORTE ESSE JSON COMO MODULO */

let banco = {

    clientes : contas = [
        new newConta (5486273622,    "Conta Corrente",    27771,    "Abigael Natte"),
        new newConta (1183971869,    "Conta Poupança",    8675    ,"Ramon Connell"),
        new newConta (9582019689,    "Conta Poupança",    27363,    "Jarret Lafuente"),
        new newConta (1761924656,    "Conta Poupança",    32415,    "Ansel Ardley"),
        new newConta (7401971607,    "Conta Poupança",    18789,    "Jacki Shurmer"),
        new newConta (630841470,    "Conta Corrente",    28776,    "Jobi Mawtus"),
        new newConta (4223508636,    "Conta Corrente",    2177    ,"Thomasin Latour"),
        new newConta (185979521,    "Conta Poupança",    25994,    "Lonnie Verheijden"),
        new newConta (3151956165,    "Conta Corrente",    7601    ,"Alonso Wannan"),
        new newConta (2138105881,    "Conta Poupança",    33196,    "Bendite Huggett")
    ]
}