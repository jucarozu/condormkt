'use strict'

// Model
const Category = require('../models/Category');

// HTTP Method: GET
// Route: /api/categories/
// Description: Get all categories.
function index(req, res) {
  Category.find().then(categories => {
    return(
      categories
      ? res.status(200).send({ categories })
      : res.status(404).send({ message: 'No categories found.' })
    );
  }).catch(error => {
    return res.status(500).send({ error });
  });
}

module.exports = { index };