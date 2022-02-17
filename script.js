let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

function listifyArray(values){
	let result = "";
	fOutput = values.map(elem => `<li>${elem}</li>`);
	fOutput.forEach(item => result += item);
	return result;
}

//var celcius = fahrenheit.map(function(elem) {
//	return Math.round((elem - 32) * 5 / 9);
//});

// ES6 
let celcius = fahrenheit.map(elem => Math.round((elem - 32) * 5 / 9));

//fOutput = fahrenheit.map(elem => `<li>${elem}</li>`);
//cOutput = celcius.map(elem => `<li>${elem}</li>`);

//fOutput.forEach(item => document.getElementById("fList").innerHTML += item);
//cOutput.forEach(item => document.getElementById("cList").innerHTML += item);

//document.getElementById("fList").innerHTML = fOutput;
//console.log(fOutput);
//console.log(cOutput);

document.getElementById("fList").innerHTML = listifyArray(fahrenheit);
document.getElementById("cList").innerHTML = listifyArray(celcius);


//Map example
