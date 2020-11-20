const router = require('express').Router();

const services = require('./services');
const createServices = require('./createServices');
const deleteServices = require('./deleteServices');

router.get('/services', services);
router.post('/bullServices', createServices);
router.delete('/deleteServices', deleteServices);

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Index Services Connected!' });
});

module.exports = router;