const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bg1;
var alien1;
var tree;
var b1,b2,b3,b4;

function preload(){
bg1=loadImage("Images/bg2.jpg");
alien1=loadImage("Images/alien1.png");
tree=loadImage("Images/tree2.png");
//b1=loadImage("Images/bird1.png");
//b2=loadImage("Images/bird2.png");
//b3=loadImage("Images/bird3.png");
//b4=loadImage("Images/bird4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
	world = engine.world;

  stone=new pebble(windowWidth-1310,windowHeight-150,60);
  rubber1=new rubber(stone.body,{x:windowWidth-1280,y:windowHeight-170});

  bird=new birds(windowWidth-740, windowHeight-565,70);

  
  Engine.run(engine);
}

function draw() {
  background(bg1); 
 

  image(alien1, windowWidth-1280, windowHeight-320, 200,200);

  image(tree, windowWidth-520, windowHeight-680,600,600);
  image(tree, windowWidth-980, windowHeight-770,700,700);
  image(tree, windowWidth-670, windowHeight-600,500,500); 

  stone.display();
  rubber1.display();
  bird.display();
  detectCollision(bird,stone);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
rubber1.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body, {x:windowWidth-1310, y:windowHeight-170});
    rubber1.attach(stone.body);
  }
}

function detectCollision(lbird,lstone){
  var birdBodyPosition=lbird.body.position;
  var stoneBodyPosition=lstone.body.position;
 
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,birdBodyPosition.x,birdBodyPosition.y)
  if(distance<=lbird.radius+lstone.radius){
    Matter.Body.setStatic(lbird.body,false);
  }
 }