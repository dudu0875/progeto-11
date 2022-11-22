var oceano,navio
var oceanoImg,navioImg
function preload(){
navioImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");  
  
oceanoImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
 
oceano = createSprite (400,20);
oceano.addImage(oceanoImg);
oceano.velocityX = -5;
oceano.scale = 0.3;

navio = createSprite (130,200,30,30);
 navio.addAnimation("navio",navioImg);
  navio.scale = 0.25; 

  }


function draw() {
  background("blue"); 
  oceano.velocityX =-3;


 
    drawSprites();

 
}
