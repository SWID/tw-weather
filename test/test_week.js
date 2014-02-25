// var assert = require("assert");
var should = require('should');

var weather = require('../');

describe('Test Week API', function () {

    this.timeout(5000);

    it('Week should have 25 city', function (done) {
        weather.week('', function (err, week) {
            Object.keys(week).should.be.length(25);
            done();
        });
    });

});
