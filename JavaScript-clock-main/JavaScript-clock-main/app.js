function showTime(){
let s,m,h,time,sesion ,date;
date=new Date();
s=date.getSeconds();
m=date.getMinutes();
h=date.getHours();
s=(s<10)? "0" + s : s ;
m=(m<10)? "0" + m : m ;
h=(h<10)? "0" + h : h ;
sesion =" AM";
if(h>12){
    h=h-12;
    sesion="PM";
}
if(h==0){
    h=12;
}
time= h + " : " + m + " : " + s + " " + sesion ;
document.getElementById("time").innerHTML=time;
document.getElementById("time").textContent=time;
setTimeout(showTime, 1000);
}
showTime();
