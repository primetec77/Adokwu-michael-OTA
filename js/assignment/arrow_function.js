// Arrow function for multiplication
let multiplication = () => {
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let answer = Number(num1) * Number(num2);
    document.getElementById("message").innerHTML = answer;
}

// Arrow function for modulus
let modulus = () => {
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let answer = Number(num1) % Number(num2);
    document.getElementById("message").innerHTML = answer;
}



// Arrow function for division
let division = () => {
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let answer = Number(num1) / Number(num2);
    document.getElementById("message").innerHTML = answer;
}