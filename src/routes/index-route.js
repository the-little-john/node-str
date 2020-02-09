'use strict';

const express = require('express');
const router = express.Router(); // Arquivo de rotas

router.get('/', (req, res, next) => { // Rota raiz contendo informações da API
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

module.exports = router;