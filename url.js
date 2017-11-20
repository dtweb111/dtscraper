var db = require('./db');
var urlcheck = require('./urlcheck.js');

/*youtube 
false, 2018, How to Train Your Dragon, https://www.youtube.com/embed/da3u9Ns7wBY
true, 2019, The Prestige, https://www.youtube.com/embed/z54CJcZ8zZQ
select `v`.id, `u`.url from (videos `v` join urls `u` on `v`.id = `u`.video_id) where `v`.activate = 1

rapid
*/

var sql = 'select v.id as id, u.url as url from (`videos` `v` join `urls` `u` on v.id = u.video_id) 
  where v.activate=1;'; // and v.id in(10336,10339,10340,10974)
db.exec(sql, null, (err, data) => {
  var rows = data.length;
  var i=0;
  console.log("total rows is: " + rows);
  while(i<rows)
  {
    //console.log(data[i].tid + " : " + data[i].url);
    urlcheck(data[i].id, data[i].url);
    i++;
  }
});
