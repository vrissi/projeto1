var box;
function setup() {
  box = createSprite(200,200,20,20);
  createCanvas(400,400);
}

function draw() {
  if(keyIsDown(RIGHT_ARROW)){
    background("red");
    
  }
  if(keyIsDown(LEFT_ARROW)){
    background("blue");
  } 
  if(keyIsDown(UP_ARROW)){
    background("green");
  }
  if(keyIsDown(DOWN_ARROW)){
    background("yellow");
  }

  
  drawSprites();
}




