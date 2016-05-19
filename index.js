var express = require('express'),
    http = require('http'),
    app = express(),
    httpServer = http.createServer(app);

var mongodb = require('mongodb');

var request = require('request');

app.set('port', 8000);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.render('index', {});
});


httpServer.listen(app.get('port'), function () {
    console.log("Express server listening on port %s.", httpServer.address().port);
});



var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/weightdev';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);

    db.close();
  }
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/weightdev');

