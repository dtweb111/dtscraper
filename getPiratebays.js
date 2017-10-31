var request = require('request');
var cheerio = require('cheerio');
var db = require('./db');


module.exports = function (i) {
    var id = i;
    var url = 'https://pirateproxy.cam/torrent/' + id;
    var name, type, size, imdb, uploaded, downloadurl;
    //console.log(url);
    request(url, function (error, response, body) {
        console.log("boday");
        if (body != undefined) {
            body = body.replace(/(\r\n|\n|\r)/gm, "").replace(/ +(?= )/g, '');
            $ = cheerio.load(body);
            name = $('#title').text().trim();
            type = $("#details > .col1 > dd > a[title='More from this category']").text().trim();
            size = $('#details > .col1 > dd').eq(2).text();
            imdb = $('#details > .col1 > dd > a[target]').attr('href');
            uploaded = $('#details > .col2 > dd').first().text().trim();
            downloadurl = $('.download > a').attr('href');

            /*
            console.log('Url         :',url);
            console.log('Id          :',id);
            console.log('Name        :'+name);
            console.log('Type        :'+type);
            console.log('Size        :'+size);
            console.log('Imdb        :'+imdb);
            console.log('Uploaded    :'+uploaded);
            console.log('Download Url:'+downloadurl);
                */
                console.log('Download Url:'+downloadurl);
            if (downloadurl != undefined) {
                var sql = "INSERT INTO piratebays (id,name,type,size,imdb,uploaded,downloadurl) VALUES (\""
                    + id + "\",\""
                    + name + "\",\""
                    + type + "\",\""
                    + size + "\",\""
                    + imdb + "\",\""
                    + uploaded + "\",\""
                    + downloadurl + "\")";

                db.exec(sql, function (err, data) {
                    console.log(id);
                });
            }
        }
    });

};
