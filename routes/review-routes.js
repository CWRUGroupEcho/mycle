var db = require("../models")

module.exports = function(app) {


  // Add a review
  app.post("/api/review", function(req, res) {
    console.log("New Review:");
    console.log(req.body);
    db.Reviews.create({
      locationName: req.body.locationName,
      author: req.body.author,
      body: req.body.body
    }), function(results) {
      res.json(results)
    }
  });


// return Reviews;
}