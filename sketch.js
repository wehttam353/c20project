
function preload() {
    //load the images here
bg = loadImage("images/garden.png");
cat1 = loadImage("images/cat1.png");
cat4 = loadAnimation("images/cat4.png");
mouse1 = loadImage("images/mouse1.png");
mouse4 = loadAnimation("images/mouse4.png");
catA = loadAnimation("images/cat2.png","images/cat3.png");
mouseA = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addImage(cat1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addImage(mouse1);
    mouse.scale= 0.15;
    


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width+mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("cat",cat4);
    cat.changeAnimation("cat");
    //cat.x = 300;
    mouse.addAnimation("mouse",mouse4);
    mouse.changeAnimation("mouse");
    mouse.scale = 0.15;
    cat.scale = 0.2;
}

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning",catA);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseTeasing",mouseA);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}
  //For moving and changing animation write code here


}
