function planetsController(Planet) {
  function post(req, res) {
    const planet = new Planet(req.body);

    if (!req.body.name) {
      res.status(400);
      return res.send('Name is required');
    }

    if (!req.body.climate) {
      res.status(400);
      return res.send('Climate is required');
    }

    if (!req.body.terrain) {
      res.status(400);
      return res.send('Terrain is required');
    }

    planet.save();
    res.status(201);
    return res.json(planet);
  }

  function get(req, res) {
    const query = {};

    if (req.query.name) {
      query.name = req.query.name;
    }

    if (req.query.id) {
      query.id = req.query.id;
    }

    Planet.find(query, (err, planets) => {
      if (err) {
        return res.send(err);
      }
      // const returnPlanets = planets.map((planet) => {
      //   const newPlanet = planet.toJSON();
      //   newPlanet.links = {};
      //   newPlanet.links.self = `http://${req.headers.host}/api/planets/${planet._id}`;
      //   return newPlanet;
      // });
      // return res.json(returnPlanets);
      return res.json(planets);
    });
  }

  function getById(req, res) {
    const returnPlanet = req.planet.toJSON();
    // returnPlanet.links = {};
    // const name = req.planet.name.replace(' ', '%20');
    // returnPlanet.links.FilterByThisName = `http://${req.headers.host}/api/planets?name=${name}`;
    res.json(returnPlanet);
  }

  function deleteById(req, res) {
    req.planet.remove((err) => {
      if (err) {
        return res.send(err);
      }
      return res.status(200).json({ Deleted: req.planet });
    });
  }

  return { post, get, getById, deleteById };
}

module.exports = planetsController;
