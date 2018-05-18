<<<<<<< HEAD
var Location = require("../models/locations.js")
=======
var db = require("../models")
>>>>>>> a6631953443640f5be24ac233faa5862baeb3a02

module.exports = function(app) {


<<<<<<< HEAD


};

=======
  // Add a review
  app.post("/api/review", function(req, res) {
    console.log("New Review:");
    console.log(req.body);
    db.Reviews.create({
      locationName: req.body.locationName,
      username: req.body.username,
      body: req.body.body
    }), function(results) {
      res.json(results)
    }
  });


// return Reviews;
}
>>>>>>> a6631953443640f5be24ac233faa5862baeb3a02
