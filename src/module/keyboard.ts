import p5 from 'p5';

const sketch = (p: p5) => {
	p.setup = () => {
		// p.frameRate(10);
		p.createCanvas(innerWidth, innerHeight);
		p.colorMode(p.HSB);
		p.textSize(50);
	};

	p.draw = () => {
		// p.background('#fff');
	};

	p.keyPressed = () => {
		p.background(p.keyCode, p.keyCode, p.keyCode);
		p.fill(p.keyCode * 2);
		p.text(p.key, innerWidth / 2, innerHeight / 2);
	};
};

export const Keyboard = new p5(sketch);
