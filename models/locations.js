
module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define("Post", {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: .TEXT
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
  return Location;

};

