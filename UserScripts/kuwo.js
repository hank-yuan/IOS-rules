/*
KuWo music unlock vip

QX1.0.0:
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/yang971105/Gx/main/guize/kuwo.js

Surge4.0:
http-response ^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/yang971105/Gx/main/guize/kuwo.js
http-request ^https?:\/\/musicpay\.kuwo.cn\/music\.pay\?uid=\d+ script-path=https://raw.githubusercontent.com/yang971105/Gx/main/guize/kuwo.js

MITM = vip1.kuwo.cn
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip/v2/user/vip';
const time = '/vip/spi/mservice';

if (url.indexOf(vip) != -1) {
	obj.data["isNewUser"] = "3";
	obj.data["vipLuxuryExpire"] = "11064787085000";
	obj.data["time"] = "1613445328573";
	obj.data["isYearUser"] = "3";
	obj.data["vipmExpire"] = "11064787085000";
	obj.data["vipOverSeasExpire"] = "11064787085000";
	obj.data["vipExpire"] = "11064787085000";
	obj.data["vip3Expire"] = "11064787085000";
	body = JSON.stringify(obj);
}

if (url.indexOf(time) != -1) {
	obj["isVIPMAutoPay"] = 2;
	obj["isVIPLuxAutoPay"] = 2;
	body = JSON.stringify(obj);
}

$done({body});

