const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;


var ball ;
var ground;
var r1,r2,r3,r4,r5,r6;





function setup() {
  createCanvas(800,400);

  var ball= new Ball(100,200,20,20);
  
  

  var ground = createSprite(360,250,200,7);
  ground.shapeColor = "pink";

  var r1 = createSprite(300,220,40,40);
  var r2 = createSprite(360,220,40,40);
  var r3 = createSprite(420,220,40,40);
  var r4 = createSprite(330,170,40,40);
  var r5 = createSprite(390,170,40,40);
  var r6 = createSprite(360,120,40,40);
  r1.shapeColor = "white";
  r2.shapeColor = "blue";
  r3.shapeColor = "green";
  r4.shapeColor = "Yellow";
  r5.shapeColor = "orange";
  r6.shapeColor = "red";

  
}

function draw() {
  background("black");

  ball.display();
   

 
  drawSprites();
}