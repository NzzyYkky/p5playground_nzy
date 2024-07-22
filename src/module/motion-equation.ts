import p5 from 'p5';

// NOTE:スカラー = 一つの値
const sketch = (p: p5) => {
	let mover: Mover;
	let mover2: Mover;

	p.setup = () => {
		p.frameRate(60);
		p.createCanvas(innerWidth, innerHeight);
		p.colorMode(p.HSB);

		mover = new Mover(p, 1, 10, 0);
		mover2 = new Mover(p, 5, 1, 5);
	};

	p.draw = () => {
		p.background('#fff');

		let gravity = p.createVector(0, 0.1);
		mover.applyForce(gravity);
		mover.update();
		mover.render(p);
		mover.checkEdges(p);

		mover2.applyForce(gravity);
		mover2.update();
		mover2.render(p);
		mover2.checkEdges(p);

		if (p.mouseIsPressed) {
			let wind = p.createVector(0.1, 0);
			mover.applyForce(wind);
			mover2.applyForce(wind);
		}
	};
};

class Mover {
	location: p5.Vector;
	velocity: p5.Vector;
	accel: p5.Vector;
	mass: number;
	radius: number;

	constructor(p: p5, m: number, x: number, y: number) {
		this.location = p.createVector(x, y);
		this.velocity = p.createVector(0, 0);
		this.accel = p.createVector(0, 0);
		this.mass = m;
		this.radius = m * 10;
	}

	update() {
		// 速度 + 加速度
		this.velocity.add(this.accel);
		//  位置 + 速度
		this.location.add(this.velocity);
		this.accel.mult(0);
	}

	render(p: p5) {
		p.noStroke();
		p.fill(200, 100, 100, 1);
		p.ellipse(this.location.x, this.location.y, this.radius, this.radius);
	}

	// 運動方程式 F = ma
	// a = F / m
	applyForce(force: p5.Vector): void {
		let a = force.div(this.mass);
		this.accel.add(a);
	}

	checkEdges(p: p5) {
		if (this.location.x > p.width || this.location.x < 0) {
			this.velocity.x *= -1;
		}

		if (this.location.y > p.height || this.location.y < 0) {
			this.velocity.y *= -1;
		}
	}
}

export const MotionEquation = new p5(sketch);
