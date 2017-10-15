const express = require('express');
const router = express();
const users = require('./controllers/users.js');

router.get('/utenti', users.retrieveUsers);

module.exports = router;
