const express = require('express');

function routes(Planet) {
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

  planetRouter.use('/planets/:planetId', (req, res, next) => {
    Planet.findById(req.params.planetId, (err, planet) => {
      if (err) {
        return res.send(err);
      }

      if (planet) {
        req.planet = planet;
        return next();
      }

      return res.sendStatus(404);
    });
  });

  planetRouter
    .route('/planets/:planetId')

    .get((req, res) => res.json(req.planet))

    .delete((req, res) => {
      req.planet.remove((err) => {
        if (err) {
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    });

  return planetRouter;
}

module.exports = routes;
