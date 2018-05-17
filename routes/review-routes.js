var db = require("../models")

module.exports = function(app) {


  // Add a review
  app.post("/api/new", function(req, res) {
    console.log("New Review:");
    console.log(req.body);
    db.Reviews.create({
      location_name: req.body.location_name,
      username: req.body.username,
      body: req.body.body
    }), function(results) {
      res.json(results)
    }
  });


return Reviews;
}