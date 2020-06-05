// Cria a função express para começar um servidor
const express = require('express');
// Variável para executar o servidor express
const server = express();

// Configura a pasta pública
server.use(express.static('public'));


// Utilizando template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
});


// Configura os caminhos/rotas da aplicação
/* Página inicial */
/* 
   req: Requisição/pedido
   res: Resposta 
*/
server.get('/', (req, res) => {
    return res.render('index.html', { title: 'Um título' });
});

server.get('/create-point', (req, res) => {
    return res.render('create-point.html');
});

server.get('/search', (req, res) => {
    return res.render('search-results.html');
});

// Liga o servidor
server.listen(3000); // Escuta a porta 3000
