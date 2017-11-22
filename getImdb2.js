var request = require('request');
var fs = require('fs');
var db = require('./db');
var sql = "SELECT id, imdb_id FROM videos WHERE imdb_id IS NOT NULL ORDER BY id LIMIT 0,10";
var sql2 = "INSERT INTO temp_imdb2(video_id,imdb_id,video_name,countries,languages,year) VALUES"
db.exec(sql, function (err, data) {
    console.log(sql);
    for (var i = 0; i < data.length; i++) {
        var videoid = data[i].id;
        var imdbid = data[i].imdb_id
        request('http://www.theimdbapi.org/api/movie?movie_id=' + imdbid, function (error, response, body) {
            var b = JSON.parse(body);

            //console.log(sql2);

            fs.appendFile('C:/Others/company/sql.txt', sql2, (err) => {
                if (err) throw err;
                //console.log('The "data to append" was appended to file!');
                sql2 = '(' + videoid + ',\''
                    + imdbid + '\',\''
                    + b.title + '\',\''
                    + b.metadata.countries + '\',\''
                    + b.metadata.languages + '\','
                    + b.year + '),';
            });

        });
    }
});

