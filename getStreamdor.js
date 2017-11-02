var request = require('request');
var cheerio = require('cheerio');
var qs = require('querystring');
var rp = require('request-promise');
//var db = require('./db');


module.exports = function (i) {
    var url;
    if (i == 1) {
        url = 'https://www.streamdor.com/#!';
    } else {
        url = 'https://www.streamdor.com/#!/?topic=&page=' + i;
    }
    console.log(url);
    var link;

    var options = {
        uri: 'https://www.streamdor.com/#!',
        resolveWithFullResponse: true    //  <---  <---  <---  <---
    };
    
    rp(options)
        .then(function (body) {
            console.log(body);
        })
        .catch(function (err) {
            // Delete failed...
        });



/*
    request(url, function (err, response, body) {
        if (body != undefined) {
            //body = body.replace(/(\r\n|\n|\r)/gm, "").replace(/ +(?= )/g, '');
            $ = cheerio.load(body);
            //console.log(body);
            link = $("#page-content-wrapper > .movies-grid > .movie-tile > movie-tile > .movie-tile > a").attr("href");
            
            console.log($("#page-content-wrapper").children().length);
            $("#page-content-wrapper > div").each(function (i1, elem1) {
                console.log(i1);
                console.log($(this).attr("class"));
            });
            
        }
    });
*/
};