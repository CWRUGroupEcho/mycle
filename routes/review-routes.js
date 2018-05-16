var Reviews = require("../models/reviews.js")

module.exports = function(app) {


  // Add a review
  app.post("/api/new", function(req, res) {
    console.log("New Review:");
    console.log(req.body);
    Reviews.create({
      name: req.body.name,
      username: req.body.username,
      body: req.body.body
    }), function(results) {
      res.json(results)
    }
  });


return Reviews;
}