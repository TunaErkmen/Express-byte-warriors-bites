const express = require("express");

const app = express();

//make every inside of public / avaliable
app.use(express.static('public'));

//app.get(path,code); 

app.get("/", (request, response, next ) => {
    response.sendFile(__dirname + '/views/home.html');
})

app.get("/contact", (request, response, next )=> {
    response.sendFile(__dirname + '/views/contact-page.html')
})

app.listen(3001, () => {console.log("server listening on port 3001");});