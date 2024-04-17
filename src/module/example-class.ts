import p5 from 'p5';

class Jitter {
	// プロパティ
	x: number;
	y: number;
	speed: number;
	diameter: number;
	p: p5;

	constructor(p: p5) {
		this.p = p;
		this.x = p.random(p.width);
		this.y = p.random(p.height);
		this.diameter = p.random(10, 30);
		this.speed = 1;
	}

	move() {
		this.x += this.p.random(-this.speed, this.speed);
		this.y += this.p.random(-this.speed, this.speed);
	}

	display() {
		this.p.ellipse(this.x, this.y, this.diameter);
	}
}

const sketch = (p: p5) => {
	let jitter: Jitter;
	let bugs: Jitter[] = [];

	p.setup = () => {
		// p.frameRate(10);
		p.createCanvas(innerWidth, innerHeight);
		p.colorMode(p.HSB);
		for (let i = 0; i < p.random(100, 1000); i++) {
			bugs.push(new Jitter(p));
		}
	};

	p.draw = () => {
		p.background('#fff');
		bugs.forEach((bug) => {
			bug.move();
			bug.display();
		});
	};
};

export const ExampleClass = new p5(sketch);