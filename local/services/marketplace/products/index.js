const routes = require('express').Router();
const products = require('./products');

routes.get('/products', products);

module.exports = routes;