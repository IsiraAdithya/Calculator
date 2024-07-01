
let selectedOperation = '';

function setOperation(operation) {
    selectedOperation = operation;
    document.getElementById('operation').innerHTML = operation;
}
function calc() {


    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let lblOutput = document.getElementById("output");

    let operation =document.getElementById('operation').innerHTML;



    switch (operation) {
        case "+":
            lblOutput.innerHTML = (number1 + number2);
            break;

        case "-":
            lblOutput.innerHTML = (number1 - number2);
            break;

        case "x":
            lblOutput.innerHTML = (number1 * number2);
            break;

        case "/":
            lblOutput.innerHTML = (number1 / number2);
            break;

        default:
            break;
    }






}

function num7click() {

    document.getElementById("number1").value=7;
    
}

function num8click() {

    document.getElementById("number1").value=8;
    
}

function num9click() {

    document.getElementById("number1").value=9;
    
}

function num4click() {

    document.getElementById("number1").value=4;
    
}
function num5click() {

    document.getElementById("number1").value=5;
    
}
function num6click() {

    document.getElementById("number1").value=6;
    
}
function num1click() {

    document.getElementById("number1").value=1;
    
}
function num2click() {

    document.getElementById("number1").value=2;
    
}
function num3click() {

    document.getElementById("number1").value=3;
    
}
function num0click() {

    document.getElementById("number1").value=0;
    
}
function num7click1() {

    document.getElementById("number2").value=7;
    
}
function num8click1() {

    document.getElementById("number2").value=8;
    
}
function num9click1() {

    document.getElementById("number2").value=9;
    
}
function num4click1() {

    document.getElementById("number2").value=4;
    
}
function num5click1() {

    document.getElementById("number2").value=5;
    
}
function num6click1() {

    document.getElementById("number2").value=6;
    
}
function num1click1() {

    document.getElementById("number2").value=1;
    
}
function num2click1() {

    document.getElementById("number2").value=2;
    
}
function num3click1() {

    document.getElementById("number2").value=3;
    
}
function num0click1() {

    document.getElementById("number2").value=0;
    
}
