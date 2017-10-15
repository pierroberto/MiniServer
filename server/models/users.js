const connection = require('mongodb').MongoClient;
const mongoose = require('mongoose');
// Using 'mongoose.connect'

const userSchema = mongoose.Schema({
  name: String,
  lastName: String,
  age: Number
});

const users = mongoose.model('Users', userSchema);

mongoose.connect('mongodb://localhost/Users');
mongoose.connection.on('error', console.log.bind(console, 'ERROR')).once('open', () => {
  console.log('connected successfully');

})

function fullList() {
  return new Promise ((resolve, reject) => {
    users.find((err, userList) => {
      resolve(userList);
    });
  });
}

module.exports = fullList;
