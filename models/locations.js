// Dependencies
module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define("locations", {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    adress: {
      type: DataTypes.STRING
    },
    picture_url: {
      type: DataTypes.STRING
    }, 
  
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    timestamps: false
  });

  return Location;

}


// var Sequelize = require("sequelize");
// // sequelize (lowercase) references my connection to the DB.
// // var connection = require("");

// // Creates a Location model that matches up with DB
// var Location = .define("Locations", {
//   name: {
//     type: Sequelize.STRING
//   },
//   description: {
//     type: Sequelize.TEXT
//   },
//   address: {
//     type: Sequelize.STRING
//   },
//   photo: {
//     type: Sequelize.STRING
//   }, 

//   likes: {
//     type: Sequelize.INTEGER
//   }
// }, {
//   timestamps: false
// });

// // Syncs with DB
// Location.sync();

// // Makes the Location Model available for other files.

// module.exports = Location;
