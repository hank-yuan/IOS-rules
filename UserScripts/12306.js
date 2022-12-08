/*
12306去除倒计时
[rewrite_local]
^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url 12306.js

[mitm]
hostname = ad.12306.cn
*/


var myobj = JSON.parse($response.body);
if(myobj.materialsList){
if(myobj.materialsList.length==1){
myobj.materialsList[0].filePath="";
myobj.advertParam.skipTime=1;
myobj.advertParam.skipTimeAgain=5;
myobj.advertParam.showSkipBtn=-1;
}
else if(myobj.materialsList.length>1){
myobj.materialsList=[];
}
}
$done({body: JSON.stringify(myobj)});
