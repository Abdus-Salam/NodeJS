/* Dynamic Argument Function
* ===============================================
* 1. arguments variable is global variable
*/

// console.log(arguments);
function dynamicArgsFunction(){
    console.log(arguments);
}

dynamicArgsFunction(2, 5, 9, 6, 7);



/**
 * 
 * Wrapper Function
 * =============================================
 * wrapping function internally return module.exports
 */
// This is wrapping function
// 
//function wrappingFunction(exports, module, require, __filename, __dirname){
exports.a = 2; // alias name
module.exports.b = 37;
exports = () => {} // not ok
module.exports = () => {} // it is ok
//}

// if import this file in another file then value of a and b is available.



