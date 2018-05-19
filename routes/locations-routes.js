// dependencies

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
app.get("/api/locations/:id", function(req, res) {
  db.Locations.findOne({
  	where: {
  	 id: req.params.id
  	},
  	include: [db.Reviews]
  }).then(function(results) {
  	var hbsObject = {
  	  Locations: results
  	};
  	console.log(hbsObject);
  	// res.render("location", hbsObject);
  	res.json(hbsObject)
  });
});

// get by category
app.get("/api/category/:category", function(req, res) {
  db.Locations.findAll({
  	where: {
  		category: req.params.category
  	},

  }).then(function(results) {
  	var hbsObject = {
  	  Locations: results
  	};
  	console.log(hbsObject);
  	// res.render("category", hbsObject);
  	res.json(hbsObject)
  });
});


// put for liking locations
app.put("/api/likes", function(req, res) {
  var localLikes = Number(req.params.likes)
  var newLikes = (localLikes + 1)
  console.log("new likes: " + newLikes)
  db.Locations.update(
	{likes: newLikes},
	{where: req.params.id}
	).then(function(results) {
	  var hbsObject = {
		Locations: results
	  };
	  console.log(hbsObject);
	  res.render("location", hbsObject);
  });
});

}

