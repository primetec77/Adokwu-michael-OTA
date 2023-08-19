
// function expression for division
let div = function () {
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let answer = Number(num1) / Number(num2);
    document.getElementById("message").innerHTML = answer;
}


// function expression for modulus
let modul = function () {
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let answer = Number(num1) % Number(num2);
    document.getElementById("message").innerHTML = answer;
}




// function expression for multiplication
let multi = function () {
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let answer = Number(num1) * Number(num2);
    document.getElementById("message").innerHTML = answer;
}