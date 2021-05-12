const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas, engine, world

function setup(){

  canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,380,400,10,options);
  World.add(world, ground);

  var box1 = { restitution :1
  }
 box = Bodies.rectangle(200,100, 50,30, box1);
 World.add(world,box);
 
ball = Bodies.circle(200,50,15,box1)
World.add(world,ball);

}

function draw(){
  background(0);
  Engine.update(engine);

  fill("hotpink");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,10);

  fill("limegreen")
rectMode(CENTER);
  rect(box.position.x, box.position.y, 50,30);

  fill("lavender")
ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,15,15);
}