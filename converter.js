
// document.getElementById("convertBtn").addEventListener("click", cons());

function convertTemp ()
{	
	var fromNumber = document.getElementById("fromTemp").value;
	var toTemp = document.getElementById("toTemp");
	var convNumber;
	
	if (determineConverter() == "F")
	{
		convNumber    =  toFahrenheit(fromNumber).toFixed(0);
		toTemp.value  = convNumber + " F";
		if (convNumber > 90)
		{
			toTemp.style.backgroundColor = "red"; 
		}
		else
		{
			toTemp.style.backgroundColor = "blue"; 
		}
	}
	else
	{
		convNumber    =  toCelcius(fromNumber).toFixed(0);
		toTemp.value  = convNumber + " C";
		if (convNumber > 32)
		{
			toTemp.style.backgroundColor = "red"; 
		}
		else
		{
			toTemp.style.backgroundColor = "blue"; 
		}
	}
}

// check for converting to F or C
function determineConverter () {
  
  if (document.getElementById("Fahrenheit").checked)
  	{ return "F";}
  else
  	{return "C";}
}

//Convert to Fahrenheit
function toFahrenheit(valNum) {
  valNum = parseFloat(valNum);
  return (valNum*1.8)+32;
}

//Convert to Celcius
function toCelcius(valNum) {
  valNum = parseFloat(valNum);
  return (valNum-32)/1.8;
}

//Clear all text input
function resetAll()
{
	
	document.getElementById("fromTemp").value = "";
	document.getElementById("toTemp").value = "";
	document.getElementById("toTemp").style.backgroundColor = "white";

}