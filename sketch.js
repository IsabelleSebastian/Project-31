const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rainDrops = [];
var maxDrops = 35;
var thunderFrame = 0
var bolt 
function preload(){

    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}
function setup(){
   createCanvas(400,600);
   engine = Engine.create();
   world = engine.world;

boy = new umbrella(200,470,100,250);


if(frameCount % 10 === 0){
    for(i=0; i<maxDrops; i++){
        rainDrops.push(new Drops(random(0,400) , random(-400,0)))
    }
}
}

function draw(){
    background("black");
    Engine.update(engine);

if(frameCount % 80 === 0){
    bolt = createSprite(random(50,350),30);
    bolt.scale = 0.5;
    thunderFrame = frameCount
    
    p = round(random(1,4))
    switch(p){
        case 1: bolt.addImage(thunder1);
        break
        case 2: bolt.addImage(thunder2);
        break
        case 3: bolt.addImage(thunder3);
        break
        case 4: bolt.addImage(thunder4);
        break
    }
   
}

if(thunderFrame + 10 === frameCount && bolt){
    bolt.destroy();
}

boy.display();

    for(i=0; i<maxDrops; i++){
        rainDrops[i].updateY(); //rainDrops[0] --> 1st raindrop.display()
        rainDrops[i].showDrop();
    }

    drawSprites()
}   

