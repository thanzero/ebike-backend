!function(e,t,n){"use strict";var r="http://121.40.108.30:3000/api",o=t.module("ebike-services",["lbServices"]);o.service("RemoteStorage",function(e){return{getUploadURL:function(e,t){return r+"/"+e+"/"+t+"/upload"},getDownloadURL:function(e,t,n){return r+"/"+e+"/"+t+"/download/"+n},getAvatar:function(t){return e.get(this.getDownloadURL("uploads",t,"avatar.png"))}}}).service("CurrentUser",function(e){})}(window,window.angular);