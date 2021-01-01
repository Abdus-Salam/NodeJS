// Event Loop use for asynchronous without thread. 
// Run this with $ node event_loop.js and show another tab $ ps -ef | grep node
// event_loop.js already running
// if no asynchronous process, asynchronous program automatically stop
setInterval(() => {
    console.log("Hello World!")
}, 5 * 1000);
