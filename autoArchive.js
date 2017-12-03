var db = require('./db');
var fs = require('fs');
var pathMovie = 'C:/Others/test/movie/';


var sql = "select videos.id as video_id,year from videos join calendar on videos.release_date_id = calendar.id where videos.id in (select video_id from urls where source='RapidVideo')";

db.exec(sql, function (err, data) {
    fs.readdir(pathMovie,function(err, files){
        for(var i=0;i<data.length;i++){
            for(var j=0;j<files.length;j++){
                if(data[i].video_id == files[j].split('.')[0]){
                    var pathArchive = 'C:/Others/test/archive/' + data[i].year + '/' + files[j];
                    console.log(pathArchive)
                    //console.log(pathMovie + files[j])
                    fs.rename(pathMovie + files[j], pathArchive
                    , function(err) {
                        if ( err ) {
                            console.log('ERROR: ' + err);
                        }
                    });
                }
            }       
        }  
    });
});
