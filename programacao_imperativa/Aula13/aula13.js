// Aula 13 - Objetos literais e JSON 

/* let carro ={
    modelo : "Ford",
    ano : 2012,
    cor : 'vermelho',
    andar : function(){
        return "carro " +this.modelo+ " andando na cor" +this.cor;
    }
}

let carro2 ={
    modelo : "Ford",
    ano : 2012,
    cor : 'azul',
    andar : function(){
        return "carro " +this.modelo+ " andando na cor" +this.cor;
    }
}

console.log(carro.ano);

console.log(carro);

console.log(carro.andar()); */

function Carro(modelo, cor, ano){
    this.modelo = modelo;
    this.cor = cor;
    this.ano = ano;
    this.pular = function(){
        return 'meu' +this.modelo+ ' esta pulando'
    }
}

let carro1 = new Carro ('ford', 'vermelho', '1978');

let carro2 = new Carro ('Porche', 'Preto', '2019');

console.log (carro1.cor);
console.log (carro2.pular());





