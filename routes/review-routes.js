var db = require("../models")

module.exports = function(app) {

  app.get("/api/review", function(req,res){
    res.render("review")
  });


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
}
