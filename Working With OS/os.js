const os = require("os");
console.log("OS Platform: ", os.platform())
console.log("OS CPU Architecture: ", os.arch())
console.log("# of logical CPU Cores: ", os.cpus().length)
console.log("Home directory of current user: ", os.homedir())