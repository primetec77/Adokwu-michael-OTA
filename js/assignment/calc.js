// function to clear scren
function clearScreen(){
    document.getElementById("result").value = "";
}

// function to display value
function display(value){
    document.getElementById("result").value += value;
}


// function to valuate expression
function calculate(){
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
}