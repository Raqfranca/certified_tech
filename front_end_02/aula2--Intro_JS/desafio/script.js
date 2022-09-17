//Código original 

/*
let idade = parseInt(prompt("Introduza sua idade")); 
if(idade>18){ 
console.log("É maior de idade"); 
}else{ 
console.log("É menor de idade"); 
} 
*/


let idade = parseInt(prompt("Introduza sua idade")); 


if( isNaN(idade)){ 
    alert("Digite um número válido"); 
    }else if (idade>18){
        alert("É maior de idade");
    }else{ 
        alert("É menor de idade");
         
}



