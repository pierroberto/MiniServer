const Express = require('express');
const router = new Express.Router();
const users = require('./controllers/users.js');

router.get('/users', (req, res) => {
  console.log('this is get');
  res.send(users.retrieveUsers);
});

module.exports = router;
