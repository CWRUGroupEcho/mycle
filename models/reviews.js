module.exports = function(sequelize, DataTypes) {

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
  created: {
    type: DataTypes.DATEONLY
  }
}, {
  timestamps: false
});
return Review;
}
