var piratebays2 = require('./getPiratebays2');
var db = require('./db');

var offset = 0;
var sql = 'select id,video_name from videos where activate=1 and id<10333 order by id limit '+offset+','+30;
db.exec(sql, null, (err, data) => {
    for(var i=0; i < data.length; i++){
        piratebays2(data[i]);
    };
});



