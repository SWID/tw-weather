var assert = require("assert");

var weather = require('../');

describe('Test now API', function () {
    describe('Try', function () {

        // init
        it('test', function (done) {
            weather.now('', function (err, results) {
                console.log(results);
                done();
            });
        });



    })
});
