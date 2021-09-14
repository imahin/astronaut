var bgImg
var Sleep
var brush,eat,gym,drink,move;
var Iss
function preload() {
bgImg=loadImage("images/iss.png");
Sleep = loadAnimation("images/sleep.png");

brush = loadAnimation("images/brush.png");
eat = loadAnimation("images/eat1.png","images/eat2.png");

gym = loadAnimation("images/gym11.png","images/gym12.png");
drink=loadAnimation("images/drink1.png","images/drink2.png");
move=loadAnimation("images/move.png","images/move1.png");
}
function setup() {

  createCanvas(400, 400);
Iss=createSprite(200,200);
 Iss.addImage(bgImg); 
 astronaut = createSprite(300,230);
 astronaut.addAnimation("Sleeping",Sleep);
 astronaut.scale=0.1; 
 Iss.scale=0.2;
}

function draw() {
  background(220);
  drawSprites();
 textSize(10);
 fill(500);
 text("Instructions/Up:Brushing,Down:Working Out,Left:Eating,Right:Bathing, M=Moving",10,50) 
 if(keyDown("Up")){
 astronaut.addAnimation("brushing",brush);
 astronaut.changeAnimation("brushing");
 astronaut.y=350;
 astronaut.velocityX=0;
 astronaut.velocityY=0;  
 }
if(keyDown("Down")){
astronaut.addAnimation("eating",eat);
astronaut.changeAnimation("eating");
astronaut.y=340;
astronaut.velocityX=0;
astronaut.velocityY=0;    
}
if(keyDown("Left")){
astronaut.addAnimation("workingout",gym);
astronaut.changeAnimation("workingout");
astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;    
}
if(keyDown("Right")){
astronaut.addAnimation("drinking",drink);
astronaut.changeAnimation("drinking");
astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;    
}
if(keyDown("M")){
astronaut.addAnimation("moving",move);
astronaut.changeAnimation("moving");
astronaut.y=360;
astronaut.velocityX=-1;
astronaut.velocityY=-1;  
}
}