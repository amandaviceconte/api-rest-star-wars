const express = require('express');
const Planet = require('../models/planetModel');

function routes() {
  const planetRouter = express.Router();

  planetRouter
    .route('/planets')

    .post((req, res) => {
      const planet = new Planet(req.body);

      planet.save();

      return res.status(201).json(planet);
    })

    .get((req, res) => {
      const query = {};

      if (req.query.nome) {
        query.nome = req.query.nome;
      }
      Planet.find(query, (err, planets) => {
        if (err) {
          return res.send(err);
        }

        return res.json(planets);
      });
    });


  planetRouter.route('/planets/:planetId').get((req, res) => {
    Planet.findById(req.params.planetId, (err, planet) => {
      if (err) {
        return res.send(err);
      }
      return res.json(planet);
    });
  });

  return planetRouter;
}

module.exports = routes;
