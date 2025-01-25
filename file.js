// 3 dots box open
let box = document.getElementById("box");
function boxAppear(){
    box.style.display="block";
    document.getElementById('overlay').style.display='block';
}

// Gear box open
function openmenu() {
    document.getElementById('openRotate').style.transform="rotate(90deg)";
    document.getElementById('openRotate').style.transition="1s";
    document.getElementById("setting_option").style.display = "block";
    document.getElementById('overlay').style.display='block';
}

// Close boxes
document.getElementById('overlay').addEventListener("click",()=>{
    box.style.display="none";
    document.getElementById('openRotate').style.transition="1s";
    document.getElementById('openRotate').style.transform="rotate(-90deg)";
    document.getElementById("setting_option").style.display="none";
});

// LogIn Appear
function toggleup() {
    document.getElementById("box_signup").style.display = "none";
    document.getElementById("box_login").style.display = "block";
}
// SignUp Appear
function toggledown() {
    document.getElementById("box_login").style.display = "none";
    document.getElementById("box_signup").style.display = "block";
}