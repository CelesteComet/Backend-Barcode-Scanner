const express = require('express');
const router = express.Router();
const upc = require('../app/model/Upc');

/* GET users listing. */
router.get('/', upc.index);

module.exports = router;
