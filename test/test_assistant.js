var should = require('should');

var weather = require('../');

describe('Test Assistant API', function () {

    this.timeout(5000);

    it('Assistant.should.have.property', function (done) {
        weather.assistant('', function (err, Assistant) {
            Assistant.should.have.property('name', '台北市');
            Assistant.should.have.property('time');
            Assistant.should.have.property('memo');
            done();
        });
    });

});
