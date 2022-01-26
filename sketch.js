var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var building1, building1Img
var building2, building2Img
var lamppost, lamppostImg
var bird, birdImg

function preload(){

bgImg = loadImage("assets/bg.png");

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");

building1Img = loadImage("assets/obsBottom1.png");
building2Img = loadImage("assets/obsBottom3.png");

lamppostImg = loadImage("assets/obsBottom2.png");

birdImg = loadImage("assets/obsTop2.png")

} 

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

building1 = createSprite(300,293,100,50);
building1.addImage("building1", building1Img);
building1.scale = 0.05;

building2 = createSprite(225,290,100,50);
building2.addImage("building2", building2Img);
building2.scale = 0.05;

lamppost = createSprite(265,305,50,50);
lamppost.addImage("lamppost", lamppostImg);
lamppost.scale = 0.035;

bird = createSprite(290,150,50,50);
bird.addImage("bird", birdImg);
bird.scale = 0.10;

}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY= 6;
            balloon.velocityY = balloon.velocityX-2;
          }

          //adding gravity
      
   
        drawSprites();
        
}
