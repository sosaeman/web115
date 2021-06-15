    function msg(){
	var name = document.getElementById("name").value;
	var last = document.getElementById("last").value;
	var middle = document.getElementById("middle").value;
	var top =  'Stay Strong, ' + name + " " + middle + " " + last;
	document.getElementById("greeting").innerHTML= top;
	}
	function count()
{
	var icount=document.getElementById("icount").value;
    var defaultword= document.getElementById("defaultword").value;
    var divisor3=parseInt(document.getElementById("number1").value);
    var divisor5=parseInt(document.getElementById("number2").value);
    var divisor7=parseInt(document.getElementById("number3").value);
	//words
	var divisor3word=document.getElementById("word1").value;
    var divisor5word=document.getElementById("word2").value;
    var divisor7word=document.getElementById("word3").value;
	var display = " ";
    var div35=  divisor3*divisor5;
    var div37 = divisor3*divisor7;
    var div75 =divisor7*divisor5;
    var div375=divisor3*divisor7*divisor5;
    
    function dividedby(i,divide)
    { 
    return i % divide ===0;
    }
    
	for(var i = 1;i <=icount; i++)
    {
	 if(dividedby(i,div375))
        {
            display += divisor3word + divisor5word +  divisor7word ;
        }
       
	else if(dividedby(i,div35)) 
       {
            display += "<li>  strength level gose into ( " + divisor3word + divisor5word +  " ) </li>";   
        }
      
	else if(dividedby(i,div37))
        {
            display += "<li> strength level gose into ( " + divisor3word + divisor7word +  " ) </li>";
        }
	else if(dividedby(i,div75))
        {
            display += "<li>  strength level gose into ( " + divisor7word + divisor5word +  " ) </li>";
        }
   
		//comment
        
	else if(dividedby(i,divisor3))
        {
            display += "<li> strength level gose into ( " + divisor3word +   " ) </li>";
        }
	else if(dividedby(i,divisor7))
        {
            display += "<li>  strength level gose into ( " + divisor7word +   " ) </li>";
        }
    else if(dividedby(i,divisor5))
        {
            display += "<li>  strength level gose into( " + divisor5word +    " ) </li>";
        }
	
	else
        {
            display += "<li> " + defaultword + " </li>";
        }
	document.getElementById("output").innerHTML= "<ol>" + display + "</ol>";
    
}
}
	
	
	
	
	