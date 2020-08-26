const express = require('express');
const planetsController = require('../controllers/planetsController');

function routes(Planet) {
  const planetRouter = express.Router();
  const controller = planetsController(Planet);

  planetRouter
    .route('/planets')
    .post(controller.post)
    .get(controller.get);

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
    .get(controller.getById)
    .delete(controller.deleteById);

  planetRouter
    .route('/planets/name/:planetName')
    .get(controller.getByName);

  return planetRouter;
}

module.exports = routes;
