'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product
        .find({
            active: true // Filtra somente os registros que estão ativos
        }, 'title price slug') //  Trás somente os campos informados após a vírgula  
        // {} -> Trás todos os registros (Sem filtro)
        // {name: 'john'} -> Filtra pelo nome john
        .then(data => {  // Se der certo... Recebe data e manda no response
            res.status(200).send(data);
        }).catch(e => {  // Se der ruim... Bad Request
            res.status(400).send({e});
        });
}

exports.getBySlug = (req, res, next) => {
    Product
        .findOne({ // Procura um único registro ao invés de retornar um array de resultados
            slug: req.params.slug,
            active: true 
        }, 'title description price slug tags') 
        .then(data => {  
            res.status(200).send(data);
        }).catch(e => {  
            res.status(400).send({e});
        });
}

exports.post = (req, res, next) => {
    var product = new Product(req.body); // Tudo da requisição é passado para o corpo do produto (Pode passar qualquer coisa fora do definido no Model)

    /* // Passando pelos padrões definidos no Model.
    var product = new Product(); // Criando instância
    product.title = req.body.title;
    product.slug = req.body.slug;
    product.description = req.body.description;
    product.price = req.body.price;
    product.active = req.body.active;
    product.tags = req.body.tags; */

    product
        .save() // Salva o item no BD -> Retorna uma promise (Não é ctz que salvou no banco, por isso o tratamento no then)
        .then(x => {  // Se der certo... Created
            res.status(201).send({
                message: 'Produto cadastrado com sucesso!'
            });
        }).catch(e => {  // Se der ruim... Bad Request
            res.status(400).send({
                message: 'Falha ao cadastrar o produto',
                data: e
            });
        });
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