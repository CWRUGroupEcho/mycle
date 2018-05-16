// dependencies
var Locations = require("../models/locations.js")

var Reviews = require("../models/reviews.js")

module.exports = function(app) {

// welcome page get all for now - need to alter to get most liked locations
app.get("/", function(req, res) {
  Location.max("likes").then(function(results) {
    var hbsObject = {
      Location: results
    };
    console.log(hbsObject);
    res.render("welcome", hbsObject);
  });
});

// get by location
app.get("/api/locations/:location_id", function(req, res) {
  Locations.findOne({
  	where: {
  		location_id: req.params.location_id
  	},

  }).then(function(results) {
  	var hbsObject = {
  	  Locations: results
  	};
  	console.log(hbsObject);
  	res.render("location", hbsObject);
  });
});

// get by category
app.get("/api/category/:category", function(req, res) {
  Locations.findOne({
  	where: {
  		cateory: req.params.category
  	}
  }).then(function(results) {
  	var hbsObject = {
  	  Locations: results
  	};
  	console.log(hbsObject);
  	res.render("category", hbsObject);
  });
});

//get reviews for locations
app.get("/api/reviews/:location", function(req, res) {
  Locations.findAll({
	where: {
		location_id: req.params.location_id
	}
  }).then(function(results) {
  	var hbsObject = {
  		Locations: results
  	};
  	console.log(hbsObject);
  	res.render("reviews", hbsObject);
  })
})

// put for liking locations
app.put("/api/likes", function(req, res) {
  var localLikes = req.params.likes
  var newLikes = (localLikes + 1)
  console.log("new likes: " + newLikes)
  Locations.update({ 
	likes: newLikes

  }).then(function(results) {
	  var hbsObject = {
		Locations: results
	  };
	  console.log(hbsObject);
	  res.render("location", hbsObject);
  });
});


}

// Model.update({ field: sequelize.literal('field + 2') }, { where: { id: model_id } });