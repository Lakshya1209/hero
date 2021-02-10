const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var bgImg
var hero;

function preload() {
//preload the images here
bgImg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(1200, 400);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);


ground = new Ground(600,height,1200,20);
hero = new Hero(10,30,110,110);
sling = new Slingshot(hero.body,{x:90, y:50})
monster = new Monster(500,235,120,120);

block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);






}

function draw() {
  background(bgImg);
  ground.display();
  hero.display();
  monster.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  
  

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body ,{x:mouseX, y:mouseY});
}