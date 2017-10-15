const router = require('./server/router.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(3000, () => console.log('listening...'));
app.use(bodyParser());
app.use(express.static('./client'));
app.use(router);
