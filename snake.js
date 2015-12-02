var x = 575;
var y = 250;
var framelength = 2;
var z = 0;
var t = 0;
var clicked = 0;
var keysPressed= {};
var moveDirection = {};
var modifier = 1

var Canvas = document.getElementById("mycanvas");
var ctx = Canvas.getContext("2d")
ctx.fillStyle = "#FF0000";
ctx.fillRect(x,y,5,5)


setInterval(increaseDifficulty, 5000)
	//above makes snake speed up as game goes on

setInterval( qrFoodHack, 100)
	//resets booard frequently to clear snake trail


function increaseDifficulty() {
modifier += .1
}



function moveRight() {
	if (moveDirection != "right") {
		moveDirection="right";
		if (moveDirection == "right") {
			var moveTime = setInterval(function(){
				if( x<1147) {
					 eatFood()
					ctx.fillRect( x, y,5,5); 
					ctx.fillStyle = "#FF0000";
	 				x +=1*modifier;
	 				ctx.clearRect(x-(2+z),y,1,6)
					
				}
				else if (x=1147)
				{
					x=0;
					qrFoodHack()

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
				 	x -=1*modifier;
				 	ctx.clearRect(x+(6+z),y,6,6)
					
				}
				else if (x=1)
				{
					x=1147;
					qrFoodHack()
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
					ctx.clearRect(x,y+(2+z),6,6)
					ctx.fillStyle = "#FF0000";
				 	y -=1*modifier;
				 	ctx.fillRect( x, y,5,5); 
				}
				else if (y= -5)
				{

					y=489;
					qrFoodHack()

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
	 				y +=1*modifier;
	 				ctx.clearRect(x,y-(5+z),6,6); 
						//clearRect(0,0,1139,489)
				}		
				else if (y=489)
				{
					y=0;
					qrFoodHack()

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



function clickStartMandatory() {
document.getElementById('btn').addEventListener("click", function() {
	clicked = 1;
	enableArrowKeys()

}
)
}

function enableArrowKeys() {
if (clicked === 1) {

addEventListener("keydown", checkKeyPressed);

	function checkKeyPressed(e) {
	if (e.keyCode == "37") {
		
		
		moveLeft()
		qrFoodHack()
	}
	if (e.keyCode == "38") {
		
		
		moveUp()
		qrFoodHack()
	}
	if (e.keyCode == "39") {
		
		
		moveRight()
		qrFoodHack()
	}
	if (e.keyCode == "40") {
		
	
		moveDown()
		qrFoodHack()
	}
}
}
}




clickStartMandatory()

 function generateFood () {
 	 q = Math.ceil(Math.random()*1138)
 	 r = Math.ceil(Math.random()*488)

 	ctx.fillStyle = "#000000";
	ctx.fillRect(q,r,5,5)


 }

 generateFood()

 function eatFood () {
 	

 	if (     (Math.abs(x-q) < 5) && (Math.abs(y-r) < 5)  ) {
 		ctx.clearRect(q,r,5,5);
 		t+=25
 		document.getElementById('score').innerHTML = t 
 		generateFood()
 		z+=6
 
 	}
}

function qrFoodHack () {
	//if (e.keyCode == "40" || "37" || "38" || "39") {
	ctx.clearRect(0,0,1139,489)
	ctx.fillStyle = "#000000";
	ctx.fillRect(q,r,5,5)
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