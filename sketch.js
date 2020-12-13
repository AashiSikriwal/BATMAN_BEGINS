const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var manImg,man,drops;
var maxDrops=100;
var drops=[];
var thunderFrame,thunder;
function preload(){
    manImg=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    thunderbolt1Img=loadImage("1.png")
    thunderbolt2Img=loadImage("2.png")
    thunderbolt3Img=loadImage("3.png")
    thunderbolt4Img=loadImage("4.png")
}

function setup(){
   createCanvas(500,600)
   engine = Engine.create();
    world = engine.world;
    
    man=createSprite(200,450,20,20)
    man.addAnimation("WALK",manImg)
    man.scale=0.4

if(frameCount%160===0){

    for (var i=0;i<maxDrops;i++){
        drops.push(new Drops(random(0,400),random(0,400)))
    }

}
}

function draw(){
    background("black")
    Engine.update(engine);
    
    rand=Math.round(random(1,4))
    if(frameCount%80===0){
        thunderFrame=frameCount;
         thunder=createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
            case 1:thunder.addImage(thunderbolt1Img);
            break;
            case 2:thunder.addImage(thunderbolt2Img);
            break;
            case 3:thunder.addImage(thunderbolt3Img);
            break;
            case 4:thunder.addImage(thunderbolt4Img);
            break;
            default:break
        }
        thunder.scale=random(0.3,0.4)
        
    }
    if(thunderFrame + 10 === frameCount&&thunder){
        thunder.destroy();
    }
   
    for (var i = 0; i < maxDrops; i++) { 
        drops[i].display();
        drops[i].update();
     } 

     drawSprites();
 
}   

