'use strict'

const express = require('express');

const app = express(); // Instância do express
const router = express.Router(); // Arquivo de rotas

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

app.use('/', route);

module.exports = app; // Exporta a classe (É o que vai ser enviado para a classe que importou)