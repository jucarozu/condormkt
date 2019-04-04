'use strict'

const express = require('express');
const router = express.Router();

// Controllers
const CategoryController = require('../controllers/CategoryController');

// Routes
router.get('/categories', CategoryController.index);

module.exports = router;