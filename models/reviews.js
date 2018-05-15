// Dependencies

var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var connection = require("");

// Creates a Location model that matches up with DB
var Review = connection.define("Review", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  body: {
    type: DataTypes.TEXT
    allowNull: false
    validate: {
      len: [1]
    }
  },

}, {
  // timestamps: false
  createdAt: DataTypes.DATEONLY
});

// Syncs with DB
Review.sync();

// Makes the Location Model available for other files.
module.exports = Review;
