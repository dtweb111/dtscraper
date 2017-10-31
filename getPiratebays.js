var request = require('request');
var cheerio = require('cheerio');


//module.exports =  function(i){
   //var zimuzuid = i+30000;
   var url = 'https://thepiratebay.org/torrent/18570594/';
   var name,type,size,imdb,uploaded,downloadurl;
    //console.log("aaaaaaa");
   request(url, function (error, response, body) {
    //console.log("bbbbb");
       if (body != undefined){
       body = body.replace(/(\r\n|\n|\r)/gm,"").replace(/ +(?= )/g,''); 
       $ = cheerio.load(body);
       name = $('#title').text().trim();
       //type = $('#details > .col1 > dt > dd > a').text().trim();
       type = $("#details > .col1 > dd > a[title='More from this category']").text().trim();
       size = $('#details > .col1 > dd').eq(2).text();
       imdb = $('#details > .col1 > dd > a[target]').attr('href');
       uploaded = $('#details > .col2 > dd').first().text().trim();
       downloadurl = $('.download > a').attr('href');
        
       //console.log($('#details > .col1 > dt').children());
       console.log('Name:'+name);
       console.log('Type:'+type);
       console.log('Size:'+size);
       console.log('Imdb:'+imdb);
       console.log('Uploaded:'+uploaded);
       console.log('Download Url:'+downloadurl);
       }
   });
  
//};
