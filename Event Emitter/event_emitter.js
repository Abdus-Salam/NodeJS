// Streams are Event Emitter
// proess.stdin, process.stdout 

// output is zero b/c subscribe call first
// you can use setImmediate 
// it is very powerfull b/c it allows for module to work together without depending on any APIs.

const EventEmitter = require("events")
const myEmitter = new EventEmitter()



myEmitter.emit("TEST_EVENT") // subscribe

/*

setImmediate(() =>{
    // do one final synchronous operation
    myEmitter.emit("TEST_EVENT") 
})

*/

myEmitter.on("TEST_EVENT", () => {
    console.log("TEST_EVENT was fired")
})

myEmitter.on("TEST_EVENT", () => {
    console.log("TEST_EVENT was fired")
})

myEmitter.on("TEST_EVENT", () => {
    console.log("TEST_EVENT was fired")
})