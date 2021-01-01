const express = require('express')

const server = express();


server.get("/", (request, response) =>{
    response.send("Hello World!")
})
server.listen(4242, () =>{
    console.log("Express Server is running...")
})