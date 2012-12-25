
//prints message to bottom of page
var debug = function(message){
  document.getElementById('debug').innerHTML += '<br>' + message;
}

//gameplay variables
var speed = 5000;
var blockSize = 5;
var blockColor = '#000000';

//controls
var upKey = 38;
var downKey = 40;
var leftKey = 37;
var rightKey = 39;

//counter for my start and stop pixels
var myX = blockSize/2+50;
var myY = blockSize/2+50;
var oldDirection = 'r';
var newDirection = 'r';

//canvas variables
var width = blockSize*100; //create a 100x80 block canvas
var height = blockSize*80;
var bkgdColor = '#d0e7f9';


//set up canvas
var c = document.getElementById('c'); //canvas element
var ctx = c.getContext('2d'); //canvas element with ability to paint, etc.
      
c.width = width;
c.height = height;


//clear the screen
var clear = function(){
  ctx.fillStyle = bkgdColor;
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.rect(0, 0, width, height);
  ctx.closePath();
  ctx.fill();
}


//draw a block with center at (x,y), width and height blockSize.
var drawBlock = function(x,y){
  ctx.fillStyle = blockColor;
  ctx.beginPath();
  ctx.rect(x-blockSize/2, y-blockSize/2, blockSize, blockSize);
  ctx.closePath();
  ctx.fill();
}

//draw a block in my current location, advance location one block width in u,d,l,r.
var move = function(direction){
  drawBlock(myX, myY);
  if(newDirection == 'l' && oldDirection != 'r'){
    myX-=blockSize;
  }
  else if(newDirection == 'r' && oldDirection != 'l' ){
    myX+=blockSize;
  }
  else if(newDirection == 'u' && oldDirection != 'd'){
    myY-=blockSize;
  }
  else if(newDirection == 'd' && oldDirection != 'u'){
    myY+=blockSize;
  }
  oldDirection = newDirection;
  /*switch(direction){
    case 'l':
      myX-=blockSize;
    case 'r':
      myX+=blockSize;
    case 'u':
      myY-=blockSize;
    case 'd':
      myY+=blockSize;
  }*/
}

	
clear();
drawBlock(width/2,height/2);

//detects which keys the user is using.
var watchKeys = function(){
  if (Key.isDown(Key.UP)) newDirection = 'u';
  if (Key.isDown(Key.LEFT)) newDirection = 'l';
  if (Key.isDown(Key.DOWN)) newDirection = 'd';
  if (Key.isDown(Key.RIGHT)) newDirection = 'r';
  }
     

window.addEventListener('keyup', function(event) {Key.onKeyup(event);}, false);
window.addEventListener('keydown', function(event) {Key.onKeydown(event);}, false);

setInterval(function(){
  move(newDirection);
  watchKeys();
}
,10);

setInterval(function(){
  move(newDirection);
}
,speed);