var player1,player2,player3,player4,player5;
var sword;
var hunter;
var bg,a;

function preload(){
    bg = loadImage("ocean.jpg")
    
}
function setup(){
    createCanvas(windowWidth,windowHeight)

}
function draw(){
    background("lightblue")
    a = createSprite(700,300,10,10)
    a.addImage("image",bg)
    


    drawSprites();
}