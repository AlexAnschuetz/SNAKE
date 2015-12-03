
var x = 575;
var y = 250;
var framelength = 4;
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
var keyCheckArray = [30, 30];
var displayBarrier = function(){
	console.log("running displayBarrier")
	ctx.fillStyle = "#FFD700";
	ctx.fillRect( xONE,0, 3 ,489 )
	ctx.fillRect(0, yONE , 1139 ,3 )
	ctx.fillRect(xTWO,0, 3 ,489 )
	ctx.fillRect(0, yTWO,1139 , 3 )
}

function increaseDifficulty() {
	// modifier += .1
}
function moveRight() {
	if (moveDirection != "right") {
		moveDirection="right";
		if (moveDirection == "right") {
			var moveTime = setInterval(function(){
				if( x<1147) {
					 eatFood()
					 eatBigFood()
					ctx.fillRect( x, y,5,5); 
					ctx.fillStyle = "#FF0000";
	 				x +=1*modifier;
	 				ctx.clearRect(x-(2+z),y,1*modifier,6);
	 				testEvilBarrier()
	 				
	 				
					
				}
				else if (x=1147)
				{
					x=0;
					FoodHack()
				
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
					 eatBigFood()
					ctx.fillRect( x, y,5,5); 
					ctx.fillStyle = "#FF0000";
				 	x -=1*modifier;
				 	ctx.clearRect(x+(6+z),y,6*modifier,6)
				 	testEvilBarrier()
				 	
				 	
					
				}
				else if (x=1)
				{
					x=1147;
					FoodHack()
					
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
					 eatBigFood()
					ctx.clearRect(x,y+(2+z),6,6*modifier)
					ctx.fillStyle = "#FF0000";
				 	y -=1*modifier;
				 	ctx.fillRect( x, y,5,5); 
				 	testEvilBarrier()
				 	
				 	
				}
				else if (y= -5)
				{
					y=489;
					FoodHack()
					
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
					eatBigFood()
					ctx.fillRect( x, y,5,7);
					ctx.fillStyle = "#FF0000";
	 				y +=1*modifier;
	 				ctx.clearRect(x,y-(5+z),6,6*modifier);
	 				testEvilBarrier()
	 				
	 				
	 				
						//clearRect(0,0,1139,489)
				}		
				else if (y=489)
				{
					y=0;
					FoodHack()
				
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
// Handle keyboard controls
function clickStartMandatory() {
	document.getElementById('btn').addEventListener("click", function() {
		clicked = 1;
		enableArrowKeys()
		generateEvilBarrier()
		setInterval(increaseDifficulty, 5000)
	//above makes snake speed up as game goes on
	//setInterval( qrFoodHack, 100)
	//resets booard frequently to clear snake trail
	})
}
function enableArrowKeys() {
	if (clicked === 1) {
		addEventListener("keydown", checkKeyPressed);
		function checkKeyPressed(e) {
			if (e.keyCode == "37") {
				moveLeft()
				FoodHack()
			}
			if (e.keyCode == "38") {
				moveUp()
				FoodHack()
			}
			if (e.keyCode == "39") {
				moveRight()
				FoodHack()
			}
			if (e.keyCode == "40") {
				moveDown()
				FoodHack()	
			}
		}
	}
}
 function generateFood () {
 	 q = Math.ceil(Math.random()*1137)
 	 r = Math.ceil(Math.random()*487)
 	ctx.fillStyle = "#ffffff";
	ctx.fillRect(q,r,5,5)
}
 function eatFood () {
 	if ((Math.abs(x-q) < 5) && (Math.abs(y-r) < 5)) {
 		ctx.clearRect(q,r,5,5);
 		t+=25
 		document.getElementById('score').innerHTML = t 
 		generateFood()
 		z+=6
 
 	}
}
function FoodHack () {
	//if (e.keyCode == "40" || "37" || "38" || "39") {
	ctx.clearRect(0,0,1139,489)
	ctx.fillStyle = "#ffffff";
	ctx.fillRect(q,r,5,5)
	ctx.fillStyle = "#00FF00";
	ctx.fillRect(b,n,10,10)
	/*ctx.fillStyle = "#FFD700";
	ctx.fillRect(xONE,0, 1 ,489 )
	ctx.fillRect(0,yONE, 1139 ,1 )
	ctx.fillRect(xTWO,0, 1 ,489 )
	ctx.fillRect(0,yTWO,1139 , 1 ) */
}
function generateBigFood () {
	b = Math.ceil(Math.random()*1130)
	n = Math.ceil(Math.random()*480)
	ctx.fillStyle = "#00FF00";
	ctx.fillRect(b,n,10,10)
}
function eatBigFood () {
	if((Math.abs(x-b) < 10) && (Math.abs(y-n) < 10) ) {
		ctx.clearRect(b,n,10,10)
		t+=50
		document.getElementById('score').innerHTML = t
		generateBigFood()
		z+=12
	}
}
function generateEvilBarrier() {
 	if (clicked == 1) {
		xONE = Math.ceil(Math.random()*1130)
		yONE = Math.ceil(Math.random()*480)
		xTWO = Math.ceil(Math.random()*1130)
		yTWO = Math.ceil(Math.random()*480)
		//everytime evil barrier is generated i want to run the following for some amount of time
	
	setInterval(displayBarrier, 10)
	setTimeout(clearInterval(displayBarrier), 5000)
	setTimeout(makeNull, 5000)

	}
}


setInterval(generateEvilBarrier, 10000)
// setTimeout(clearInterval(displayBarrier), 60000)
// setTimeout(makeNull,60000)
function makeNull () {
	xONE = -5
	yONE = -5
	xTWO = -5
	yTWO = -5
}
function testEvilBarrier() {
	if ((Math.abs(x-xONE) < 2) || (Math.abs(y-yONE) < 2) ) {
		alert("You touched the evil barrier. You Lose !")
		location.reload()
		
		
	}
	if ((Math.abs(x-xTWO) < 2) || (Math.abs(y-yTWO) < 2) ) {
		
		alert("You touched the evil barrier. You Lose!")
		location.reload()
	}
}


document.addEventListener('keydown', function(m) {
  console.log(m.keyCode)
  keyCheckArray.shift()
  keyCheckArray.push(m.keyCode)
} ) 

function disallowUTurns() {
	if (clicked == 1) {
	if (keyCheckArray.toString() ==  [37,39].toString() ) {
		alert("Snake ate itself. Sorry try again")
		location.reload()	
								}
 	else if (keyCheckArray.toString() == [39, 37].toString()) {
 		alert("Snake ate itself. Sorry try again")
		location.reload()
 	}

 	else if (keyCheckArray.toString() == [38, 40].toString()) {
 		alert("Snake ate itself. Sorry try again")
		location.reload()
 	}

 	else if (keyCheckArray.toString() == [40, 38].toString()) {
 		alert("Snake ate itself. Sorry try again")
		location.reload()
 	}
 	};
 	
}

startButton()
clickStartMandatory()
generateFood()
generateBigFood()
setInterval(disallowUTurns, 100)

