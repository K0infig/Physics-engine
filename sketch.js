const World=Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine;

var block;
var ground;


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  var options ={
    restitution : 1
  }

  block = Bodies.circle(200,200,50,options);
  World.add(world, block);

var ground_options ={
  isStatic : true
}

  ground = Bodies.rectangle(width/2, height-40, width, 20,ground_options)
  World.add(world,ground);


  console.log(ground);
  
}

function draw() {
  background("black"); 
  Engine.update(engine);

  
  
  ellipseMode(RADIUS);
  ellipse(block.position.x,block.position.y,50,50);

  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 20);


  drawSprites();
}