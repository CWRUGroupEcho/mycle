var db = require("../models")

module.exports = function(app) {

  // Add a review
  app.post("/api/submitReview/:id", function(req, res) {
    console.log("New Review:");
    console.log(req.params.id)
    console.log(req.body);
    db.Reviews.create({

      author: req.body.author,
      body: req.body.body
    }), function(results) {
      console.log(results)
      res.redirect("/api/locations/:id")
    }
  });

// return Reviews;
}
