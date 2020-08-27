const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

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

let url;
let planetsAppearances = {};

function fetchSwapiAPI() {
  if (!url) {
    url = 'https://swapi.dev/api/planets/?page=1';
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((planet) => {
        planetsAppearances[planet.name.toString()] = planet.films.length;
      });

      if (typeof data.next == 'string') {
        url = data.next;
        fetchSwapiAPI();
      } else {
        exports.planetsAppearances = planetsAppearances;
      }
    })
    .catch((err) => console.log(err));
}

fetchSwapiAPI();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', planetRouter);

app.get('/', (req, res) => {
  res.send('API');
});

setTimeout(function () {
  app.server = app.listen(port, () => {
    console.log(`Running on port ${port}`);
  });
}, 7000);

module.exports = app;
