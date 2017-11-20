var request = require('request');
var db = require('./db');
var cheerio = require('cheerio');

module.exports =  function(id,url){
    var valid=0;
    var sql = 'update videos set activate=0 where id=';

    console.log("--urlcheck--, id:" + id + ", url:" + url);
    request(url, function (error, response, body) {
        if (body != undefined) {
            //$ = cheerio.load(body);  
            valid = body.search("<title>YouTube</title>");
            //console.log("----" + id + ": " + valid);

            if (valid > 0) {
                db.exec(sql + id, null, (err, data) => {
                    console.log("---- update: " + id);
                }); 
            }
        }
    });    
};
