var s;
var side = 20;
var gridSide = 22;
var playWidth;
var playHeight;
var food;
var constraintx;
var constrainty;

function setup() {
	createCanvas(windowWidth, windowHeight);
	s = new Snake();
	frameRate(5);
	
	playWidth = windowWidth - gridSide;
	playHeight = windowHeight - gridSide;
	constraintx = Math.floor(playWidth / gridSide) * gridSide ;
	constrainty = Math.floor(playHeight / gridSide) * gridSide ;

	createFood();
}

function draw() {
	background(51);
	s.update();
	s.eat();
	s.show();

	fill(255,0,100);
	rect(food.x,food.y,side,side);
}

function createFood() {
	x = Math.floor(random(constraintx + 1) / gridSide) * gridSide;
	y = Math.floor(random(constrainty + 1) / gridSide) * gridSide;
	food = createVector(x + 2, y + 2);
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
	this.length = 1;
	this.tail = [createVector(this.x, this.y)];

	this.show = function () {
		fill(255);

		tmp = this.tail;
		tmp.push(createVector(this.x,this.y));

		for(i=0; i<this.length; i++) {
			rect(tmp[i].x, tmp[i].y, side, side);
		}

		rect(this.x, this.y, side, side);
	}

	this.update = function () {
		this.x = ((this.x + constraintx + (this.speedx * gridSide)) % constraintx);
		this.y = ((this.y + constrainty + (this.speedy * gridSide)) % constrainty);
	}

	this.turn = function(dirx, diry) {
		if (this.speedx !== -dirx) {
			this.speedx = dirx;
		}
		if (this.speedy !== -diry){
			this.speedy = diry;
		}
	}


	this.eat = function() {
		d = dist(this.x, this.y, food.x, food.y)
		if (d === 0){
			this.length++;
			createFood();
		} else {
			this.tail.shift();
		}
	}
}