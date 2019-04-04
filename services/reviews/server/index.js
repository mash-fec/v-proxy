const express = require('express');
const app = express();
const port = 3004;

var reviewsByDate = require('../database/db.js').reviewsByDate;
var moment = require('moment');
var morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static(__dirname + '/../public'));


app.get('/totalReviews', (req, res) => {

  reviewsByDate((err, allReviews) => {

    if (err) {
      console.log('Get sorted reviews server error: ', err);
      res.send(404);
    } else {
      var reviewCnt = Math.floor(Math.random() * (101 - 5) + 5);
      var reviews = allReviews.slice(0, reviewCnt);
      var criteria = {
        accuracy: 0,
        communication: 0,
        cleanliness: 0,
        location: 0,
        checkin: 0,
        value: 0,
        totalRating: 0
      };

      for (var i = 0; i < reviews.length; i++) {
        var formatDate = moment(reviews[i].date).format('MMMM YYYY').split(' ');
        reviews[i].shortDate = formatDate.join(' ');

        criteria.accuracy += reviews[i].accuracy;
        criteria.communication += reviews[i].communication;
        criteria.cleanliness += reviews[i].cleanliness;
        criteria.location += reviews[i].location;
        criteria.checkin += reviews[i].checkin;
        criteria.value += reviews[i].value;
        criteria.totalRating += reviews[i].avgRating;
      }

      for (var category in criteria) {
        criteria[category] = (criteria[category] / reviewCnt).toFixed(2);
        criteria[category] = parseFloat(criteria[category]);
      }
      res.set('Access-Control-Allow-Origin', '*');
      res.send({reviews, criteria});
    }
  });
});


app.listen(port, () => {
  console.log('Listening on port: ', port);
});

module.exports = app;