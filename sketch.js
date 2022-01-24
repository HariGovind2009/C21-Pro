
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftground;
var rightground;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);

var ball_option={

isStatic:false,
restitution:0.2,
friction:0,
density:1.2
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = Bodies.circle(260,100,20,ball_option);
World.add(world,ball)
	
ground = new Ground(width/2,670,width,20)

leftground = new Ground(1100,600,20,120);
rightground = new Ground(1300,600,20,120);


Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ellipse(ball.position.x,ball.position.y,20) 
 ground.show(); 
 leftground.show();
 rightground.show();

 drawSprites();
 
}

function keyPressed()  {

if(keyCode===UP_ARROW)  {
 
 Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})

}

}

