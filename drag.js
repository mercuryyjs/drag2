var str = "";
var str2="";
function drag(id){
	var obj=document.getElementById(id);
	var disX=0;
	var disY=0;
	obj.onmousedown = function(ev){
		disX = ev.pageX - obj.offsetLeft;
		disY = ev.pageY - obj.offsetTop;

		
	}
}