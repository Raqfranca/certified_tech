/*
- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". 
 
 */

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



