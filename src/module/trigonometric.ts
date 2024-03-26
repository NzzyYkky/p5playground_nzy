import p5 from 'p5';

const sketch = (p: p5) => {
	let vecLocation: p5.Vector;
	let hue;
	let vecVelocity;

	p.setup = () => {
		// p.frameRate(10);
		p.createCanvas(innerWidth, innerHeight);
		p.colorMode(p.HSB);
		// p.angleMode(p.DEGREES);
		vecLocation = p.createVector(p.width / 2, 0);
	};

	p.draw = () => {
		p.background('#fff');
		hue = p.ceil(p.abs(p.sin(p.radians(p.frameCount)) * 360));

		// vecVelocity = p.createVector(3, p.sin(p.frameCount) * 5);
		vecVelocity = p.createVector(
			p.cos(p.radians(p.frameCount)) * 3,
			p.sin(p.radians(p.frameCount)) * 3
		);
		vecLocation.add(vecVelocity);
		p.noStroke();
		p.fill(hue, 100, 100, 1);
		p.ellipse(vecLocation.x, vecLocation.y * p.PI, 80);
	};
};

export const Trigonometoric = new p5(sketch);
