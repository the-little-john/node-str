'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express(); // Instância do express
const router = express.Router(); // Arquivo de rotas

// Conecta ao Banco
mongoose.connect('mongodb+srv://joaozinho:joaozinho@cluster0-ah95t.mongodb.net/test?retryWrites=true&w=majority');

// Carrega os models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');

// Middleware que converte o conteúdo do body
app.use(bodyParser.json()); // Todo conteúdo vai ser convertido para JSON
app.use(bodyParser.urlencoded({ extended: false }));// Serve para codificar as URLs -> Ex: 'espaço' ==> '%20'

// Direciona uma rota x para o seu route correspondente
app.use('/', indexRoute); 
app.use('/products', productRoute);
app.use('/customers', customerRoute);

module.exports = app; // Exporta a classe (É o que vai ser enviado para a classe que importou)