var assert = require("assert");

var Weather = require('../');

describe('tw.weather', function () {
    describe('init', function () {

        // init
        it('should have a weather object', function (done) {
            if (typeof Weather !== 'object') throw new Error('init failed');
            done();
        });


    })
});
