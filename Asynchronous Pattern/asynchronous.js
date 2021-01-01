// asynchronous / call back function
const fs = require('fs')

fs.readFile(__filename, function cb(error, data){
    console.log(data);
})
console.log("Test");