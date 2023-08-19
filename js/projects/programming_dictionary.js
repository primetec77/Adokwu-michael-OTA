// inputed data from our html

// let btnEl = document.getElementById("search");


// our function
function programmingDictionary(){
    let dataInputed = document.getElementById("searchInput").value.toLowerCase().trim();
    var wordBank={

       "padding":{
            definition:"Padding is used to create space around an element's content, inside of any defined borders.",
            types:["padding-top", " padding-buttom", " padding-left", " padding-right"]
        },

        "margin":{
            definition:"margin is used to create space around an element's content, outside of any defined borders.",
            types:["margin-top", " margin-buttom", " margin-left", " margin-right"]
        }

        
    
    };
    if (dataInputed in wordBank){
        document.getElementById("message1").innerHTML = wordBank[dataInputed].definition;
        document.getElementById("message2").innerHTML = wordBank[dataInputed].types.toString();
        document.getElementById("empty_field").innerHTML = "";
        
    }

    else if (dataInputed === "") {
        document.getElementById("empty_field").innerHTML = "search input is empty, please enter a word";
        document.getElementById("empty_field").style.color="red"
        document.getElementById("message1").innerHTML = "";
        document.getElementById("message2").innerHTML = "";
        



    }
    else{
        document.getElementById("empty_field").innerHTML = "word not found"
        document.getElementById("message1").innerHTML = "";
        document.getElementById("message2").innerHTML = "";
        
        
        
        
        

    }
   
    
}
