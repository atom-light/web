loadlunbotu();
loadjishiqi();
loadzi();
loadzi2();
// 轮播图
function loadlunbotu() {
    var div=document.getElementById("lunbo");
    var lunbo=div.querySelector(".lunbo");
    var li=div.querySelectorAll(".lunbo ul li");
    var a=div.querySelectorAll(".lunbo div a")
    var timer=setInterval(task,3000);
    var i=0;
    function task() {
        if (i<li.length-1){
            li[i].className="";
            a[i].className="";
            i++;
            li[i].className="cur";
            a[i].className="cur";
         }else{
            li[i].className="";
            a[i].className="";
            i=0;
            li[i].className="cur";
            a[i].className="cur";
        }
    }
lunbo.onmouseover=function () {
    clearInterval(timer);
}
lunbo.onmouseout=function () {
    timer=setInterval(task,3000);
}

for (var j=0;j<a.length;j++){
    a[j].onmouseover=function () {
        for (var c=0;c<a.length;c++){
            if (this==a[c]){
                if (i!=c){
                    li[i].className="";
                    a[i].className="";
                    i=c;
                    li[i].className="cur";
                    a[i].className="cur";
                }
                break;
            }
        }
    }
}
}

// 事件计时
function loadjishiqi() {
    task();
    var timer=setInterval(task,86400000);
    function task() {
        var now=new Date();
        var end=new Date("2016/09/04");
        var s=parseInt((now-end)/1000);
        var d=parseInt(s/(3600*24));
        var span=document.getElementById("tiao").querySelector(".red .b");
        span.innerHTML=d;
    }
}


function loadzi() {
    var bj=document.getElementById("nav").querySelector(".bj");
    var zi=document.getElementById("search").firstElementChild;
    var yincang=document.getElementById("search").querySelector("div .yincang");
    bj.onmouseover=function() {
        zi.className="zi";
        bj.style="background-color: white;border:1px solid rgba(200,200,200,0.3);";
        yincang.className="xianshi";
    }
    zi.onmouseover=function() {
        zi.className="zi";
        bj.style="background-color: white;border:1px solid rgba(200,200,200,0.3);";
        yincang.className="xianshi";
    }
    zi.onmouseout=function () {
        zi.className="";
        bj.style="";
        yincang.className="yincang";
    }
    bj.onmouseout=function () {
        zi.className="";
        bj.style="";
        yincang.className="yincang";
    }
}
