var movingRect, fixedRect;

function setup() {
  createCanvas(900,500);
  
  movingRect = createSprite(400,200,150,80);
  movingRect.shapeColor = "red";
  
  fixedRect = createSprite(300,300,80,140);
  fixedRect.shapeColor = "blue";

  movingRect.debug = true;
  fixedRect.debug = true;

}


function draw() {
  background(0);  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  console.log(movingRect.y-fixedRect.y);

 if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&  fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2
  && movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 && fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2
  ){
   movingRect.shapeColor = "green";
   textSize(15);
   fill("white"); 
   text("COLLISION HAS BEEN DETECTED",300,250);
   
 }

 else{
   movingRect.shapeColor = "red";
 }

 

  drawSprites();
}