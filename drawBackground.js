function drawStuff() {
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.clearRect(0, 0, c.width, c.height);
	lines = {};
	lines.v = 0;
	lines.h = 0;
	if (newGraphx === false) {
	ctx.strokeStyle = "#779052";
	} else  {
	ctx.strokeStyle = "#abce60";
	}
	if (newGraphx === false) {
document.getElementById('game').style.backgroundColor = '#7f9956';
} else {
document.getElementById('game').style.backgroundColor = '#b6db66';
}
	for (lines.h = 0; lines.h <= c.height / 30 + 2; lines.h += 1) {
		ctx.beginPath();
		ctx.moveTo(0, lines.h * 30 + offset.y);
		ctx.lineTo(c.width, lines.h * 30 + offset.y);
		ctx.stroke();
	}
	for (lines.v = 0; lines.v <= c.width / 30 + 2; lines.v += 1) {
		ctx.beginPath();
		ctx.moveTo(lines.v * 30 + offset.x, 0);
		ctx.lineTo(lines.v * 30 + offset.x, c.height);
		ctx.stroke();
	}
	if (editmode === true) {
		ctx.save();
		
		ctx.strokeStyle = "#FF0000";
		ctx.beginPath;
		ctx.moveTo(tankpointx, tankpointy);
		ctx.lineTo(c.width, tankpointy);
		ctx.stroke();
		ctx.restore();
	}
}

function resize() {
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	drawStuff();
}
resize();

window.onresize = resize;
