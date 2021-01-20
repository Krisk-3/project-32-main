
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stage,stage1,stage2
var striker
var string
var block
var backgroundImg
var tile1,tile2,tile3,tile4,tile5,tile6,tile7,tile8,tile9,tile10,tile11,tile12,tile13,tile14,tile15,tile16,tile17,tile18,tile19,tile20,tile21,tile22,tile23,tile24,tile25

var score = 0

function preload (){
    item ()
}

function setup() {
	createCanvas(1200, 600);
    engine = Engine.create();
	world = engine.world;
	
	stage = new ground (520,590,1500,20)

	stage1 = new ground (510,417,260,20)

	stage2 = new ground (948,224,200,20)
	
	striker = new slasher(140,312,60)

	string = new launcher(striker.body,{x:140,y:312})

	tile1 = new box(450,335,30,40)
	fill(134,206,234)
	tile2 = new box(480,335,30,40)
	tile3 = new box(510,335,30,40)
	tile4 = new box(540,335,30,40)
	tile5 = new box(570,335,30,40)
	tile6 = new box(420,335,30,40)
	tile7 = new box(600,335,30,40)
	tile8 = new box(450,295,30,40)
	tile9 = new box(480,295,30,40)
	tile10 = new box(510,295,30,40)
	tile11 = new box(540,295,30,40)
	tile12 = new box(570,295,30,40)
	tile13 = new box(480,255,30,40)
	tile14 = new box(510,255,30,40)
	tile15 = new box(540,255,30,40)
	tile16 = new box(510,215,30,40)
	tile17 = new box (886,195,30,40)
	tile18 = new box (916,195,30,40)
	tile19 = new box (946,195,30,40)
	tile20 = new box (976,195,30,40)
	tile21 = new box (1006,195,30,40)
	tile22 = new box (916,155,30,40)
	tile23 = new box (946,155,30,40)
	tile24 = new box (976,155,30,40)
	tile25 = new box (946,115,30,40)

	Engine.run(engine);
  
}


function draw() {
  if(backgroundImg)
  background(backgroundImg);
  text(mouseX + "," + mouseY, mouseX, mouseY)

  textSize (20) 
  text ("SCORE:"+score,750,40)

  


  stage.display();
  stage1.display();
  stage2.display();
  striker.display();
  string.display();
  fill(134,206,234)
  tile1.display();
  fill(134,206,234)
  tile2.display();
  fill(134,206,234)
  tile3.display();
  fill(134,206,234)
  tile4.display();
  fill(134,206,234)
  tile5.display();
  fill(134,206,234)
  tile6.display();
  fill(134,206,234)
  tile7.display();
  fill(255,192,203)
  tile8.display();
  fill(255,192,203)
  tile9.display();
  fill(255,192,203)
  tile10.display();
  fill(255,192,203)
  tile11.display();
  fill(255,192,203)
  tile12.display();
  fill(63,224,308)
  tile13.display();
  fill(63,224,308)
  tile14.display();
  fill(63,224,308)
  tile15.display();
  fill(128,128,128)
  tile16.display();
  fill(134,206,234)
  tile17.display();
  fill(134,206,234)
  tile18.display();
  fill(134,206,234)
  tile19.display();
  fill(134,206,234)
  tile20.display();
  fill(134,206,234)
  tile21.display();
  fill(63,224,308)
  tile22.display();
  fill(63,224,308)
  tile23.display();
  fill(63,224,308)
  tile24.display();
  fill(255,192,203)
  tile25.display();
  
  tile1.score();
  tile2.score();
  tile3.score();
  tile4.score();
  tile5.score();
  tile6.score();
  tile7.score();
  tile8.score();
  tile9.score();
  tile10.score();
  tile11.score();
  tile12.score();
  tile13.score();
  tile14.score();
  tile15.score();
  tile16.score();
  tile17.score();
  tile18.score();
  tile19.score();
  tile20.score();
  tile21.score();
  tile22.score();
  tile23.score();
  tile24.score();
  tile25.score();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string.fly();
}

function keyPressed(){
    if (keyCode === 32 ){
        string.attach(striker.body)
    }
}

async function item (){
    var time = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var back = await time.json () 
    var date = back.datetime
    var hour = date.slice(11,13)
     if(hour>6&&hour<18){
       backgroundImg = loadImage("sprites/day.png")
     }else{
       backgroundImg = loadImage("sprites/night.jpg")
     }
 
 }