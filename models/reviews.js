module.exports = function(sequelize, DataTypes) {

// Creates a Location model that matches up with DB
var Reviews = sequelize.define("Reviews", {
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
    type: DataTypes.TEXT,
    allowNull: false,
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

  Reviews.associate = function(models) {

    // reviews belong to locations
    // foreign key restraint means a review cannot be created unless it is tied to a location
    Reviews.belongsTo(models.Locations, {
      foreignKey: {
        allowNull: false
      }
    });
  };

return Review;
}
