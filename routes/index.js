var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const MongoClient = require('mongoose')
// mongoose.connect('mongodb://captaincmy2:Polloloco1@ds157901.mlab.com:57901/core-fitness');
/* GET home page. */
let connectionString = `mongodb://captaincmy2:${process.env.password}@ds157901.mlab.com:57901/core-fitness`;
mongoose.connect(connectionString);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(' connected!')
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
  
module.exports = router;
