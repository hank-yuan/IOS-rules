/*  
QX:
[rewrite_local]
#库八影视去广告
^http:\/\/damiyingshi\.app\.bucuo\.online\/api\/login\/saveerrlog\/ url script-response-body kuba.js

[mitm]
hostname = damiyingshi.app.bucuo.online

库八下载地址；
http://www.cool8.site
*/

var obj = JSON.parse($response.body);
obj.data = 0;


$done({body: JSON.stringify(obj)}); 
