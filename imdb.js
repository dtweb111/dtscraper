var request = require('request');
var cheerio = require('cheerio');
var db = require('./db');


module.exports =  function(i){
   var zimuzuid = i;
   var url = 'http://www.zimuzu.tv/resource/' + zimuzuid;
   var imdbinfo, imdbid, output;

   request(url, function (error, response, body) {
       body = body.replace(/(\r\n|\n|\r)/gm,"").replace(/ +(?= )/g,''); 
       $ = cheerio.load(body);
       imdbinfo = $('div.fl-info > ul > li > a.f3').text().trim();
       imdbid = imdbinfo.substr(26,9);
       output = zimuzuid + ': '+imdbid;
       if (imdbinfo != '' && imdbid.substr(0,2) == 'tt' ){
        //console.log(imdbid);
            var url2 = 'http://www.theimdbapi.org/api/movie?movie_id=' + imdbid;
          //  console.log(url2);
            
            request(url2, function (error, response, body) {
                var b = JSON.parse(body);
                var sql = "INSERT INTO temp_imdb (title,release_date,director,length,imdb_id,rating,genre,storyline,description,stars,poster,countries,year,views,zimuzu_id) VALUES (\"" 
                    + b.title + "\",\"" 
                    + b.release_date + "\",\"" 
                    + b.director + "\",\"" 
                    + b.length + "\",\"" 
                    + b.imdb_id + "\",\"" 
                    + b.rating + "\",\"" 
                    + b.genre + "\",\"" 
                    + b.storyline + "\",\"" 
                    + b.description + "\",\"" 
                    + b.stars + "\",\"" 
                    + b.poster.thumb + "\",\""
                    + b.metadata.countries + "\",\""
                    + b.year + "\",\""
                    + b.rating_count + "\",\""
                    + zimuzuid + "\")";

                db.exec(sql, function(err,data) {
                    console.log(output);
                });
            }); 
        }
   });
  
};
