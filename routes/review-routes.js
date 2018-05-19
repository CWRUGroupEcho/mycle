var db = require("../models")

module.exports = function(app) {

  app.get("/api/review/:id", function(req,res){
    res.render("review")
  });


  // Add a review
  app.post("/api/review/:id/submitReview", function(req, res) {
    console.log("New Review:");
    console.log(req.body);
    db.Reviews.create({
      locationID: req.params.id,
      name: req.body.name,
      body: req.body.body
    }), function(results) {
      console.log(results)
      res.redirect("/")
    }
  });
}
