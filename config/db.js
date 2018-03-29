var promise = require('bluebird');

var options = {
  promiseLib: promise
};

console.log(process.env);

var pgp = require('pg-promise')(options);

let connectionString;
if (process.env.NODE_ENV === 'production') {
  connectionString = process.env.DATABASE_URL;
} else {
  connectionString = 'postgres://localhost:5432/upcs';
}
var db = pgp(connectionString);

module.exports = db;

