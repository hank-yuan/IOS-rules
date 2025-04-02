// 首先还是感谢黄白作者的技术支持，才有以下脚本。
// author: dottio
// 脚本源由：
// 原有接口已经不可用了，导致功能失效。所以想着插件功能不变的情况下，我重写一下响应。
// 功能实现：
// 通过Quantumult X 的脚本，实现黄白助手：启用音乐形状聊天
// 接口：
// http://c.baixingyllh.com/wapi/V2/QMusic.php?name=%E4%BD%A0%E5%A5%BD
// header的参数：
// HTTP/1.1 200 OK
// Server: nginx
// Access-Control-Allow-Origin: *
// Connection: keep-alive
// Date: Wed, 02 Apr 2025 02:54:52 GMT
// Content-Type: application/json; charset=utf-8
// X-Powered-By: PHP/7.4.33
// Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept
// Access-Control-Max-Age: 86400
// Access-Control-Allow-Methods: POST, GET, OPTIONS
// Transfer-Encoding: chunked
// 请求参数：
// name=歌曲名称
// 返回参数：
// code: 0
// mid: 歌曲ID
// songname: 歌曲名称
// name: 歌手名称
// cover: 封面图片
// cover2: 封面图片2
// src: 歌曲来源
// songurl: 歌曲链接
// lrc: 歌词
// music_url: 音乐链接
const statusCode = $response.statusCode;
let body = '{"code":0,"mid":"0013fWYp4b9J9j","songname":"\u4f60\u597d","name":"\u8d1d\u74e6\u513f\u6b4c","cover":"https:\/\/y.qq.com\/music\/photo_new\/T002R300x300M000002UVhvw0piHPf_1.jpg","cover2":"https:\/\/y.qq.com\/music\/photo_new\/T002R300x300M000002UVhvw0piHPf_2.jpg","src":"<","songurl":"https:\/\/y.qq.com\/n\/ryqq\/songDetail\/0013fWYp4b9J9j"}'
let headers = {
  "tutu": statusCode,
  "Server": "nginx",
  "Access-Control-Allow-Origin": "*",
  "Connection": "keep-alive",
  "Content-Type": "application/json; charset=utf-8",
  "X-Powered-By": "PHP/7.4.33",
  "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  "Access-Control-Max-Age": "86400",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS"
};
let encodedSongName = $request.url.split('name=')[1] || '';
let songName = decodeURIComponent(encodedSongName);

if (body) {
  try {
    let obj = JSON.parse(body);

    if (obj) { 
      const songCombination = {
        song_name: songName.includes(" ") ? songName.split(" ")[0] : songName,
        song_singer: songName.includes(" ") ? songName.split(" ")[1]: "又是清明雨上 折菊寄到你身旁 把你最爱的歌来轻轻唱",
	    cover: "https://i0.wp.com/wx4.sinaimg.cn/large/8e051879ly1i029fqwnb0j20q9140tap.jpg"
      };

      // 更新歌曲信息
      obj.songname = unescape(songCombination.song_name);
      obj.name = songCombination.song_singer;
      obj.cover = songCombination.cover;
	  obj.cover2 = songCombination.cover;

      let updatedBody = JSON.stringify(obj);
      $done({ status: "HTTP/1.1 200 OK", body: updatedBody, headers: headers });

    } else {
      $done({ status: "HTTP/1.1 200 OK", body: body, headers: headers });
    }

  } catch (e) {
    console.log("by dww:", e);
    $done({ status: "HTTP/1.1 200 OK", body: body, headers: headers });
  }
} else {
  $done({});
}
