var cheerio = require('cheerio');
//var db = require('./db');
var phantom = require('phantom');

module.exports = function (url) {
    var _ph, _page, _outObj;
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
        $ = cheerio.load(content);
        //console.log(content);
        console.log($("#page-content-wrapper > div > .row > div > div > iframe").attr("src").split("?")[0]);
/*
        $("iframe").each(function (i1, elem1) {
            if($(this).attr("href")!=''){
                console.log($(this).attr("href"));
            }
            
        });
*/


        _page.close();
        _ph.exit();
      })
      .catch(e => console.log(e));
};