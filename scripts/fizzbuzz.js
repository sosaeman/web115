
	function msg(){
	var name = document.getElementById("name").value;
	var last = document.getElementById("last").value;
	var middle = document.getElementById("middle").value;
	var top =  'Stay Strong, ' + name + " "+middle + " "+ last;
	document.getElementById("greeting").innerHTML= top;
	}
	function count(){
	var name = document.getElementById("name").value;
	var counter = prompt("how high should we count " + name);
	var display = " ";
	for(i = 1;i < counter; i++){
	if(i % 2 === 0){
	display += "<li>The strength level is even </li>";
	}
	else{display += "<li> The strength level is odd </li>";}
	document.getElementById("output").innerHTML= "<ol>" + display + "</ol>";
	
	}
	
	
	}
	
	
	