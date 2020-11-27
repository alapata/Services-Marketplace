const market = require('express').Router();

const stores = require('./stores');
const categories = require('./categories');
const services = require('./services');
const products = require('./products');

const bodyParser = require('body-parser');
market.use(bodyParser.urlencoded({ extended: false }))
market.use(bodyParser.json())

market.use('/stores', stores);
market.use('/categories', categories);
market.use('/services', services);
market.use('/products', products);

market.get('/', (req, res) => {
    res.status(200).json({ message: 'Index marketplace Connected!' });
});

module.exports = market;