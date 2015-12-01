var x = 575;
var y = 250;
var framelength = 2


var Canvas = document.getElementById("mycanvas");
var ctx = Canvas.getContext("2d")
ctx.fillStyle = "#FF0000";
ctx.fillRect(x,y,5,5)



function moveRight() {
	setTimeout(moveRight, framelength)

	if( x<1147) {
		ctx.fillRect( x, y,5,5); 
	 	x +=1;
	 	ctx.clearRect(x-1,y,1,5)
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
		ctx.fillRect( x, y,5,5);
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
	 	ctx.clearRect(x+5,y,3,5)
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

moveRight()









//gives error when run but if you refresh error goes away
// why isnt global x changes in function displayed in ctx.fillRect ??