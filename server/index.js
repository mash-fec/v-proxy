const express = require('express');
const httpProxy = require('http-proxy');

const app = express();

const port = 3005;

const proxy = httpProxy.createProxyServer({});

app.use(express.static(__dirname + '/../public'));
app.use(express.urlencoded({extended: false}));


app.get('/house_images', (req, res) => {
  proxy.web(req, res, {target: 'http://localhost:3003'});
});

app.get('/description', (req, res) => {
  proxy.web(req, res, {target: 'http://localhost:3210'});
});

app.get('/totalReviews', (req, res) => {
  proxy.web(req, res, {target: 'http://localhost:3004'});
});

app.get('/morehomes', (req, res) => {
  proxy.web(req, res, {target: 'http://localhost:3000'});
});


var server = app.listen(port, console.log('Listening on port: ', port));

module.exports = server;
