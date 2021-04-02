/*
在微信中打开淘宝等被屏蔽链接，点击 Surge/QuantumultX/Loon 通知跳转到 Safari 或淘宝 App

QuantumultX:
[rewrite_local]
^https?:\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi url script-response-body https://raw.githubusercontent.com/hank-yuan/IOS-rules/master/Loon/JDJs/weixin110.js
[mitm] 
hostname= weixin110.qq.com

Surge:
[Script]
tbopener.js = type=http-response,pattern=^https?:\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi,script-path=https://raw.githubusercontent.com/hank-yuan/IOS-rules/master/Loon/JDJs/weixin110.js
[MITM] 
hostname= weixin110.qq.com

Loon:
[Script]
http-response ^https?:\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi script-path=https://raw.githubusercontent.com/hank-yuan/IOS-rules/master/Loon/JDJs/weixin110.js,requires-body=1,timeout=10, tag=微信内被屏蔽链接快捷跳转
[MITM] 
hostname= weixin110.qq.com
*/

var str = ($response.body);

str = str.match(/:&#x2f;&#x2f;(\S*)"}/)[1].replace(/&#x2f;/g, '/').replace(/&amp;/g, '&').split("\"")[0]
let opener = str.indexOf("m.tb.cn") != -1 ? "taobao://" + str: ($response.body)
//console.log(str);

const $ = new cmp()

if (str.indexOf("m.tb.cn") != -1) {
    $.notify(``, "", "🛍️点击打开淘宝", opener)
} else if (str.indexOf("如需浏览")) {
    $.notify(``,"", "🔗点击打开链接", "https://"+str)
}

$done({body: $response.body});

function cmp() {
    _isQuanX = typeof $task != "undefined"
    _isLoon = typeof $loon != "undefined"
    _isSurge = typeof $httpClient != "undefined" && !_isLoon
    this.notify = (title, subtitle, message, url) => {
        if (_isLoon) $notification.post(title, subtitle, message, url)
        if (_isQuanX) $notify(title, subtitle, message, { "open-url": url })
        if (_isSurge) $notification.post(title, subtitle, message, { url: url })
    }
}
