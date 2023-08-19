function resultchecker(){
    var cutoff = 180;
    var jambscore = document.getElementById("jambscore").value;

    if(jambscore >= cutoff && jambscore <= 400){
        document.getElementById("message").innerHTML = "Congratulation you have been admitted"
    }

    else if(jambscore < cutoff && jambscore >= 0 ){
        document.getElementById("message").innerHTML = "you are not admitted"
    }
    else if(jambscore > 400 ){
        document.getElementById("message").innerHTML = "Sorry you can not have a jambscore greater than 400"
    }

    else if(jambscore < 0 ){
        document.getElementById("message").innerHTML = "Sorry you can not have a negative number as jambscore"
    }

    else if(jambscore == ""){
        document.getElementById("message").innerHTML = "Enter your jambscore"  
    }
    else {
        document.getElementById("message").innerHTML = "Insert a valid jambscore"  
    }
}