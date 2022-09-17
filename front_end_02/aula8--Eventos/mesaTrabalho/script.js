/* Crie uma nova página HTML e adicione via JavaScript os seguintes elementos:

1- Crie um formulário com campos de input e botões de submit e reset. (Feito)

2- Previna a página de ser recarregada quando houver o submit utilizando preventDefault(). (Feito)

3- Mostre um alerta na página quando a tela terminar de ser carregada. (Feito)

4- Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo. (Feito)

5- Faça um trecho de código que utilize algum evento de teclado, esse evento irá escrever o conteúdo do input em uma tag <p> e logo abaixo o número de vezes que esse evento foi chamado. Exemplo: <p>futebol</p> <p>7</p> .

*/ 

let botaoEnviar = document.getElementById("btEnviar");

botaoEnviar.addEventListener("click", function(event){
    console.log("Ta funcionando?");
    event.preventDefault(); 
    alert ("Formulário enviado");
}); 

let titulo = document.getElementById("tituloForm");

titulo.onmouseover = function(){
    titulo.style.color = '#A66CFF';
}


titulo.onmouseout = function(){
    titulo.style.color = '#781C68';
}


function detecta(event){
    console.log(event);
    var tecla = event.key;
    console.log(`A tecla ${event.key} foi pressionada`);
}
