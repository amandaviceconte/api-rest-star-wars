const should = require('should');
const sinon = require('sinon');
const planetController = require('../controllers/planetsController');

describe('Planet Controller Tests:', () => {
  describe('Post', () => {
    it('should not allow an empty name on post', () => {
      const Planet = function (planet) {
        this.save = () => {};
      };

      const req = {
        body: {
          terrain: 'Floresta',
        }
      };

      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy()
      };

      const controller = planetController(Planet);
      controller.post(req, res);

      res.status.calledWith(400).should.equal(true, `Bad Status ${res.status.args[0][0]}`);
      res.send.calledWith('Name is required').should.equal(true);
    });
  });
});
