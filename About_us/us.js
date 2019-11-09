window.onload = function() {

	var ws=document.getElementById("name_6");
	var num=document.getElementById("name_7");
	var mn=document.getElementById("mainp");
	
	ws.onmouseover= function() {
		num.style.opacity=1.0;
	}
	
	ws.onmouseout= function() {
		num.style.opacity=0;
	}
	mn.onclick = function()
			{
				window.location='../page_5.html';
			}
};