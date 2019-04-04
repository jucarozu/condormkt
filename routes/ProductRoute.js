'use strict'

const express = require('express');
const router = express.Router();

// Controllers
const ProductController = require('../controllers/ProductController');

// Routes
router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);

module.exports = router;