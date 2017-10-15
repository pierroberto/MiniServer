const users = require('../models/users.js');


function retrieveUsers (req, res) {
  users.fullList().then((data) => {
    res.send(data)
  })
}

module.exports = retrieveUsers;
