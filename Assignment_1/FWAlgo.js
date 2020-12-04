<script>

var taInput, divOutput;
var btnRun;
var geek ;



function takingvaluesfromuser()
{
var rows =4;
  var cols =4;
  var matrice = [] ;
 for (var i = 0; i < rows; i++) {
        matrice.push([0])
        input  = document.getElementById("txtInput").value;
        for (var j = 0; j < cols; j++) {
            matrice[i][j] = input.split(' ');
        }
    }
    return matrice;
}
window.onload = function() 
{
	console.log("Hooray! Its working");
	taInput = document.getElementById('txtInput');
	divOutput = document.getElementById('divOutput');
	btnRun = document.getElementById('btnRun');
} //end window.onload

function runFwAlgo()
{
	console.log("Running Floyd Warshall")
	divOutput.innerHTML="<p>Transitive Closure of the Relation Is:</p>"
	floydWarshallAlgorithm()
	divOutput.innerHTML+="Add your output here. Remove this!"
	//Get Input from 
}//end run


	//Implement your solution here
  function floydWarshall(matrice) {
  var temp = [];
  var temp2 = [];
  var temp3 = [];
  
  for (var k = 0; k < matrice.length; k++) {
    for (var i = 0; i < matrice.length; i++) {
      for (var j = 0; j < matrice.length; j++) {
        temp.push(matrice[j][i] * matrice[k][j]);
      }
      if (sum(temp) > 0) {
        temp2.push(1);
      } else {
        temp2.push(0);
      }
      temp = [];
    }
    temp3.push(temp2);
    temp2 = [];
  }
    return temp3;
}

       function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  }, 0);
</script>
