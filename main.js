var zimuzu = require('./getzimuzu');
var imdb = require('./imdb');
var db = require('./db');

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
     
});
