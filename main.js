let tempC = parseFloat(prompt("Tempetatura em Graus Celsius"));

document.getElementById("celsius").innerHTML = "Temperatura em C: " + tempC;

let tempF = (9/5 * tempC) + 32;

document.getElementById("fahrenheit").innerHTML = "Temperatura em F: " + tempF;
