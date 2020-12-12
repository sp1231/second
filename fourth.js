setInterval(rotation,1000)

var hour =document.querySelector(".hour");	
var minute =document.querySelector(".minute")
var second = document.querySelector(".second");


function rotation(){
	var ctime = new Date();
	var second_degree = ctime.getSeconds() * 6;
	var minute_degree = (ctime.getSeconds() * 0.1)+  (ctime.getMinutes() * 6);
	var hour_degree =  (ctime.getSeconds() * (0.5/60))+(ctime.getMinutes() * 0.5) +(ctime.getHours()*30);

	second.style.transform = " rotate(" + second_degree +"deg)";
	minute.style.transform = "rotate(" + minute_degree + "deg)";
	hour.style.transform = "rotate(" + hour_degree + "deg)";
}

