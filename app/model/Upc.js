const db = require('../../config/db');

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