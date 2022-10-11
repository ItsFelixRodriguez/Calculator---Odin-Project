//Calculator

// functions to make buttons work//

// Clicking an input fires the input function
document.getElementById('0').addEventListener('click', input);
document.getElementById('1').addEventListener('click', input);
document.getElementById('2').addEventListener('click', input);
document.getElementById('3').addEventListener('click', input);
document.getElementById('4').addEventListener('click', input);
document.getElementById('5').addEventListener('click', input);
document.getElementById('6').addEventListener('click', input);
document.getElementById('7').addEventListener('click', input);
document.getElementById('8').addEventListener('click', input);
document.getElementById('9').addEventListener('click', input);
document.getElementById('+').addEventListener('click', input);
document.getElementById('-').addEventListener('click', input);
document.getElementById('*').addEventListener('click', input);
document.getElementById('/').addEventListener('click', input);
document.getElementById('.').addEventListener('click', input);


//Equals fires the operate function
document.getElementById('=').addEventListener('click', operate);

//AC fires the reset function
document.getElementById('AC').addEventListener('click', reset);

const display = document.getElementById('display-text');
let displayCurrent = '';

function input(e) {
let inputValue = e.target.innerText;
displayCurrent += inputValue;
display.innerText = displayCurrent;
}
function operate() {
display.innerText = eval(displayCurrent);
displayCurrent = eval(displayCurrent).toString();
}

function reset () {
displayCurrent = " ";
display.innerText = displayCurrent;
}




// math functions to write out
//add
function add (a,b) {
    return (a+b);
}
//subtract
function subtract (a,b) {
    return (a - b);
}

//multiply
function multiply (a,b) {
    return (a*b);
}
//divide
function divide (a,b) {
    return (a/b);
}




//function to capture number 'a' from 
//inputs on screen buttons

//function to capture number 'b' from 
//inputs on screen buttons
