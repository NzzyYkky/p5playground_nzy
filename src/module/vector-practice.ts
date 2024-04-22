import p5 from 'p5';

// NOTE:スカラー = 一つの値
const sketch = (p: p5) => {
	let v1, v2, v3, v4, normal, normal2, mouse, origin: p5.Vector;
	p.setup = () => {
		// p.frameRate(10);
		p.createCanvas(innerWidth, innerHeight);
		p.colorMode(p.HSB);
		v1 = p.createVector(1, 2);
		v2 = p.createVector(3, 4);

		v2.sub(v1); // 引き算
		console.log(v2);

		v3 = v2;

		v3.mult(3); // 掛け算（スカラー倍）
		console.log(v3);

		v4 = v3;

		v4.div(2); // 割り算（スカラー）
		console.log(v4);

		normal = p.createVector(1, 2);
		normal.normalize(); // 正規化（単位ベクトル（長さが１））

		// 正規化 -> スカラー倍 -> 長さを取得
		normal2 = p.createVector(3, 0);
		normal2.normalize();
		normal2.mult(5);
		console.log(normal2.mag()); // magベクトルの長さを知りたい際に使用
	};

	p.draw = () => {
		p.background('#fff');
		mouse = p.createVector(p.mouseX, p.mouseY);
		origin = p.createVector(p.width / 2, p.height / 2ww);
		mouse.sub(origin);
		mouse.normalize();
		mouse.mult(100);
		p.translate(p.width / 2, p.height / 2);
		p.line(0, 0, mouse.x, mouse.y);
	};
};

export const VectorPractice = new p5(sketch);
