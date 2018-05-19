var db = require("../models")

module.exports = function(app) {

  // Add a review
  app.post("/api/submitReview/:id", function(req, res) {
    console.log("New Review:");
    console.log(req.params.id)
    console.log(req.body);
    db.Reviews.create({
      username: req.body.name,
      body: req.body.body,
      LocationId: req.params.id
    }), function(results) {
      console.log(results)
      res.redirect("/api/locations/:id")
    }
  });
}
