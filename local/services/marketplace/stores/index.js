const routes = require('express').Router();
const stores = require('./stores');
const createStore = require('./createStores');
const storesDetails = require('./stores_details');

routes.get('/stores', stores);
routes.get('/bullstores', createStore);
routes.get('/storesfull', storesDetails);

module.exports = routes;