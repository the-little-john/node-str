'use strict';

const app = require('../src/app') 
const debug = require('debug')('nodestr:server');
const http = require('http');
 
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port); // Seta a porta

const server = http.createServer(app); // Cria servidor baseado no express (Modelo MVC)

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log('API rodando na porta ' + port);

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

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr 
        : 'port ' + addr.port;
    debug('Listening on'+ bind);
}