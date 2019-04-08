
var chai = require('chai');
var assert = chai.assert;
//var assert = require('assert');
var request = require('request');
describe('Basic Mocha String Test', function () {
 it('should return number of charachters in a string', function () {
        assert.equal("Hello".length, 5);
    });
 it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
        //throw {myError:'throwing error to fail test'}
    });
});

describe('Server Test', function () {
    let age = 0;
    it('should return array as result', function (done) {
        request('http://localhost:3003/house_images', function (error, response, body) {
        //console.log("response", response);
        let result = JSON.parse(body).results;
        //console.log("Got back:", JSON.parse(body).results);
        assert.equal(Array.isArray(result), true);
        done();
    });

    });

    if (1===1) {

    }
    else {

    }
   });

