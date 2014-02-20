
var weather = function weather() {
    //
};

weather.prototype.assistant = require('./assistant');
weather.prototype.forecast = require('./forecast');
weather.prototype.week = require('./week');


module.exports = new weather();
