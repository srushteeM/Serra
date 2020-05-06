var sc,scImg,obs,obsGroup,obs1,obs2,obs3,obs4,obs5;
var bg,bgImg;

function setup() {
  createCanvas(600,600);

//  bg=createSprite(300, 300, 600, 600);

    sc=createSprite(200,300,30,30);

}

function draw() {
  background(255,255,255); 

  sc.velocityY=sc.velocityY+0.2;

  if(keyDown(UP_ARROW)){
    sc.velocityY+=-0.7;
  }

  if(keyDown(DOWN_ARROW)){
    sc.velocityY+=0.5;
  }


  drawSprites();
}