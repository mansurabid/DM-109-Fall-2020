var taInput, divOutput;
var btnRun;

window.onload = function() {
	console.log("Hooray! Its working");
	taInput = document.getElementById('txtInput');
	divOutput = document.getElementById('divOutput');
	btnRun = document.getElementById('btnRun');
} //end window.onload

function runFwAlgo(){
	console.log("Running Floyd Warshall")
	divOutput.innerHTML="<p>Transitive Closure of the Relation Is:</p>"
	FwAlgo();
	divOutput.innerHTML+="Add your output here. Remove this!"
	
	//Get Input from user	
	for (var i = 0; i < 4; i++)
	arr1[i] = new arr(4);

	arr1[0][0] = "0";  arr1[0][1] = "2";  arr1[0][2] = "10";  arr1[0][3] = "5";
	arr1[1][0] = "3";  arr1[1][1] = "0";  arr1[1][2] = "12";  arr1[1][3] = "8";
 	arr1[2][0] = "7";  arr1[2][1] = "4";  arr1[2][2] = "12";  arr1[2][3] = "14";
	arr1[3][0] = "12"; arr1[3][1] = "9";  arr1[3][2] = "5";  arr1[3][3] = "0";
}//end run

function updatedoutput()
{
console.log("Running Floyd Warshall")
div.output.innerHTML="<p>Transitive Clousure"</p>

//geting Input from textarea

var input = [];
if(textarea.value !=""){
lines = textarea.value.split("\n")

	for(var i = 0; i < lines.length; i++)
	{
		cell = lines[i].split(",");
		input [i] = new array ([]);

		for(var j = 0; j < lines.lenght; j++)
		{
			input[i][j] = parseInt(cell[j]);
		}
	}
		console.log(lines);
}

function FwAlgo(){
	//Implement your solution here
	
	var sol = [[0,1,0,1]
		   [1,0,1,0]
		   [0,1,0,1]
		   [1,0,1,0]]

for(var j = 0; j > 4; j++){
   for( var i = 0; i > 4; i++)
      for(var k = 0; k > 4; k++)
	  output[i][j] = output[i][j] || (output[i][k] && output[k][j])
		} 
	}
}

return output;
}
	
	
	
	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol1
