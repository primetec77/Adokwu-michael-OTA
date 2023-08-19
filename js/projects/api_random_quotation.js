
async function quoteData(){

    try{
        let response = await axios.get("https://api.quotable.io/random");
        let data = response.data;
        console.log(data);
        document.getElementById("tags").innerHTML = data.tags;
        setTimeout
        document.getElementById("content").innerHTML = data.content;
        document.getElementById("author").innerHTML = data.author;
        document.getElementById("error").innerHTML = "";
        // setTimeout(quoteData, 5000);
    }
    catch(error){
        console.log(error);
        document.getElementById("error").innerHTML = error;
    }
}
 