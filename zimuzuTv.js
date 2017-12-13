var request = require('request');
var cheerio = require('cheerio');
var db = require('./db');


module.exports = function (i, j) {

    var url = 'http://www.zimuzu.tv/resourcelist?sort=pubdate&page=' + i;
    var zimuzuid, videoName, videoNameCN, country, videoType, year;

    request(url, function (error, response, body) {
        //console.log(body);
        if (body != undefined) {
            //body = body.replace(/(\r\n|\n|\r)/gm, "").replace(/ +(?= )/g, '');
            $ = cheerio.load(body);
            var sql = "INSERT INTO temp_zimuzu(zimuzu_id,video_name,video_name_cn,video_type,country,year,description) VALUES(?,?,?,?,?,?,?)";
            $('h3.f14 > a').each(function (i1, elem1) {
                zimuzuid = $(this).attr('href').replace('/resource/', '').trim();
                videoType = $(this).text().trim().substring(0, 2).trim();
                country = $(this).text().trim().split('【')[1].split('】')[0].trim();
                videoNameCN = $(this).text().trim().split('《')[1].split('》')[0].trim();
                if($(this).text().trim().split('(')[1] == undefined){
                    videoName = videoNameCN;
                }else{
                    videoName = $(this).text().trim().split('(')[1].split(')')[0].trim();
                }
                if($(this).text().trim().split(')')[1] == undefined){
                    year = $(this).text().trim().split('》')[1].trim();
                }else{
                    year = $(this).text().trim().split(')')[1].trim();
                }
                

                var params = [zimuzuid, videoName, videoNameCN, videoType, country, year,i];

                if (j == 0) {
                    db.exec(sql, params, function (err, data) {
                        if (err) {
                            console.log(params[0] + ' exists');
                        } else {
                            console.log(params[0]);
                        }
                    });
                } else {
                    var sql1 = 'SELECT COUNT(*) AS row_count FROM temp_zimuzu WHERE zimuzu_id = ' + zimuzuid;
                    db.exec(sql1, function (err, data) {
                        if (data == undefined) {
                            console.log(sql1);
                        } else if (data[0].row_count == 0) {

                            db.exec(sql, params, function (err, data) {
                                if (err) {
                                    console.log(params[0] + ' exists');
                                } else {
                                    console.log(params[0]);
                                }
                            });

                        }
                    });
                }

            });
        }
    });

};