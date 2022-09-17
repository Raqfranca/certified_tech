let foto = '';
let email = '';
let nome = '';

// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json();
    })
    .then(data => {
        //manipulamos a resposta
        foto = data.results[0].picture.large;
        nome =
            data.results[0].name.title +
            ' ' +
            data.results[0].name.first +
            ' ' +
            data.results[0].name.last;

        email = data.results[0].email;

        renderizarDadosUsuario(foto, nome, email);
    });

function renderizarDadosUsuario(foto, nome, email) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.

    let div = document.getElementById('card');

    let divScreen = `<img src="${foto}/>
                    <h1>${nome}</h1>
                    <h2>${email}</h2>`;

    div.innerHTML = divScreen;

    console.log(foto);
    console.log(nome);
    console.log(email);
}

/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.
