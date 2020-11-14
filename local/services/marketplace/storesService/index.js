const routes = require('express').Router();

const store = require('./stores');
const createStore = require('./createStores');
const storesDetails = require('./stores_details');

routes.get('/store', store);
routes.get('/bullstores', createStore);
routes.get('/storesfull', storesDetails);

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Index Stores Connected!' });
});

module.exports = routes;