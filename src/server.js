const express = require("express");

const app = express(); 
// use method add things to web server
app.use("/static", express.static("public"))
//added a /static url path to my web server (app), when hit it will run our public folder
app.use("/static2", express.static("public2"))
app.listen(5001, () => {
    console.log("Listening on port 5001")
})