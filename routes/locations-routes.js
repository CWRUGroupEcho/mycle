// dependencies
var db = require("../models")

module.exports = function(app) {

// welcome page get all for now - need to alter to get most liked locations
app.get("/", function(req, res) {
  db.locations.findAll({
  	order: [
  	  ["likes", "DESC"]
  	],
  	limit: 3
}).then(function(results) {
    var hbsObject = {
      Location: results
    };
    
    res.render("welcome", hbsObject);
    
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

  	// include: [db.Reviews]
  }).then(function(results) {
  	var hbsObject = {
  	  Locations: results
  	};
  	console.log(hbsObject);
  	// res.render("category", hbsObject);
  	res.json(hbsObject)
  });
});

//get reviews for locations
app.get("/api/reviews/:Locationid", function(req, res) {
  db.Reviews.findAll({
	where: {
	  Locationid: req.params.Locationid
	},
	include: [db.Locations]
  }).then(function(results) {
  	var hbsObject = {
  		Reviews: results
  	};
  	console.log(hbsObject);
  	// res.render("reviews", hbsObject);
  	res.json(hbsObject)
  })
})
app.get("/api/review", function(req, res) {
  res.render("review")
});

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


// var db = require("../models");

// module.exports = function (app) {

// 	// welcome page get all for now - need to alter to get most liked locations
// 	app.get("/", function (req, res) {
// 		db.locations.findAll({}).then(function (results) {
// 			var hbsObject = {
// 				Location: results
// 			};
// 			res.render("welcome", hbsObject);
// 		});
// 	});

// 	// get by location
// 	app.get("/api/name/:name", function (req, res) {
// 		Location.findOne({
// 			where: {
// 				name: req.params.name
// 			}
// 		}).then(function (results) {
// 			var hbsObject = {
// 				Location: data
// 			};
// 			console.log(hbsObject);
// 			res.render("location", hbsObject);
// 		});
// 	});

// 	// get by category
// 	app.get("/api/category/:category", function (req, res) {
// 		Location.findOne({
// 			where: {
// 				cateory: req.params.category
// 			}
// 		}).then(function (results) {
// 			var hbsObject = {
// 				Location: data
// 			};
// 			console.log(hbsObject);
// 			res.render("category", hbsObject);
// 		});
// 	});
// };

// post for liking locations
