const http = require("http")

// request listener is function. It is involved in every request event
const requestListener = (request, response) => {
    // request and response are stream
   // console.log(request)
    console.log(request, {depth: 0})
    response.end("Hello World!")
}

// createServer method is event emitter
/* 
const server = http.createServer();
server.on("request", requestListener);
*/

// this is the short way of event emitter
const server = http.createServer(requestListener); 


// server listen at 4242 port
// this is callback pattern
// itself asynchronous one
server.listen(4242, () => {
    console.log("Server is running...")
})


// Express is the powerfull library for creating web server