/*
 *  ref : http://opendata.cwb.gov.tw/opendatadoc/DIV2/A0003-001.pdf
 *
 *
 *  STID    測站ID
 *  STNM    測站編號
 *  TIME    預留欄位，目前無置入
 *  LAT     經度
 *  LON     緯度
 *  ELEV    高度，單位 公尺
 *  WDIR    風向，單位 度，一般風向0 表示無風
 *  WDSD    (風速，單位 公尺/秒
 *  TEMP    溫度，單位 攝氏
 *  HUMD    相對濕度，單位 百分比率，此處以實數0-1.0 記錄
 *  PRES    測站氣壓，單位 百帕
 *  CITY    縣市
 *  CITY_SN 縣市編號
 *  TOWN    鄉鎮
 *  TOWN_SN 鄉鎮編號
 *  24R     日累積雨量，單位 毫米
 *  H_FX    小時瞬間最大陣風風速，單位 公尺/秒
 *  H_XD    小時瞬間最大陣風風向，單位 度
 *  H_FXT   小時瞬間最大陣風時間，hhmm (小時分鐘)
 *  H_F10   本時最大10分鐘平均風速，單位 公尺/秒
 *  H_10D   本時最大10分鐘平均風向，單位 度
 *  H_F10T  本時最大10分鐘平均風速發生時間，hhmm (小時分鐘)
 */

var cwbApi = require('./_cwbApi');

module.exports = function now(city, callback) {
    //
    cwbApi.get('/opendata/DIV2/O-A0003-001.xml', function (err, data) {
        if (!err) {
            try{
                data = _bindData(data.cwbopendata.location);
            }catch(e){
                err = new Error('Data parse Error');
            }
        }
        callback(err, data);
    });

};

// cwbApi.get('/opendata/DIV2/O-A0003-001.xml', function (err, data) {
//     // var identifier = data.cwbopendata.identifier[0];
//     // var sentTime = data.cwbopendata.sent[0];

//     var locals = _bindData(data.cwbopendata.location);

//     console.log(locals);
//     // callback(null, locals);
// });

function _bindData(locations) {
    var locals = {};

    locations.forEach(function (lo) {
        var name = lo.locationName[0];
        locals[name] = {
            'locationName': lo.locationName[0],
            'lat': lo.lat[0],
            'lon': lo.lon[0],
            'info': _bindElement(lo.weatherElement),
            'parameter': _bindLocal(lo.parameter)
        };
    });
    return locals;
}

function _bindElement(element) {
    var info = {};
    element.forEach(function (el) {
        info[el.elementName[0]] = el.elementValue[0].value[0];
    });
    return info;
}

function _bindLocal(element) {
    var local = {};
    element.forEach(function (el) {
        local[el.parameterName[0]] = el.parameterValue[0];
    });
    return local;
}
