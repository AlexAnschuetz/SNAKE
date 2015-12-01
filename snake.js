var x = 575;
var y = 250;
var framelength = 500


var Canvas = document.getElementById("mycanvas");
var ctx = Canvas.getContext("2d")
ctx.fillStyle = "#FF0000";




function moveRight() {
setTimeout(moveRight, framelength)

	if( x<1147) {
		ctx.fillRect( x, y,5,5); 
	 x +=1;
	console.log(x)
	
	clearRect(0,0,1139,489)
	}
	else if (x=1147)
	{
		x=0;

	}
	moveRight()
}


moveRight()

//gives error when run but if you refresh error goes away
// why isnt global x changes in function displayed in ctx.fillRect ??