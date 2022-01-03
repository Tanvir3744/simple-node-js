const fs = require('fs');

fs.writeFile('demo.txt', "this is a demo file ", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("success!");
    }
})


// for append file to demo.txt

fs.appendFile("demo.txt", "this is append data", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("success!");
    }
})

// read file using fs
fs.readFile('demo.txt', "utf-8", (err, data ) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data, "success!");
    }
})

// rename file to current name of file
fs.rename("jibon.txt", "tanvir.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("success!");
    }
})




