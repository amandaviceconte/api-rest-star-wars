const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

if (process.env.ENV === 'Test') {
  console.log('Test environment');
  const db = mongoose.connect('mongodb://localhost/planetAPI_Test');
} else {
  console.log('Prod environment');
  const db = mongoose.connect('mongodb://localhost/planetAPI');
}

const port = process.env.PORT || 3000;
const Planet = require('./models/planetModel');
const planetRouter = require('./routes/planetRouter')(Planet);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', planetRouter);

app.get('/', (req, res) => {
  res.send('API');
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
