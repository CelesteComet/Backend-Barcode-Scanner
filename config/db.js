var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/upcs';
var db = pgp(connectionString);

// add query functions

const index = (req, res, next) => {
  db.any('SELECT * FROM upcs')
    .then(function(data) {
      res.json(data);
    })
    .catch(function(error) {
      res.json(error);
    });
};

module.exports = {
  index
};
