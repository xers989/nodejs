const express = require('express')
const app = express();
const PORT = 80;
 
function handleListening (){
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
function handleHome(req, res){
    res.send("hello");
}

app.get("/", handleHome);
