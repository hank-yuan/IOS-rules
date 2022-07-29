/*
圈X配置：

[rewrite_local]
^http?:\/\/api\_\d{4}\.kuwo\.cn\/front\/user\/vipstatus$ url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/2496/2496.js
^http?:\/\/ad\.caiyunapp\.com\/v1\/app\/review$ url script-response-body 
[mitm]
hostname = api_2496.kuwo.cn
hostname = ad.caiyunapp.com
*/

var body = $response.body;
var url = $request.url;

const path1 = '\/v1\/app\/review';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data["type"] = "1";
	body = JSON.stringify(obj);  
 }

$done({body});

