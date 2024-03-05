const assert = require('assert');
const app = require('../app');
const request = require('supertest');

describe('API POST Request', () => {
  it('should return the posted data', (done) => {
    const postData = { name: 'task1'}; 

    request(app)
      .post('/api/data')
      .send(postData) 
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/) 
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.status, 200);
        assert.deepStrictEqual(res.body, postData); 
        done();
      });
  });
});
