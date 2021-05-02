
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var world;




function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	

	groundObject=new Ground(width/2,590,width,20);
	ball = new Ball(400,400,50); 
  box1 = new Box(600,550,100,100);
  box2 = new Box(600,450,100,100);
  box3 = new Box(600,350,100,100);
  box4 = new Box(600,250,100,100);
	
  box5 = new Box(700,550,100,100);
  box6 = new Box(700,450,100,100);
  box7 = new Box(700,350,100,100);
  box8 = new Box(700,250,100,100);

  launcherObject=new Launcher(ball.body,{x:400,y:100})
	
	Engine.run(engine);

}

function draw() {

  background(230);

 Engine.update(engine)

  
  launcherObject.display();
  groundObject.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY}) 
}


