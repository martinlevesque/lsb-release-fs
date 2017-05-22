'use strict'

var expect = require("expect.js");
const lsbReleaseVersion = require("./index");
const mock = require("mock-fs");

describe("Lsb release version", function() {

  describe("With valid lsb release", function() {
    beforeEach(function() {
          // runs before each test in this block
      mock({
        '/etc/': {
          'lsb-release':
`
DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=17.04
DISTRIB_CODENAME=zesty
DISTRIB_DESCRIPTION="Ubuntu 17.04"
`
        }
      });
    });

    it("should return proper distrib id", function(done) {
      const version = lsbReleaseVersion();

      expect(version["DISTRIB_ID"]).to.equal("Ubuntu");

      done();
    });

    it("should return proper release", function(done) {
      const version = lsbReleaseVersion();

      expect(version["DISTRIB_RELEASE"]).to.equal("17.04");

      done();
    });

    it("should return proper distrib codename", function(done) {
      const version = lsbReleaseVersion();

      expect(version["DISTRIB_CODENAME"]).to.equal("zesty");

      done();
    });

    it("should return proper description", function(done) {
      const version = lsbReleaseVersion();

      expect(version["DISTRIB_DESCRIPTION"]).to.equal("\"Ubuntu 17.04\"");

      done();
    });

    afterEach(function() {
      mock.restore();
    });

  });

  describe("With missing lsb release", function() {
    beforeEach(function() {
          // runs before each test in this block
      mock({
        '/etc/': {
          'lsb-release': null
        }
      });
    });

    it("should return empty hash", function(done) {
      const version = lsbReleaseVersion();

      expect(JSON.stringify(version)).to.equal("{}");

      done();
    });

    afterEach(function() {
      mock.restore();
    });
  });
});
