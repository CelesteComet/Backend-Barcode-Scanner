const express = require('express');
const router = express.Router();

const db = require('../config/db').get();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(db);
  var collection = db.collection('UPC')

  collection.find().toArray(function(err, docs) {
    res.render('upc', {upc: docs})
  })
});

module.exports = router;
