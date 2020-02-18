'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // _id (Gerado automaticamente)
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: { // Cadeira Gamer -> cadeira-gamer(slug)
        type: String,
        required: [true, 'O Slug é obrigatório'], // Valor boolean , Mensagem de erro
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{ // Array de strings que permite incluirmos diversos valores como tags
        type: String,
        required: true
    }],
    image: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Product', schema);  // Exportando model Product