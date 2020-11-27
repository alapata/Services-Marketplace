const router = require('express').Router();

const categories = require('./categories');
const createCategories = require('./createCategories');
const deleteCategories = require('./deleteCategories');

router.get('/categories', categories);
router.post('/bullCategories', createCategories);
router.delete('/deleteCategories', deleteCategories);

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Index Categories Connected!' });
});

module.exports = router;