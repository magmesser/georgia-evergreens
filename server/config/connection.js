const mongoose = require('mongoose');

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/greentreesDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Set up an event listener to fire once the connection opens
// Log to the console what host and port we are on.
mongoose.connection.once('open', function () {
  console.log(`Mongoose connected to:
   ${mongoose.connection.host}:
   ${mongoose.connection.port}`);

}).on('error', function (err) {
  // Set up an event listener to fire multitimes the connection errors out
  // Log the error to the console.
  console.log('MongoDB connection error:', err);
});



// Export the connection

module.exports = mongoose.connection;

