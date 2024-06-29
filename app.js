function calc() {


    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let lblOutput = document.getElementById("output");

    let operation = document.getElementById("operation").value;

    if (operation == "+") {
        lblOutput.innerHTML = (number1 + number2);
    }
    else

 lblOutput.innerHTML = (number1 - number2);
    
   

    
    

}