var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("Demo", function() {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages

  this.timeout(30000);
  it("should open google", function(done) {
    // entering the page url
    Nightmare({ show: true })
      .goto("https://www.google.com")
      // Evaluate the title
      .evaluate(function() {
        return document.title;
      })
      // Asset the title is as expected
      .then(function(title) {
        expect(title).to.equal("Google");
        done();
      });
  });

//   it("Will throw a test error", function() {
//     throw new Error("Failure is always an option, and that's the option I chose for this function.");
//   });
});
