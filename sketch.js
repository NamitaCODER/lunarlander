var ground;
var lander;
var bg_img;
var lander_img;
var vx = 0;
var vy = 0;
var g = 0.05;

function preload(){
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup(){
  createCanvas(1000,700);
  frameRate(80);
  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  rectMode(CENTER);
  textSize(15);
}

function draw(){
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("vertical velocity:"+round(vy),800,75);
  pop();
  vy += g    //vy = vy+g
  lander.position.y += g;
  drawSprites();
}