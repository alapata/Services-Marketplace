const market = require('express').Router();

const storesService = require('./storesService');
const categoriesService = require('./categoriesService');

const bodyParser = require('body-parser');
market.use(bodyParser.urlencoded({ extended: false }))
market.use(bodyParser.json())

market.use('/storesService', storesService);
market.use('/categoriesService', categoriesService);

market.get('/', (req, res) => {
    res.status(200).json({ message: 'Index marketplace Connected!' });
});

module.exports = market;