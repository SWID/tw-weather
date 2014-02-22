var assert = require("assert");

var weather = require('../');

describe('Test Forecast API', function () {

    this.timeout(5000);

    it('should have 22 city', function (done) {
        weather.forecast('', function (err, forecast) {
            if (!forecast) throw new Error('forecast failed');
            if (forecast.length !== 22) throw new Error('forecast Data should have 22 city');
            done();
        });
    });

});
