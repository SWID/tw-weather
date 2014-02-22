var assert = require("assert");

var weather = require('../');

describe('Test now API', function () {
    describe('Try', function () {

        // init
        it('test', function (done) {
            this.timeout(5000);

            weather.now('', function (err, results) {
                done();
            });
        });



    });
});
