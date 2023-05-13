
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var net1;
var net2;
var net3;

var groundBody;

var img;
var sprt;

var ppr;
var pprImg;

function preload(){img=loadImage("sprites/dustbingreen.png");pprImg=loadImage("sprites/paper.png")}

function setup(){

createCanvas(1220, 555);

engine = Engine.create();
world = engine.world;

sprt=createSprite(1010,405,10,10);
sprt.shapeColor="black";
sprt.addImage(img);
sprt.scale=0.6;

ppr=createSprite(150 , 460 , 10 , 10);
ppr.addImage(pprImg);
ppr.scale=0.5;
  
ball = new Paper(150 , 400 , 30);
       
net1= new Net(1079,400,15,170);
net2= new Net(942,400,15,170);


var options={isStatic:true}
groundBody = Bodies.rectangle(width/2 , 500 , width , 10 ,options);
fill("black");
World.add(world , groundBody);
   
Engine.run(engine);}


function draw(){

rectMode(CENTER);
  
ball.display();
net1.display();
net2.display();
 
background("cyan");

ppr.x=ball.body.position.x;
ppr.y=ball.body.position.y;

Engine.update(engine);

rect(width/2 , 500 , width , 10 );

drawSprites();}

function keyPressed(){if(keyCode === UP_ARROW){Matter.Body.applyForce(ball.body,ball.body.position,{x:25,y:-50});}}




