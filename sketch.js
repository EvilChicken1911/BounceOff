var fixedRect, movingRect;
var object1, object2, object3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(200,150,25,25);
  object1.shapeColor="blue";
  object2 = createSprite(200,50,25,25);
  object2.shapeColor="red";
  object3 = createSprite(50,200,25,25);
  object3.shapeColor="green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  Bounceoff(movingRect,fixedRect)
  if(isTouching(object3,object1)){
    object1.shapeColor="yellow";
    object3.shapeColor="yellow";
  }
  else{
    object1.shapeColor="blue";
    object3.shapeColor="green";
    }
  object3.y=World.mouseY;
  object3.x=World.mouseX;
  drawSprites();
}