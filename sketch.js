// All fixes are mentioned in the comments

var ball,img,paddle;

function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  
  // fix one, ball will move with this line 13
  ball.velocityX=9;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  // fix 2 ball will now bounce the paddle with line 30
  ball.bounceOff(paddle,explosion);
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    //fix 3 +20 to -20 for up arrow movement
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    //fix 4 paddle.x to paddle.y as it is down arrow.
    paddle.y=paddle.y+20;
  }
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

