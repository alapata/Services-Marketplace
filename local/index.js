var express = require('express');
const services = require('./services');
var app = express();
const port = 3000;

app.use('/', services);

app.listen(port, () => {
  console.log(`Alapata is listening at http://localhost:${port}`);
})