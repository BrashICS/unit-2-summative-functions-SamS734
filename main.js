/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);

/*** Functions ***/

/** PART 1 **/

/* JavaScript */

// Return the difference of two numbers
function delta(a, b) {
    return a - b;
}

// Return the slope of a line
function slope(x1, y1, x2, y2) {
    return delta(y2, y1) / delta (x2, x1);
}

// Return the average of two numbers
function average(n1, n2) {
    return (n1 + n2) / 2
}

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
// Get the number of decimals from the "rounding" box
    let decimals = Number(document.getElementById("rounding").value);
// Round the value to the user's request number of decimals and return it
    return round(value, decimals);
}

// Length of a line segment
function length(x1, y1, x2, y2) {
    return Math.sqrt((delta(x2, x1))**2 + (delta (y2, y1))**2);
}

/* HTML */



/** PART 2 **/

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}

