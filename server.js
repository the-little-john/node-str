'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

const app = express(); // Instância do express
const port = 3000;
app.set('port', port); // Seta a porta

const server = http.createServer(app); // Cria servidor baseado no express (Modelo MVC)
const router = express.Router(); // Arquivo de rotas

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

app.use('/', route);

server.listen(port);
console.log('API rodando na porta ' + port);