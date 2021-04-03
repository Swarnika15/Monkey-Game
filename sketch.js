var gameState=1
var PLAY = 1
var END = 0

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500,400)


monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1

ground = createSprite(400,375,1000,50);
  ground.shapeColor="green"
ground.velocityX=-4;
ground.x=ground.width/2
//console.log(ground.x)
//console.log(monkey.y)

bananaGroup = createGroup();
obstacleGroup = createGroup();



}


function draw() {
background("skyBlue")

  if (ground.x < 0){
 ground.x = ground.width/2;
 }
  
 if(keyDown("space")&& monkey.y >= 314) {
  monkey.velocityY = -18;
 }
 monkey.velocityY = monkey.velocityY + 0.8

 monkey.collide(ground)
  
  food ();
obstacles ();
  



stroke("black")
textSize(15)
fill("black")
text("Score:",+score,500,50)
  
stroke("black")
textSize(15)
fill("black")
text("Survival Time:",+ survivalTime,100,350)
survivialTime=survivalTime+Math.round(frameRate)



drawSprites ();
}

function food(){
  if(frameCount%80===0){
    banana = createSprite(500,100,40,10)
    banana.y=Math.round(random(120,200))
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-3
    banana.lifetime=200
    
    banana.depth=monkey.depth
    monkey.depth=monkey.depth+1
    
   bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(500,327,40,10)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    obstacle.velocityX=-4
    obstacle.lifetime=150
    
    obstacle.depth=monkey.depth
    monkey.depth=monkey.depth+1
    
  obstacleGroup.add(obstacle);
  }
}
