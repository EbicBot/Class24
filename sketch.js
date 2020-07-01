const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground1;
var pig1, pig2
var log1, log2, log3, log4

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(700,320,70,70);
    pig1 = new Pig(810,350)
    box2 = new Box(920,320,70,70);
    ground1 = new ground(600,height,1200,20);
    log1 = new Log(810,260,300,PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,240);
    log2 = new Log(810, 180, 300, PI/2);

    box5 = new Box(810,160,70,70);
    log3 = new Log(760,120,130, PI/7);
    log4 = new Log(860,120,130, -PI/6);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();

    box2.display();
    ground1.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
}