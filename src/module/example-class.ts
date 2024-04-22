import p5 from 'p5';

interface Jitter {
	move(): void;
}

interface JitterShape {
	display(): void;
}

class Jitter implements Jitter {
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
}

class JitterEllipse extends Jitter implements JitterShape {
	display() {
		this.p.ellipse(this.x, this.y, this.diameter);
	}
}

class JitterRect extends Jitter implements JitterShape {
	display() {
		this.p.rect(this.x, this.y, this.diameter);
	}
}

const sketch = (p: p5) => {
	let shapes: (JitterEllipse | JitterRect)[] = [];

	p.setup = () => {
		// p.frameRate(10);
		p.createCanvas(innerWidth, innerHeight);
		p.colorMode(p.HSB);
		for (let i = 0; i < p.random(100, 1000); i++) {
			shapes.push(
				Math.random() < 0.5 ? new JitterEllipse(p) : new JitterRect(p)
			);
		}
	};

	p.draw = () => {
		p.background('#fff');
		shapes.forEach((shape) => {
			shape.move();
			shape.display();
		});
	};
};

export const ExampleClass = new p5(sketch);
