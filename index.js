import { cal } from "./cal.js";

var a = document.querySelector('.ip1');
var btn = document.querySelector(".btn-neon");
var miles = document.querySelector(".miles");
var feet = document.querySelector(".feet");
var cm = document.querySelector(".cm");
var kmDisplay = document.querySelector(".km");
var meterDisplay = document.querySelector(".meter");
var statusLabel = document.querySelector("#statusLabel");
const dropdown = document.querySelector("#unitSelector");

btn.addEventListener("click", function() {
    var val = parseFloat(a.value);

    if (isNaN(val)) {
        alert("Please enter a valid numeric value!");
        return;
    }

    var selected = dropdown.value;
    if (selected === "nothing") {
        alert("Please select a unit to convert from!");
        return;
    }

    // 1. Convert everything to KM first (The Global Base)
    let kmBase;
    switch(selected) {
        case "km": kmBase = val; break;
        case "meter": kmBase = val / 1000; break;
        case "cm": kmBase = val / 100000; break;
        case "feet": kmBase = val / 3280.84; break;
        case "miles": kmBase = val / 0.621371; break;
    }

    // 2. Calculate every target unit
    var results = cal(kmBase); 
    
    // 3. Update the UI context labels and values
    statusLabel.textContent = `SYSTEM: CONVERTING ${val} ${selected.toUpperCase()}...`;
    
    kmDisplay.textContent = results.km.toFixed(4);
    meterDisplay.textContent = Math.round(results.meter).toLocaleString();
    cm.textContent = Math.round(results.cm).toLocaleString();
    feet.textContent = results.feet.toFixed(2);
    miles.textContent = results.miles.toFixed(4);

    // 4. Reset & Focus
    a.value = "";
    a.focus();
});