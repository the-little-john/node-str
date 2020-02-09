'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // Instância do express
const router = express.Router(); // Arquivo de rotas

// Carrega de Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

// Middleware que converte o conteúdo do body
app.use(bodyParser.json()); // Todo conteúdo vai ser convertido para JSON
app.use(bodyParser.urlencoded({ extended: false }));// Serve para codificar as URLs -> Ex: 'espaço' ==> '%20'

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app; // Exporta a classe (É o que vai ser enviado para a classe que importou)