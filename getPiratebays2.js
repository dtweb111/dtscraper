var request = require('request');
var cheerio = require('cheerio');
//var db = require('./db');


module.exports = function (str) {
    
    var url = 'https://proxyship.cf/search/' + str + '/0/99/200';
    var name, type, size, imdb, uploaded, downloadurl;
    request(url, function (error, response, body) {
        if (body != undefined) {
            body = body.replace(/(\r\n|\n|\r)/gm, "").replace(/ +(?= )/g, '');
            $ = cheerio.load(body);

            $("#searchResult > tbody > tr > td > .detName > a").each(function (i1, elem1) {
                name = $(this);
                $("#searchResult > tbody > tr > td > font").each(function (i2, elem2) {
                    size = $(this);
                    $("#searchResult > tbody > tr > td > a[title='Download this torrent using magnet']").each(function (i3, elem3) {
                        download = $(this);
                        if (i3 == i1 && i1 == i2) {
                            var sql = "INSERT INTO piratebays (id,name,type,size,imdb,uploaded,downloadurl) VALUES (\""
                            + i1 + "\",\""
                            + name.text() + "\",\""
                            + "Video" + "\",\""
                            + size.text().split(",")[1] + "\",\""
                            + "" + "\",\""
                            + size.text().split(",")[0] + "\",\""
                            + download.attr("href") + "\")";
                            console.log(sql);
                        }

                    });
                });

            });



        }
    });

};
