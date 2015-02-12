var mask,scroll,scroller,day,night;

var ep = 0,sp = 0;

var onMouseDown = false;

window.onload=function(){
	document.body.addEventListener('touchstart',function(){this.addEventListener('touchmove',function(e){e.preventDefault();},false)},false);
	
	mask = document.getElementById('mask');
	scroll = document.getElementById('scroll');
	scroller = document.getElementById('scroller');
	day = document.getElementById('day');
	night = document.getElementById('night');
	
	if(navigator.platform=='iPad'){
		mask.addEventListener('touchstart',start,false);
		mask.addEventListener('touchmove',move,false);
		mask.addEventListener('touchend',end,false);
	}
	else{
		mask.addEventListener('mousedown',start,false)
		mask.addEventListener('mousemove',move,false)
		mask.addEventListener('mouseup',end,false)
	}
	
	
}

function start(e){
	//console.log(scroller.offsetTop+scroller.offsetHeight-17)
	onMouseDown=true;
	if(navigator.platform=='iPad'){
		sp=e.changedTouches[0].clientY;
		ep=e.changedTouches[0].clientY;
	}
	else{
		sp=e.clientY;
		ep=e.clientY;
	}
	if(sp-80<0){
		scroll.style.top = 0 +'px';	
		night.style.opacity = 0;
	}
	else if(sp-80>210){
		scroll.style.top = 210 +'px';	
		night.style.opacity = 1;
	}
	else{
		scroll.style.top = sp-80 +'px';	
		changeopa(scroll);
	}
	
}

function move(e){
	if(onMouseDown == true){
		if(navigator.platform=='iPad'){
			ep = e.changedTouches[0].clientY;
		}
		else{
			ep = e.clientY;
		}
		
		var square = ep-sp;
		
		if(ep-80<0){
			scroll.style.top = 0 +'px';	
		}
		else if(ep-80>210){
			scroll.style.top = 210 +'px';	
		}
		else{
			scroll.style.top = ep-80 +'px';	
			changeopa(scroll);
		}
	
		
	}

}

function end(){
	onMouseDown=false;
}

function changeopa(els){
	var tmp = parseInt(els.style.top);
	console.log( (Math.floor(tmp/(scroller.offsetHeight/100)))/100 )
	night.style.opacity = (Math.floor(tmp/(scroller.offsetHeight/100)))/100;
}

