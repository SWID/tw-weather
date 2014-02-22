var cwbApi = require('./_cwbApi');


module.exports = function forecast(city, callback) {
    //  http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-001.xml

    cwbApi.get('/opendata/MFC/F-C0032-001.xml', function (err, data) {

        var locals = data.fifowml.data[0].location;
        var forecast = _bindData(locals);

        callback(err, forecast);
    });
};


function _bindData(locals) {
    var arr = [];

    locals.forEach(function (city) {
        var forecast = [];
        var name = city.name[0];
        var info = city['weather-elements'][0];

        for (var i = 0; i < 3; i++) {
            forecast[i] = {
                start: info.Wx[0].time[i].$.start,
                end: info.Wx[0].time[i].$.end,
                MaxT: info.MaxT[0].time[i]['value'][0]['_'],
                MinT: info.MinT[0].time[i]['value'][0]['_'],
                CI: info.CI[0].time[i]['text'][0],
                PoP: info.PoP[0].time[i]['value'][0]['_'],
                Wx: {
                    text: info.Wx[0].time[i]['text'][0],
                    value: info.Wx[0].time[i]['value'][0],
                }
            }
        };

        //
        arr.push({
            city: name,
            info: forecast
        });
    });
    return arr;
}





