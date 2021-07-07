
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var wall1, wall2;
var engine, world;

function preload() {
    
}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
  }

  //Create the Bodies Here.
  ball = Bodies.circle(100, 10, 12.5, ball_options);
	World.add(world, ball);

	groundObj = new Ground(width/2, 670, width, 20);
	wall1 = new Ground(width/2 + 50, 622, 10, 75);
	wall2 = new Ground(width/2 + 200, 622, 10 , 75);

  Engine.run(engine);
}


function draw() {
  background(0);
  	
	groundObj.show();
	wall1.show();
	wall2.show();
	ellipse(ball.position.x, ball.position.y, 12.5);
 
	Engine.update(engine);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
      applyForceBall();
  }
}

function applyForceBall() {
	Matter.Body.applyForce(ball, {x: ball.position.x, y: ball.position.y}, {x: 5, y: -2})
}



