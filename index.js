import { cal } from "./cal.js";

var a = document.querySelector('.ip1');
var btn = document.querySelector(".btn-neon");
var miles = document.querySelector(".miles");
var feet = document.querySelector(".feet");
var cm = document.querySelector(".cm");
const dropdown = document.querySelector("#unitSelector");

btn.addEventListener("click", function() {
    
    // 1. Get the number
    var x = parseFloat(a.value);

    // Safety check
    if (isNaN(x)) {
        alert("Please enter a number!");
        return;
    }

    // 2. Calculate values 
    // Remember: arr = [feet, cm, miles]
    var arr = cal(x); 
    
    var selected = dropdown.value;

    // 3. LOGIC: Show ONLY the selected one, blank the others
    if (selected === "cm") {
        cm.textContent = arr[1].toFixed(2); // Show CM
        feet.textContent = "--";            // Blank
        miles.textContent = "--";           // Blank
    } 
    else if (selected === "feet") {
        feet.textContent = arr[0].toFixed(2); // Show Feet
        cm.textContent = "--";                // Blank
        miles.textContent = "--";             // Blank
    } 
    else if (selected === "miles") {
        miles.textContent = arr[2].toFixed(4); // Show Miles
        feet.textContent = "--";               // Blank
        cm.textContent = "--";                 // Blank
    } 
    else {
        alert("Please select a unit!");
    }

    // 4. Clear input box
    a.value = "";
    a.focus();
});