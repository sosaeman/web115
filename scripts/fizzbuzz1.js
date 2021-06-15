    function msg(){
	var name = document.getElementById("name").value;
	var last = document.getElementById("last").value;
	var middle = document.getElementById("middle").value;
	var top =  'Stay Strong, ' + name + " " + middle + " " + last;
	document.getElementById("greeting").innerHTML= top;
	}
	function count()
{
    
    var divisor3=3;
    var divisor5=5;
    var divisor7=7;
	var display = " ";
    var div35=  divisor3*divisor5;
    var div37 = divisor3*divisor7;
    var div75 =divisor7*divisor5;
    var div375=divisor3*divisor7*divisor5;
    
    function dividedby(i,divide)
    { 
    if(i % divide ===0)
                {
                    return true;
                
                }
        else 
                {
                    return false;    
                }
    
    }
    
	for(var i = 1;i <=140; i++)
    {
       
	if(dividedby(i,div35)) 
       {
            display += "<li>  strength level gose into " + divisor3 + divisor5 +  " </li>";   
        }
      
	else if(dividedby(i,div37))
        {
            display += "<li> strength level gose into" + divisor3 + divisor7 +  " </li>";
        }
	else if(dividedby(i,div75))
        {
            display += "<li>  strength level gose into" + divisor7 + divisor5 +  " </li>";
        }
    else if(dividedby(i,div375))
        {
            display += "<li>  strength level gose into " + divisor3 + divisor5 +  divisor7 +  " </li>";
        }//comment
        
	else if(dividedby(i,divisor3))
        {
            display += "<li> strength level gose into" + divisor3 +   " </li>";
        }
	else if(dividedby(i,divisor7))
        {
            display += "<li>  strength level gose into" + divisor7 +   " </li>";
        }
    else if(dividedby(i,divisor5))
        {
            display += "<li>  strength level gose into " + divisor5 +    " </li>";
        }
	
	else
        {
            display += "<li>  strength level to weak </li>";
        }
	document.getElementById("output").innerHTML= "<ol>" + display + "</ol>";
    
}
}
	
	
	
	
	