window.onload = function() {
	var mn=document.getElementById("mainp");
	var nb=document.getElementById("abt_us");
	
	nb.onclick=function()
	{
		window.location='../About_us/us.html';
	}
	mn.onclick=function()
	{
		window.location='../page_5.html';
	}
	window.location.hash="no-back-button";
	window.location.hash="Again-No-back-button";
	window.onhashchange=function() { window.location.hash="no-back-button";}
	
	
	var a=document.getElementById("but_1");
	var b=document.getElementById("but_2");
	var c=document.getElementById("but_3");
	var d=document.getElementById("but_4");
	var p=document.getElementById("but_5");
	var e=document.getElementById("view_1");
	var e1=document.getElementById("v1");
	var f=document.getElementById("view_2");
	var g=document.getElementById("view_3");
	var h=document.getElementById("view_4");
	var l=document.getElementById("las");
	var l1=document.getElementById("las1");
	var vw=document.getElementById("view");
	
	var imd=document.getElementById("im_dis");
	
	a.onclick = function() {
		e.style.transition="right 2s ease-in";
		window.scrollBy(0,5400);
		vw.style.height="250px";
		e.style.opacity="1";
		f.style.opacity="0";
		g.style.opacity="0";
		h.style.opacity="0";
	}
	
	b.onclick = function() {
		f.style.transition="right 2s ease-in";
		window.scrollBy(0,5450);
		vw.style.height="400px";
		e.style.opacity="0";
		f.style.opacity="1";
		g.style.opacity="0";
		h.style.opacity="0";
	}
	
	c.onclick = function() {
		g.style.transition="right 2s ease-in";
		window.scrollBy(0,5400);
		vw.style.height="300px";
		e.style.opacity="0";
		f.style.opacity="0";
		g.style.opacity="1";
		h.style.opacity="0";
	}
	
	d.onclick = function() {
		h.style.transition="right 2s ease-in";
		window.scrollBy(0,5400);
		vw.style.height="300px";
		e.style.opacity="0";
		f.style.opacity="0";
		g.style.opacity="0";
		h.style.opacity="1";
	}
	l.onclick=function() {
		window.scrollBy(0,-5700);
	}
	l.onclick=function() {
		window.scrollBy(0,-5700);
	}
	l1.onclick=function() {
		window.scrollBy(0,-7900);
	}
	
	p.onclick = function() {
		p.style.transition="right 2s ease-in";
		window.scrollBy(0,7600);
	}
	
	var lb=document.getElementById("left_b");
	var rb=document.getElementById("right_b");
	//var ims=document.getElementById("pan");
	var images = ['../Images/pics/1.jpg','../Images/pics/2.jpg','../Images/pics/3.jpg','../Images/pics/4.jpg','../Images/pics/5.jpg','../Images/pics/6.jpg','../Images/pics/7.jpg','../Images/pics/8.jpg','../Images/pics/9.jpg','../Images/pics/10.jpg'];
	var num = 0; 
	rb.onclick=function() {
		var ims=document.getElementById("pan");
		num++;
		if(num>=images.length) {
			num=0;
		}
		ims.src=images[num];
	}

	lb.onclick=function() {
		var ims=document.getElementById("pan");
		num--;
		if(num<0) {
			num=images.length-1;
		}
		ims.src=images[num];
	}
	
};