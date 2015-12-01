var x = 575;
var y = 250;
var framelength = 2


var Canvas = document.getElementById("mycanvas");
var ctx = Canvas.getContext("2d")
ctx.fillStyle = "#FF0000";
ctx.fillRect(x,y,5,5)

var moveDirection = {}

function moveRight() {
	if (moveDirection != "right") {
		moveDirection="right";
		if (moveDirection == "right") {
			var moveTime = setInterval(function(){
				if( x<1147) {
					 eatFood()
					ctx.fillRect( x, y,5,5); 
					ctx.fillStyle = "#FF0000";
	 				x +=1;
	 				ctx.clearRect(x-2,y,1,5)
					
				}
				else if (x=1147)
				{
					x=0;

				}
				if (moveDirection != "right") {
					clearInterval(moveTime)
				}
			}, framelength)
		}
	}
}


function moveLeft() {
	if (moveDirection != "left") {
		moveDirection="left";
		if (moveDirection == "left") {
			var moveTime = setInterval(function(){
				if( x>1) {
					 eatFood()
					ctx.fillRect( x, y,5,5); 
					ctx.fillStyle = "#FF0000";
				 	x -=1;
				 	ctx.clearRect(x+6,y,3,5)
					
				}
				else if (x=1)
				{
					x=1147;
				}
				if (moveDirection != "left") {
					clearInterval(moveTime)
				}
			}, framelength)
		}
	}
}

function moveUp() {
	if (moveDirection != "up") {
		moveDirection="up";
		if (moveDirection == "up") {
			var moveTime = setInterval(function(){
				if( y>-5) {
					 eatFood()
					ctx.clearRect(x,y+2,5,3)
					ctx.fillStyle = "#FF0000";
				 	y -=1;
				 	ctx.fillRect( x, y,5,5); 
				}
				else if (y= -5)
				{

					y=489;

				}
				if (moveDirection != "up") {
					clearInterval(moveTime)
				}
			}, framelength)
		}
	}
	// moveUp()
}

function moveDown() {
	if (moveDirection != "down") {
		moveDirection="down";
		if (moveDirection == "down") {
			var moveTime = setInterval(function(){

				if( y<489) {
					eatFood()
					ctx.fillRect( x, y,5,7);
					ctx.fillStyle = "#FF0000";
	 				y +=1;
	 				ctx.clearRect(x,y-2,5,3); 
						//clearRect(0,0,1139,489)
				}		
				else if (y=489)
				{
					y=0;

				}
				if (moveDirection != "down") {
					clearInterval(moveTime)
				}
			}, framelength)
		}
	}
	
}


function startButton () {
var rando = Math.ceil(Math.random()*4)

//attempting to create start button that sends square in random direction upon press
document.getElementById("btn").addEventListener("click", function(){
    
    	if (rando === 4) {
    		moveUp()
    	}
    	else if (rando === 3) {
    		moveDown()
    	}
    	else if (rando === 2) {
    		moveLeft()
    	}
    	else if (rando === 1) {
    		moveRight()
    	}
});
 }
 startButton()





// Handle keyboard controls
var keysPressed= {};

addEventListener("keydown", checkKeyPressed);

	function checkKeyPressed(e) {
	if (e.keyCode == "37") {
		moveLeft()
	}
	if (e.keyCode == "38") {
		
		moveUp()
	}
	if (e.keyCode == "39") {
	
		moveRight()
	}
	if (e.keyCode == "40") {
		
		moveDown()
	}
}





 function generateFood () {
 	 q = Math.ceil(Math.random()*1139)
 	 r = Math.ceil(Math.random()*489)
 	ctx.fillStyle = "#000000";
	ctx.fillRect(q,r,5,5)


 }

 generateFood()

 function eatFood () {
 	

 	if (     (Math.abs(x-q) < 5) && (Math.abs(y-r) < 5)  ) {
 		ctx.clearRect(q,r,5,5);
 		generateFood()
 
 	}
}

/*
addEventListener("keyup", function (e) {
	keysPressed[e.keyCode] = true;
}, false);


// Update game objects
var update = function (modifier) {
	if (38 in keysPressed) { // Player holding up
		moveUp()
	}
	if (40 in keysPressed) { // Player holding down
		moveDown()
	}
	if (37 in keysPressed) { // Player holding left
		moveLeft()
	}
	if (39 in keysPressed) { // Player holding right
		moveRight()
	}
}
*/





//gives error when run but if you refresh error goes away
// why isnt global x changes in function displayed in ctx.fillRect ??