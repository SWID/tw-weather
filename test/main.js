var assert = require("assert");
var should = require('should');

var weather = require('../');

describe('Test node-tw.weather', function () {
    describe('Main ', function () {

        it('Weather Should.be.a.Object', function (done) {
            weather.should.be.a.Object;
            done();
        });
    });

    describe('Check APIs', function () {

        it('Weather.now \t\tShould.be.a.Function', function (done) {
            weather.now.should.be.a.Function;
            done();
        });

        it('Weather.assistant \tShould.be.a.Function', function (done) {
            weather.assistant.should.be.a.Function;
            done();
        });

        it('Weather.forecast \tShould.be.a.Function', function (done) {
            weather.forecast.should.be.a.Function;
            done();
        });

        it('Weather.week \t\tShould.be.a.Function', function (done) {
            weather.week.should.be.a.Function;
            done();
        });
    });

});
