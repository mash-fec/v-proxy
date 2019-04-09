const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const faker = require('faker');
const app = require('../server');
const generate = require('../helpers/generator.js');

// =============== Test Database =============== \\

mongoose.connect('mongodb://localhost/airbnbTest', { useNewUrlParser: true });

const testSchema = new mongoose.Schema({
  host: {
    name: String,
    pic: String
  },
  title: String,
  city: String,
  numGuests: Number,
  homeType: String,
  numBedrooms: Number,
  numBeds: Number,
  numBaths: Number,
  description: String
});

const TestDesc = mongoose.model('TestDesc', testSchema);

const noun = generate.genNoun();
const numGuests = generate.genNumGuests();
const numBedrooms = generate.genNumBedrooms();

const testHome = new TestDesc({
  host: {
    name: faker.name.firstName(),
    pic: faker.image.avatar()
  },
  title: generate.genTitle(noun),
  city: generate.genCity(),
  numGuests,
  homeType: generate.genHomeType(noun),
  numBedrooms,
  numBeds: generate.genNumBeds(numGuests),
  numBaths: generate.genNumBaths(),
  description: generate.genDescription(noun, numBedrooms)
});

// =============== End Database =============== \\

chai.use(chaiHttp);
chai.should();

describe('Server', () => {
  it('should return status 200 from GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('should not return 404 status from GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.not.have.status(404);
        done();
      });
  });

  it('should return status 404 from nonexistent paths', (done) => {
    chai.request(app)
      .get('/descriptions')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});

describe('Database', () => {
  before(() => {
    testHome.save((err) => {
      if (err) {
        console.log('Error saving home description to test database:', err);
      }
    });
  });

  it('should return a description object', () => {
    TestDesc.find({}, (err, res) => {
      if (err) console.log('Error reading from db:', err);
      else {
        res[0].should.be.an('object');
      }
    });
  });

  describe('Description Object', () => {
    describe('Host Object', () => {
      it('should have a name', () => {
        TestDesc.find({}, (err, res) => {
          if (err) console.log('Error reading host name:', err);
          else {
            console.log('res:', res[0]);
            console.log('host name:', res[0].host.name);
            res[0].host.name.should.be.a('string');
          }
        });
      });

      it('should have a picture', () => {
        TestDesc.find({}, (err, res) => {
          if (err) console.log('Error reading host picture:', err);
          else {
            console.log('host pic:', res[0].host.pic);
            res[0].host.pic.should.be.a('string');
          }
        });
      });
    });

    it('should have a title', () => {
      TestDesc.find({}, (err, res) => {
        if (err) console.log('Error reading title:', err);
        else {
          res[0].title.should.be.a('string');
        }
      });
    });

    it('should have a city', () => {
      TestDesc.find({}, (err, res) => {
        if (err) console.log('Error reading city:', err);
        else {
          res[0].city.should.be.a('string');
        }
      });
    });

    it('should have a number of allowed guests', () => {
      TestDesc.find({}, (err, res) => {
        if (err) console.log('Error reading number of guests:', err);
        else {
          res[0].numGuests.should.be.a('number');
        }
      });
    });

    it('should have a home type', () => {
      TestDesc.find({}, (err, res) => {
        if (err) console.log('Error reading home type:', err);
        else {
          res[0].homeType.should.be.a('string');
        }
      });
    });

    it('should have a number of bedrooms', () => {
      TestDesc.find({}, (err, res) => {
        if (err) console.log('Error reading bedrooms:', err);
        else {
          res[0].numBedrooms.should.be.a('number');
        }
      });
    });

    it('should have a number of beds', () => {
      TestDesc.find({}, (err, res) => {
        if (err) console.log('Error reading beds:', err);
        else {
          res[0].numBeds.should.be.a('number');
        }
      });
    });

    it('should have a number of bathrooms', () => {
      TestDesc.find({}, (err, res) => {
        if (err) console.log('Error reading bathrooms:', err);
        else {
          res[0].numBaths.should.be.a('number');
        }
      });
    });

    it('should have a description paragraph', () => {
      TestDesc.find({}, (err, res) => {
        if (err) console.log('Error reading paragraph:', err);
        else {
          res[0].description.should.be.a('string');
        }
      });
    });
  });
});
