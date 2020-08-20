const routes = require('express').Router();
const marketplace = require('./marketplace');
//const dates = require('./dates');

routes.use('/market', marketplace);
//routes.use('/dates', dates);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;