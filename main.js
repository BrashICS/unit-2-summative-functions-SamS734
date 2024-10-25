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
document.getElementById("rect_prism_volume_button").addEventListener("click", rect_prism_volume);
document.getElementById("rect_prism_area_button").addEventListener("click", rect_prism_area);
document.getElementById("sphere_volume_button").addEventListener("click", sphere_volume);
document.getElementById("sphere_area_button").addEventListener("click", sphere_area);
document.getElementById("slope_button").addEventListener("click", slope_user);
document.getElementById("line_length_button").addEventListener("click", line_length);
document.getElementById("midpoint_button").addEventListener("click", midpoint);

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

function slope_user() {
    // Get the number for x1, y1, x2, and y2 from their boxes
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    // Use the slope function I already made
    let m = round_user(slope(x1, y1, x2, y2));
    document.getElementById("slope").textContent = `${m}`;
}

function line_length() {
    // Get the number for x1, y1, x2, and y2 from their boxes
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    // Use the legnth of a line segment fuction I already made
    let d = round_user(length(x1, y1, x2, y2));
    document.getElementById("line_length").textContent = `${d}`;
}

function midpoint() {
    // Get the number for x1, y1, x2, and y2 from their boxes
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    // Use the average function I already made
    let xavg = round_user(average(x1, x2));
    let yavg = round_user(average(y1, y2));
    document.getElementById("midpoint").textContent = `(${xavg}, ${yavg})`;
}


/** PART 2 **/

/* Javascript */

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {
    let y = a * x**2 + (b * x) + c;
    return y;
}

/* HTML */

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
    // Get the number for a, b, and c from their boxes
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    // Find the zeros and round them to the user's request number of decimals
    let zero_plus = round_user((-b + Math.sqrt((b**2) - 4 * a * c)) / 2 * a);
    let zero_minus = round_user((-b - Math.sqrt((b**2) - 4 * a * c)) / 2 * a);
    // Print the output to the console
    console.log(`${zero_plus}, ${zero_minus}`);
    // Display them in the page
    document.getElementById("quadratic_output").textContent = `The zeros are: x = ${zero_plus} and x = ${zero_minus}`;
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {
    // Get the number for a, b, and c from their boxes
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    // Find the vertex and round it to the user's request number of decimals, also use the y_quad function
    // x = -b / 2 * a
    let y = round_user(y_quad(a, b, c, round_user(-b / 2 * a)));
    // Print the output to the console
    console.log(`(${round_user(-b / 2 * a)}, ${y})`);
    // Display them in the page
    document.getElementById("quadratic_output").textContent = `The vertex is: (${round_user(-b / 2 * a)}, ${y})`;
}

