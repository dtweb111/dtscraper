var megashare = require('./getMegashare');

/*
imdb('tt3659388', function(err, data) {
 if(err)
   console.log(err.stack);

 if(data)
   console.log(data);
});
*/
megashare();
/*
var getFStr,getFCount;
var END_OF_INPUT=-1

doit('JTNDZGl2JTIwY2xhc3MlM0QlMjJob2xkZXIlMjIlM0UlM0NpZnJhbWUlMjBjbGFzcyUzRCUyMmZyYW1lJTIyJTIwc3JjJTNEJTIyaHR0cHMlM0ElMkYlMkZkb2NzLmdvb2dsZS5jb20lMkZmaWxlJTJGZCUyRjBCMlhsQmNsM2lWcWZaMjAwVTA1VllXbE9OVlUlMkZwcmV2aWV3JTIyJTIwd2lkdGglM0QlMjI2ODglMjIlMjBoZWlnaHQlM0QlMjI0MzglMjIlMjBmcmFtZWJvcmRlciUzRCUyMjAlMjIlMjBzY3JvbGxpbmclM0QlMjJubyUyMiUyMGFsbG93ZnVsbHNjcmVlbiUzRCUyMnRydWUlMjIlMjB3ZWJraXRhbGxvd2Z1bGxzY3JlZW4lM0QlMjJ0cnVlJTIyJTIwbW96YWxsb3dmdWxsc2NyZWVuJTNEJTIydHJ1ZSUyMiUzRSUzQyUyRmlmcmFtZSUzRSUzQ2RpdiUyMGNsYXNzJTNEJTIyYmFyJTIyJTIwb25DbGljayUzRCUyMmphdmFzY3JpcHQlM0F0aGlzLnN0eWxlLmRpc3BsYXklM0QlMjdub25lJTI3JTNCJTIyJTNFJTNDYSUyMGNsYXNzJTNEJTIyY2VuJTIyJTIwaHJlZiUzRCUyMiUyMyUyMiUzRSUzQ2ltZyUyMHNyYyUzRCUyMmh0dHAlM0ElMkYlMkZpbWcubWVnYXNoYXJlLmF0JTJGcGxheS5wbmclMjIlMjAlMkYlM0UlM0MlMkZhJTNFJTNDJTJGZGl2JTNFJTNDZGl2JTIwY2xhc3MlM0QlMjJnb2MlMjIlM0UlM0MlMkZkaXYlM0UlM0MlMkZkaXYlM0U=');

function doit(e){
  return unescape(getF(e))
}

function getF(e){
  setgetFStr(e);
  var t="";
  var n=new Array(4);
  var r=false;
  while(!r&&(n[0]=readReversegetF())!=END_OF_INPUT&&(n[1]=readReversegetF())!=END_OF_INPUT){
    n[2]=readReversegetF();
    n[3]=readReversegetF();
    t+=ntos(n[0]<<2&255|n[1]>>4);
    if(n[2]!=END_OF_INPUT){
      t+=ntos(n[1]<<4&255|n[2]>>2);
      if(n[3]!=END_OF_INPUT){
        t+=ntos(n[2]<<6&255|n[3])
      }else{
        r=true
      }
    }else{
      r=true
    }
  }
  return t
}

function setgetFStr(e){
  getFStr=e;
  getFCount=0
}

function readReversegetF(){
  if(!getFStr)
    return END_OF_INPUT;
  while(true){
    if(getFCount>=getFStr.length)
      return END_OF_INPUT;
    var e=getFStr.charAt(getFCount);
    getFCount++;
    if(reversegetFChars[e]){
      return reversegetFChars[e]
    }
    if(e=="A")return 0
  }
  return END_OF_INPUT
}

function ntos(e){
  e=e.toString(16);
  if(e.length==1)
    e="0"+e;
  e="%"+e;
  return unescape(e)
}
*/