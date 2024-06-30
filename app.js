function calc() {


    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let lblOutput = document.getElementById("output");

    let operation = document.getElementById("operation").value;

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

function num9click() {

    document.getElementById("number1").value=9;
    
}