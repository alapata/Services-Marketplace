const routes = require('express').Router();

const products = require('./products');
const createProduct = require('./createProduct');
const deleteProducts = require('./deleteProducts');
const productsdetails = require('./products_details');

routes.get('/products', products);
routes.post('/bullProduct', createProduct);
routes.delete('/deleteProducts', deleteProducts);
routes.get('/productsfull', productsdetails);

module.exports = routes;