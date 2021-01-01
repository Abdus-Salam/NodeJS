const fs = require('fs')


const files = ["./data.txt"]

files.forEach(file =>{
    try{
        const file_data = fs.readFileSync(file)
        console.log("Data => " + file_data);
    }catch(error){
        console.log('File Not Found');
    }
})