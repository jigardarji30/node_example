var express = require('express');
var router = express.Router();

// var db = require('./models/db.js');

var data = require('../Controller/add_data.js');

router.get('/add:id', data.db);
router.post('/post', data.post);
router.get('/', data.index1);
router.post('/submit', data.submit);
router.put('/put', data.put);
router.delete('/delete', data.delete);
// router.post('/submit', data.submit);

module.exports = router;
