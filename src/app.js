'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express(); // Instância do express
const router = express.Router(); // Arquivo de rotas

// Conecta ao Banco
mongoose.connect(config.connectionString);

// Carrega os models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

// Middleware que converte o conteúdo do body
app.use(bodyParser.json({
    limit: '5mb' // Seta o limite do json do body
})); // Todo conteúdo vai ser convertido para JSON
app.use(bodyParser.urlencoded({
    extended: false
}));// Serve para codificar as URLs -> Ex: 'espaço' ==> '%20'

// Habilita o CORS - Cross-Origin Resource Sharing
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Direciona uma rota x para o seu route correspondente
app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app; // Exporta a classe (É o que vai ser enviado para a classe que importou)