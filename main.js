canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_w=100;
rover_h=90;

bg_img="track.jpg";

rover_img="car.jpg";

rover_x=10;
rover_y=10;

function add() {

backgrounnd_img_T=new Image();
backgrounnd_img_T.onload=uploadBg;
backgrounnd_img_T.src=bg_img;

rover_img_T=new Image();
rover_img_T.onload=uploadrover;
rover_img_T.src=rover_img;

}

function uploadBg(){

ctx.drawImage(backgrounnd_img_T,0,0,canvas.width,canvas.height);


}

function uploadrover(){

    ctx.drawImage(rover_img_T,rover_x,rover_y,rover_w,rover_h);

}

//adding ascii codes for key press

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {

var keypress=e.keyCode;

if ( keypress == "37" ) {

    left();
}

if ( keypress == "39" ) {

    right();
}

if ( keypress == "38" ) {

    up();
}

if ( keypress == "40" ) {

    down();
}

}

function up() {
if(rover_y>0) {

rover_y=rover_y - 10;
uploadBg();
uploadrover();

}
}
function down() {
    if(rover_y<500) {
    
    rover_y=rover_y + 10;
    uploadBg();
    uploadrover();
    
    }


}

function left() {
    if(rover_x>0) {
    
    rover_x=rover_x - 10;
    uploadBg();
    uploadrover();
    
    }

}

function right() {
    if(rover_x<700) {
    
    rover_x=rover_x + 10;
    uploadBg();
    uploadrover();
    
    }

}