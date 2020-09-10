var movingRect,fixedRect,gameObject1,gameObject2

function setup() {
  createCanvas(800,400);
 movingRect=createSprite(400, 200, 50, 50);
 movingRect.shapeColor="green";
 fixedRect=createSprite(200,200,70,60)
 fixedRect.shapeColor="green"
 gameObject1=createSprite(300,100,50,50)
 gameObject1.shapeColor="blue"
 gameObject2=createSprite(200,300,50,50)
 gameObject2.shapeColor="green"
}

function draw() {
  background("red");  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if( isTouching(movingRect,gameObject1)){
   movingRect.shapeColor="pink"
    fixedRect.shapeColor="pink"
  }
  else{
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green" 

  }
  
  
  drawSprites();
}
function isTouching(Object1,Object2){
  if (Object1.x-Object2.x<Object2.width/2+Object1.width/2&&
    Object2.x-Object1.x<Object2.width/2+Object1.width/2&&
    Object1.y-Object2.y<Object2.height/2+Object1.height/2&&
    Object2.y-Object1.y<Object2.height/2+Object1.height/2){
    return true;
    }
else{
return false;

}


}





























