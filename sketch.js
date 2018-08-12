var s;
var side = 20;
var gridSide = 22;
var playWidth;
var playHeight;

function setup() {
	createCanvas(windowWidth, windowHeight);
	s = new Snake();
	frameRate(5);
	playWidth = windowWidth - gridSide;
	playHeight = windowHeight - gridSide;
}

function draw() {
	background(51);
	s.update();
	s.show();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		s.turn(0, -1);
	} else if (keyCode === DOWN_ARROW){
		s.turn(0, 1);
	} else if (keyCode === RIGHT_ARROW){
		s.turn(1, 0);
	} else if (keyCode === LEFT_ARROW){
		s.turn(-1, 0);
	}
}

function Snake() {
	this.x = 2;
	this.y = 2;
	this.side = side;
	this.speedx = 1;
	this.speedy = 0;

	this.show = function () {
		rect(this.x, this.y, side, side);
	}

	this.update = function () {
		this.x = ((this.x + playWidth + (this.speedx * gridSide)) % playWidth);
		console.log(this.x);
		this.y = ((this.y + playHeight + (this.speedy * gridSide)) % playHeight);
	}

	this.turn = function(dirx, diry) {
		if (this.speedx !== -dirx) {
			this.speedx = dirx;
		}
		if (this.speedy !== -diry){
			this.speedy = diry;
		}
	}
}