function planetsController(Planet) {

  function post(req, res) {
    const planet = new Planet(req.body);

    planet.save();

    return res.status(201).json(planet);
  }

  function get(req, res) {
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
  }
  
  return { post, get };
}

module.exports = planetsController;
