var request = require('request');
var cheerio = require('cheerio');
var imdb = require('./getImdb');


module.exports =  function(i){
   var zimuzuid = i+30000;
   var url = 'http://www.zimuzu.tv/resource/' + zimuzuid;
   var imdbinfo, imdbid, output, orginalName;

   request(url, function (error, response, body) {
       if (body != undefined){
       body = body.replace(/(\r\n|\n|\r)/gm,"").replace(/ +(?= )/g,''); 
       $ = cheerio.load(body);
       imdbinfo = $('div.fl-info > ul > li > a.f3').text().trim();
       imdbid = imdbinfo.substr(26,9);
       output = zimuzuid + ': '+imdbid;
     //  if (imdbinfo != '' && imdbid.substr(0,2) == 'tt' ){
     //       console.log(imdbid);
     //   }

       
       orginalName = $('head > title').text().trim();
        console.log(orginalName);
       }
   });
  
};
