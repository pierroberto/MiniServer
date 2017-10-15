const connection = require('mongodb').MongoClient;
const mongoose = require('mongoose');
// Using 'mongoose.connect'
const promise = mongoose.connect('mongodb://localhost/Users', {
  useMongoClient: true
});
promise.then( db => {
  console.log('yeah');
});

// mongoose.connect.on('error', console.error.bind(console, 'connection error:'));
// mongooose.connect.once('open', () => {
//   //connected!
//   console.log('connected!')
// })
function fullList () {
  console.log('hello')
}
