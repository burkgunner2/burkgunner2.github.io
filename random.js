var F = Math.floor(Math.random()*6);

if(F===1) {
document.getElementById("FW-titel").style.color = "springgreen";
}
if(F===2) {
document.getElementById("FW-titel").style.color = "lightblue";
}
if(F===3) {
document.getElementById("FW-titel").style.color = "#ffe96e";
}
if(F===4) {
document.getElementById("FW-titel").style.color = "mediumpurple";
}
if(F===5) {
document.getElementById("FW-titel").style.color = "slateblue";
}
if(F<1 || F>5) {
document.getElementById("FW-titel").style.color = "deeppink";
}
 
