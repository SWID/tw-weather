
var weather = function weather() {
    //
};

weather.prototype.now = require('./now');
weather.prototype.assistant = require('./assistant');
weather.prototype.forecast = require('./forecast');
weather.prototype.week = require('./week');


module.exports = new weather();
