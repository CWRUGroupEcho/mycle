var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("MyCLE Testing", function () {

  this.timeout(30000);
  it("should open the localhost", function (done) {
    // entering the page url
    Nightmare({
        show: true
      })
      .goto("localhost:8080")
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

  // it("Should open localhost:8080 and confirm the home page works", function (done) {
  //   // entering the page url
  //   new Nightmare({
  //       show: true
  //     })
  //     .goto("localhost:8080")
  //     // Evaluate the title
  //     .evaluate(function () {
  //       return document.title;
  //     })
  //     // Asset the title is as expected
  //     .then(function (title) {
  //       expect(title).to.equal("MyCLE");
  //       done();
  //     });
  // });
});