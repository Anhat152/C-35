var backgroundImage,gameState=0,playerCount=0,form,player,game;
var database;


function setup(){
    createCanvas(500,500);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
     
}

function draw(){
    
  
}



