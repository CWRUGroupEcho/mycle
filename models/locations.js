
module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define("Post", {
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

  Location.associate = function(models) {
    Location.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };


  return Location;

};

