'use strict';

const express = require('express');
const router = express.Router(); // Arquivo de rotas
const controller =  require('../controllers/product-controller');

// Chamando métodos no controller 
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById); // Tem que ter o '/admin/' para não dar conflito com a rota de cima
router.get('/tags/:tag', controller.getByTag);
router.post('/', controller.post); // Chama a rota 'post' no product-controller
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;