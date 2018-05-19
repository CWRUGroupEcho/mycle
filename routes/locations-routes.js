// dependencies


var db = require("../models")

module.exports = function (app) {

	// welcome page get all for now - need to alter to get most liked locations
	app.get("/", function (req, res) {
		db.Locations.findAll({
			order: [
				["likes", "DESC"]
			],
			limit: 3
		}).then(function (results) {
			var hbsObject = {
				Locations: results
			};

			res.render("welcome", hbsObject);

		});
	});

	// get by location
	app.get("/api/locations/:id", function (req, res) {
		console.log(req.params.id)
		db.Locations.findOne({
			where: {
				id: req.params.id
			},
			include: [db.Reviews]
		}).then(function (results) {

			res.render("location", results.dataValues);
		});
	});

	// get by category
	app.get("/api/category/:category", function (req, res) {
		db.Locations.findAll({
			where: {
				category: req.params.category
			},

			// include: [db.Reviews]
		}).then(function (results) {
			var hbsObject = {
				Locations: results
			};
			// console.log(hbsObject);
			res.render("welcome", hbsObject);

		});
	});

	//get reviews for locations
	app.get("/api/reviews/:Locationid", function (req, res) {
		db.Reviews.findAll({
			where: {
				Locationid: req.params.Locationid
			},
			include: [db.Locations]
		}).then(function (results) {
			var hbsObject = {
				Reviews: results
			};
			// console.log(hbsObject);
			// res.render("reviews", hbsObject);
			res.json(hbsObject)
		})
	})

	// put for liking locations
	app.put("/api/likes", function (req, res) {
		var thisId = req.body.id
		console.log(req.body.id);

		db.Locations.findOne({
			where: {
				id: thisId
			}
		}).then(function (results) {
			console.log("Current likes: " + results.dataValues.likes)
			var newLikes = Number((results.dataValues.likes) + 1)
			db.Locations.update({
				likes: newLikes,				
			}, {
				where: {id: thisId },
			})
			.then(function(data){
				console.log("It worked!")
			})

		})


		// db.Locations.update(
		// {likes: likes++},
		// {where: req.body.id}
		// ).then(function(results) {
		// 	console.log(results.dataValues)
		// var hbsObject = {
		// Locations: results
		// };
		// // console.log(hbsObject);
		// res.render("location", hbsObject);
		// });
	});


}

// Model.update({ field: sequelize.literal('field + 2') }, { where: { id: model_id } });
