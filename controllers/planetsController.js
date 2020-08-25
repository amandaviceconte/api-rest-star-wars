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

      return res.json(planets);
    });
  }
  return { post, get };
}

module.exports = planetsController;