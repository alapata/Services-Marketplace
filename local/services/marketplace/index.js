const market = require('express').Router();
const stores = require('./stores');
const createStore = require('./createStores');
const storesDetails = require('./stores_details');

market.get('/stores', stores);
market.get('/bullstores', createStore);
market.get('/storesfull', storesDetails);

module.exports = market;