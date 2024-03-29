// Imports the server.js file to be tested.
let server = require("../server");
//Assertion (Test Driven Development) and Should, Expect(Behaviour driven development) library
let chai = require("chai");
// Chai HTTP provides an interface for live integration testing of the API's.
let chaiHttp = require("chai-http");
const { response } = require("express");
chai.should();
chai.use(chaiHttp);
const { expect } = chai;
var assert = chai.assert;

describe("Server!", () => {
  it("Returns the default welcome message", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        assert.strictEqual(res.body.message, "Welcome!");
        done();
      });
  });

  let divide = {
    name: "Divide",
    sign: '/'
  }
  it("Returns the array", done => {
    chai
      .request(server)
      .get("/operations")
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.not.equal(0);
        done();
      });
  });

  it("Returns id 4, named divide, sign equals /", done => {
    chai
      .request(server)
      .post("/operations")
      .send(divide)
      .end((err, res) => {
        expect(res.body.id).eq(4);
        expect(res.body.name).to.equals("Divide");
        assert.strictEqual(res.body.sign, "/")
        done();
      });
  });
  
  it("Returns the details of the operation based on the ID", done => {
    chai
      .request(server)
      .get("/operations/4")
      .end((err, res) => {
        expect(res.body.id).eq(4);
        expect(res.body.name).to.equals("Divide");
        assert.strictEqual(res.body.sign, "/")
        done();
      });
  });
});