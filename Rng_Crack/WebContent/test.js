var iFrequency = 1000; // expressed in miliseconds
var myInterval = 0;


var myVar = setInterval(function() {
	updateTable()
}, 500);

function CheckIfReady() {

	document.getElementById("isReady").innerHTML= prng.isReadyToGenerateRandomValues();
}

function genRandom() {
	var out = prng.getRandomBlock()._value.join();
	document.getElementById("randomOutput").innerHTML=out;
	
	
}
function getEntrophyLevel(){
	
	document.getElementById("EntrophyLevel").innerHTML = prng.entropyLevel().toString();
	}

function checkReseedCounter() {
	document.getElementById("reseedCounter").innerHTML = prng.reseedCounter(); 
}

function updateTable() {
	CheckIfReady();
	checkReseedCounter();
	getEntrophyLevel();
}