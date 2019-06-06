
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
function timeIn(){
	var data = document.getElementById("data").innerText;
	alert(data + " timed in at " + h +" : "+ m + " Date: " + today);
}
function timeOut(){
	var data = document.getElementById("data").innerText;
	alert( data + " timed out at " + h + " : " + m + " Date: " +today );
}
