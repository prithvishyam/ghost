var tower,towerImg;

var ghost,ghostImg;

var door,doorImg,doorGroup;

var climber,climberImg,climberGroup; 

var invi,inviGroup;

var gameState="play";

function preload (){
 towerImg=loadImage("tower.png") ;
  ghostImg=loadImage("ghost-standing.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  
}

function setup(){
 createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage("tower",towerImg)
 tower.velocityY=2; 
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage("stand",ghostImg);
  ghost.scale=0.3;
  
  doorGroup=new Group();
  climberGroup=new Group();
  inviGroup=new Group();
}

function draw(){
background(0);
 if(gameState=="play"){
   if (tower.y>400){
    tower.y=300
  }
    if (keyDown("space")){
     ghost.velocityY=-2    
        
        }
    
    ghost.velocityY=ghost.velocityY +0.5
    
    if(keyDown("left_arrow")){
    ghost.x=ghost.x-2   
       
       }
   if(keyDown("right_arrow")){
    
    ghost.x=ghost.x +2
  }
  
  if(climberGroup. isTouching(ghost)){
    
    ghost.velocityY=0
  }
  
  if (inviGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gameState="end"
  }
   spawnDoor();
  
   
   
   
  drawSprites();
   
 } 
if (gameState==="end"){
  textSize(25);
  fill("red");
  text("game over",230,250);
}      
  
}

function spawnDoor(){
  
  if(frameCount%200===0){
   door=createSprite(200,-50);
    door.addImage("doors",doorImg);
    door.velocityY=2;
    door.lifetime=700;
    door.x=Math.round(random(120,400))
     doorGroup.add(door);
ghost.depth=door.depth;
    climber=createSprite(200,10)
    climber.addImage("climb",climberImg);
    climber.velocityY=2;
    climber.lifetime=700;
    climber.x=door.x
    climberGroup.add(climber);
    invi=createSprite(200,15);
    invi.velocityY=2;
    invi.width=climber.width;
    invi.height=2;
    invi.x=door.x;
    invi.debug=true;
    inviGroup.add(invi);
    ghost.depth=ghost.depth+1;
  }
  
}