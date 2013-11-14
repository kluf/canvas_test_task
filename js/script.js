window.onload = function(){

	(function(){
		var canv = document.getElementById("canv");
		if(!canv.getContext){
			alert("Canvast doesn't support here");
		}
		var cont = canv.getContext("2d");
		canv.addEventListener("mousedown", function(){
			canv.addEventListener("mousemove", function(event){
				canv.width = canv.width;
				var x = event.clientX;
				var y = event.clientY;
				cont.bezierCurveTo(10,100,x,y,240,100);
				cont.stroke();
			});
		});
	}());


}

