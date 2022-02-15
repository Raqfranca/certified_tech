// Aula 8 - Controlando o fluxo da aplicação 

// 1)	Crie uma função podeSubir() que receba dois parâmetros: 
//-	altura da pessoa;
//-	se está acompanhada.
//Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
// a)	A pessoa deve medir mais de 1.40m e menos de 2 metros.
// b)	Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
// c)	Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.


function podeSubir ( altura, acompanhado ) {

    if (altura >= 1.40 &&  altura <2.0){
        console.log ("Pode subir");

    }else if ( (altura < 1.40 && altura >= 1.20) && acompanhado == true ){
        console.log ("Pode subir apenas acompanhado acompanhado");

    }else {
        console.log ("Não pode subir, nem mesmo acompanhado");
    }

}

podeSubir(1.50, false);

podeSubir(1.13, true);

podeSubir(1.99, true);