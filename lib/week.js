var cwbApi = require('./_cwbApi');


module.exports = function week(city, callback) {
    // http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-003.xml
    cwbApi.get('/opendata/MFC/F-C0032-003.xml', function (err, data) {

        var location = data.fifowml.data[0].location;
        var week = {};

        location.forEach(function(city){
            week[ city.name[0] ] = _bindData(city);
        });
        callback(err, week);
    });
};


function _bindData (city){
    var name = city.name[0];
    var info = city['weather-elements'][0];

    var week = [];

    for (var i = 0 ; i < 7 ; i++){
        week[i] = {
            start: info.Wx[0].time[i].$.start,
            end: info.Wx[0].time[i].$.end,
            Wx:{
                text: info.Wx[0].time[i].text[0],
                value: info.Wx[0].time[i].value[0]
            },
            MaxT: info.MaxT[0].time[i].value[0]._,
            MinT: info.MinT[0].time[i].value[0]._
        };
    }

    return week;
}

