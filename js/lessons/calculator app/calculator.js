function add(){
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;
    var sum = Number(num1) + Number(num2);
    document.getElementById("answer").innerHTML = sum;
}
