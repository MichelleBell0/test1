/*********************************************************************************
* BTI325 – Test 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Michelle Bell Student ID: 137551214 Date: Sunday, September 19, 2022
*
* Online (Cyclic) URL:
* //https://misty-scrubs-bass.cyclic.app
*
********************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    var resText = "<h2> Declaration: </h2> <br>";
    res.send(resText);
});

app.get("/test1", (req, res) => {
    res.send("Hello World!");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);