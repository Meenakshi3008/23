var helicopterImage, helicopter;
var package, packageImage, packageBody;
var ground;
var dustbin1,dustbin2,dustbin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterImage = loadImage("helicopter.png")
	packageImage = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	package = createSprite(width/2, 80, 10,10);
	package.addImage(packageImage)
	package.scale = 0.2

	dustbin1 = new Dustbin(300,600,20,100);
dustbin2 = new Dustbin(500,600,20,100);
dustbin3 = new Dustbin(width/2,660,200,20);

	helicopter = createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterImage)
	helicopter.scale = 0.6

	ground = createSprite(width/2, height-35, width,10);
	ground.shapeColor = color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

	World.add(world, packageBody);
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  package.x = packageBody.position.x   
  package.y = packageBody.position.y 
drawSprites();
}

function keyPressed(){  
  if(keyCode ===DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false)
  }
  
}
