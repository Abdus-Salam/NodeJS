console.dir(global, {depth: 0});

// same work b/c setTimeout global object
// setTimeout
// global.setTimeout


// publish global variable
// for use just import global_object.js and console.log(myCustomVariable)
global.myCustomVariable = 2;