// Dependencies

var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var connection = require("");

// Creates a Location model that matches up with DB
var Review = connection.define("book", {
  name: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  body: {
    type: Sequelize.TEXT
  },
}, {
  timestamps: false
});

// Syncs with DB
Review.sync();

// Makes the Location Model available for other files.
module.exports = Review;
