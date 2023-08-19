function formValidation(){
    const fullname = document.getElementById("fullname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("fullname").value;
    const confirmEmail = document.getElementById("fullname").value;

    if (fullname =="" || phone == "" || email == "" || confirmEmail == ""){
        document.write("All fields are required")
    }
    else if ((!fullname.match(/^[A-za-z ]+$/)) || fullname.length > 50){
        document.write("fullname invalid")
    }
    else if (isNaN(phone)){
        document.write("invalid phone number")
    }
    else if((!email.match(/\S+@\S+\. \S+/)) || email.length > 50) {
        document.write("invalid email")
    }
    else if(email !== confirmEmail){
        document.write("email does not match confirm email")
    }
    else{
        document.write("form successfully submitted")
    }
}