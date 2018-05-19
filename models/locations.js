
module.exports = function(sequelize, DataTypes) {
  var Locations = sequelize.define("Locations", {
    locationName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    picture_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }, 
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    }
  }, {
    timestamps: false
});

  Locations.associate = function(models) {
    Locations.hasMany(models.Reviews, {
      onDelete: "cascade"
    });
  };


  return Locations;

};

