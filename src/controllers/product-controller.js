'use strict';

exports.post = (req, res, next) => {
    res.status(201).send(req.body); // Created enviando o corpo da requisição já convertido
};

exports.put = (req, res, next) => {
    const id = req.params.id; // Recupera valor id da rota 
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};