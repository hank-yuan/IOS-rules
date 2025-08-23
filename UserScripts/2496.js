/*
[rewrite_local]

^http?:\/\/api\_\d{4}\.kuwo\.cn\/front\/user\/vipstatus$ url script-response-body https://raw.githubusercontent.com/hank-yuan/IOS-rules/master/UserScripts/2496.js

[mitm]

hostname = api_2496.kuwo.cn

*/

var body = $response.body;
var url = $request.url;

const path1 = '\/front\/user\/vipstatus';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data["vipstatus"] = 1;
	obj.data["expiration_time"] = "2050-01-01";
	body = JSON.stringify(obj);  
 }

$done({body});
