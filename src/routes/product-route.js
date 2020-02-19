'use strict';

const express = require('express');
const router = express.Router(); // Arquivo de rotas
const controller = require('../controllers/product-controller');
const authService = require('../services/auth-service');

// Chamando métodos no controller 
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById); // Tem que ter o '/admin/' para não dar conflito com a rota de cima
router.get('/tags/:tag', controller.getByTag); // Chama a rota 'getByTag' no product-controller 
router.post('/', authService.isAdmin, controller.post); // Rota com autenticação JWT
router.put('/:id', authService.isAdmin, controller.put);
router.delete('/:id', authService.isAdmin, controller.delete);

module.exports = router;