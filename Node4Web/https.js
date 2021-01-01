// https is over tls/ssl
// generate key.pem and cert.pem using following command
// 1. openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
// 2. sudo node https.js
// 3. https://localhost
const fs = require('fs')

const server = require("https")
                                .createServer({
                                    key: fs.readFileSync('./key.pem'),
                                    cert: fs.readFileSync('./cert.pem')
                                })


server.on('request', (request, response) => {
    response.writeHead(200, {'content-type' : 'text/plain'});
    response.end("Hello World! from Https");
})

// 443  default port for communication
server.listen(443, () => {
    console.log("Server is running at 443")
})