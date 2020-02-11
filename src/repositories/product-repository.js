'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async () => {
    const res = await Product // Aguarda a req do Product.find
        .find({ 
            active: true // Filtra somente os registros que estão ativos
        }, 'title price slug'); //  Trás somente os campos informados após a vírgula
    return res;
}

exports.getBySlug = async (slug) => {
    const res = await Product
        .findOne({ // Procura um único registro ao invés de retornar um array de resultados
            slug: slug, // Filtra pelo slug passados na req
            active: true
        }, 'title description price slug tags');
    return res;
}

exports.getById = async (id) => {
    const res = await Product
        .findById(id); // Procura pelo id que está na rota
    return res;
}

exports.getByTag = async (tag) => {
    const res = Product
        .find({
            tags: tag, // Filtra por uma tag dentro do array de tags (Sem precisar de forEach)
            active: true,
        }, 'title description price slug tags');
    return res;
}

exports.create = async (data) => {
    var product = new Product(data);
    await product.save(); // Salva o item no BD
}

exports.update = async (id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        });
}

exports.delete = async (id) => {
    await Product
        .findOneAndRemove({
            _id: id
        });
}