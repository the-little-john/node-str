'use strict'

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async (data) => {
    var res = await Order
        .find({}, 'number status customer items') // Busca todos os pedidos
        .populate('customer', 'name')  // Trás as informações do customer (De outra collection) que está atrelado ao pedido
        .populate('items.product', 'title'); // Mesmo coisa com o items.product
    return res;
}

exports.create = async (data) => {
    var order = new Order(data);
    await order.save();
}