// let inn=document.getElementById("inn");
// let img=document.getElementById("img");
// inn.onchange=function(){
//   img.src=URL.createObjectURL(inn.files[0]);
// }

let box = document.getElementById("box");
function boxAppear(){
    box.style.display="block";
}
function boxdisAppear() {
    box.addEventListener("onhover", box.style.display = "none");
}

function toggleup() {
    document.getElementById("box_signup").style.display = "none";
    document.getElementById("box_login").style.display = "block";
}
function toggledown() {
    document.getElementById("box_login").style.display = "none";
    document.getElementById("box_signup").style.display = "block";
}

let menu = document.getElementById("setting_option");
function openmenu() {
    menu.style.display = "block";
}
function closemenu() {
    menu.style.display = "none";
}

