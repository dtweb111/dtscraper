//var zimuzu = require('./getzimuzu');
//var imdb = require('./imdb');
var db = require('./db');
var piratebays = require('./getPiratebays');

//piratebays(18886320);


var sql = 'SELECT IFNULL(CAST(MAX(id) AS signed),18885311) AS id FROM piratebays';
db.exec(sql, null, (err, data) => {
    //var i = data[0].id + 1;
    var i = 18886310
    var j = i + 20;
    console.log(i);
  //  piratebays(18883720);
  
    while(i<j){
        piratebays(i);
        i++;
        //console.log(i);
     };
     console.log(i);    
});


/*
var sql = 'SELECT IFNULL(CAST(MAX(zimuzu_id) AS signed),20000) AS maxZimuzuId FROM temp_imdb';
db.exec(sql, null, (err, data) => {
     var i = data[0].maxZimuzuId + 1;
     var j = i + 500;
     console.log(i);
  //   console.log(j);

     while(i<j){
        imdb(i);
        i++;
     };
     
});*/