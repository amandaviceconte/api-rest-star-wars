require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.ENV = 'Test';

const app = require('../app.js');

const Planet = mongoose.model('Planet');
const agent = request.agent(app);

describe('Planet CRUD Test', () => {
  it('should allow a planet to be posted and return name and _id', (done) => {
    const planetPost = {
      name: 'Planeta Qualquer',
      climate: 'Quente',
      terrain: 'Floresta',
    };

    agent
      .post('/api/planets')
      .send(planetPost)
      .expect(200)
      .end((err, results) => {
        results.body.name.should.not.equal('');
        results.body.climate.should.not.equal('');
        results.body.terrain.should.not.equal('');
        results.body.should.have.property('_id');
        done();
      });
  });

  // Clean database
  afterEach((done) => {
    Planet.deleteMany({}).exec();
    done();
  });

  // After all tests are done
  after((done) => {
    // Close mongoose connection
    mongoose.connection.close();
    // Close application
    app.server.close(done());
  });
});
