var cwbApi = require('./_cwbApi');

module.exports = function assistant(city, callback) {
    cwbApi.get('/opendata/MFC/F-C0032-009.xml', function (err, data) {

        data = data.fifowml.data[0];
        data = {
            cityid: data.cityid[0],
            name: data.name[0],
            time: data.time[0],
            memo: data.memo
        };

        callback(err, data);
    });
};

