'use strict'

// HTTP Method: GET
// Route: /api/cart/
// Description: Get cart session.
function index(req, res) {
  try {
    // If cart session exists, it returns the content. Else, it returns an avoid array.
    if (typeof req.session.cart !== 'undefined') {
      return res.status(200).send({ cart: req.session.cart });
    }
    return res.status(200).send({ cart: [] });
  } catch(error) {
    return res.status(500).send({ error });
  }
}

// HTTP Method: POST
// Route: /api/cart/
// Description: Add/update/remove/clean cart session.
function create(req, res) {
  // If request body doesn't send, clean cart and destroy session.
  if (req.body === []) {
    req.session.destroy(error => {
      if (error) {
        return res.status(500).send({ error });
      }
      return res.status(200).send({ cart: [] });
    })  
  }

  // Set or replace the cart session with request body.
  req.session.cart = req.body;

  // Save cart in session.
  req.session.save(error => {
    if (error) {
      return res.status(500).send({ error });
    }
    return res.status(200).send({ cart: req.session.cart });
  });
}

module.exports = { index, create };