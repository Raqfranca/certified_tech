
 function microondas ( tempo, prato ) {

    if (tempo == 10 && prato == "Pipoca"){
        console.log ("Prato pronto, bom apetite!");

    }else if ((tempo >= 20 && tempo <30) && prato == "Pipoca"){
        console.log ("Comida queimou :(");

    }else if (tempo >= 30 && prato == "Pipoca"){
        console.log ("Kabumm!!");
    
    }else if (tempo < 10 && prato == "Pipoca"){
        console.log ("Tempo insuficiente");

    }else if (tempo == 8 && (prato == "Macarrão" || prato == "Brigadeiro")){
        console.log ("Prato pronto, bom apetite!");

    }else if (tempo < 8 && (prato == "Macarrão" || prato == "Brigadeiro")){
        console.log ("Tempo insuficiente");
    
    }else if ((tempo >= 16 && tempo <24 ) && (prato == "Macarrão" || prato == "Brigadeiro")){
        console.log ("Comida queimou :(");

    }else if (tempo >= 24 && (prato == "Macarrão" || prato == "Brigadeiro")){
        console.log ("Kabumm!");

    }else if (tempo == 15 && prato == "Carne"){
        console.log ("Prato pronto, bom apetite!");

    }else if (tempo < 15 && prato == "Carne"){
        console.log ("Tempo insuficiente")

    }else if ((tempo >= 30 && tempo <45) && prato == "Carne"){
        console.log ("Comida queimou :(")

    }else if (tempo >= 45 && prato == "Carne"){
        console.log ("Kabumm!")

    }else if (tempo == 12 && prato == "Feijão"){
        console.log ("Prato pronto, bom apetite!");
    
    }else if (tempo < 12 && prato == "Feijão"){
        console.log ("Tempo insuficiente");

    }else if ((tempo >= 24 && tempo <=36 )  && prato == "Feijão"){
        console.log ("Comida queimou :(");
    
    }else if (tempo >= 36 && prato == "Feijão"){
        console.log ("Kabumm!")

    }else {
        console.log ("Prato inexistente");
    }

}

microondas(21, "Pipoca");

microondas(30, "Pipoca");



// Professor, eu fiz da forma mais simples e eu me matei para fazer isso kkk seja bonzinho por favor 