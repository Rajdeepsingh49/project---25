const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,Paperpos;
var ground,Groundpos,dustbinimg,bgimage;
var box1Sprite,box2Sprite,box3Sprite,box1,box2,box3;
function preload()
{
	dustbinimg = loadImage("sprites/dustbingreen.png");
	bgimage = loadImage("sprites/Background.jpg");
}

function setup() {
	createCanvas(1400, 900);

	
	engine = Engine.create();
	world = engine.world;


	box1Sprite=createSprite(900,560,200,20);
	box1Sprite.visible=false;
	
	
 
	box2Sprite=createSprite(810,480,20,190);
	box2Sprite.visible=false;
	

	box3Sprite=createSprite(995,480,20,190);
	box3Sprite.visible=false;
	



  box1 = Bodies.rectangle(900,560,200,20,{isStatic:true});
  box1.visible=false;
	World.add(world, box1);

	

	

	box2 = Bodies.rectangle(810,480,20,190,{isStatic:true});
	box2.visible=false;
	World.add(world, box2);

	

	box3 = Bodies.rectangle(995,480,20,190,{isStatic:true});
	box3.visible=false;
	World.add(world, box3);




	//Create the Bodies Here.
	paper = new Paper(100,350,40);
	ground = new Ground(600,580,1400,10);
	
	 
	


	Engine.run(engine);
  
}

function keyPressed(){
	if(touches.length>0||keyCode === UP_ARROW){
	   
		Matter.Body.applyForce(paper.body,paper.body.position,{x:49,y:-90});

	}
}


function draw() {
  rectMode(CENTER);
  background(bgimage);
  
 

  image(dustbinimg,800,380,200,200);
  paper.display();
  ground.display();
  
	
	

  drawSprites();
 
}




