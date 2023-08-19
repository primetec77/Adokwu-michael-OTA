function ageChecker(){
    var age = document.getElementById("age").value;
    var agemax = 120;
    
    if(age<18 && age > 0){
        document.getElementById("message").innerHTML = "Hi user, You are a child."
        document.getElementById("message").style.color="green"
        document.getElementById("message").style.fontSize="20px"
    }
    
    else if(age >= 18 && age <= 24){
        document.getElementById("message").innerHTML = "Hi user, You are a teenager."
        document.getElementById("message").style.color="green"
        document.getElementById("message").style.fontSize="20px"
    }
    else if (age < 0){
        document.getElementById("message").innerHTML = "!Hi user, Please enter a valid age, you can't have an age with negative number."
        document.getElementById("message").style.color="red"
        document.getElementById("message").style.fontSize="20px"
    }

    else if (age>=25 && age<=agemax){
        document.getElementById("message").innerHTML = "Hi user, You are an Adult."
        document.getElementById("message").style.color="green"
        document.getElementById("message").style.fontSize="20px"
    }

    else if (age>agemax){
        document.getElementById("message").innerHTML = "Hi user, You cannot exceed 120 years!."
        document.getElementById("message").style.color="red"
        document.getElementById("message").style.fontSize="20px"
    }

    else{
        document.getElementById("message").innerHTML = "Hi user, Please enter your age correctly.!"
        document.getElementById("message").style.color="red"
        document.getElementById("message").style.fontSize="20px"
    }

}

