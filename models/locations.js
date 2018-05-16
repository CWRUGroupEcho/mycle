
module.exports = function(sequelize, DataTypes) {
  var Locations = sequelize.define("Post", {
    name: {
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
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }, 
    likes: {
      type: DataTypes.INTEGER,
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

