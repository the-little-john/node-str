'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // Instância do express
const router = express.Router(); // Arquivo de rotas

//Middleware que converte o conteúdo do body
app.use(bodyParser.json()); // Todo conteúdo vai ser convertido para JSON
app.use(bodyParser.urlencoded({ extended: false }));// Serve para codificar as URLs -> Ex: 'espaço' ==> '%20'

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body); // Created enviando o corpo da requisição já convertido
});

const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id; // Recupera valor id da rota 
    res.status(200).send({
        id: id,
        item: req.body
    });
});

const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

app.use('/', route);
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);

module.exports = app; // Exporta a classe (É o que vai ser enviado para a classe que importou)