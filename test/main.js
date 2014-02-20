var assert = require("assert");

var weather = require('../');

describe('tw.weather', function () {
    describe('init', function () {

        // init
        it('should have a weather object', function (done) {
            if (typeof weather !== 'object') throw new Error('typeof weather is ' + typeof weather);
            done();
        });

        it('should have a api `assistant` ', function (done) {
            if (typeof weather.assistant !== 'function') {
                throw new Error('type is ' + typeof weather.assistant);
            }
            done();
        });

        it('should have a api `forecast` ', function (done) {
            if (typeof weather.forecast !== 'function') {
                throw new Error('type is ' + typeof weather.forecast);
            }
            done();
        });

        it('should have a api `week` ', function (done) {
            if (typeof weather.week !== 'function') {
                throw new Error('type is ' + typeof weather.week);
            }
            done();
        });


    })
});
