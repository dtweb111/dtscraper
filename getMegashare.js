var request = require('request');
var cheerio = require('cheerio');


module.exports =  function(){
   var Action = 'http://megashare.at/#Cat,TWc9PQ'; 
   var Adventure = 'http://megashare.at/#Cat,TXc9PQ';    
   var Animation = 'http://megashare.at/#Cat,TWpNPQ';    
   var Comedy = 'http://megashare.at/#Cat,T0E9PQ';       
   var Drama = 'http://megashare.at/#Cat,T1E9PQ';      
   var Fantasy = 'http://megashare.at/#Cat,TVRBPQ';      
   var Horror = 'http://megashare.at/#Cat,TWpRPQ';     
   var SciFi = 'http://megashare.at/#Cat,TVRFPQ';       
   var Thriller = 'http://megashare.at/#Cat,TWpFPQ'; 
   var War = 'http://megashare.at/#Cat,TWpJPQ';   
   var videoitem;

   request(Action, function (error, response, body) {
       if (body != undefined){
        body = body.replace(/(\r\n|\n|\r)/gm,"").replace(/ +(?= )/g,''); 
        $ = cheerio.load(body);
       // console.log($('a.FilmName'));
        for(i in $('a.FilmName')){
          if($('a.FilmName')[i].attribs != undefined){
            if($('a.FilmName')[i].attribs.href != undefined)
              console.log('http://megashare.at/' + $('a.FilmName')[i].attribs.href);
          }
        }
       }
   });
/*
    request('http://megashare.at/watch-ride-along-online-TnpjNU53PT0#', function (error, response, body) {
     // console.log(body);
      if (body != undefined){
      body = body.replace(/(\r\n|\n|\r)/gm,"").replace(/ +(?= )/g,''); 
      $ = cheerio.load(body);
    //  console.log($('video.video-stream html5-main-video').attr('src'));
        console.log($('iframe.frame').text());
      }
    });*/
};

