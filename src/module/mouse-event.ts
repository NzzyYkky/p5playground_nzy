import p5 from 'p5';

const sketch = (p: p5) => {
	p.setup = () => {
		// p.frameRate(10);
		p.createCanvas(innerWidth, innerHeight);
		p.colorMode(p.HSB);
	};

	p.draw = () => {
		// p.background('#fff');
	};

	p.mouseClicked = () => {
		p.fill(p.random(1, 255));
		p.ellipse(p.mouseX, p.mouseY, p.random(10, 500));
	};
};

export const MouseEvent = new p5(sketch);
