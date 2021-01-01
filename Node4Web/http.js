const server = require("http").createServer();


server.on("request", (request, response) => {
    response.writeHead(200, {'content-type' : 'text/plain'});
    response.end('Hello World!');
});

server.listen(8000, () => {
    console.log("Server is running at http:127.0.0.1:8000")
});

// call
// curl -i http.js