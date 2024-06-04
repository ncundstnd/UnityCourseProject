(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Proton402_atlas_1", frames: [[0,0,1024,768]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Proton = function() {
	this.initialize(ss["Proton402_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.РегуляторТона = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Tonwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCC33").ss(1,1,1).p("AmKo5IMVAAIAARzIsVAAg");
	this.shape.setTransform(-270.5,-18.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AmKI6IAAxzIMVAAIAARzg");
	this.shape_1.setTransform(-270.5,-18.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311,-76.9,311,116);


(lib.РегуляторГромкости = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Volumewav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCC33").ss(1,1,1).p("AldnkIK7AAIAAPJIq7AAg");
	this.shape.setTransform(-267,-12.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AldHlIAAvJIK7AAIAAPJg");
	this.shape_1.setTransform(-267,-12.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303,-61.9,303,99);


(lib.Перемотка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Skipwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCC33").ss(1,1,1).p("Aldm8IK7AAIAAN5Iq7AAg");
	this.shape.setTransform(-276.975,-0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AldG9IAAt5IK7AAIAAN5g");
	this.shape_1.setTransform(-276.975,-0.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-312.9,-45.9,312.9,90.9);


(lib.ОткрытьКрышку = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Openwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCC33").ss(1,1,1).p("AlOnGIKdAAIAAONIqdAAg");
	this.shape.setTransform(-169.5,30.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AlOHHIAAuNIKdAAIAAONg");
	this.shape_1.setTransform(-169.5,30.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-15.9,204,92.9);


(lib.Остановить = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Stopwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCC33").ss(1,1,1).p("AlinuILFAAIAAPdIrFAAg");
	this.shape.setTransform(-251.5,19.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AliHvIAAvdILFAAIAAPdg");
	this.shape_1.setTransform(-251.5,19.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288,-30.9,288,100.9);


(lib.МестоДляКассеты = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Boxwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCC33").ss(1,1,1).p("A3HmAMAuPAAAIAAMBMguPAAAg");
	this.shape.setTransform(-67,-15.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("A3HGBIAAsBMAuPAAAIAAMBg");
	this.shape_1.setTransform(-67,-15.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216,-54.9,298,79);


(lib.Крышка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Capwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCC33").ss(1,1,1).p("AzXrZMAmvAAAIAAWzMgmvAAAg");
	this.shape.setTransform(-15,8.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AzXLaIAA2zMAmvAAAIAAWzg");
	this.shape_1.setTransform(-15,8.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-65.9,250,147.9);


(lib.Запустить = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Startwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCC33").ss(1,1,1).p("AmKo5IMVAAIAARzIsVAAg");
	this.shape.setTransform(-292.475,-47.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AmKI6IAAxzIMVAAIAARzg");
	this.shape_1.setTransform(-292.475,-47.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332.9,-105.9,332.9,116);


(lib.Динамик = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Speakerwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCC33").ss(1,1,1).p("ATpFRQhREwmqB0QmqB0oIiLQoIiMk3k5Qk3k4BSkxQBRkwGqh0QGqh1IHCMQIJCLE3E6QE3E5hSEwg");
	this.shape.setTransform(-60.5261,-6.0426);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AjELeQoIiMk3k5Qk3k4BSkxQBRkwGqh0QGqh1IHCMQIJCLE3E6QE3E5hSEwQhREwmqB0QjBA1jVAAQkAAAkchMg");
	this.shape_1.setTransform(-60.5261,-6.0426);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.9,-88,256.8,164);


// stage content:
(lib.Proton402 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ОткрытьКрышку();
	this.instance.setTransform(531.9,568.75,0.7686,0.8293,44.9993);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.ОткрытьКрышку(), 3);

	this.instance_1 = new lib.Остановить();
	this.instance_1.setTransform(406.3,518.95,0.7324,0.8089,44.9992);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Остановить(), 3);

	this.instance_2 = new lib.ОткрытьКрышку();
	this.instance_2.setTransform(425.3,505.4,0.7716,0.8315,44.9993);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.ОткрытьКрышку(), 3);

	this.instance_3 = new lib.Запустить();
	this.instance_3.setTransform(543,564.5,0.7541,0.8045,40.9217,0,0,-292.4,-48.1);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Запустить(), 3);

	this.instance_4 = new lib.Перемотка();
	this.instance_4.setTransform(478.95,527.25,0.8183,0.8193,44.9238,0,0,-277,-0.5);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Перемотка(), 3);

	this.instance_5 = new lib.Перемотка();
	this.instance_5.setTransform(369.4,464.4,0.8183,0.8193,44.9238,0,0,-277,-0.5);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.Перемотка(), 3);

	this.instance_6 = new lib.РегуляторТона();
	this.instance_6.setTransform(458.1,340.45,0.3696,0.4096,45);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.РегуляторТона(), 3);

	this.instance_7 = new lib.РегуляторГромкости();
	this.instance_7.setTransform(423.15,336.7,0.5186,0.5056,45);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.РегуляторГромкости(), 3);

	this.instance_8 = new lib.МестоДляКассеты();
	this.instance_8.setTransform(623.95,400.95,1.0796,1,24.7979,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.МестоДляКассеты(), 3);

	this.instance_9 = new lib.Крышка();
	this.instance_9.setTransform(650.6,291.8,1.5178,0.5965,26.0216,0,0,8.1,-9.5);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.Крышка(), 3);

	this.instance_10 = new lib.Динамик();
	this.instance_10.setTransform(747.6,141.35);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 2, false, new lib.Динамик(), 3);

	this.instance_11 = new lib.Proton();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,512,384);
// library properties:
lib.properties = {
	id: '5DCC68FF4B5B0F429E26D5CB40EE8F78',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Proton402_atlas_1.png?1716630563217", id:"Proton402_atlas_1"},
		{src:"sounds/Boxwav.mp3?1716630563251", id:"Boxwav"},
		{src:"sounds/Capwav.mp3?1716630563251", id:"Capwav"},
		{src:"sounds/Openwav.mp3?1716630563251", id:"Openwav"},
		{src:"sounds/Skipwav.mp3?1716630563251", id:"Skipwav"},
		{src:"sounds/Speakerwav.mp3?1716630563251", id:"Speakerwav"},
		{src:"sounds/Startwav.mp3?1716630563251", id:"Startwav"},
		{src:"sounds/Stopwav.mp3?1716630563251", id:"Stopwav"},
		{src:"sounds/Tonwav.mp3?1716630563251", id:"Tonwav"},
		{src:"sounds/Volumewav.mp3?1716630563251", id:"Volumewav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5DCC68FF4B5B0F429E26D5CB40EE8F78'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;