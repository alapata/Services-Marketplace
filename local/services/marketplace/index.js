const market = require('express').Router();

const bodyParser = require('body-parser');
market.use(bodyParser.urlencoded({ extended: false }))
market.use(bodyParser.json())

const stores = require('./stores');
const storesDetails = require('./stores_details');
const createStore = require('./createStores');
const categories = require('./categories');
const createCategories = require('./createCategories');
const deleteCategories = require('./deleteCategories');

market.get('/stores', stores);
market.get('/bullstores', createStore);
market.get('/storesfull', storesDetails);
market.get('/categories', categories);
market.post('/bullCategories', createCategories);
market.delete('/deleteCategories', deleteCategories);

module.exports = market;