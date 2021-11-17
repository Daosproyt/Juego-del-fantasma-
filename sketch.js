var Fantasma, fantasmaquieto;
var Puerta, Puertaimagen;
var Maderabase, Maderabaseimagen;
var Torre, Torreimagen;
var Trampainvisible

function preload(){
  fantasmaquieto=loadImage("ghost-standing.png");
  Puertaimagen=loadImage("door.png");
  Maderabaseimagen=loadImage("climber.png");
  Torreimagen=loadImage("tower.png");
}

function setup(){
  createCanvas(600,600);
  
  Torre=createSprite(200,200,100,100);
  Fantasma=createSprite(200,200,50,50);
  Torre.addImage(Torreimagen);
  Fantasma.addImage(fantasmaquieto);
  Torre.velocityY=1;
  Fantasma.scale=0.3;
  
  
}

function draw(){
  
  if(keyDown("left_arrow")){
     Fantasma.x = Fantasma.x -3;
     }
  
  if(keyDown("right_arrow")){
     Fantasma.x = Fantasma.x +3;
     }
  
  if(keyDown("space")){
     Fantasma.velocityY = Fantasma.velocityY -5
     }
  
  Fantasma.velocityY = Fantasma.velocityY +.4;
  
  SpawnDoors();
  
  drawSprites();
}

function SpawnDoors(){
  if(frameCount%250 === 0){
     Puerta=createSprite(200,-50);
     Maderabase=createSprite(200,10);   
     Trampainvisible=createSprite(200,15);
    
     Puerta.addImage(Puertaimagen);
     Maderabase.addImage(Maderabaseimagen);
     Trampainvisible.visible=false;
    
     Puerta.velocityY=1;
     Maderabase.velocityY=1;
     Trampainvisible.velocityY=1;
    
     Puerta.x = Math.round(random(120,400));
    
     Maderabase.x = Puerta.x;
    
     Trampainvisible.x = Puerta.x;
     }
}

