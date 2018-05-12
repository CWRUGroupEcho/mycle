// dependencies

var Location = require("../models/locations.js")

module.exports = function(app) {

// welcome page get all for now - need to alter to get most liked locations
app.get("/", function(req, res) {
  Location.findAll({}).then(function(results) {
    var hbsObject = {
      Location: data
    };
    console.log(hbsObject);
    res.render("welcome", hbsObject);
  });
});


app.get("/api/location/:location", function(req, res) {
  Location.findOne({
  	where: {
  		location_name: req.params.location_name
  	}
  }).then(function(results) {
  	var hbsObject = {
  	  Location: data
  	};
  	console.log(hbsObject);
  	res.render("location", hbsObject);
  });
});

// get by category
app.get("/api/category/:category", function(req, res) {
  Location.findOne({
  	where: {
  		cateory: req.params.category
  	}
  }).then(function(results) {
  	var hbsObject = {
  	  Location: data
  	};
  	console.log(hbsObject);
  	res.render("category", hbsObject);
  });
});

// post for liking locations
