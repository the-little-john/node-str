'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    return Product
        .find({
            active: true // Filtra somente os registros que estão ativos
        }, 'title price slug'); //  Trás somente os campos informados após a vírgula  
    // {} -> Trás todos os registros (Sem filtro)
    // {name: 'john'} -> Filtra pelo nome john
}

exports.getBySlug = (slug) => {
    return Product
        .findOne({ // Procura um único registro ao invés de retornar um array de resultados
            slug: slug, // Filtra pelo slug passados na req
            active: true
        }, 'title description price slug tags');
}

exports.getById = (id) => {
    return Product
        .findById(id); // Procura pelo id que está na rota
}

exports.getByTag = (tag) => {
    return Product
        .find({
            tags: tag, // Filtra por uma tag dentro do array de tags (Sem precisar de forEach)
            active: true,
        }, 'title description price slug tags');
}

exports.create = (data) => {
    var product = new Product(data);
    return product.save(); // Salva o item no BD -> Retorna uma promise (Não é ctz que salvou no banco, por isso o tratamento no then)
}

exports.update = (id, data) => {
    return Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        });
}

exports.delete = (id) => {
    return Product
        .findOneAndRemove({
            _id: id
        });
}