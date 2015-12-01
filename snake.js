var x = 575;
var y = 250;
var framelength = 20


var Canvas = document.getElementById("mycanvas");
var ctx = Canvas.getContext("2d")
ctx.fillStyle = "#FF0000";
ctx.fillRect(x,y,5,5)



function moveRight() {
	setTimeout(moveRight, framelength)

	if( x<1147) {
		ctx.fillRect( x, y,5,5); 
	 	x +=1;
	 	ctx.clearRect(x-2,y,1,5)
		console.log(x)
	
		clearRect(0,0,1139,489)
	}
	else if (x=1147)
	{
		x=0;

	}
	// moveRight()
}

function moveDown() {
	setTimeout(moveDown, framelength)

	if( y<489) {
		ctx.fillRect( x, y,5,7);
	 y +=1;
	 	ctx.clearRect(x,y-1,5,1); 
		
	
	clearRect(0,0,1139,489)
	}
	else if (y=489)
	{
		y=0;

	}
	
}

function moveLeft() {
setTimeout(moveLeft, framelength)

	if( x>1) {
		ctx.fillRect( x, y,5,5); 
	 	x -=1;
	 	ctx.clearRect(x+6,y,3,5)
	console.log(x)
	
	clearRect(0,0,1139,489)
	}
	else if (x=1)
	{
		x=1147;

	}
	// moveLeft()
}



function moveUp() {
	setTimeout(moveUp, framelength)

	if( y>-5) {
		ctx.clearRect(x,y+2,5,3)
		
	 	y -=1;
	 	ctx.fillRect( x, y,5,5); 
	
	
		clearRect(0,0,1139,489)
	}
	else if (y= -5)
	{

		y=489;

	}
	// moveUp()
}


function startButton () {
var rando = Math.ceil(Math.random()*4)
console.log(rando)
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

addEventListener("keydown", checkKeyPressed, false);

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