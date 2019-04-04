'use strict'

// Model
const Product = require('../models/Product');

// HTTP Method: GET
// Route: /api/products/
// Description: Get all products.
function index(req, res) {
  Product.find().then(products => {
    return(
      products
      ? res.status(200).send({ products })
      : res.status(404).send({ message: 'No products found.' })
    );
  }).catch(error => {
    return res.status(500).send({ error });
  });
}

// HTTP Method: GET
// Route: /api/products/:id
// Description: Get a product by id.
function show(req, res) {
  Product.findOne({ _id: req.params.id }).then(product => {
    return(
      product
      ? res.status(200).send({ product })
      : res.status(404).send({ message: 'Product not found.' })
    );
  }).catch(error => {
    return res.status(500).send({ error });
  });
}

module.exports = { index, show };