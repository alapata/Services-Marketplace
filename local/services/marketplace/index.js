const market = require('express').Router();
const stores = require('./stores');

market.get('/stores', stores);

module.exports = market;