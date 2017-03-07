var newWidth = 75;
var newHeight = 75;


function setup(){
    createCanvas(600,400);
    background(40);
   
}

function draw(){
    // background(50);
   if(mouseIsPressed){
     noStroke();
    fill(150,0,275,75);
    ellipse(mouseX,mouseY,newWidth,newHeight);
}  
   }
   