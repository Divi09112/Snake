var s;
var side = 20;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	s = new Snake();
	frameRate = 20;
}

function draw() {
	s.show();
}

function Snake() {
	this.x = 2;
	this.y = 2;
	this.side = side;
	this.speedx = 0;
	this.speedy = 0;

	this.show = function () {
		rect(this.x, this.y, side, side);
	}

}