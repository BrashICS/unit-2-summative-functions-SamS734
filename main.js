/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros_button").addEventListener("click", zeros);
document.getElementById("vertex_button").addEventListener("click", vertex);
document.getElementById("rect_prism_volume_button").addEventListener("click", rect_prism_volume)
document.getElementById("rect_prism_area_button").addEventListener("click", rect_prism_area)
document.getElementById("sphere_volume_button").addEventListener("click", sphere_volume)
document.getElementById("sphere_area_button").addEventListener("click", sphere_area)

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
    let d = Number(document.getElementById("rounding").value);
    // Round the value to the user's request number of decimals and return it
    return round(value, d);
}

// Length of a line segment
function length(x1, y1, x2, y2) {
    return Math.sqrt((delta(x2, x1))**2 + (delta(y2, y1))**2);
}

/* HTML */

function rect_prism_volume() {
    // Get the number for length, width and height from their boxes
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    // Rectangular Prism Volume = LWH
    let volume = round_user(length * width * height);
    // Display the rectangular prism volume on the website
    document.getElementById("rect_prism_volume").textContent = `${volume} units cubed`;
}

function rect_prism_area() {
    // Get the number for length, width and height from their boxes
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    // Rectangular Prism Surface Area = 2(LW + LH + WH)
    let area = round_user(2 * ((length * width) + (length * height) + (width * height)));
    // Display the rectangular prism area on the website
    document.getElementById("rect_prism_area").textContent = `${area} units squared`;
}

function sphere_volume() {
    // Get the number for radius from the "radius" box
    let radius = Number(document.getElementById("radius").value);
    // Sphere Volume = 4/3 πr³
    let volume = round_user(4/3 * Math.PI * radius**3);
    // Display the sphere volume on the website
    document.getElementById("sphere_volume").textContent = `${volume} units cubed`;
}

function sphere_area() {
    // Get the number for radius from the "radius" box
    let radius = Number(document.getElementById("radius").value);
    // Sphere Surface Area = 4πr²
    let area = round_user(4 * Math.PI * radius**2);
    // Display the sphere area on the website
    document.getElementById("sphere_area").textContent = `${area} units squared`;
}

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

