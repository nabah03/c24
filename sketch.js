
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rect1 = createSprite(width/2,650,200,20);
	rect2 = createSprite(290,610,20,100);
    rect3 = createSprite(510,610,20,100)
	
	ground = createSprite(510,680,1000,20);
	

    var options={
        isStatic: true,
        restitution:0,
       

    }

	

    

	Engine.run(engine);
  
}

function keypressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body.paperObject.body.position,{x:85,y:85});
	
	}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



