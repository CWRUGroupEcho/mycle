var db = require("../models")

module.exports = function (app) {

  // Add a review
  app.post("/api/submitReview/:id", function (req, res) {
    db.Reviews.create({
      username: req.body.name,
      body: req.body.body,
      LocationId: req.params.id
    }).then(function (results) {
      console.log("Did you reach me?")
      res.redirect("/api/locations/" + req.params.id);
    })
  });
}
