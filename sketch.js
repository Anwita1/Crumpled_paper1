
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground, dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(500, 250, 70);

	ground = new Ground(600,height,1200,20);


	dustbin1 = new dustbin(500, 150, 30,100);

	Engine.run(engine);
  
}


function draw() {
  background("yellow");
  rectMode(CENTER);
  Engine.update(engine);
  
  drawSprites();
 paper1.display();
 ground.display();
 dustbin1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-100})
	}
}

