var http = require('http');
var parseString = require('xml2js').parseString;
var util = require('util');


var cwbApi = function cwbApi(path, callback) {

    _httpRequest(path, function (err, xml) {
        parseString(xml, function (err, _json) {
            callback(null, _json);
        });
    });

};

function _httpRequest(path, callback) {
    var body = '';

    var options = {
        hostname: 'opendata.cwb.gov.tw',
        port: 80,
        path: path,
        method: 'GET'
    };

    var req = http.request(options, function (res) {

        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            body += chunk;
        });
        res.on('end', function(e) {
            callback(null, body);
        });
    });

    req.on('error', function(e) {
        callback(e, null);
    });
    req.end();
}

exports.get = cwbApi;
