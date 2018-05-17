// dependencies
// var Locations = require("../models/locations.js")

// var Reviews = require("../models/reviews.js")

var db = require("../models")

module.exports = function(app) {

// welcome page get all for now - need to alter to get most liked locations
app.get("/", function(req, res) {
  db.Locations.findAll({
  	order: [
  	  ["likes", "DESC"]
  	],
  	limit: 3
}).then(function(results) {
    var hbsObject = {
      Locations: results
    };
    console.log(hbsObject);
    // res.render("welcome", hbsObject);
    res.json(hbsObject)
  });
});

// get by location
app.get("/api/locations/:location_name", function(req, res) {
  db.Locations.findOne({
  	where: {
  	  location_name: req.params.location_name
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
  db.Locations.findOne({
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
app.get("/api/reviews/:location_name", function(req, res) {
  db.Reviews.findAll({
	where: {
	  location_name: req.params.location_name
	},
	include: [Locations]
  }).then(function(results) {
  	var hbsObject = {
  		Reviews: results
  	};
  	console.log(hbsObject);
  	res.render("reviews", hbsObject);
  })
})

// put for liking locations
app.put("/api/likes", function(req, res) {
  var localLikes = Number(req.params.likes)
  var newLikes = (localLikes + 1)
  console.log("new likes: " + newLikes)
  db.Locations.update({ 
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