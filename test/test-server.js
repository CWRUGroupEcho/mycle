var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("Homepage Test", function () {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages

  this.timeout(30000);
  var url = "https://mycle.herokuapp.com";

  // First test to see if the server is running

  it("should send user to the main page", function (done) {
    // ID for the login button.
    Nightmare({
        show: true
      })
      .goto(url)
      // Evaluate the title
      .evaluate(function () {
        return document.title;
      })
      // Asset the title is as expected
      .then(function (title) {
        expect(title).to.equal("MyCLE");
        done();
      });
  });

  // Second test to confirm that the restaurants link works

  it("should load restaurants", function (done) {
    new Nightmare({
      show: true
    })
    .goto(url)
    .click("#restaurants")
    .evaluate(function () {
      return document.title;
    })
    .then(function (title) {
      expect(title).to.equal("MyCLE");
      done();
    });
  });

    // Second test to confirm that the Resturants link works

    it("should load Nightlife", function (done) {
      new Nightmare({
        show: true
      })
      .goto(url)
      .click("#nightlife")
      .evaluate(function () {
        return document.title;
      })
      .then(function (title) {
        expect(title).to.equal("MyCLE");
        done();
      });
    });

      // Second test to confirm that the Resturants link works

  it("should load Culture", function (done) {
    new Nightmare({
      show: true
    })
    .goto(url)
    .click("#culture")
    .evaluate(function () {
      return document.title;
    })
    .then(function (title) {
      expect(title).to.equal("MyCLE");
      done();
    });
  });

});