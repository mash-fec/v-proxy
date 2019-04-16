var chai = require('chai');
var expect = require('chai').expect;
var assert = require('chai').assert;
var chaiHTTP = require('chai-http');

var server = require('../server/index.js');

chai.use(chaiHTTP);

describe('GET requests', () => {
  it('Should have a GET request to / with status code 200', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});