var bgImg;
var cat,catImg1,catImg2,catImg3
var mouse,mouseImg1,mouseImg2,mouseImg3
function preload() {
    bgImg = loadImage("images/garden.png")
    catImg1 = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseImg1 = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png")
    mouseImg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600)
    cat.addAnimation("catsitting",catImg1)
    cat.scale=0.2

    mouse = createSprite(200,600)
    mouse.addAnimation("mosestanding",mouseImg1)
    mouse.scale=0.2
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catlastImage",catImg3)
        cat.changeAnimation("catlastImage")
        cat.x=300

        mouse.addAnimation("mouselastImage",mouseImg3)
        mouse.changeAnimation("mouselastImage")

    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseteasing",mouseImg2)
      mouse.changeAnimation("mouseteasing")
      mouse.frameDelay = 25

      cat.velocityX=-5;
      cat.addAnimation("catmoving",catImg2)
      cat.changeAnimation("catmoving");


  }

}
