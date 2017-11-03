//var request = require('request');
var cheerio = require('cheerio');
var db = require('./db');
var phantom = require('phantom');

module.exports = function (i) {

    var _ph, _page, _outObj;
    var url;
    var sql = "INSERT INTO temp_streamdor_pages (url) VALUES ";

    if (i == 1) {
        url = 'https://www.streamdor.com/';
    } else {
        url = 'https://www.streamdor.com/#!/?topic=&page=' + i;
    }

    phantom
      .create()
      .then(ph => {
        _ph = ph;
        return _ph.createPage();
      })
      .then(page => {
        _page = page;
        _page.setting('javascriptEnabled').then(function(value){
            expect(value).toEqual(true);
        });
        return _page.open(url);
      })
      .then(status => {
        //console.log(status);
        return _page.property('content');
      })
      .then(content => {
        content = content.replace(/(\r\n|\n|\r)/gm, "").replace(/ +(?= )/g, '');
        $ = cheerio.load(content);
        //console.log(content);
        //console.log($("#page-content-wrapper > .movies-grid > .movie-tile > .ng-isolate-scope > div > a").first().next().attr("href"));

        $("#page-content-wrapper > .movies-grid > .movie-tile > .ng-isolate-scope > div > a").each(function (i1, elem1) {
            if($(this).attr("href")!=''){
                sql = sql + "('"+ $(this).attr("href").replace(/\'/g, "\\'") + "'),";
            }
        });
        sql=sql.substring(0,sql.length-1);
        //console.log(sql);
        db.exec(sql, function (err, data) {
            console.log(err);
        });
        _page.close();
        _ph.exit();
      })
      .catch(e => console.log(e));
};