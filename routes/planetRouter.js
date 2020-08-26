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

    // .get((req, res) => res.json(req.planet))
    .get(controller.getById)
    // .get((req, res) => {
    //   const returnPlanet = req.planet.toJSON();

    //   returnPlanet.links = {};
    //   const name = req.planet.name.replace(' ', '%20');
    //   returnPlanet.links.FilterByThisName = `http://${req.headers.host}/api/planets?name=${name}`;
    //   res.json(returnPlanet);
    // })

    .delete(controller.deleteById);

  // .delete((req, res) => {
  //   req.planet.remove((err) => {
  //     if (err) {
  //       return res.send(err);
  //     }
  //     return res.status(200).json({ Deleted: req.planet });
  //   });
  // });

  return planetRouter;
}

module.exports = routes;
