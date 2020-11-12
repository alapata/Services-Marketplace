const router = require('express').Router();
const categories = require('./category');

router.get('/category', categories);

module.exports = router;