
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paper = new Paper(100,600,10);
	 ground = new Ground(width/2,670,width,20);

	 left = new Dustbin(550,620,20,100);
	 bottom = new Dustbin(610,660,100,20);
	 right = new Dustbin(670,620,20,100);

//	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  Engine.update(engine);

  paper.display();

  ground.display();
  
  left.display();
  bottom.display();
  right.display();

 
 
}
 
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x:15,y:-15})
	}
}


