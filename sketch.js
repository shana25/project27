const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() 
{
	createCanvas(600,600);

	engine = Engine.create();
	world = engine.world;

	roof= new Roof(300,100,400,15);

	bob1= new Bob(300,400,25);
	rope1=new Rope(bob1.body,roof.body,-130)
	
	bob2= new Bob(350,400,25);
	rope2=new Rope(bob2.body,roof.body,-70)
	
	bob3= new Bob(400,400,25);
	rope3=new Rope(bob3.body,roof.body,-10)
	
	bob4= new Bob(450,400,25);
	rope4=new Rope(bob4.body,roof.body,50)
	
	bob5= new Bob(500,400,25);
	rope5=new Rope(bob5.body,roof.body,110)


	Engine.run(engine);
  
}

function draw() 
{
  //rectMode(CENTER);
  background(220);

  roof.display();
  
  bob1.display();
  rope1.display();

  bob2.display();
  rope2.display();
 
  bob3.display();
  rope3.display();

  bob4.display();
  rope4.display();

  bob5.display();
  rope5.display();

}

function keyPressed()
 {
   if(keyCode === UP_ARROW)
   {
     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100});
   }
 }

 

