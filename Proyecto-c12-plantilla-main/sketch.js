var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var coin;
var bomb;
var drink;

function preload(){
  //loadImage de path (camino)
  pathImg = loadImage("path.png");
  //loadAnimation de boy (niño)
  boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
 coinImg = loadImage("coin.png");
 bombImg= loadImage("bomb.png");
 drinkImg =loadImage("energyDrink.png");
}

function setup(){
  
  createCanvas(400,400);

 //crear sprite de path (camino) 
 path=createSprite(200,200);
//agregar imagen de path
path.addImage("path",pathImg);
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.velocityY=4;
path.scale=1.2;

//crear sprite de boy (niño)
boy = createSprite(180,340,30,30);
//agregar animación para boy
boy.addAnimation("boy running", boyImg);
boy.scale=0.8;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible = false;
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible= false;

//crear sprite de coin
coin=createSprite(200,200);
coin.addImage("coin",coinImg);
coin.scale=0.5;

//crear sprite de bomb
bomb=createSprite(100,200);
bomb.addImage("bomb",bombImg);
bomb.scale=0.08;

//crear sprite de drink
drink=createSprite(300,200);
drink.addImage("drink",drinkImg);
drink.scale=0.08;

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
