const express = require('express');
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/planetAPI');
const app = express();
const planetRouter = express.Router();
const port = process.env.PORT || 3000;
const Planet = require('./models/planetModel');

planetRouter.route('/planets').get((req, res) => {
  Planet.find((err, planets) => {
    if (err) {
      return res.send(err);
    }
    return res.json(planets);
  });
});

app.use('/api', planetRouter);

app.get('/', (req, res) => {
  res.send('API');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
