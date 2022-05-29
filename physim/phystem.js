'use strict';
// ２次元ベクトル
class Vector {
	constructor(xx, yy) {
		this.x  =  xx;
		this.y  =  yy;
	}
    // C++などの言語では+-*/などの「演算子」もベクトルや複素数向けに再定義できるのだが、
    // javascriptにはそこまでの機能はないので、関数で書く。
	copyFrom(V) {this.x = V.x; this.y = V.y; }
	// v.copyFrom(v2)で、vがv2のコピーとなる。
	// 【ベクトルなどの代入に関する注意】
	// javascriptではプリミティブ型（整数や実数など）以外の変数（オブジェクト）に対しては、
	//	 =  による代入はコピーではなく、一つの実体を共有することになる。
	// たとえば（Vectorはプリミティブじゃないから）、v = v2; のようにすると、
	// vとv2が「同一物の別名」のようになってしまい、
	// 代入後にどちらかを変化させるともう一方も変化してしまう（実体が一つしかないと思えば当然だ）。
	// v = copyFrom(v2); ならそうならない。
	makeCopy() { return new Vector(this.x, this.y); }
	// v2 = v.makeCopy()で、vがv2のコピーとなる。
	setXY(xx, yy) { this.x = xx; this.y = yy; }
	// v.add(v1)で、v = v+v1
	add(V) {this.x +=  V.x; this.y +=  V.y; }
	// v.sub(v1)で、v = v-v1
	sub(V) {this.x -=  V.x; this.y -=  V.y; }
	// w = v.sum(v1)で、w = v+v1
	sum(V) { return new Vector(this.x + V.x, this.y + V.y); }
	// w = v.diff(v1)で、w = v-v1
	diff(V) { return new Vector(this.x - V.x, this.y - V.y); }
	// v2 = v.mul(a)で、定数倍 v2 = v*a
	mul(a) { this.x *=  a; this.y *= a; }
	// v2 = v.div(a)で、定数で割り、v2 = v/a
	div(a) { this.x /=  a; this.y /= a; }
	// prodはスカラー倍する。v.prod(a)で、v = v*a;
	prod(a) { return new Vector(this.x * a, this.y * a); }
	// irpodは内積。数を返す。
	iprod(V) { return this.x * V.x + this.y * V.y; }
	// eprotは外積。二次元なのでこれも数を返す。
	eprod(V) { return this.x * V.y - this.y * V.x; }
	// v2 = v.quat(a)で、定数で割ったベクトルを代入。
	quot(a) { return new Vector(this.x / a, this.y / a); }
	// v.addVt(v2,t)で、v = v+v2*t
	addVt(V, t) { this.x +=  V.x * t; this.y +=  V.y * t; }
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	lengthSquare() {
		return (this.x * this.x + this.y * this.y);
	}
	rot90() {
		var newx = -this.y;
		this.y = this.x;
		this.x = newx;
	}
	rot270() {
		var newx = this.y;
		this.y = -this.x;
		this.x = newx;
	}
	normalize() {
		var l=this.length();
        if(l != 0) 
		    this.div(l);
	}
};
Vector.zero = new Vector(0, 0);

class Force {
    constructor(f,p,c) {
        this.f=f.makeCopy();
        this.p=(( p === undefined ) ? new Vector(0,0) : p.makeCopy());
        this.c= ((c === undefined)? "rgba(238,69,74,0.5)":c);
    }
}

// 矢印のコンストラクタ。色と長さの初期値をセットするだけ。
class ArrowMark {
	constructor(cl) {
		this.color = (cl === undefined) ? "rgba(0,0,255,0.5)" : cl;
		this.len = 1;
		this.pos = new Vector(0, 0); // .posは根元の位置。
		this.v = new Vector(0, 1); // .vは矢印の向きのベクトル
		this.theta = 0; // θ = 0はｘ軸向き。
	}
    // ArrowMarkの使い方
    // var y = new ArrowMark("rgb(255,0,0)");のようにして色決め。
    // y.setXY(x, y);で根元を指定。
    // y.setL(l);で長さ指定。
    // y.setTheta(angle);で向きを指定。angleはx軸との角度。
    // y.setV(v); または y.setVXY(vx, vy);で向きと長さをベクトル指定もできる。
    // y.draw();で描く。
	setXY(xx, yy) {this.pos.x = xx; this.pos.y = yy; }
	setL(l) { this.len = l; this.v.x = l * Math.cos(this.theta); this.v.y = l * Math.sin(this.theta); }
	setTheta(th) {this.theta = th; this.v.x = this.len * Math.cos(th); this.v.y = this.len * Math.sin(th); }
	setP(V) {
		this.setXY(V.x, V.y);
	}
	setV(V) {
		this.setVXY(V.x, V.y);
	}
	setVXY(vx, vy) {
		this.v.x = vx;
        this.v.y = vy;
		this.len = Math.sqrt(vy * vy + vx * vx);
		this.theta = Math.atan2(-vx, vy);
	}
	setColor(c) { this.color = c; }
	draw(ct) {
		ct.fillStyle = this.color;
		ct.save();
		
		ct.translate(this.pos.x, this.pos.y);
		ct.rotate(this.theta);
		ct.beginPath();
		var ll = 0.05 * this.len;
		var lll = 0.8 * this.len;
		ct.moveTo(ll, 0);
		ct.lineTo(-ll, 0);
		ct.lineTo(-ll, lll);
		ct.lineTo(-2 * ll, lll);
		ct.lineTo(0, this.len);
		ct.lineTo(2 * ll, lll);
		ct.lineTo(ll, lll);
		ct.closePath();
		ct.fill();
		ct.restore();
	}
}
class ArrowMarkF extends ArrowMark {
    constructor(cl) {
        super(cl);
    }
    draw(ct) {
	    ct.fillStyle = this.color;
		ct.save();
		ct.translate(this.pos.x, this.pos.y);
		ct.rotate(this.theta);
		ct.beginPath();
		var ll = 0.025 * this.len;
		var lll = 0.8 * this.len;
		ct.arc(0,0,2*ll,Math.PI/3,2*Math.PI/3,true);
		ct.lineTo(-ll, 0);
		ct.lineTo(-ll, lll);
		ct.lineTo(-2 * ll, lll);
		ct.lineTo(0, this.len);
		ct.lineTo(2 * ll, lll);
		ct.lineTo(ll, lll);
		ct.closePath();
		ct.fill();
		ct.restore();
    }
}

// RescaleCanvas
// 座標系を設定して、その座標系に図を描くためのキャンバス
// 呼び出し方は　new RescaleCanvas(canvas_string,ww,hh,adjustW,left,bottom);
// canvas_stringはキャンバス要素のid
// ww,hhは縦横の幅（画面上の幅とは一致しない）
// 画面上の幅は、横幅*adjustWになる。
// 画面の左隅のx座標はleft、
// 下隅のy座標はbottomとなる。
// x,y座標は右、上が正方向となるので注意。
class RescaleCanvas{
	constructor(canvas_string, ww, hh, adjustW, left, bottom) {
		this.canvas = document.getElementById(canvas_string);
		this.ctx = this.canvas.getContext("2d");

		// 以下、o_のついた量は「初期値」として使用。
		this.o_w = (ww === undefined) ? 20 : ww;
		this.o_h = (hh === undefined) ? 20 : hh;
		this.o_leftx = (left === undefined) ? -0.5 * this.o_w : left;
		this.o_bottomy = (bottom === undefined) ? -0.5 * this.o_h : bottom;
		this.w = this.o_w;
		this.h = this.o_h;
		this.leftx = this.o_leftx;
		this.rightx = this.o_leftx + this.o_w;
		this.bottomy = this.o_bottomy;
		this.topy = this.o_bottomy + this.o_h;

		if (adjustW > 0) {
			// 画面サイズにあわせてcanvasサイズを変える。
			// 画面横幅のadjustW倍になる。
			// この機能を使わない場合はadjustWに非正の値をセット。
			var wx = document.body.clientWidth * adjustW;
			this.canvas.width = wx;
			this.canvas.height = wx * this.h / this.w;
		}
		this.setScale();
	}
	// html5のcanvasの都合で、x軸は右向き、y軸は下向きであるが、
	// setScale()の中で普通のx,y軸になるようにしている。
	// 以下の描画は全てこの座標系で行います。

	// 最下点を設定
	setBottom(b) {
		this.o_bottomy=b;
		this.gobackOriginalSize();
	}
	// 最左点を設定
	setLeft(l) {
		this.o_leftx=l;
		this.gobackOriginalSize();
	}
	// ズームイン／アウトした後に元の状態に戻す。
	gobackOriginalSize() {
		this.w = this.o_w;
		this.h = this.o_h;
		this.leftx = this.o_leftx;
		this.rightx = this.o_leftx + this.o_w;
		this.bottomy = this.o_bottomy;
		this.topy = this.o_bottomy + this.o_h;
		this.setScale();
	}
	changeScale(k) {
		this.w *= k;
		this.h *= k;
		this.leftx =  (this.leftx + this.rightx +  k * (this.leftx - this.rightx)) / 2;
		this.rightx = this.leftx + this.w;
		this.bottomy = (this.bottomy + this.topy  +  k * (this.bottomy - this.topy)) / 2;
		this.topy = this.bottomy + this.h;
		this.setScale();
	}
	setScale(){
		var sc = this.canvas.width / this.w;
		var scy = this.canvas.height / this.h;
		this.ctx.setTransform(sc, 0, 0,  -scy, 0, 0);
		this.ctx.translate(-this.leftx, -this.topy);
		this.stdStrokeWidth = ((this.w > this.h) ? this.w : this.h) / 300;
		this.ctx.lineWidth = this.stdStrokeWidth;
	}
	saveScale(){
		this.ctx.save();
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		this.ctx.stdStrokeWidth = 1;
	}
	restoreScale(){
		this.ctx.restore();
		this.ctx.stdStrokeWidth = ((this.w > this.h) ? this.w : this.h) / 300;
	}
	// 以下二つは、マウスカーソルからキャンバスの座標系への変換。
	fromMxtoCx(mx) {
		return mx / this.canvas.width * this.w + this.leftx;
	}
	fromMytoCy(my) {
		return -my / this.canvas.height * this.h + this.topy;
	}
	clearALL(){
		this.ctx.fillStyle = "rgb(255,255,255)";
		this.ctx.fillRect(this.leftx, this.bottomy, this.w, this.h);
	}
	// (x,y)に半径rの点を打つ。
	writePoint(x, y, r, col) {
		var ct = this.ctx;
		ct.strokeStyle = col;
		ct.fillStyle = col;
		ct.beginPath();
		ct.arc(x, y, r, 0, 2 * Math.PI, false);
		ct.fill();
	}
	// (x1,y1)から(x2,y2)へ線分を引く。
	writeLine(x1, y1, x2, y2, col, w) {
		if (w === undefined) { w = 1; }
		var ct = this.ctx;
		ct.lineWidth = this.ctx.stdStrokeWidth * w;
		ct.strokeStyle = col;
		ct.beginPath();
		ct.moveTo(x1, y1);
		ct.lineTo(x2, y2);
		ct.stroke();
		ct.lineWidth = this.ctx.stdStrokeWidth;
	}
	writeCircle(x1, y1, r, col, w) {
		if (w === undefined) { w = 1; }
		var ct = this.ctx;
		ct.lineWidth = this.ctx.stdStrokeWidth * w;
		ct.strokeStyle = col;
		ct.beginPath();
		ct.arc(x1, y1, r, 0, 2 * Math.PI, true);
		ct.stroke();
		ct.lineWidth = this.ctx.stdStrokeWidth;
	}
	fillCircle(x1, y1, r, col) {
		var ct = this.ctx;
		ct.fillStyle = col;
		ct.beginPath();
		ct.arc(x1, y1, r, 0, 2 * Math.PI, true);
		ct.fill();
	}
	writeRect(x1, y1, x2, y2, col, w) {
		if (w === undefined) { w = 1; }
		var ct = this.ctx;
		ct.lineWidth = this.ctx.stdStrokeWidth * w;
		ct.strokeStyle = col;
		ct.beginPath();
		ct.moveTo(x1, y1);
		ct.lineTo(x1, y2);
		ct.lineTo(x2, y2);
		ct.lineTo(x2, y1);
		ct.closePath();
		ct.stroke();
		ct.lineWidth = this.ctx.stdStrokeWidth;
	}
	fillRect(x1, y1, x2, y2, col, w) {
		if (w === undefined) { w = 1; }
		var ct = this.ctx;
		ct.lineWidth = this.ctx.stdStrokeWidth * w;
		ct.fillStyle = col;
		ct.beginPath();
		ct.moveTo(x1, y1);
		ct.lineTo(x1, y2);
		ct.lineTo(x2, y2);
		ct.lineTo(x2, y1);
		ct.closePath();
		ct.fill();
		ct.lineWidth = this.ctx.stdStrokeWidth;
	}
	writeBackGround(){
		this.writeCoordinate();
	}
	writeCoordinate(){
		var ct = this.ctx;
		ct.strokeStyle = "rgb(0,0,0)";
		ct.fillStyle = "rgb(0,0,0)";
		ct.beginPath();
		ct.moveTo(this.leftx, 0);
		ct.lineTo(this.rightx, 0);
		ct.moveTo(0, this.topy);
		ct.lineTo(0, this.bottomy);
		ct.stroke();
		ct.beginPath();
		ct.moveTo(0, this.topy);
		ct.lineTo(this.w * 0.03, this.topy - this.w * 0.1);
		ct.lineTo(-this.w * 0.03, this.topy - this.w * 0.1);
		ct.closePath();
		ct.fill();
		ct.beginPath();
		ct.moveTo(this.rightx, 0);
		ct.lineTo(this.rightx - this.w * 0.1, this.w * 0.03);
		ct.lineTo(this.rightx - this.w * 0.1,  -this.w * 0.03);
		ct.closePath();
		ct.fill();
		var minx = Math.ceil(this.leftx + 0.1);
		var maxx = Math.floor(this.rightx - 0.1);
		var miny = Math.ceil(this.bottomy + 0.1);
		var maxy = Math.floor(this.topy - 0.1);
		var i;
		ct.strokeStyle = "rgba(0,0,0,0.3)";
		for (i = minx; i <= maxx; i++) {
			ct.beginPath();
			ct.moveTo(i, this.bottomy);
			ct.lineTo(i, this.topy);
			ct.stroke();
		}
		for (i = miny; i <= maxy; i++) {
			ct.beginPath();
			ct.moveTo(this.leftx, i);
			ct.lineTo(this.rightx, i);
			ct.stroke();
		}
	}
	writeCoordinateX(){
		var ct = this.ctx;
		ct.strokeStyle = "rgb(0,0,0)";
		ct.fillStyle = "rgb(0,0,0)";
		ct.beginPath();
		ct.moveTo(this.leftx, 0);
		ct.lineTo(this.rightx, 0);
		ct.moveTo(0, this.topy);
		ct.lineTo(0, this.bottomy);
		ct.stroke();
		ct.beginPath();
		ct.moveTo(this.rightx, 0);
		ct.lineTo(this.rightx - this.w * 0.1, this.w * 0.03);
		ct.lineTo(this.rightx - this.w * 0.1, -this.w * 0.03);
		ct.closePath();
		ct.fill();
		var minx = Math.ceil(this.leftx + 0.1);
		var maxx = Math.floor(this.rightx - 0.1);
		var i;
		ct.strokeStyle = "rgba(0,0,0,0.3)";
		for (i = minx; i <= maxx; i++) {
			ct.beginPath();
			ct.moveTo(i, this.bottomy);
			ct.lineTo(i, this.topy);
			ct.stroke();
		}
	}
	writeCoordinateY(){
		var ct = this.ctx;
		ct.strokeStyle = "rgb(0,0,0)";
		ct.fillStyle = "rgb(0,0,0)";
		ct.beginPath();
		ct.moveTo(this.leftx, 0);
		ct.lineTo(this.rightx, 0);
		ct.moveTo(0, this.topy);
		ct.lineTo(0, this.bottomy);
		ct.stroke();
		ct.moveTo(0, this.topy);
		ct.lineTo(this.w * 0.03, this.topy - this.w * 0.1);
		ct.lineTo(-this.w * 0.03, this.topy - this.w * 0.1);
		ct.closePath();
		ct.fill();
		var miny = Math.ceil(this.bottomy + 0.1);
		var maxy = Math.floor(this.topy - 0.1);
		var i;
		ct.strokeStyle = "rgba(0,0,0,0.3)";
		for (i = miny; i <= maxy; i++) {
			ct.beginPath();
			ct.moveTo(this.leftx, i);
			ct.lineTo(this.rightx, i);
			ct.stroke();
		}
	}
};


// 物理オブジェクト
// 持っている属性は以下の通り
// pos：現在位置
// v：速度
// npos:時間がΔt経過した後の位置
// r：半径（ここで考えている物理オブジェクトの多くは(回転を考えないという意味で)質点だが、すべて円形で表現するので、半径を持つ場合が多い）
// col：色（描画される時の色）
// ps：属している「系」（Phystem）
class PhysObject {
	constructor(ps, x, y, c, rr) {
		this.pos = new Vector(
			(x === undefined) ? 0 : x,
			(y === undefined) ? 0 : y
		);
		// 色をセット
		this.col = (c === undefined) ? "rgba(0,0,0,0.4)" : c;
		this.npos = this.pos.makeCopy();
		// npは、「次の位置」（シンプレクティック法で微分方程式を解いているのでこれが必要）
		this.r = (rr === undefined) ? 0.5 :rr;
		this.ps = ps; // 自分の属している系をセットしておく。
		// この「系」は描画用のキャンバスも含んでいる。
		this.enableDragFlg=false;
        this.v=new Vector(0,0);
		this.draggingPointerID=null; // ドラッグされない物体については、これはずっとnullのまま。
	}
	// 描画：●を描く。
	draw(){
		this.ps.fillCircle(this.pos.x, this.pos.y, this.r, this.col);
	}
	enableTrace(c,i) {
		this.trace=new Trace(c,i);
	}
	traceON() {
		this.trace.on();
	}
	traceOFF() {
		this.trace.off();
	}
	traceToggle() {
		this.trace.toggle();
	}
	traceClear() {
		this.trace.clear();
	}
	drawAndTrace(){
		this.draw();
		if( this.trace !== undefined ) {
			this.trace.draw(this.ps.ctx,this.pos);
		}
	}
	// 相互作用力。「to」へと及ぼす力を返す。
	// 現在はスタブなので0ベクトルを返す。
	interactionForce(to) {
		return new Force(new Vector(0, 0));
	}
	// 変位べクトル。現在位置ではなく、△t後の位置で計算する。
	displacementFrom(from) {
		return this.npos.diff(from.npos);
	}
    setColor(c) { this.col=c;}
    
	// 以下はドラッグ＆ドロップのためのコード

	// ドラッグ可能にする
	enableDrag() {
		if( this.enableDragFlg == false ) {
            // ↓ドラッグ可能なオブジェクトが持っているべき変数の初期化
            this.touchPoint=new Vector(0,0);
			this.tamattaFlg=false; // マウス軌跡がdcountMax個たまると真になる。
			this.dcount=0;
			this.dcNow=0;
			// ↑この二つは、ためているマウス軌跡のためのカウンタ。
			this.dcMax=15; // マウス軌跡を何個貯めるか。
			// 3×奇数でなくてはいけない。
			this.dcMax3=5; // 上記の数÷3
			this.dcCenter=7; // 0~dcMax-1の間の真ん中の数字
			this.ps.draggableObjs.push(this);
			this.enableDragFlg = true;
		}
	}
	// x,yが物体内部かどうかを判定する。ここにあるのは体を円だと仮定している。
	inTouch(x,y) {
		var p=new Vector(x,y);
    	p.sub(this.pos);
		if( p.lengthSquare() < this.r*this.r ) {
			this.touchPoint=p;
			return(true);
		} else {
			return(false);
		}
	}
	startDrag(j,x,y) {
		this.draggingPointerID=j;
		this.touchP=[];
		this.tamattaFlg=false;
		this.dcNow=0;
		this.dcount=0;
		this.tmpPos=new Vector(x,y);
	}
	pushDragP() {
		this.dcount++;
		this.dcNow++; // 最初にカウントアップしているので、this.touchP[0]は、一周するまでは値が入らない。
		if( this.dcNow >= this.dcMax ) {
			this.dcNow=0;
			this.tamattaFlg=true;
		}
		var pp=this.tmpPos.diff(this.touchPoint);
		pp=this.adjustPoint(pp);
		this.touchP[this.dcNow]=pp;
	}
	// ドラッグされた「現在位置」を設定する。
	getDragP(deltaT) {
		var i;
		var P=[];
		// ↑この配列Pに、ここまでのドラッグポイントを読み込む。
		for( i=0 ; i< this.dcMax ; i++ ) {
			var k=this.dcNow-i;
			if( k<0 ) { k+=this.dcMax; }
			P[i]=this.touchP[k];
		}
		var partF=P[0].makeCopy(); // partFは、最初の３分の１の和。
		for( i=1 ; i< this.dcMax3 ; i++ ) {
			partF.add(P[i]);
		}
		var partM=P[this.dcMax3].makeCopy(); // partMは、中間３分の１の和
		for( i=this.dcMax3+1 ; i< 2*this.dcMax3 ; i++ ) {
			partM.add(P[i]);
		}
		var partP=P[2*this.dcMax3].makeCopy(); // partPは、最後の３分の１の和
		for( i=2*this.dcMax3+1 ; i< this.dcMax ; i++ ) {
			partP.add(P[i]);
		}
		this.npos=P[this.dcCenter]; // 中間点での値
		//this.p=partM.sum(partF).sum(partP).quot(this.dcMax);
		this.a=(partF.sum(partP).diff(partM.prod(2))).quot(this.dcMax3*this.dcMax3*deltaT);
		// this.aは加速度。
		for(i=this.dcMax3; i< this.dcCenter; i++ ) {
			partF.add(P[i]);
		}
		for(i=this.dcCenter+1; i< 2*this.dcMax3 ; i++ ) {
			partP.add(P[i]);
		}
		this.v=partF.diff(partP).quot(this.dcMax*(this.dcMax)*deltaT*0.5);
	}
	adjustPoint(pp) {
		// スタブ。枠からはみ出すようなドラッグを許さない。
		if( pp.x > this.ps.rightx -this.r ) { pp.x =this.ps.rightx -this.r; }
		if( pp.x < this.ps.leftx  +this.r ) { pp.x =this.ps.leftx  +this.r; }
		if( pp.y > this.ps.topy   +this.r ) { pp.y =this.ps.topy   -this.r; }
		if( pp.y < this.ps.bottomy-this.r ) { pp.y =this.ps.bottomy+this.r; }
		return new Vector(pp.x,pp.y);
	}
	resetDrag() {
		this.draggingPointerID=null;
	}
};
// 非力学オブジェクト
// 運動しないもしくは運動方程式によらない運動をするオブジェクト
class NonDynamicalObject extends PhysObject {
	constructor(ps, x, y, c, r) {
		super(ps, x, y, c, r);
		if (ps !== undefined) {
			ps.ndObjs.push(this);
			// 「系」に、自分自身を登録する。
		}
	}
}

// DynamicalObject:「動く物体」のクラス
// 親クラスはPhysObject（物理的物体？）
// mass（質量）と、fList（働いている力のリスト）という属性が追加される。
// yav,yafというオブジェクトを持っているが、外部から使う必要は多分ない。
// 初期位置、初速度、質量、色、と「どの系に属すか」が呼び出しパラメータ（初速度以降は省略可）
class DynamicalObject extends PhysObject {
	constructor(ps, x, y, vx, vy, m, c, r) {
		super(ps, x, y, c, r);
		if (ps !== undefined) {
			// 自分自身を系の「動くものリスト」に登録する。
			ps.dyObjs.push(this);
		}
		this.v = new Vector(
			(vx === undefined) ? 0 : vx,
			(vy === undefined) ? 0 : vy
		);
		this.mass = (m === undefined) ? 1 : m;
		this.makeV(); // 動くものは速度や力を表示するので、その為の矢印を先に作っておく。
		this.fList = []; // 力のリスト。
	}
	addF(f) {
		this.fList.push(f);
	}
	fClear() {
		delete this.fList;
		this.fList = [];
	}
	makeV (c) {
		this.yav = new ArrowMark((c === undefined) ? "rgba(0,0,255,0.3)" : c);
		this.yaf = new ArrowMarkF((c === undefined) ? "rgba(0,0,255,0.3)" : c);
	}
	drawV() {
		this.yav.setP(this.pos);
		this.yav.setV(this.v);
		this.yav.setColor("rgba(0,0,255,0.5)");
		this.yav.draw(this.ps.ctx);
	}
	drawF() {
		var i;
		for (i = 0; i < this.fList.length; i++) {
		    this.yaf.setP(this.pos.sum(this.fList[i].p));
		    this.yaf.setV(this.fList[i].f);
		    this.yaf.setColor(this.fList[i].c);
            
		    this.yaf.draw(this.ps.ctx);
		}
	}
}




// Phystem（Physical Systemの略）
// 座標系を設定して、その座標系に図を描くためのキャンバス
// 呼び出した方は　new Phystem(canvas_string, ww, hh, adjustW, left, bottom);
// canvas_stringはキャンバス要素のid
// ww, hhは縦横の幅（画面上の幅とは一致しない）
// 画面上の幅は、横幅*adjustWになる。
// 画面の左隅のx座標はleft、
// 下隅のy座標はbottomとなる。
// x, y座標は右、上が正方向となるので注意。


var now_ps; // staticなpsの代わり。これはプログラムにPhystemが一つしかないことを仮定してしまっている。
//グローバル変数を使うのはあまりいい方法じゃないけど、static変数的なものをjavascriptで考えるのはめんどくさそうなので。

// Phystem
// 物理的「系」とその表示を司るオブジェクト
class Phystem extends RescaleCanvas{
	constructor(canvas_string, ww, hh, adjustW, left, bottom) {
		super(canvas_string, ww, hh, adjustW, left, bottom);
		now_ps=this;
		this.clearLists();
		this.stepT = 0.005; // 計算内でのアニメーション書き換え時間のステップ
		this.stepTime = 5; // 計算ステップ時間。ms。
		this.drawStep = 10; // これだけ回数計算するたびにアニメーションを書き換える。デフォルトでは50msごとに書き換えるから、毎秒20コマ。
		this.edgew = 1; // 画面の端っこの幅。
		this.drawVFlg = false; // 速度を描く。
		this.drawFFlg = false; // 力を描く。
		this.writeXY = false; // x軸、y軸を描くか？
		this.writeX = false;  // x軸だけ描くか？
		this.writeY = false;  // y軸だけ描くか？
		this.count=0;

		// 以下はタッチデバイス用のセッテイング（MS向けとそのほか向け）
	    if( navigator.msPointerEnabled ) {
		    this.canvas.addEventListener(
			    "MSPointerDown",
			    function(event) {
				    event.preventManupulation();
				    now_ps.ptdownsub(event.pointerID,
									 now_ps.fromMxtoCX(event.pageX),
									 now_ps.fromMxtoCx(event.pageY));
			    },false);
		    this.canvas.addEventListener(
		        "MSPointerMove",
		        function(event) {
			        event.preventManupulation();
			        ptmovesub(event.pointerID,
					          now_ps.fomMxtoCx(event.pageX),
					          now_ps.fromMytoCy(event.pageY));
		        },false);
		    this.canvas.addEventListener(
			    "MSPointerUp",
			    function(event) {
				    event.preventManupulation();
    			    ptendsub(event.pointerID);
			    },false);
	    } else {
            this.canvas.addEventListener(
		        "touchstart",
		        function(event) {
			        event.preventDefault();
			        var i;
			        for(i=0 ; i< event.touches.length; i++ ) {
	    	            var e = event.touches[i];
	    	            var rect = event.target.getBoundingClientRect();
    		            now_ps.ptdownsub(e.identifier,
									     now_ps.fromMxtoCx(e.clientX - rect.left),
									     now_ps.fromMytoCy(e.clientY - rect.top ));
			        }
		        },false);
            this.canvas.addEventListener(
		        "touchmove",
		        function(event) {
			        event.preventDefault();
			        var i;
			        for(i=0 ; i< event.touches.length; i++ ) {
	    	            var e = event.touches[i];
   			            var rect = event.target.getBoundingClientRect();
    	                now_ps.ptmovesub(e.identifier,
										 now_ps.fromMxtoCx(e.clientX - rect.left),
										 now_ps.fromMytoCy(e.clientY - rect.top ));
			        }
		        },false);
            this.canvas.addEventListener(
			    "touchend",
			    function(event) {
				    event.preventDefault();
				    var j;
				    for(j=0; j<event.changedTouches.length; j++ ) {
    				    var e=event.changedTouches[j];
    				    now_ps.ptendsub(e.identifier);
				    }
			    },false);
	    }
		this.canvas.onmousedown=function(e) {
			var mouseX = e.clientX - e.target.getBoundingClientRect().left;
		    var mouseY = e.clientY - e.target.getBoundingClientRect().top;
			now_ps.ptdownsub(0,now_ps.fromMxtoCx(mouseX),now_ps.fromMytoCy(mouseY));
		};
        this.canvas.onmousemove = function(e) {
		    e.preventDefault();
		    var mouseX = e.clientX - e.target.getBoundingClientRect().left;
		    var mouseY = e.clientY - e.target.getBoundingClientRect().top;
		    now_ps.ptmovesub(0,now_ps.fromMxtoCx(mouseX),now_ps.fromMytoCy(mouseY));
	    };

        this.canvas.onmouseup = function(e) {
		    now_ps.ptendsub(0); // マウスの場合、ポインタは0しかない。
	    };
	    this.canvas.onmouseout = function(e) {
		    now_ps.ptendsub(0); // マウスの場合、ポインタは0しかない。
	    };
	}
    report() {} // スタブです。
	ptdownsub(j,x,y) {
		var i;
		for(i=0; i<this.draggableObjs.length ; i++ ) {
			var now=this.draggableObjs[i];
			if( now.draggingPointerID == null ) {
				// すでにドラッグ中なら何もしない。
				if( now.inTouch(x,y) ) {
					this.draggableObjs[i].startDrag(j,x,y);
                    return;
				}
			}
		}
	}
    ptmovesub(j,x,y) {
	    var i=0;
	    for( i=0; i< this.draggableObjs.length; i++ ) {
		    if( this.draggableObjs[i].draggingPointerID == j ) {
		        this.draggableObjs[i].tmpPos=new Vector(x,y);
		    }
	    }
	}
	ptendsub(j) {
	    var i=0;
	    for( i=0; i< this.draggableObjs.length; i++ ) {
		    if( this.draggableObjs[i].draggingPointerID == j ) {
		        this.draggableObjs[i].resetDrag();
		    }
	    }
	}
	// DynamicalObjectのリストをクリアする
	cleardyLists() {
		this.dyObjs = []; //動くオブジェクトのリスト
	}
	// DynamicalObjectとNonDynamicalObjectのリストをクリアする
	// draggableObjsをクリアする。
	clearLists() {
		this.cleardyLists();
		this.ndObjs = []; //動かないオブジェクトのリスト
        this.draggableObjs=[]; // ドラッグできるオブジェクトとリスト
	}
	// 中身を描く。
	writeContents() {
		this.writeBackGround();
		var i;
		var N = this.dyObjs.length;
		for (i = 0; i < N; i++) {
			this.dyObjs[i].drawAndTrace();
		}
		if (this.drawVFlg) {
			for (i = 0; i < N; i++) {
				this.dyObjs[i].drawV();
			}
		}
		if (this.drawFFlg) {
			for (i = 0; i < N; i++) {
				this.dyObjs[i].drawF();
			}
		}
		N = this.ndObjs.length;
		for (i = 0; i < N; i++) {
			this.ndObjs[i].drawAndTrace();
		}
	}

	// 背景を描く。
	writeBackGround() {
		var ct = this.ctx;
		ct.fillStyle = "rgb(240,255,255)";
		ct.fillRect(this.leftx, this.bottomy, this.w, this.h);
		if (this.writeXY) {
			this.writeCoordinate();
		}
		if (this.writeX) {
			this.writeCoordinateX();
		}
		if (this.writeY) {
			this.writeCoordinateY();
		}
	}
	start() { this.goStep(this); };
    //	var count = 0;
	goStep(ps) {
		ps.count++;
		if (ps.count >= ps.drawStep) {
			ps.count = 0;
			ps.calcNext(true);
			ps.writeContents();
		} else {
			ps.calcNext(false);
		}
        this.report();
		//	setTimeout(ps.goStep, ps.stepTime, ps);←この書き方はIEだと動かんそうな。
		setTimeout(function () { ps.goStep(ps); }, ps.stepTime);
	}

	// this.stepT 秒後の状態を計算する。
	// flg がtrueなら、そのとき働く力をオブジェクトに登録する（これは表示のために必要）
	// つまり、flgがfalseなら、表示のために必要な部分をサボる。
	calcNext(flg) {
		if( flg == undefined ) { flg=true;}
		var i, now;
		var N = this.dyObjs.length;
		var dt = this.stepT;
		for (i = 0; i < N; i++) {
			now = this.dyObjs[i];
			now.npos.copyFrom(now.pos);
			now.npos.addVt(now.v, dt);
			// npos = pos+vΔt
			now.fClear();
		}
		var F, f, j;
		for (i = 0; i < N; i++) {
			now = this.dyObjs[i];
		    
			F = new Vector(0, 0);
			for (j = 0; j < N; j++) {
				// j番目の動的オブジェクトからi番目の動的オブジェクトへの力
				if (i !=  j) {
					f = this.dyObjs[j].interactionForce(now);
					F.add(f.f);
					if( flg ) {
						now.addF(f);
					}
				}
			}
			for (j = 0; j < this.ndObjs.length; j++) {
				// j番目の【非】動的オブジェクトからi番目の動的オブジェクトへの力
				f = this.ndObjs[j].interactionForce(now);
				F.add(f.f);
				if( flg) {
					now.addF(f);
				}
			}
            for (j = 0; j < this.draggableObjs.length; j++) {
			    if( now == this.draggableObjs[j] ) {
                    if( now.draggingPointerID != null ){
                        now.pushDragP();
                        if( now.tamattaFlg ) {
                            now.getDragP(dt);
							var handF=now.a.prod(now.mass); // 手の力として、F=maを入れる。
							handF.sub(F); // 手の力以外に働いている力を引く。
							now.addF(new Force(handF,now.touchPoint,"rgba(0,100,0,0.1)")); // 手の力を足す。
                        }
                    }
			    }
            }
			if( now.draggingPointerID == null ) {
				now.v.add(F.prod(dt / now.mass));  
				// ドラッグされてない物体については、速度を v=v+(F(x+vΔt)/m)Δt で計算する。
			}
			now.pos.copyFrom(now.npos);
		}
	}

	externalForce(m) {
		return new Vector(new Vector(0, 0));
	}
	fieldForce(m) {
		// デフォルトは端での反発のみ。
	}
	// 相互作用の力（これはスタブなので0を返す）
	interactionForce(ml, i) {
		return new Force(new Vector(0, 0));
	}
	// 空気抵抗を追加する
	makeAir(k) {
		this.airResist = (k === undefined) ? 1 : k;
		var air = new NonDynamicalObject(this);
		air.interactionForce = function (to) {
			return new Force(new Vector(-to.v.x * this.ps.airResist, -to.v.y * to.ps.airResist));
		};
		air.draw = function () {};
	}
	makeGravity(g) {
		this.gravity = (g === undefined) ? 1 : g;
		var earth = new NonDynamicalObject(this);
		earth.interactionForce = function (to) {
			return new Force(new Vector(0, -to.mass * to.ps.gravity),new Vector(0,0),"rgba(0,0,0,0.3");
		};
		earth.draw = function () {};
	}
	makeEdge(w) {
		// edgeは、この系の端。
		this.edgew = (w === undefined) ? 1 : w;
		var edge = new NonDynamicalObject(this); //境界を非力学的オブジェクトとして設置
		this.edgeStrength = 500; // 境界でのはね返りの強さ
		edge.interactionForce = function (to) {
			var fx, fy, p = to.npos; // 力は「新しい位置」で計算する。
			fx = 0;
			fy = 0;
            var sayouten=p.makeCopy();
			var sys = this.ps;
			if (p.x < sys.leftx + sys.edgew + to.r) {
			    fx =  sys.leftx + sys.edgew  + to.r - p.x;
                sayouten.x=sys.leftx+sys.edgew
			}
			if (p.x > sys.rightx - sys.edgew - to.r) {
				fx =  sys.rightx - sys.edgew - to.r - p.x;
                sayouten.x=sys.rightx-sys.edgew;
			}
			if (p.y < sys.bottomy + sys.edgew + to.r) {
				fy =  sys.bottomy + sys.edgew + to.r  - p.y;
                sayouten.y=sys.bottomy+sys.edgew;                
			}
			if (p.y > sys.topy - sys.edgew - to.r) {
				fy =  sys.topy - sys.edgew - to.r - p.y;
                sayouten.y=sys.topy-sys.edgew;                
			}
            sayouten.sub(to.npos);
			return new Force(
                new Vector(sys.edgeStrength * fx, sys.edgeStrength * fy),
                sayouten,
                "rgba(100,100,0,0.5)"
            );
		}
		edge.draw = function () {
			var sys = this.ps;
			var ct = this.ps.ctx;
			ct.fillStyle = "rgba(100,200,100,0.3)";
			ct.fillRect(sys.leftx, sys.bottomy, sys.w, sys.edgew);
			ct.fillRect(sys.leftx, sys.topy - sys.edgew, sys.w, sys.edgew);
			ct.fillRect(sys.leftx, sys.bottomy, sys.edgew, sys.h);
			ct.fillRect(sys.rightx - sys.edgew, sys.bottomy, sys.edgew, sys.h);
		};
	}
}
// 壁
class Wall extends NonDynamicalObject{
	constructor(ps,x1,x2,c,r) {
		super(ps,0,0,c,r);
		this.x1=x1.makeCopy();
		this.x2=x2.makeCopy();
		this.strength=1000;
	}
	interactionForce(to) {
		if( to.isBall == true ) {
			var r1=to.npos.diff(this.x1);
			var r2=to.npos.diff(this.x2);
			var x12=this.x1.diff(this.x2);
			var D1=r1.iprod(x12);
			var D2=r2.iprod(x12);
			if( D1*D2 < 0 ) { // D1とD2が同符号なら、線の外。
				D1=r1.eprod(x12);
				D1 /= (x12.length()); // Dの長さがx12線からの離れ具合
				var meri=Math.abs(D1) - this.r-to.r;
				if( meri > 0 ) { // 影響圏外
					return new Force(new Vector(0,0));
				} else {
					var x12rot=x12.makeCopy();
					x12rot.rot90();
					x12rot.normalize();
					if( D1 > 0 ) {
						return new Force(x12rot.prod(this.strength*meri*meri*meri));
					} else {
						return new Force(x12rot.prod(-this.strength*meri*meri*meri));
					}
				}
			}
			var rlens=r1.lengthSquare();
			var rlen=Math.sqrt(rlens);
			var rr=this.r + to.r;
			r1.normalize();
			var meri=rlen-rr;
			if( meri >= 0 ) {
				rlens=r2.lengthSquare();
				rlen=Math.sqrt(rlens);
				var rr=this.r + to.r;
				r2.normalize()
				meri=rlen-rr;
				if( meri >=0 ) {
					return new Force(new Vector(0,0));
				} else {
					return new Force(r2.prod(-this.strength*meri*meri*meri));
				}
			} else {
				return new Force(r1.prod(-this.strength*meri*meri*meri));
			}
		}
		return new Force(new Vector(0,0));
	}
	draw() {
		this.ps.fillCircle(this.x1.x, this.x1.y, this.r, this.col);
		this.ps.fillCircle(this.x2.x, this.x2.y, this.r, this.col);
		var x12=this.x1.diff(this.x2);
		var x12rot=this.x1.diff(this.x2);
		x12rot.rot90();
		x12rot.normalize();
		x12rot.mul(this.r);
		var x11=this.x1.sum(x12rot);
		var x12=this.x1.diff(x12rot);
		var x21=this.x2.sum(x12rot);
		var x22=this.x2.diff(x12rot);
		this.ps.writeLine(x11.x,x11.y,x21.x,x21.y,this.col,2)
		this.ps.writeLine(x12.x,x12.y,x22.x,x22.y,this.col,2)
	}
}
// m1とm2をつなぐバネ
class Spring extends NonDynamicalObject{
	constructor(ps, m1, m2, k, l, c) {
	    // バネはNonDynamicalObjectである。
		super(ps, 0, 0, c);
		this.m1 = m1;
		this.m2 = m2;
		// バネ定数（デフォルトは1）
		this.k = (k === undefined) ? 1 : k;
		// 自然長（デフォルトは0）
		this.l = (l === undefined) ? 0 : l;
		this.w=0.2;
	}
	interactionForce(to) {
		if (to === this.m1) {
			return new Force(this.force1());
		} else if (to === this.m2) {
			return new Force(this.force2());
		} else {
			return new Force(new Vector(0, 0));
		}
	}
	force2() {
		var F = this.m1.displacementFrom(this.m2);
		return this.force(F);
	}
	force1() {
		var F = this.m2.displacementFrom(this.m1);
		return this.force(F);
	}

	force(F) {
		var Fl = F.length();
        F.normalize();
		F.mul(this.k * (Fl - this.l) );
		return F;
	}
    setK(kk) {this.k=kk;}
	draw() {
		var x1 = this.m1.pos.x;
		var y1 = this.m1.pos.y;
		var x2 = this.m2.pos.x;
		var y2 = this.m2.pos.y;
		
		var dx = (x2 - x1) * 0.05;
		var dy = (y2 - y1) * 0.05;
		var dxy = Math.sqrt(dx * dx + dy * dy);
		var ddx = this.w * dx / dxy;
		var ddy = this.w * dy / dxy;
		
		this.ps.writeLine(x1, y1, x1 + 4 * dx, y1 + 4 * dy, this.col, 2);
		this.ps.writeLine(x1 + 4 * dx, y1 + 4 * dy, x1 + 5 * dx - ddy, y1 + 5 * dy + ddx, this.col, 2);
		this.ps.writeLine(x1 + 5 * dx - ddy, y1 + 5 * dy + ddx, x1 + 7 * dx + ddy, y1 + 7 * dy - ddx, this.col, 2);
		this.ps.writeLine(x1 + 7 * dx + ddy, y1 + 7 * dy - ddx, x1 + 9 * dx - ddy, y1 + 9 * dy + ddx, this.col, 2);
		this.ps.writeLine(x1 + 9 * dx - ddy, y1 + 9 * dy + ddx, x1 + 11 * dx + ddy, y1 + 11 * dy - ddx, this.col, 2);
		this.ps.writeLine(x1 + 11 * dx + ddy, y1 + 11 * dy - ddx, x1 + 13 * dx - ddy, y1 + 13 * dy + ddx, this.col, 2);
		this.ps.writeLine(x1 + 13 * dx - ddy, y1 + 13 * dy + ddx, x1 + 15 * dx + ddy, y1 + 15 * dy - ddx, this.col, 2);
		this.ps.writeLine(x1 + 15 * dx + ddy, y1 + 15 * dy - ddx, x1 + 16 * dx, y1 + 16 * dy, this.col, 2);
	    this.ps.writeLine(x2, y2, x1 + 16 * dx, y1 + 16 * dy, this.col, 2);
	}
}
class Connector extends Spring {
	// このConnectorという物体は、「ばね定数がでかいSpring」として実装している。
	constructor(ps,m1,m2,c) {
		super(ps,m1,m2,10000,1,c);
		this.l = (m1.displacementFrom(m2)).length();
		// m1とm2の距離を自然長にする。
        this.d=10;
	}
    setD(kk) {
        k.d=kk;
    }
	draw() {
		var x1 = this.m1.pos.x;
		var y1 = this.m1.pos.y;
		var x2 = this.m2.pos.x;
		var y2 = this.m2.pos.y;
		this.ps.writeLine(x1, y1, x2, y2, this.col, 2);
	}
    interactionForce(to) {
        var F=super.interactionForce(to).f;
		//　これだけだと、強いバネ定数のバネでしかないので、いったん振動が始まってしまうともう止まらない。
		// 減衰振動になるようにする。
		var relX=this.m1.displacementFrom(this.m2); // m1-m2なベクトルを出す。
		relX.normalize(); //その長さを1にする。
		var v1X=this.m1.v.iprod(relX);
        var v2X=this.m2.v.iprod(relX);
		if( to == this.m1 ) {
            relX.mul((v2X-v1X)*this.d);
            F.add(relX);
        }
        if( to == this.m2 ) {
            relX.mul((v1X-v2X)*this.d);
            F.add(relX);
        }
        return(new Force(F));
    }
}
class Ball extends DynamicalObject {
    constructor(ps, x, y, vx, vy, m, c, r) {
        super(ps, x, y, vx, vy, m, c, r);
        this.isBall=true;
		this.strength=1000;
    }
    interactionForce(to) {
        if( to.isBall == true ) {
            var r=to.displacementFrom(this);
			var rlens=r.lengthSquare();
			var rlen=Math.sqrt(rlens);
            var rr=this.r + to.r;
			r.normalize();
            var meri=rlen-rr;
			if( meri >= 0 ) {
				return new Force(new Vector(0,0));
			} else {
				return new Force(r.prod(-this.strength*meri*meri*meri));
			}
        }
        return new Force(new Vector(0,0));
    }

}
class Trace {
	constructor(c,i) {
		this.on();
		this.pList=[];
		this.count=( i === undefined )? 10000:i;
		this.color=( c === undefined )? "rgba(0,80,80,0.3)": c;
	}
	on() { this.drawFlg=true;}
	off() { this.drawFlg=false;}
	toggle() { this.drawFlg = !this.drawFlg;}
	clear() {
		this.pList=[];
	}
	disposeOne() {
		this.pList.shift();
	}
	push(p) {
		var n=p.makeCopy(); // makeCopyしておかないと、後で変更される。
		this.pList.push(n);
	}
	draw(ct,p) {
		this.push(p);
		if( this.drawFlg ) {
		    ct.beginPath();
		    ct.moveTo(this.pList[0].x,this.pList[0].y);
			var i;
		    for(i=1; i< this.pList.length; i++ ) {
			    ct.lineTo(this.pList[i].x,this.pList[i].y);
		    }
		    ct.strokeStyle=this.color;
		    ct.stroke();
		}
		if( this.pList.length > this.count ) {
		    this.disposeOne();
		}
	}
}
function changeSliderV(input,name) {
	var slider = document.getElementById(input);
	var numstring = document.getElementById(name);
	numstring.innerHTML = slider.value;
	return (slider.value);
}
