'use strict';

const express = require('express');
const router = express.Router(); // Arquivo de rotas
const controller =  require('../controllers/product-controller');

// Chamando métodos no controller 
router.get('/', controller.get);
router.post('/', controller.post); // Chama a rota 'post' no product-controller
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;