'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');
const app = express(); // Instância do express
const port = normalizePort(process.env.PORT || '3000');

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
server.on('error', onError);

//console.log('API rodando na porta ' + port);

function normalizePort(val){ // Retirada do gerador de código do express
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0){
        return port;
    }

    return false;
}

function onError(error) { // Retirada do gerador de código do express. Tratamento de erros  
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? // Monta mensagem de erro
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code){
        case 'EACCES': // Erro de permissão
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE': // Endereço em uso
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}