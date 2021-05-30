var title2="msg=主人！\n你的Blog又有新的评论啦~\n"
var SCKEY_Qmsg="https://qmsg.zendee.cn/send/8ef865ad23201eaee2210dd972b3ef1a"
var ValineButton=document.getElementsByClassName("vsubmit vbtn")[0];
function send_valine_Qmsg(){
  var pagename=document.title;
  var wz=pagename.indexOf('|');
  var res=pagename.substring(0,wz);
  var pageurl=document.URL;
  var ptime=new Date();
  var vnick=document.getElementsByClassName("vnick vinput")[0].value;
  var vmail=document.getElementsByClassName("vmail vinput")[0].value;
  var vlink=document.getElementsByClassName("vlink vinput")[0].value;
  var veditor=document.getElementsByClassName("veditor vinput")[0].value;
  var data="昵称："+vnick+"\n邮箱："+vmail+"\n网站地址："+vlink+"\n当前页面："+pagename+"\n评论内容："+veditor+"\n跳转链接："+pageurl+"\n评论时间："+ptime.toLocaleString();
  var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
  httpRequest.open('POST',SCKEY_Qmsg, true); //第二步：打开连接
  httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
  httpRequest.send(title2+data);//发送请求
};
  document.body.addEventListener('click', function(e) {
  if(e.target.className.indexOf('vsubmit') === -1) {
    return;
  }
  send_valine_Qmsg();
})