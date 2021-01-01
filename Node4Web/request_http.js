const http = require("http")

// request: http.ClientRequest
const request = http.get(
    'http://www.google.com',
    (response) => {
        // response : http.IncomingMessage
        console.log(response.statusCode)
        console.log(response.headers)


        response.on("data", (data) => {
            console.log(data.toString())
        })
    }
);


request.on("error", (e) => {
    console.log(e)
})

// http.Agent
console.log(request.agent)

// for https chanage all http for https://google.com