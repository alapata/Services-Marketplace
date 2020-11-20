const market = require('express').Router();

const storesService = require('./storesService');
const categoriesService = require('./categoriesService');
const services = require('./services');

const bodyParser = require('body-parser');
//const services = require('./Services/services');
market.use(bodyParser.urlencoded({ extended: false }))
market.use(bodyParser.json())

market.use('/storesService', storesService);
market.use('/categoriesService', categoriesService);
market.use('/services', services);

market.get('/', (req, res) => {
    res.status(200).json({ message: 'Index marketplace Connected!' });
});

module.exports = market;