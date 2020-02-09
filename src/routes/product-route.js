'use strict';

const express = require('express');
const router = express.Router(); // Arquivo de rotas

router.post('/', (req, res, next) => {
    res.status(201).send(req.body); // Created enviando o corpo da requisição já convertido
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id; // Recupera valor id da rota 
    res.status(200).send({
        id: id,
        item: req.body
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

module.exports = router;    