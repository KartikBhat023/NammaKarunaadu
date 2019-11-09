(function() {
	var preload = document.getElementById("preload");
	var loading = 0;
	var id=setInterval(frame,10);
	var k=document.getElementById("mk");
	k.style.color="green";

		
	
	function frame() {
		if(loading==100)
		{
			clearInterval(id);
			window.open("../District_wise/Bellari.html","_self");
		}
		else
		{
			loading = loading+1;
			if(loading==90)
			{
				preload.style.animation="fadeout 1s ease";
			}
		}
	}
})();