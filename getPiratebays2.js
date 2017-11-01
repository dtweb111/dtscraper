var request = require('request');
var cheerio = require('cheerio');
var db = require('./db');


module.exports = function (data) {
   
    var videoName = data.video_name.trim().replace(/ /g,'%20');
    var url = 'https://proxyship.cf/search/' + videoName + '/0/99/200';
    var name, type, size, imdb, uploaded, downloadurl;
    request(url, function (error, response, body) {
        if (body != undefined) {
            body = body.replace(/(\r\n|\n|\r)/gm, "").replace(/ +(?= )/g, '');
            $ = cheerio.load(body);
            var sql = "INSERT INTO temp_piratebay (id,name,type,size,uploaded,downloadurl,video_id,video_name) VALUES ";
            $("#searchResult > tbody > tr > td > .detName > a").each(function (i1, elem1) {
                name = $(this);
                $("#searchResult > tbody > tr > td > font").each(function (i2, elem2) {
                    size = $(this);
                    $("#searchResult > tbody > tr > td > a[title='Download this torrent using magnet']").each(function (i3, elem3) {
                        download = $(this);
                        
                        if (i3 == i1 && i1 == i2 && download != undefined) {
                            sql = sql + "('"
                            + i1 + "','"
                            + name.text() + "','"
                            + "Video" + "','"
                            + size.text().split(",")[1].replace('Size','').trim() + "','"
                            + size.text().split(",")[0].replace('Uploaded','').trim() + "','"
                            + download.attr("href") + "','"
                            + data.id +"','"
                            + data.video_name + "'),";
                            console.log(name.text());
                            //db.exec(sql, function (err, data) {
                                //console.log(data.video_name);
                            //});
                        }

                    });
                });

            });
            sql=sql.substring(0,sql.length-1);
           // console.log(sql);
            db.exec(sql, function (err, data) {
                //console.log(err);
            });
        }
    });

};
