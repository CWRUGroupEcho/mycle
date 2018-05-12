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

// get by location
app.get("/api/name/:name", function(req, res) {
  Location.findOne({
  	where: {
  		name: req.params.name
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
