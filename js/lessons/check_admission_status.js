function checkAdmission() {
    var cutoff = 180;
    var jambscore = document.getElementById("jambscore").value;

    if(jambscore >= cutoff && jambscore <= 400){
        document.getElementById("message").innerHTML = "Congratulation you have been admitted"
    }

    else if(jambscore < cutoff && jambscore > 0 ){
        document.getElementById("message").innerHTML = "you are not admitted"
    }

    else if(jambscore == ""){
        document.getElementById("message").innerHTML = "Enter your jambscore"  
    }
    else {
        document.getElementById("message").innerHTML = "Insert a valid jambscore"  
    }
}