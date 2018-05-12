// Dependencies


var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var connection = require("");

// Creates a Location model that matches up with DB
var Location = connection.define("book", {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  address: {
    type: Sequelize.STRING
  },
  photo: {
    type: Sequelize.STRING
  },
  likes: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});

// Syncs with DB
Location.sync();

// Makes the Location Model available for other files 
module.exports = Location;
