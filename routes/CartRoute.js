'use strict'

const express = require('express');
const router = express.Router();

// Controllers
const CartController = require('../controllers/CartController');

// Routes
router.get('/cart', CartController.index);
router.post('/cart', CartController.create);

module.exports = router;