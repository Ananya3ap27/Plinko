const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var d1,p1,ball,particles=[],ground;

function setup(){
    var canvas = createCanvas(600,800);
    engine = Engine.create();
    world = engine.world;

   ground = new Ground(300,790);
   d1=new Divider(10,700);
   d2=new Divider(110,700);
   d3=new Divider(210,700);
   d4=new Divider(310,700);
   d5=new Divider(410,700);
   d6=new Divider(510,700);
   d7=new Divider(590,700);

   p1=new Particle(100,100);
   p2=new Particle(200,100);
   p3=new Particle(300,1000);
   p4=new Particle(400,100);
   p5=new Particle(500,100);
   p6=new Particle(50,200);
   p7=new Particle(150,200);
   p8=new Particle(250,200);
   p9=new Particle(350,200);
   p10=new Particle(450,200);
   p11=new Particle(100,300);
   p12=new Particle(200,300);
   p13=new Particle(300,300);
   p14=new Particle(400,300);
   p15=new Particle(500,300);
   p16=new Particle(50,400);
   p17=new Particle(150,400);
   p18=new Particle(250,400);
   p19=new Particle(350,400);
   p20=new Particle(450,400);
   p21=new Particle(100,500);
   p22=new Particle(200,500);
   p23=new Particle(300,500);
   p24=new Particle(400,500);
   p25=new Particle(500,500);


}

function draw() {
 

  if(frameCount%60==0){
    ball=new Ball(random(100,500),0);
    particles.push(ball);
   }
   background(0);

  Engine.update(engine);
  for(var i=0; i<particles.length;i++){
  //ball.display();
  particles[i].display();
  }
  
  ground.display();
  
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();

  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();
  p9.display();
  p10.display();
  p11.display();
  p12.display();
  p13.display();
  p14.display();
  p15.display();
  p16.display();
  p17.display();
  p18.display();
  p19.display();
  p20.display();
  p21.display();
  p22.display();
  p23.display();
  p24.display();
  p25.display();

  
  

}

