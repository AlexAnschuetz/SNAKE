
var x = 575;
var y = 250;
var framelength = 4;
var size = 0;
var score = 0;
var clicked = 0;
var keysPressed= {};
var moveDirection = {};
var modifier = 1; //modifies snake speed
var Canvas = document.getElementById("mycanvas");
var ctx = Canvas.getContext("2d");
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(x,y,5,5)
var keyCheckArray = [30, 30]; // starts array as 2 item array. shifts and pops to this array keep it a 2 item array
var displayBarrier = function(){
	console.log("running displayBarrier")
	ctx.fillStyle = "#FFD700";
	ctx.fillRect( xONE,0, 3 ,489 );
	ctx.fillRect(0, yONE , 1139 ,3 );
	ctx.fillRect(xTWO,0, 3 ,489 );
	ctx.fillRect(0, yTWO,1139 , 3 );
}
//the above displays the location of the barrier on screen so user can know where not to go

//the below function adds to the difficulty (speed) of the snake. this function is called at an interval
function increaseDifficulty() {
	 modifier += .1;
}
function moveRight() { //this function is called by a keypress on right arrow
	if (moveDirection != "right") {
		moveDirection="right"; //puts direction as "right". helps know what im trying to do
		if (moveDirection == "right") { 
			var moveTime = setInterval(function(){ //while direction is right (invoked by keypress), run following on interval
				if( x<1147) {
					eatFood() //constantly checking if food is nearby / eatable
					eatBigFood() // constantly checking the same for bigFood
					ctx.fillRect( x, y,5,5);  //constantly illustrating the snake
					ctx.fillStyle = "#FF0000"; //snake is colored red
	 				x +=1*modifier; //modifies speed as a function of modifier variable
	 				ctx.clearRect(x-2*(2+size),y,1,6); //initial attempt at clearing snakes trail. keeps up with modified
	 				testEvilBarrier() //constantly checking if snake is crossing evil barrier
	 				
	 				
					
				}
				else if (x=1147)
				{
					x=0; //if snake reaches end of the board, reset snake at other side of axis
					FoodHack() //clearing board and redrawing food. helps remove snake trail
				
				}
				if (moveDirection != "right") { //when moveDirection changes (caused by another arrow press) this stops running the above loop
					clearInterval(moveTime) //clears interval on movetime which stops moving the snake to the right.
				}
			}, framelength) // runs through the inner loop at the frequency of assigned wave length
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
				 	ctx.clearRect(x+2*(6+size),y,6,6);
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
					ctx.clearRect(x,y+2*(2+size),6,6)
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
	 				ctx.clearRect(x,y-2*(5+size),6,6);
	 				testEvilBarrier()
	 				
	 				
	 				
					
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

//below function starts snake in random direction after start button is pressed
function startButton () {
	var rando = Math.ceil(Math.random()*4)
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

// below function makes start button the only way to start game
function clickStartMandatory() {
	document.getElementById('btn').addEventListener("click", function() { //listens for click on start button
		clicked = 1; //sets global clicked to equal 1
		enableArrowKeys() //enables arrow keys
		generateEvilBarrier() //generates first evil barrier
		setInterval(increaseDifficulty, 5000) //above makes snake speed up every 5 seconds
		
	

	})
}

//once start button has clicked, this button coordinates pressing of arrow key with movement in that direction
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

//below to functions fit same description as generateBigFood and eatBigFood
 function generateFood () {
 	 q = Math.ceil(Math.random()*1130);
 	 r = Math.ceil(Math.random()*480);
 		ctx.fillStyle = "#ffffff";
		ctx.fillRect(q,r,5,5);
}
 function eatFood () {
 	if ((Math.abs(x-q) < 5) && (Math.abs(y-r) < 5)) {
 		ctx.clearRect(q,r,5,5);
 		score+=50;
 		document.getElementById('score').innerHTML = score 
 		generateFood()
 		size+=12;
 
 	}
}

//the below function clears the board and reprints the food. in essence this removes snakes trail
function FoodHack () {
	
	ctx.clearRect(0,0,1139,489)
	ctx.fillStyle = "#ffffff";
	ctx.fillRect(q,r,5,5)
	ctx.fillStyle = "#00FF00";
	ctx.fillRect(b,n,10,10)

	
}
function generateBigFood () {
	b = Math.ceil(Math.random()*1130) //randdom x coordinate for food
	n = Math.ceil(Math.random()*480) //random y coordinte for food
	ctx.fillStyle = "#00FF00";
	ctx.fillRect(b,n,10,10);   //displays in food on screen
}

function eatBigFood () {
	if((Math.abs(x-b) < 10) && (Math.abs(y-n) < 10) ) { //checks if snakes position is near enough to food to eat
		ctx.clearRect(b,n,10,10) //removes food
		score+=25; //adds points to score
		document.getElementById('score').innerHTML = score //write score to screen
		generateBigFood() //generates new food
		size+=6; //adds 6 pixels to snake size
	}
}
function generateEvilBarrier() {
 	if (clicked == 1) {
		xONE = Math.ceil(Math.random()*1130);
		yONE = Math.ceil(Math.random()*480);
		xTWO = Math.ceil(Math.random()*1130);
		yTWO = Math.ceil(Math.random()*480);
		//everytime this function runs, new coordinates for evilbarrier are assigned
	
	setInterval(displayBarrier, 10) //displays barrier evevery .01 seconds. needs to run more frequently
	//than foodhack because foodhack clears entire board and reprints the food.
	setTimeout(clearInterval(displayBarrier), 5000)
	setTimeout(FoodHack,5050)
	//even tho displayBarrier has stopped running every 10ms, FoodHack is run to clear the last display which exists until cleared
	setTimeout(makeNull, 5000)
	//5 seconds after generate evilbarrier is invoked, the barrier's coordinate values are made to be
	//huge so that the user cannot cross the boundaries. i.e the boundaries do not exist on game board
	}
}



//function to make the barrier coordinates null. see generateEvilBarrier comments for more insight
function makeNull () {
	xONE = 2000;
	yONE = 1000;
	xTWO = 2000;
	yTWO = 1000;
}

//the below function checks if the snake has crossed the barrier by comparing location of snake and barrier
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
// the above listens for up/down left/right arrow presses in succession. listening for if a u turn has been made
// keeps an array of the last two keypresses

//the below function gives an alert if the array tells that the last two keypresses caused a uturn
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
setInterval(generateEvilBarrier, 10000) // generates new evil barrier every 10 seconds
setInterval(disallowUTurns, 100) // checks if u turn has been made every .1 seconds

// some problems. sometimes barriers seem to ghost display. think has to do with when FoodHack runs


